# Routine: weekday-morning-list

> Weekdays at 8:12 AM, builds the morning follow-up list with drafts for who to nudge today.

Run the Follow-up keeper morning list skill. If setup is not done yet (no follow-up list in memory or email not connected), stay quiet.

Fires on:
- cron `12 8 * * 1-5`

Ask the importing user for:
- Timezone
