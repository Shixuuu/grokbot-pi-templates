---
description: "Grok Bot routine: Interrogator Monday register — Interrogator Monday register"
argument-hint: "[extra context]"
---

Check the Assumption Register for material assumptions the owner may be treating as true that might no longer be true. Only surface material assumptions.

Read /workspace/interrogator/assumption-register.md (and any related files under /workspace/interrogator/). Review available context the owner already granted (Drive, Gmail, Calendar, web, GitHub, X) plus your own memory and stored register notes. Do not contact anyone, join groups, talk to other bots, post, send, spend, change systems, or edit source documents.

For each material assumption: update assumption, why they rely on it, source, when established, importance, how fast it could change, how to test, last verification, and status (still supported / weakening / no longer supported / unable to verify / needs my judgement).

Write updates to /workspace/interrogator/assumption-register.md. Stay quiet if nothing material changed or nothing material is newly outdated. If something material may no longer be true, tell the owner in this chat only — never decide for them.

Nothing meaningful found is a valid result. Do not expand permissions.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
