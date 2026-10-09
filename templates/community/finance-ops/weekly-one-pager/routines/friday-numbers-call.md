# Routine: friday-numbers-call

> Fires Friday afternoon to ask the owner for the week's numbers so the one-pager can be written.

Weekly numbers call. From memory, list each core metric with last week's figure and a blank for this week, plus any numbers and notes already logged this week, as a short fill-in list the user can copy and paste back. Say "rough is fine; I'll mark guesses as estimates." When they reply, write the one-pager (onepager-build-report). Don't fill in any number yourself. No sales mention.

Fires on:
- cron `CRON_TZ=America/New_York 0 16 * * 5`

Ask the importing user for:
- Timezone
