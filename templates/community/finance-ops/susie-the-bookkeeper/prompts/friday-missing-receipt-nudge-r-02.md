---
description: "Grok Bot routine: Friday missing-receipt nudge (R-02) — Fires Friday afternoon to list this week's transactions that still have no receipt."
argument-hint: "[extra context]"
---

It's Friday. Please list this week's transactions that have no receipt in our receipt log: date, vendor, and amount. Put the biggest first. Do not change anything. End with DONE and NEEDS YOU.

Fires on:
- cron `CRON_TZ=America/New_York 10 14 * * 5`

Ask the importing user for:
- Timezone

${@:-}
