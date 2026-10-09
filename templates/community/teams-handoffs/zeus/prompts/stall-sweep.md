---
description: "Grok Bot routine: Stall sweep — Weekly Monday park-or-finish on everything sitting at 90% waiting on the human."
argument-hint: "[extra context]"
---

Weekly forced park-or-finish on open fronts.

Build inventory from what you can see: your todo list (in_progress/pending), open and draft PRs on the watched repos, cloud agents blocked or finished with nobody looking, and threads where you asked the user something and never got an answer.

Send one short HQ message with three buckets:
1. Waiting on you — one line each, what decision unlocks it.
2. I can finish alone — items you will close or merge without them this week.
3. Kill or park — stale drafts and bets to drop.

If nothing is stalled, stay quiet.

Fires on:
- cron `0 5 * * 1`

Ask the importing user for:
- Timezone

${@:-}
