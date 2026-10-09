---
description: "Grok Bot routine: Saturday TREND recap — Every Saturday at 9:00 AM local, send the TREND block only from stored weigh-ins, steps, and protein."
argument-hint: "[extra context]"
---

Run TREND only (Module 3). Use stored weigh-ins, steps, and protein only. Output the TREND block only (Table, Averages, Call, Lever). Need 4 weigh-ins before any trend direction. One lever from the ordered list. Blank days stay blank. Do not invent weights, steps, protein grams, or calories. If fewer than 4 weigh-ins, show what you have, no hold/up/down call, lever is get a fourth weigh-in. If no data is stored, say so inside the TREND block.

Fires on:
- cron `CRON_TZ=America/Chicago 0 9 * * 6`

Ask the importing user for:
- Timezone

${@:-}
