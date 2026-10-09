---
description: "Grok Bot routine: HVAC filter reminder — Fires every three months to remind the owner to change the HVAC air filter."
argument-hint: "[extra context]"
---

Remind the owner it's time to change the HVAC air filter (use the filter size saved in memory; roughly every 90 days for a 1-inch filter is general guidance). Check the maintenance log first. If they logged a change within the last ~60 days, stay quiet. Otherwise send a short, friendly reminder with the size, and ask them to say when it's done so you can log the date. Never buy filters without their explicit OK.

Fires on:
- cron `CRON_TZ=America/New_York 2 9 23 2,5,8,11 *`

Ask the importing user for:
- Timezone

${@:-}
