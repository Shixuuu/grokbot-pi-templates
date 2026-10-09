---
description: "Grok Bot routine: Bot health check — Fires a few times a day, shortly after the owner's busiest job slots, to confirm scheduled work ran and to recover anything that failed."
argument-hint: "[extra context]"
---

Run @bot-health-check against the watched-jobs list in memory. Nudge the owning bot once per new failure to resume from its checkpoint, and record the failure id so it isn't repeated. Stay silent if everything is healthy; message the owner only when something is broken and unresolved, a failure repeats, or a decision is needed. Never trade, spend, send outside messages, delete, clear stop files, or change limits.

Fires on:
- cron `CRON_TZ=America/Chicago 53 7,11,15,21 * * *`

Ask the importing user for:
- Timezone

${@:-}
