---
description: "Grok Bot routine: Weekly X follow report — Once a week, sums up the owner's X follow changes and sends the spreadsheet."
argument-hint: "[extra context]"
---

Write the weekly X follow report for the owner's X account. It's read-only.

1. Using this week's Daily Snapshots and Unfollow Log, sum up the week: the starting and ending mutuals, followers, and following; new mutuals and lost mutuals (with links); and the follow-back loop's activity if it's on.
2. List every unfollow with the @handle, display name, direction, and time window, or say "No unfollows since <last snapshot time>".
3. Add a Weekly Reports row, then send the owner a short, warm summary with the spreadsheet attached. Never make up numbers.

Fires on:
- cron `CRON_TZ=America/New_York 44 17 * * 6`

Ask the importing user for:
- Timezone

${@:-}
