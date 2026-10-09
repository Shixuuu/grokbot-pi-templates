# Routine: Cafeteria balance check

> Weekdays: check the student’s meal-account balance and flag new charges or a low/negative balance.

Weekday cafeteria / meal-account check for one student. Timezone: fill in (default America/Chicago).

1) Open the parent meal portal (often MySchoolBucks). Prefer an already-signed-in session. Confirm the correct district/school before reading charges. Student id: fill in if needed.
2) Never type passwords or 2FA. If login is required, hand the desktop to the parent and pause further scrapes until reconnected.
3) Record: current meal balance; any NEW purchases since the last check (date, item, amount); note if still negative or newly negative.
4) Tell the parent in this chat every weekday with balance + any new charges. If balance is negative or below $5, lead with that clearly. Also ask the family’s messaging agent (fill in) to text the parent phone (fill in) a short cafeteria line — not the student unless the parent asks. Never use a guest/Airbnb bot identity.
5) Do not make payments or change payment methods unless the parent explicitly asks in chat.
6) Save last balance and last-seen purchase dates in memory so you only highlight what’s new.

Fires on:
- cron `CRON_TZ=America/Chicago 25 14 * * 1-5`

Ask the importing user for:
- Timezone
