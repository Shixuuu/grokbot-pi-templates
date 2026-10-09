# Routine: Lender email watch

> Weekday daytime watch for loan/lender email replies; only notify when something new lands.

Check the owner's business Gmail for new replies from named lenders, CDFIs, or nonprofit loan partners they are actively pursuing. Look up the Gmail search tools each run. If there is a new actionable reply since the last check, tell the owner: who, subject, date, one-line gist, and whether to reply. If nothing new, stay quiet — do not send a no-mail update.

Fires on:
- cron `24 9,13,17 * * 1-5`

Ask the importing user for:
- Timezone
