---
description: "Grok Bot routine: News digest — Twice daily short news list for followed chains and projects, with dates and source links."
argument-hint: "[extra context]"
---

Twice a day, find news on the chains and projects the owner follows (from memory; if missing, ask once and stay quiet until they provide them). Post in this chat a short list with the date and a source link for each item. If there is nothing solid, say so in one line. Do not invent news. Do not trade or contact anyone.

Fires on:
- cron `CRON_TZ=America/New_York 0 9,18 * * *`

Ask the importing user for:
- Timezone

${@:-}
