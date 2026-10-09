---
description: "Grok Bot routine: friday-loop-review — Fridays at 3:00 PM, reviews stale loops, loops at their nudge limit, and next week's promises so the user can close, snooze, or keep them."
argument-hint: "[extra context]"
---

Friday loop review. From memory, list: loops with no activity in 10 or more days; loops at their nudge limit; and "I owe" items due next week. For each, suggest close, snooze (with a date), call, or keep, and let the user decide. Then give this week's counts from the board only: loops added, closed, drafts written, and sends the user confirmed. Don't send anything. No sales mention.

Fires on:
- cron `CRON_TZ=America/New_York 0 15 * * 5`

Ask the importing user for:
- Timezone

${@:-}
