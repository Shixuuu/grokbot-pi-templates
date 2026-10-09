---
name: container-runtime-audit
description: "Use this when auditing a user's GitHub repos (Docker Compose, docker run scripts, runtime configs, Kubernetes pod specs) for privileged containers, dangerous capabilities, missing seccomp/AppArmor, Docker socket mounts, and shared host namespaces, and proposing exact defensive fixes."
---

# Container runtime audit

Defensive analysis only. Never write exploit proofs of concept or touch live hosts.

## 1. Find the runtime surface
Use the GitHub connector to list the owner's repos, then code-search for runtime configs: `docker-compose*.yml`, `compose*.yaml`, `docker run` in scripts and Makefiles, devcontainer files, and Kubernetes pod specs (coordinate with whoever owns Kubernetes manifests so fixes don't compete).

## 2. Check each service for
- `privileged: true` or `--privileged`, including commented-out lines that tell readers to enable it
- `cap_add` with SYS_ADMIN, NET_ADMIN, NET_RAW, SYS_PTRACE, SYS_MODULE, DAC_READ_SEARCH, or ALL; no `cap_drop: [ALL]`
- `security_opt` missing `no-new-privileges:true`; `seccomp:unconfined` or `apparmor:unconfined`
- Any container runtime socket reachable from the container: `/var/run/docker.sock`, `/run/containerd/containerd.sock`, or `/var/run` / `/run` mounted. `:ro` does NOT limit the Docker API; anyone who can connect gets root-equivalent control of the host.
- Recursive host binds that expose sockets indirectly: `/:/rootfs:ro` or `/:/host:ro` also expose `/run` submounts (and the sockets inside them) unless the bind is non-recursive
- `network_mode: host`, `pid: host`, `ipc: host`, `userns_mode: host`, `uts: host`
- Host root or sensitive path binds (`/`, `/proc`, `/sys`, `/etc`, `/dev`), and `devices:`
- Running as root with no `user:` where the image supports non-root. Note: Docker grants `cap_add` capabilities only to root, and `no-new-privileges` blocks file capabilities, so for services that need raw-socket or network caps, root with `cap_drop: [ALL]` plus the minimum caps and `no-new-privileges` is usually the stronger choice.

## 3. Rate severity
- Critical: two or more escape paths combined (for example socket plus SYS_ADMIN plus host network), or privileged on a product stack.
- High: one direct escape path (any reachable runtime socket, read-only or not; `/var/run` mounted; privileged; SYS_ADMIN; host PID).
- Med: read-only host binds with no sockets reachable, missing no-new-privileges alone, host networking or extra network caps that the workload genuinely needs.
- Low: hygiene, such as default capability sets on low-risk services.
Tag deliberately vulnerable lab or attack-demo repos as [LAB-ONLY]: find-only, never open a PR.

## 4. Report each finding in this format
**Vuln:** what and where (repo, file, service)
**Risk:** what an attacker gains
**Severity:** level, and one-line why
**Exact fix:** the precise config change, for example:
- `cap_drop: [ALL]` plus only the caps the service needs, and `security_opt: [no-new-privileges:true]`
- Remove the socket mount. If the service truly needs the Docker API, put a filtering socket proxy in front of it (read-only endpoints only, `POST=0`, image pinned by digest, no published ports, on an `internal: true` network) and point the service at the proxy over TCP
- Make host root binds non-recursive (long-form bind with `read_only: true` and `bind.recursive: disabled`, Docker Engine 25+ / Compose 2.26+), and give a check that the socket paths no longer exist inside the container
- Drop `network_mode: host`, or move risky settings to an opt-in profile
- Replace any "uncomment privileged if X fails" comment with the narrow capability that fixes X

## 5. Remediate
Only for High and Critical, and only once the owner or team lead approves: open one draft PR per repo with a cloud agent, change only the runtime lines, and don't touch items another specialist owns (image tags, secrets, manifests). Always open it as a draft, and put the full finding (Vuln, Risk, Severity with why, Exact fix) in the PR description. Post the PR link back in the same format. Before opening, check there isn't already an open PR covering it. Never merge; the owner reviews and merges.
