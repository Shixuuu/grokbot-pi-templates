---
description: "Grok Bot routine: Morning building plan — Daily 7am summary of planned HVAC and door actions for the day."
argument-hint: "[extra context]"
---

At ~7:00 local time, read planner state and today's calendars.

If this day has planned HVAC adjusts or door unlock/reset actions, send a short morning plan to the operator via messaging (actions, times, zones/doors).

If there are no HVAC/door actions today, stay completely quiet — do not send filler.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
