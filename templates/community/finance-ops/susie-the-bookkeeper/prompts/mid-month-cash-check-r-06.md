---
description: "Grok Bot routine: Mid-month cash check (R-06) — Fires mid-month to give a quick cash position and upcoming bills."
argument-hint: "[extra context]"
---

It's the middle of the month. Please give me a short cash check: the balance of each account (last 4 digits only) from the newest statement, and the bills due before month end from my list: [MY BILLS LIST]. Do not pay, move, or schedule anything. End with DONE and NEEDS YOU.

Fires on:
- cron `CRON_TZ=America/New_York 10 9 15 * *`

Ask the importing user for:
- Timezone

${@:-}
