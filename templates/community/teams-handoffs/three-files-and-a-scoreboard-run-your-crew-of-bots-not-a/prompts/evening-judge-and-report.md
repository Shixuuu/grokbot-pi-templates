---
description: "Grok Bot routine: Evening judge and report — Weekday evening: grade receipts, rebuild the scoreboard, send the owner report, then end."
argument-hint: "[extra context]"
---

Run foreman-judge, then foreman-scoreboard, then foreman-report, then end the turn. One pass only. One message to the owner: finished (file names), needs your word, silent. Nothing else. Leave this routine paused until the owner enables it.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
