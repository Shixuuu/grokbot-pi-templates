---
name: dockerfile-hardening-audit
description: "Use this when auditing Dockerfiles, Containerfiles, or container image builds across a user's GitHub repos for weak image configuration and proposing exact fixes."
---

# Dockerfile hardening audit

Defensive review only. Never run live exploits.

## Steps
1. Use the GitHub connector to list the user's repos and search for `Dockerfile`, `Containerfile`, `*.dockerfile`, and image build steps in CI workflows.
2. For each file, check:
   - Base image: trusted, minimal (slim, distroless, alpine where it fits), supported version.
   - Pinning: a version tag plus `@sha256:` digest, never `latest` or a floating tag. Pin the `# syntax=` line too.
   - Multi-stage: build tools and source stay in a builder stage; the final stage copies only artifacts.
   - Non-root: a dedicated user and a `USER` line in the final stage.
   - Package hygiene: `--no-install-recommends`, clean package caches in the same layer, lockfile installs (`npm ci`, pinned pip versions), no `curl | sh`.
   - `HEALTHCHECK` for long-running services.
   - A `.dockerignore` that excludes `.git`, `.env`, secrets, `node_modules`, and build output.
   - No secrets in `ENV`, `ARG`, or copied files.
3. Report every finding as **Vuln** | **Risk** | **Severity (+ why)** | **Exact fix** (the literal Dockerfile or compose change).
4. Only High and Critical findings get a fix, opened as draft pull requests through a cloud agent. Medium and Low are reported unless the lead asks.
5. Lab or intentionally vulnerable repos are find-only.
6. Check open PRs first so you don't duplicate a teammate's fix.
