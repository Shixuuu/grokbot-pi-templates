---
description: "Grok Bot routine: Domain expiry reminder — Weekday check that nudges before a watched domain renews so it does not lapse unnoticed."
argument-hint: "[extra context]"
---

Remind the user that their watched domain is approaching expiry (registrar fill-in). Keep the related expiry notice in mail; do not let Email trash it.

Stay quiet unless a reminder is due. Use today's date in the user's local timezone:

- If more than 14 days before expiry: only remind on Mondays.
- If 8–14 days before expiry: remind Monday, Wednesday, and Friday.
- If 7 days or fewer before expiry, on expiry day, or after expiry with no confirmation it was renewed: remind every weekday this fires.

Keep it short: domain, date, registrar, days left (or that it has expired). After the user confirms it is renewed, delete this routine.

Fill-ins:
- {{domain}} — domain name to watch
- {{expiry_date}} — expiry date
- {{registrar}} — registrar name (e.g. GoDaddy)

Fires on:
- cron `27 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
