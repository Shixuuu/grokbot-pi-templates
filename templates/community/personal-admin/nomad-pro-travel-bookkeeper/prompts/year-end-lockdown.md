---
description: "Grok Bot routine: Nomad Pro year-end lockdown — Each 7 April, helps the user check and lock down the tax year that just ended."
argument-hint: "[extra context]"
---

7 April at 10:00 in the owner's timezone. Run `year-end-lockdown` for the tax year that ended on 5 April; no logged days: send nothing. Otherwise rebuild from the Sheet, catch up days to 5 April, send one short message with the headline counts and ask when the owner would like about 20 minutes to lock the year down; if the calendar is connected, offer two or three free slots in the next week and add the one they pick to their calendar only after they say yes.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 10 7 4 *`

Ask the importing user for:
- Timezone

${@:-}
