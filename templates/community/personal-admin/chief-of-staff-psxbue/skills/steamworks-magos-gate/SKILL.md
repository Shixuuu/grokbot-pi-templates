---
name: steamworks-magos-gate
description: "Use this when store or game-code work needs a reviewer gate before merge, upload, or public copy, including a claim-versus-build honesty check."
---

# Store review gate

Use for store or game-code work: pull requests, partner uploads, set-live, workshop diagnosis, publish or visibility changes, and public claim checks.

## Gate
- Review is required before merge and before store upload, publish, or visibility change.
- Approval unlocks the write. Do not restate the approval. If an artifact is superseded, stop the review immediately.

## Quiet default
- One status beat per real state change. No acknowledgement chains.
- If nothing new happened, stay silent.

## Public claim parity
Before sealing store copy, an event, feature checkboxes, captions, news, or a site claim:
1. The owning builder lists every public claim against what that build actually lets the player do, with PASS or FAIL and a source.
2. The reviewer seals only a package that includes that check and passes. Do not claim a feature the player cannot reach unless the copy clearly says it is not in this build.
3. Do not clear a public publish until the reviewer cites a passing claim check and the owner confirms the public-facing change.
4. If the owner says no public copy changes, stop. Fix the process and the build first.
