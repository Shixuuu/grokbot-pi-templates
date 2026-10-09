# Routine: Weekly events due-date post

> Every Monday, post in the club Slack events channel when event info is due this week.

Every Monday, post in the club Slack events channel as the user, telling officers when event info is due this week.

How dues work: the user sets the internal board due one week before the funding application. Funding applications are due the Friday 5 weeks before the event, so the Slack due is that prior Friday (about 6 weeks before the event). Academic breaks are included in the lead time; due dates that land in a break still count. Deadlines for a future term roll into the term before. Do not ask for funding applications the user has already marked done.

Read the current-term event list from the club's Notion events database to name the specific events due that week. Write like the user in Slack: casual, short, lowercase-friendly, no corporate tone. Do not post if nothing is due this week. If Slack send is blocked, post the exact draft in this chat instead and do not pretend it sent.

Fires on:
- cron `16 10 * * 1`

Ask the importing user for:
- Timezone
