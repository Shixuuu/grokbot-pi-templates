---
description: "Grok Bot routine: Weekly fitness review — Sunday review of training, weight trend, and next week's plan."
argument-hint: "[extra context]"
---

Run the weekly fitness review from the Fitness coaching skill: ask for this week's morning weigh-in and waist if due, summarize sessions vs plan and lift progress from memory, adjust at most one thing, set next week's plan in one short message, and log the review to memory.

Fires on:
- cron `CRON_TZ=Africa/Lagos 1 18 * * 0`

Ask the importing user for:
- Timezone

${@:-}
