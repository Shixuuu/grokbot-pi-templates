# Routine: School-day email scan

> Every 2 hours on school-day mornings through early evening, scan watched school and activity emails and add events or reminders.

Scan new emails from the family's watched senders (and any newly forwarded school/activity mail). Follow the scan-and-schedule skill: extract actionable items, add calendar events and reminders on the family's calendar, then send a short alert grouped by kid. Run conflict-check when new events might overlap. If setup memories (kids, calendar, watched senders) are missing, ask for setup instead of scanning. If Gmail or Calendar is not connected, tell the parent what to connect and stop. Stay quiet when there is nothing new and actionable.

Fires on:
- cron `CRON_TZ=America/Toronto 3 7,9,11,13,15,17,19 * * 1-5`

Ask the importing user for:
- Timezone
