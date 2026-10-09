# Routine: Federal quarterly estimated tax reminder (R-09) (set your dates)

> Fires about a week before each federal estimated tax date the owner confirmed with their CPA, as a reminder only.

An estimated tax due date is coming up in about a week ([FEDERAL or STATE]). Please remind me. Show our year-to-date profit from approved records. Tell me to confirm the amount with our CPA. Do not calculate any amount. Do not pay anything. End with DONE and NEEDS YOU.

Fires on:
- cron `CRON_TZ=America/New_York 10 9 1 1 *`

Ask the importing user for:
- Timezone
