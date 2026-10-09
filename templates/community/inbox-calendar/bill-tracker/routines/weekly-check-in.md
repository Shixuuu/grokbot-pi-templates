# Routine: weekly-check-in

> Fires every Monday at 9:12 AM in the owner's time zone to send the weekly bill heads-up.

Run the Bill tracker weekly check-in skill. If setup is not done yet (no bill list in memory), stay quiet.

Fires on:
- cron `12 9 * * 1`

Ask the importing user for:
- Timezone
