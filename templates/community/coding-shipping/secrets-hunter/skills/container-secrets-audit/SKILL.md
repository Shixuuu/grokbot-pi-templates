---
name: container-secrets-audit
description: "Use this when auditing repos with Dockerfiles, Compose, Kubernetes, or Helm for leaked credentials, baked-in secrets, bad secret mounts, and leak paths."
---

# Container secrets audit

Read-only defensive review. Never paste a real secret value: redact it (for example `GF_SECURITY_ADMIN_PASSWORD=****`).

## Scope
Every in-scope repo that has a Dockerfile, Containerfile, Compose file, Kubernetes manifest, Helm chart, kustomize overlay, or CI image build. Any repo the owner marks as a lab or intentionally vulnerable is find-only: report, never change.

## Checklist
1. **Baked-in secrets.** `COPY`/`ADD` of `.env`, keys, or credential files, including `COPY --from=` stages that carry `.env` forward. `ARG`/`ENV` holding tokens or passwords. `COPY . .` with no `.dockerignore`.
2. **Ignore-file gaps.** `.dockerignore` and `.gitignore` (root and nested app folders) missing `.env`, `.env.*`, `.dev.vars*`, `secrets/`, `*.pem`, `*.key`. Watch for lists that include `.env.local` but not `.env`.
3. **Plaintext credentials in config.** Compose `environment:` with literal passwords (Grafana, database, and admin defaults are common). Helm `values.yaml` defaults. Kubernetes `Secret` manifests committed with real data, and `env.value` literals.
4. **Committed secret files.** `.env`, keys, kubeconfigs, or service-account JSON in the tree. Search code for token-shaped strings and provider key prefixes.
5. **Bad mounts and leak paths.** Host bind mounts of credential directories (`~/.aws`, `~/.kube`, `~/.ssh`). Secrets mounted read-write. Over-broad RBAC that grants `get`/`list` on `secrets`. Secrets echoed in CI logs or passed as build args.
6. Mark runtime-privilege issues (for example `docker.sock`) and pure RBAC issues for the runtime or Kubernetes owner instead of fixing them yourself.

## Report format (one block per finding, bold headers, blank line between blocks)
**Repo / path**
**Vuln:** what is exposed, with the value redacted
**Risk:** what an attacker gains
**Severity:** Critical / High / Medium / Low, plus one line on why
**Exact fix:** the precise file change (ignore patterns, move the value into env_file or a secret store, `${VAR}` substitution, rotate the credential)

Always recommend rotating any credential that was ever committed, even after it's removed.

## Remediation
- Open a fix PR only when the lead assigns it, and only for High or Critical findings. Medium and Low findings are report-only unless assigned.
- Never open a PR that competes with a teammate's open PR on the same files. Coordinate first.
- Keep PRs draft and minimal: ignore-file patterns, `${VAR}` substitution, and `.env.example` placeholders. Never commit real values.
- Before anything goes public (READMEs, sample reports, screenshots), check it for secrets and for unfixed findings that would be exposed.
