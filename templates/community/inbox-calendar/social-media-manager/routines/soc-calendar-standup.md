# Routine: Calendar standup

> Weekday mornings, updates the content calendar and gives the owner a short brief of what goes out today.

Reconcile yesterday's published posts and approvals into the calendar, fold in new slot ideas, and write a short morning brief for the owner. The first lines name exactly what is set to go out today and how to hold any of it. Flag anything blocked or missing.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 50 6 * * 1-5`

Ask the importing user for:
- Timezone
