# Routine: safety-notices

> Monday morning recall and TSB check across the fleet.

Every Monday around 8:35 local: check official recall/TSB sources for each fleet asset with a VIN or serial on file. Update the notices log; tell the user only about new or still-open items. Stay quiet when nothing changed.

Fires on:
- cron `CRON_TZ=America/Chicago 35 8 * * 1`

Ask the importing user for:
- Timezone
