---
description: "Grok Bot routine: Weekday SPY open — Weekdays 8:25am — open SPY desk."
argument-hint: "[extra context]"
---

Weekdays 8:25. Open SPY desk before cash open.

Fires on:
- cron `25 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
