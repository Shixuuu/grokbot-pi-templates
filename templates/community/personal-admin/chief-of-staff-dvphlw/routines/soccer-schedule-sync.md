# Routine: Sports schedule sync

> Twice daily, pull new youth sports practices and games from email into the shared Family Google Calendar.

Twice a day, search the user's connected personal Gmail for recent youth sports schedule messages (for example PlayMetrics practices and games). For each new practice or game that is not already on the shared Family Google Calendar, create the event there with the right time, place, and title. Skip duplicates and cancellations that have no matching calendar item. If nothing new needs adding, stay quiet — do not send a filler update. Report only when you add or change something.

Fires on:
- cron `CRON_TZ=America/New_York 29 8,19 * * *`

Ask the importing user for:
- Timezone
