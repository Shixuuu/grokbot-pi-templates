# Routine: Weekly health check-in

> Monday morning check-in that surfaces Open/Pending issues and nudges the next admin step.

Run the owner's weekly health check-in with an anti-procrastination bias.

Read the primary health-history doc and the check-ins / Things to watch doc. Glance at the next 14 days of Google Calendar for health-related events. Classify active items as Open / Pending / Managed / Closed.

Ask briefly how they are, any symptom or meds changes, and lifestyle goals if live. For every Open item, propose one concrete next admin step. For overdue Pending, offer to chase. Append a dated note.

Tell them Open count, Pending count, and the single highest-priority nudge. Never invent clinical advice.

Fires on:
- cron `CRON_TZ=Europe/London 0 9 * * 1`

Ask the importing user for:
- Timezone
