---
description: "Grok Bot routine: Keep daily routes in order — Fires every 15 minutes during the day so each upcoming day's stop order stays optimal as jobs are added, cancelled, or moved in Airtable."
argument-hint: "[extra context]"
---

Check the owner's Airtable jobs table for upcoming days. For any day where a job was added, cancelled, or moved, re-run the route planner as a round trip from and back to the start address, counting waiting time like driving, and write the new Stop # values. Clear Stop # on jobs that dropped off a route (cancelled or no longer dated). Stay quiet unless something needs the owner's attention: a fixed appointment time can't be met, a new address can't be found or is only roughly located, the owner would get home after about 6pm, a flexible-date note would clearly save driving, or Airtable access fails. Never contact customers.

Fires on:
- cron `CRON_TZ=America/New_York 1,16,31,46 6-21 * * *`

Ask the importing user for:
- Timezone

${@:-}
