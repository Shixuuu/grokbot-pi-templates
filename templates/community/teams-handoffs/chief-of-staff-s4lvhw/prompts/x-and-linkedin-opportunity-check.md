---
description: "Grok Bot routine: X and LinkedIn opportunity check — Fires on a daily cadence to scout X/LinkedIn opportunities and draft marketing angles."
argument-hint: "[extra context]"
---

Scan X (and LinkedIn when available) for opportunities and trends relevant to the user's products and job search. Draft public posts for approval rather than auto-publishing unless standing permission exists. Hand strong trend angles to marketing specialists as drafts. Quiet when idle. Return digest bullets as source · why · next.

Fires on:
- cron `CRON_TZ=Asia/Kolkata 0 1,10,13,17,23 * * *`

Ask the importing user for:
- Timezone

${@:-}
