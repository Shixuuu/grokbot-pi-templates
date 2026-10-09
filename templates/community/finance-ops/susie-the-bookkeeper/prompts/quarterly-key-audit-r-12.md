---
description: "Grok Bot routine: Quarterly key audit (R-12) — Fires the first Monday of each quarter to review everything the clerk can access and suggest what to remove."
argument-hint: "[extra context]"
---

First, check: is today a Monday? If not, stop and do nothing. If yes, run our quarterly key audit. List everything you can access (connectors, apps, files, tools, and any secure bank connection), what you can do with each, and whether we still use it. Compare the list to our Access Map. Remind me to check that Auto-review is still on. Suggest what to remove. Do not remove or change anything yourself. End with DONE, NEEDS YOU, and RED FLAGS.

Fires on:
- cron `CRON_TZ=America/New_York 10 10 1-7 1,4,7,10 *`

Ask the importing user for:
- Timezone

${@:-}
