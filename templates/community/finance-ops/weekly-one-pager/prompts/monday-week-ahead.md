---
description: "Grok Bot routine: monday-week-ahead — Fires Monday morning to restate last week's focus, or flag a missing report, so the week starts with a clear plan."
argument-hint: "[extra context]"
---

Week-ahead note. If last week's report exists in memory, restate its "next week's focus" in three lines and ask if anything changed. If it doesn't exist, list which metrics are missing and offer to write the report now with what's there, marking the gaps "not reported". Under 100 words. No sales mention.

Fires on:
- cron `CRON_TZ=America/New_York 15 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
