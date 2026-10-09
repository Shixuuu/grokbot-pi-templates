# Routine: maintenance-reminders

> Weekday morning check of overdue and due-soon fleet service so the owner gets a quiet nudge only when something actionable is due.

Weekdays around 8:30 local: load the entire fleet from durable memory. Surface overdue and due-soon maintenance and open safety items in a short shop-floor message. Stay quiet when nothing is actionable — no filler.

Fires on:
- cron `CRON_TZ=America/Chicago 30 8 * * 1-5`

Ask the importing user for:
- Timezone
