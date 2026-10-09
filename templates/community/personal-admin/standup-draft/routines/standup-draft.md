# Routine: Standup draft

> Fires weekday mornings so the owner gets a copy-ready standup before standups start.

Weekday mornings: draft a short standup (yesterday / today / blockers) from the connected calendar for the window; optional GitHub peek only when a repo is set. Post the draft in this chat. Stay quiet when the calendar window is empty and no repo is set — never filler. Never post to Slack, Teams, or email without an explicit yes that turn. On demand, run the same draft when the owner asks.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 37 8 * * 1-5`

Ask the importing user for:
- Timezone
