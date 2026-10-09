# Routine: Contest result watch

> Weekday check for winner or shortlist news on contests already entered.

Check contests the owner has entered (from memory) for winner or shortlist announcements. If winners, a shortlist, or a direct contact about their entry appears, tell them immediately with links. If nothing new, stay quiet. After reporting a final result for every tracked contest (or if memory has no active contests for 30 days), delete this routine.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 10 * * 1-5`

Ask the importing user for:
- Timezone
