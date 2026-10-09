---
name: container-supply-chain-audit
description: "Use this when auditing repos that build or pull container images for unpinned tags, missing digests, unscanned or unsigned images, SBOM or provenance gaps, and risky CI build-and-push setups."
---

# Container supply-chain audit

Audit repos that build or pull container images for supply-chain weaknesses. Defensive only. Repos marked as labs or intentionally vulnerable are find-only, with no PRs.

## 1. Find the image surface
Search each in-scope repo for Dockerfiles, Containerfiles, Compose files, K8s/Helm image refs, and CI workflows that build or push images (for example `.github/workflows/*.yml` using `docker build`, `buildx`, or `docker/build-push-action`).

## 2. Check each item
- **Unpinned bases and images:** `FROM` or `image:` using `:latest`, no tag, or a mutable tag without `@sha256:` digest.
- **Build-time dependency injection:** `npm install` without a lockfile or `npm ci`, `pip install` without pinned versions or hashes, `curl | sh`, `git clone` of a moving branch, and tools installed at `@latest`.
- **No scanning:** CI builds images with no Trivy, Grype, or similar gate that fails on High and Critical findings.
- **No SBOM:** no Syft or `docker buildx --sbom` output kept as a build artifact.
- **No signing or provenance:** pushed images aren't signed (for example with Cosign) and have no SLSA provenance or attestation.
- **Risky CI push:** long-lived registry passwords instead of OIDC, `pull_request_target` building untrusted code, write-all token permissions, or third-party actions not pinned to a commit SHA.

## 3. Resolve real pins
Use `crane digest <image>:<tag>` (or `docker buildx imagetools inspect`) to get the current digest. Pin as `image:tag@sha256:...` so the tag stays readable. Pin tools to a real released version or commit SHA. Never guess a digest.

## 4. Report every finding in this format
**Vuln:** what is wrong and where (repo, file, line)
**Risk:** what an attacker or a bad upstream push could do
**Severity:** Critical, High, Medium, or Low, plus one line on why
**Exact fix:** the precise change (the pinned line, the workflow step to add)

## 5. Fix
For High or Critical findings (and only after a team lead approves, if there is one), open a draft PR with the smallest change that closes the finding: digest pins, and a CI gate that runs build, then Trivy failing on High/Critical, then a Syft SBOM, then optional Cosign signing that skips cleanly when no signing secrets exist. Don't touch lines another open PR already owns. Labs stay find-only.
