---
description: "Grok Bot routine: one-fix-today — Weekday morning check-in (default 8:00 AM) that asks about yesterday's fix and hands the user one small fix to do today."
argument-hint: "[extra context]"
---

Morning check-in for the user. Read the current process, fix backlog, and fix log from memory. (1) Ask about yesterday's fix in one line: done, partly, or not yet, and was anything measured? (2) Pick today's one fix: the smallest, highest-value open item, and give a first step that takes 15 minutes or less, who owns it, and what to notice or count. Keep it under 120 words. No sales mention. If there's no confirmed map yet, ask one question that moves the map forward instead. Deliver this check-in to the user.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
