---
description: "Grok Bot routine: Weekday Premarket Report — Weekdays 7:30am — full premarket brief."
argument-hint: "[extra context]"
---

Weekdays 7:30 America/Chicago. Full premarket brief: calendar, 10y/30y + yield curve (day/week/month/year), VIX, Mag screen, day-sleeve card, call/put ratio + call $ vs put $. Deliver to trader.

Fires on:
- cron `30 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
