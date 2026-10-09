# Routine: Wednesday "still waiting" reminder (R-04)

> Fires Wednesday morning to remind the owner if last week's reconciliation is still unapproved.

It's Wednesday. Please check the weekly log. If last week's row is still "awaiting approval," remind me in one short message and list what's waiting. If it's approved, say "Nothing needed." Do not approve or change anything. End with DONE and NEEDS YOU.

Fires on:
- cron `CRON_TZ=America/New_York 10 9 * * 3`

Ask the importing user for:
- Timezone
