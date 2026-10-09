# Routine: friday-stale-sweep

> Every Friday afternoon, flags queue items that have gone stale so the user can keep, reschedule, or drop them.

Friday stale sweep. From memory, list: open items with no change in 7 or more days; Waiting items with no follow-up date; leads with no next action. For each, suggest keep, reschedule, or drop in a few words, and let the user decide. Then give this week's counts: items added, done, dropped, and open by priority. Counts come from the queue only; don't estimate. No sales mention.

Fires on:
- cron `CRON_TZ=America/New_York 0 14 * * 5`

Ask the importing user for:
- Timezone
