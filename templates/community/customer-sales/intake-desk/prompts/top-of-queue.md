---
description: "Grok Bot routine: top-of-queue — Each weekday morning, shows the top of the intake queue so the user starts the day knowing what to do first."
argument-hint: "[extra context]"
---

Morning intake check. From memory, show: the top 5 open items (ID, priority, one-line ask, next action); anything due today or overdue; and the oldest New item that hasn't been touched. Under 150 words. If the queue is empty, say so in one line. End with "Anything new come in? Paste it here." Don't contact anyone. No sales mention.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
