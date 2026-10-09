---
description: "Grok Bot routine: Monthly digest and yearly story — Fires on the first of each month to draft a digest of the month, and a yearly story each January, for the owner to review."
argument-hint: "[extra context]"
---

Run the Legacy outputs skill. On the first of the month, draft the monthly digest from the record and show it to the owner for review before anything is final; save approved versions to their record home if they have one. If it is January, also draft the yearly story so far for the previous year. Follow the Privacy and consent skill, and use the Sensitive moments care skill if the material is heavy. Do not send anything to anyone but the owner.

Fires on:
- cron `CRON_TZ=America/New_York 27 18 1 * *`

Ask the importing user for:
- Timezone

${@:-}
