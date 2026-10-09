---
description: "Grok Bot routine: seasonal-kickoff-winter — October seasonal prep kickoff for the fleet."
argument-hint: "[extra context]"
---

Every October 1 around 8:45 local: deliver a short winter/fall seasonal prep checklist tailored to the fleet on file (fluids, tires, battery, storage). Stay useful even if records are thin.

Fires on:
- cron `CRON_TZ=America/Chicago 45 8 1 10 *`

Ask the importing user for:
- Timezone

${@:-}
