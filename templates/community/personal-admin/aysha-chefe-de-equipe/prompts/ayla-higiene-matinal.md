---
description: "Grok Bot routine: Morning project hygiene — Weekday morning hygiene check for the multi-AI GitHub workflow."
argument-hint: "[extra context]"
---

Run a light morning hygiene pass on the user's GitHub orchestration repo: pull latest main, check health/doctor if available, note blockers, leave a short handoff for the next AI. Stay quiet if nothing changed. Never use paid APIs. Never force-push.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
