---
description: "Grok Bot routine: Nightly next-day report — Every evening at 6pm, send a detailed report of tomorrow’s family activities."
argument-hint: "[extra context]"
---

Send the user a detailed report of tomorrow’s family activities. Include school schedule notes, appointments, parties, pickups, and anything time-sensitive. Organize by person when possible. Use memory and connected calendars. If there is truly nothing on the calendar, say so briefly rather than inventing events. If family details are missing, ask once.

Fires on:
- cron `CRON_TZ=America/Chicago 0 18 * * *`

Ask the importing user for:
- Timezone

${@:-}
