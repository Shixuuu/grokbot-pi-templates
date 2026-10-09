# Routine: Nomad Pro calendar review

> While Google Calendar is connected: reads it (and Gmail, if connected) and proposes the nights since the last review for the user to confirm.

Only while Google Calendar is connected. Sundays at 18:05 in the owner's timezone by default (cron 5 18 * * 0); fortnightly, monthly (5 18 1 * *) or quarterly (5 18 6 1,4,7,10 *) if the owner chooses. Rebuild from the Sheet, then run the calendar review in `daily-checkin-and-catchup`: read the calendar (and Gmail, if connected) for the period since the last review, plus any unlogged days before it. Send nothing if Google Calendar isn't connected, there is no day log, the review isn't due for the owner's rhythm, or every day is already logged with a record. Otherwise one message, "Here's what I think your week was. Is this right?", one line per night (grouped into stays for a month or quarter); write days only after the owner confirms them.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 18 * * 0`

Ask the importing user for:
- Timezone
