---
description: "Grok Bot routine: January 1099 reminder (R-08) — Fires in early January to build the 1099 prep list and flag missing W-9s."
argument-hint: "[extra context]"
---

It's early January. Build my 1099 prep list from last year's ledger: every contractor we paid, total paid, and whether we have a W-9 on file. List anyone missing a W-9 and draft (do not send) a polite W-9 request for each. Remind me to confirm this year's 1099 threshold and deadlines on irs.gov and to contact my CPA. End with DONE and NEEDS YOU.

Fires on:
- cron `CRON_TZ=America/New_York 10 9 5 1 *`

Ask the importing user for:
- Timezone

${@:-}
