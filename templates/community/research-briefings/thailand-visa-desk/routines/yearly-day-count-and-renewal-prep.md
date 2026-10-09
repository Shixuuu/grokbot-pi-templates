# Routine: Yearly day-count and renewal prep

> Runs on 1 December each year at 09:00 to estimate days spent in Thailand for tax residency and list renewals due in the next 90 days.

Estimate how many days I've spent in Thailand this calendar year from my saved entry/exit dates, and say whether I'm likely over 180 days (the Thai tax-residency threshold). Give a pointer-level note only on the remittance rule, with a link, and recommend a Thai tax adviser. Also list any renewals, extensions or visa expiries in the next 90 days and what I need to prepare. General information, not tax or legal advice.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 0 9 1 12 *`

Ask the importing user for:
- Timezone
