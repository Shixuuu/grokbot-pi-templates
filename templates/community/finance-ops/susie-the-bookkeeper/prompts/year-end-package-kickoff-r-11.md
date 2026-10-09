---
description: "Grok Bot routine: Year-end package kickoff (R-11) — Fires in mid-January to start the year-end package for the CPA and list what's missing."
argument-hint: "[extra context]"
---

It's mid-January. Please start our year-end package for last year. Copy these into one folder: statements, monthly money reports, the full-year report, the sorted transaction list, the receipt log, the contractor list, loan statements, and sales tax worksheets. Make a table of contents and mark anything missing. Then collect every open question for our CPA into one list. Do not send, delete, or change any originals. End with DONE and NEEDS YOU.

Fires on:
- cron `CRON_TZ=America/New_York 10 9 15 1 *`

Ask the importing user for:
- Timezone

${@:-}
