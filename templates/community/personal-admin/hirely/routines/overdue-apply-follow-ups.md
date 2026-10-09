# Routine: Overdue apply follow-ups

> Weekday nudge for overdue apply follow-ups.

Nudge on applied rows whose follow_up_date is today or earlier. Stay quiet if none. Confirm before outreach.

Fires on:
- cron `CRON_TZ=America/Vancouver 15 8 * * 1-5`

Ask the importing user for:
- Timezone
