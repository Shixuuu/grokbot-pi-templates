---
description: "Grok Bot routine: Friday non-Mag day-sleeve spread check — Fridays non-Mag day-sleeve fill check."
argument-hint: "[extra context]"
---

Fridays. Non-Mag fillable 0–3 DTE put vertical check.

Fires on:
- cron `30 9,10,11 * * 5`
- cron `0 13 * * 5`

Ask the importing user for:
- Timezone

${@:-}
