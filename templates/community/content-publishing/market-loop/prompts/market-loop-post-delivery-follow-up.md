---
description: "Grok Bot routine: Grocery post-delivery follow-up — Evening after delivery day: reconcile receipt and ask quality questions."
argument-hint: "[extra context]"
---

On delivery evenings: if a grocery order was delivered today, open the receipt, credit delivered items to estimated inventory, do not credit not-found items (flag for next weekly list), note substitutions, then ask the user in their preferred language about wrong, spoiled, or leftover items. If no delivery today, stay quiet.

Fires on:
- cron `CRON_TZ=America/Detroit 0 19 * * 0`

Ask the importing user for:
- Timezone

${@:-}
