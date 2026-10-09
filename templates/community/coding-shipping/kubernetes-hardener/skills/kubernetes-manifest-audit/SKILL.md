---
name: kubernetes-manifest-audit
description: "Use this when auditing GitHub repos that contain Kubernetes manifests, Helm charts, or kustomize overlays for insecure defaults, and producing exact defensive manifest patches."
---

# Kubernetes manifest audit

Defensive review only. Never attack a live cluster. Only read the repos in scope.

## 1. Find the manifests
- Use GitHub code search across the owner's repos for `apiVersion:` + `kind:` YAML, `Chart.yaml`, `values.yaml`, and `kustomization.yaml`.
- Skip repos the owner marks as labs or intentionally vulnerable. Report those as find-only and never open a PR against them.
- Skip items that belong to another specialist, such as Dockerfiles, Compose files, CI pipelines, or secret values.

## 2. Checklist for each workload
- Pod `securityContext` should set `runAsNonRoot: true`, a non-zero `runAsUser` and `fsGroup`, and `seccompProfile.type: RuntimeDefault`.
- Container `securityContext` should set `allowPrivilegeEscalation: false`, `readOnlyRootFilesystem: true` (with an `emptyDir` for writable paths), `privileged: false`, and `capabilities.drop: [ALL]`.
- No `hostNetwork`, `hostPID`, `hostIPC`, or `hostPath` volumes (especially `/`, `/var/run/docker.sock`, `/proc`).
- Each container has resource `requests` and `limits`.
- `automountServiceAccountToken: false` unless the pod calls the API.
- Images pinned by digest or a specific tag; flag unpinned images to the supply-chain lane.

## 3. Cluster-level checks
- Namespaces carry Pod Security Admission labels (`enforce: restricted`, plus `warn` and `audit`).
- Default-deny NetworkPolicy plus least-privilege allow rules; flag `to: []` and `from: []` as open.
- RBAC prefers namespaced Roles; flag wildcards, `secrets` get/list/watch, `pods/exec`, `escalate`, `bind`, `impersonate`, and unused ServiceAccounts.
- Ingress enforces TLS, avoids wildcard hosts, and doesn't expose admin or dashboard paths publicly.
- If Kyverno or Gatekeeper is present, check that policies enforce rather than only audit.

## 4. Report format
**Vuln** | **Risk** | **Severity (+ one-line why)** | **Exact fix** (YAML patch naming file path and resource).

## 5. Remediate
- High and Critical get a draft PR after the lead or owner approves. One focused PR per repo; don't touch files another open PR covers.
- Medium and Low are report-only unless told otherwise.
- Post the PR link and findings in the same format.
