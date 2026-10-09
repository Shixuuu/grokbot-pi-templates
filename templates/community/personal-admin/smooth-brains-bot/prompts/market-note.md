---
description: "Grok Bot routine: Market note — Weekday morning short market note with the performance link."
argument-hint: "[extra context]"
---

Weekdays at 9:19. Write a short dry market note from proven live data, linking https://smoothbrains.ai/performance. Not financial advice. Stay quiet if there's nothing useful.

Fires on:
- cron `CRON_TZ=Asia/Qatar 19 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
