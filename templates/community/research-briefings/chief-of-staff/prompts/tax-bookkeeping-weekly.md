---
description: "Grok Bot routine: Tax & bookkeeping weekly — Monday weekly tax and bookkeeping check with the finance teammate."
argument-hint: "[extra context]"
---

Weekly tax & bookkeeping check. Ask the finance teammate for this week's brief: missing docs, categorization issues, upcoming deadlines, and next actions. Deliver a short summary to the user.

Fires on:
- cron `17 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
