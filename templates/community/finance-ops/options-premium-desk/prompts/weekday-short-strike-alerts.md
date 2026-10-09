---
description: "Grok Bot routine: Weekday short-strike alerts — Weekdays RTH short-strike alerts."
argument-hint: "[extra context]"
---

Weekdays RTH. Short-strike alerts with story-check.

Fires on:
- cron `*/5 8-14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
