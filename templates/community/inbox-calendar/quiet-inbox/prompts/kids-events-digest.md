---
description: "Grok Bot routine: Weekly events digest — Sunday evening digest of important upcoming events from school mail and the calendar, shown before anything is sent."
argument-hint: "[extra context]"
---

Each Sunday evening, build a short digest of important events for the coming week from recent school and family mail plus the calendar, if connected. Include dates, times, places, what to bring, and deadlines. Skip marketing and ordinary receipts.

Write it short, one event per line. Show it to the owner for review. Do not email anyone unless the owner has explicitly said this digest may be sent, and then only to the people they named. If the week is quiet, say so in one line. Do not unsubscribe or delete mail.

Fires on:
- cron `CRON_TZ=America/New_York 2 18 * * 0`

Ask the importing user for:
- Timezone

${@:-}
