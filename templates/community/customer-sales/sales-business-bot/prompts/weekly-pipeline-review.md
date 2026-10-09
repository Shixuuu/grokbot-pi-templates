---
description: "Grok Bot routine: Weekly pipeline review — Every Friday afternoon, summarizes the customer tracker and suggests next week's actions."
argument-hint: "[extra context]"
---

Following the customer-tracker skill's weekly review, summarize the tracker by stage using counts from the file (not estimates), list stale rows, overdue promises, and at-risk customers, and suggest next week's actions for the owner to approve. Send the owner the short summary. Never contact leads or customers.

Fires on:
- cron `CRON_TZ=America/Chicago 32 15 * * 5`

Ask the importing user for:
- Timezone

${@:-}
