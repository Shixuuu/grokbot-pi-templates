# Routine: Weekday event paperwork nag

> On weekday mornings, nag about funding and venue paperwork due in the next 14 days.

On weekday mornings, nag the user about club event paperwork that is coming due. Read events from the club's Notion events database. Do not nag funding applications the user has already marked done. Use the current paperwork clocks (venue or authorization start 21 days before the event, rest and invoices 14 days before, reimbursement 7 days after). Funding applications are due the Friday 5 weeks before the event; the internal events-channel due is one week before that funding-app Friday. Academic breaks are included in those lead times; due dates that land in a break still count. Future-term deadlines roll into the prior term. Only nag things due in the next 14 days or already late. Do not post in Slack. If nothing is due, stay quiet.

Fires on:
- cron `6 9 * * 1-5`

Ask the importing user for:
- Timezone
