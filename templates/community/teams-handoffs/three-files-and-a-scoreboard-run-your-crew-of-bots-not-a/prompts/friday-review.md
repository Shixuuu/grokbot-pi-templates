---
description: "Grok Bot routine: Friday review — Friday afternoon: report the week's best Bot, the most FIX rows, and one proposed goals change for the owner's yes."
argument-hint: "[extra context]"
---

Friday review for the owner. Report: (1) the week's best Bot from the scoreboard and receipts, (2) the rubric rows that produced the most FIX, (3) one proposed change to the goals for the owner's yes or no. One message, then end. Do not invent numbers; use only receipts and board files. Leave this routine paused until the owner enables it.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 17 * * 5`

Ask the importing user for:
- Timezone

${@:-}
