---
description: "Grok Bot routine: Home–Europe business fare watch — Daily airfare watch that alerts only when mixed-cabin Europe fares clear a low threshold."
argument-hint: "[extra context]"
---

Daily airfare watch from the user's home airport to Europe (flexible dates). Feeder/domestic legs may be economy; the transatlantic leg must be business. Ask the travel teammate for under-threshold options. Report to the user only when under the price threshold; otherwise stay quiet. Do not book unless asked.

Fires on:
- cron `45 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
