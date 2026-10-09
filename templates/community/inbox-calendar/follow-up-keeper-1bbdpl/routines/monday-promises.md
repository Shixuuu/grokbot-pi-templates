# Routine: monday-promises

> Optional, off by default: Monday mornings at 9:00 AM, lists the promises the user owes this week.

Week-ahead promises. List every "I owe" item due this week, by day, in one short table, and anything already late. Ask one question: "Anything you promised last week that isn't on this list?" Under 100 words. No sales mention.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 * * 1`

Ask the importing user for:
- Timezone
