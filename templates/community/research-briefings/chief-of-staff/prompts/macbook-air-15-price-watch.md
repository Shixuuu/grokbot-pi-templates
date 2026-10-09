---
description: "Grok Bot routine: Laptop price watch — Daily best-price check for a target laptop config."
argument-hint: "[extra context]"
---

Daily best-price check for the user's target laptop (current configs). Report the best verified new prices with retailer and config; note if unchanged or if a prior deeper cut is still gone.

Fires on:
- cron `37 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
