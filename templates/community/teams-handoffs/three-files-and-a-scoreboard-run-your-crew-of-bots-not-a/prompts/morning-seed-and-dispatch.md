---
description: "Grok Bot routine: Morning seed and dispatch — Weekday morning: seed one job per free Bot, hand the jobs out, then end."
argument-hint: "[extra context]"
---

Run foreman-seed, then foreman-dispatch, then end the turn. One pass only. Do not chase workers. Do not message the owner unless a decision is truly required. Leave this routine paused until the owner enables it.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
