---
description: "Grok Bot routine: Attention list — Weekday morning digest that combines specialist findings into one attention page."
argument-hint: "[extra context]"
---

Weekday morning attention list. Combine only what specialists already found into one short phone page: Needs you / Waiting on a bot / Ignore. Do not re-run specialist jobs. Do not invent. Stay quiet if Needs you is empty. Draft only — never send, post, spend, or change a calendar event.

Fires on:
- cron `45 6 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
