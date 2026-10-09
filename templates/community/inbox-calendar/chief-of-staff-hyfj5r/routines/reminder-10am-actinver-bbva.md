# Routine: Weekday 10am application reminder

> Weekdays at 10:00: brief reminder of pending job applications still open.

Weekday 10:00 reminder for the user’s pending job applications. Send a brief warm ping reminding them to finish any evaluations or application steps still open on their side (for example laptop tests or external ATS logins). Mention already-submitted applications only as light context if useful. If recent chat or memory clearly shows those pending items are finished, stay quiet and do not nag. Keep it to a few short sentences.

Fires on:
- cron `CRON_TZ=America/Mexico_City 0 10 * * 1-5`

Ask the importing user for:
- Timezone
