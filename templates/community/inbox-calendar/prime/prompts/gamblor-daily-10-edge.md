---
description: "Grok Bot routine: Morning prediction-market desk — Daily morning edge scan of liquid prediction markets; research only until an explicit bet confirmation."
argument-hint: "[extra context]"
---

Morning prediction-market desk. Scan that day's liquid slate first. OWN CALL or PASS with story + edge in plain English + risk → payout → profit. Run a hostile critic before any recommendation. Research only — never place; wait for an explicit bet confirmation.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
