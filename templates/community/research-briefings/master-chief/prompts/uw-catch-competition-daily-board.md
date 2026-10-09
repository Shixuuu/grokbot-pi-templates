---
description: "Grok Bot routine: UW catch competition daily board — Posts the weekday 6pm catch competition daily scoreboard."
argument-hint: "[extra context]"
---

Weekdays at 6pm local, post the daily underwriting catch competition board from the catch-leaderboard file: top catchers, recent catches with latency and points, and titles. Keep it short and operator-facing.

Fires on:
- cron `CRON_TZ=America/New_York 0 18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
