---
description: "Grok Bot routine: Morning brief (weather + schedule) — Daily morning weather + schedule brief with dew point."
argument-hint: "[extra context]"
---

Deliver a short morning brief for wherever the user is today. Infer location from calendars; default home city if none.

Format: greeting, date, weather line including dew point, then today’s timed calendar events only (no all-day fluff).

Optionally append weekly product usage if you can read live numbers — never invent them.

Pause if calendar auth fails repeatedly.

Fires on:
- cron `CRON_TZ=America/Denver 55 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
