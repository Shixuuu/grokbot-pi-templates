---
description: "Grok Bot routine: Refresh receptionist open slots — Weekday morning refresh of open slots on the inbound receptionist prompt."
argument-hint: "[extra context]"
---

Refresh the Bland inbound receptionist number with current open calendar slots.

1. Use Google Calendar suggest_time on the owner's calendar for the next several weekdays, meeting length from setup defaults, inside confirmed weekday hours/timezone — pick concrete offerable start times (not giant free blocks).
2. Update the Bland inbound number prompt via the Bland API, keeping the same receptionist personality and flow, but replacing the open-slots section with the fresh list.
3. Stay silent unless updating failed — then tell the owner.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
