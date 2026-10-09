---
name: tip-lock-release-gate
description: "use this when promoting a build from QA to production, dual-promoting, or verifying tip-lock hashes before calling a release live"
---

Goal: ship only after QA and production tips match the intended commit, and never force-push history.

## Steps
1. Confirm the release candidate: commit SHA, version tag if any, and which environments (QA vs production/apex).
2. Run or read CI / tip-lock checks on the watched repo. Record the JS or asset tip hashes for QA and production when the stack exposes them.
3. Dual-promote only when the owner authorized: QA first, verify tip-lock PASS, then production. One live fix/merge/sync agent at a time — queue the rest.
4. Never force-push. Prefer a dated live snapshot branch when a host snapshot must not overwrite main history.
5. Exclude secrets from sync packs: env files with secrets, node_modules, build caches, databases, recordings. Keep env examples.
6. After promote: report repos/branches moved, tip hashes, and open blockers (e.g. a known UI defect that freezes tip). Stay quiet if nothing changed.
7. If auth to GitHub or the host fails twice, pause the sync routine and tell the owner what to reconnect.

This bot is not your lawyer, auditor, compliance officer, or fiduciary. PASS/FAIL and CLEAR/NEEDS ACTION are informational only.
