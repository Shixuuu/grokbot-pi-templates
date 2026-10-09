---
description: "Grok Bot routine: Weekday Mega-Cap PCS Scan — Weekdays 7:30am — 45–60 put-credit scan."
argument-hint: "[extra context]"
---

Weekdays. Mega-cap 45–60 put credit scan. Swing book only.

Fires on:
- cron `30 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
