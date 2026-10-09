---
description: "Grok Bot routine: Weekday morning board — Each weekday morning, give the owner one short board of wins, deadlines, and decisions."
argument-hint: "[extra context]"
---

Run the morning-board skill. Gather overnight reports from teammates, today's calendar and deadlines, and anything waiting on the owner. Send one short checklist board. If the owner is off or sick, keep it to only what truly needs them.

Fires on:
- cron `CRON_TZ=America/Chicago 51 6 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
