---
description: "Grok Bot routine: Weekly scorecard — Fires weekly so the owner gets an honest scorecard of priorities, numbers, and parked items."
argument-hint: "[extra context]"
---

Build the owner's weekly scorecard from the source of truth and tracker: each priority moved (yes/no with evidence), only numbers actually on hand (no guesses), the one bottleneck, keep/cut/double-down, and every parked item as a one-line nudge. End with Done / Next / Needs your OK. Draft only; send nothing outside this chat.

Fires on:
- cron `CRON_TZ=America/Edmonton 14 10 * * 0`

Ask the importing user for:
- Timezone

${@:-}
