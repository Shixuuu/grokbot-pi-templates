---
description: "Grok Bot routine: SERP watch — Weekday SERP check for saved priority keywords with rank deltas."
argument-hint: "[extra context]"
---

For saved priority keywords (cap 10), pull organic SERP via the catalog. Note rank changes for the user's domain and top movers. Quiet if no meaningful change. Include spend.

Fires on:
- cron `32 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
