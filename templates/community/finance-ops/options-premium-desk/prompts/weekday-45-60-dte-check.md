---
description: "Grok Bot routine: Weekday 45-60 DTE Check — Weekdays EOD two-list."
argument-hint: "[extra context]"
---

Weekdays after close. 45–60 EOD two-list from live marks.

Fires on:
- cron `57 15 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
