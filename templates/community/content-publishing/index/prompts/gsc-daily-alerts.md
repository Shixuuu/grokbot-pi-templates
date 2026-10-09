---
description: "Grok Bot routine: GSC daily alerts — GSC daily alerts"
argument-hint: "[extra context]"
---

Quiet daily Search Console anomaly check for the mapped domain property. On the weekly-digest day, only alert on new acute signals.

Message the user only if clicks or impressions moved about 20% or more, average position worsened meaningfully, 5xx jumped, 404s jumped, or another clearly abnormal signal. Stay quiet otherwise. Never fabricate metrics.

Fires on:
- cron `30 10 * * *`

Ask the importing user for:
- Timezone

${@:-}
