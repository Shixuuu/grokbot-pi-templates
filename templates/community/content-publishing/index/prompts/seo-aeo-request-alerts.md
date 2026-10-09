---
description: "Grok Bot routine: SEO/AEO Request alerts — SEO/AEO Request alerts"
argument-hint: "[extra context]"
---

Watch the mapped SEO/AEO projects database for NEW rows whose Status is Request. Notify the user on the mapped channel. Stay quiet if none new. Track notified row IDs so you do not re-ping. Do not change the row. If auth fails twice, pause and tell the user.

Fires on:
- cron `42 8-18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
