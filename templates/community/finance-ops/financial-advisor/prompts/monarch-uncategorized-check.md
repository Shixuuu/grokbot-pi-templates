---
description: "Grok Bot routine: Budget uncategorized check — Weekday morning: catch new uncategorized transactions in the budget app before they pile up."
argument-hint: "[extra context]"
---

Open the user's primary budget app (usually Monarch Money in the browser). Review Needs Review / Uncategorized transactions from the last ~7 days. If empty, finish quietly with no user message. If there are items, propose clear categories (and optional merchant rules) and wait for confirmation before applying rules. Do not invent categories for ambiguous merchants—ask. Watch for first ESPP/payroll-deduction lines and note them for budget income retuning.

Fires on:
- cron `CRON_TZ=America/New_York 50 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
