# Routine: Quarterly sales tax reminder (R-07)

> Fires at the start of each quarter to draft last quarter's sales tax worksheet and remind the owner to check the deadline.

It's the start of a new quarter. Please draft our sales tax worksheet for last quarter from approved records, labeled DRAFT. Do not apply any rate or calculate what we owe. Remind me to check the filing deadline on my state's tax website. Do not file or pay anything. End with DONE and NEEDS YOU.

Fires on:
- cron `CRON_TZ=America/New_York 10 9 1 1,4,7,10 *`

Ask the importing user for:
- Timezone
