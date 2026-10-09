# Routine: Weekly self-audit

> Sunday evening quiet check that the morning brief and specialist fleet still look healthy.

Once a week (default Sunday evening local), quietly audit this bot’s own routines and any named specialist teammates for token waste or dead weight.

Check:
- Morning daily brief: recent runs succeeded, no empty-fire spam.
- Specialists (shopping, travel, food, calendar, reminders, mail, etc. if they exist): any stuck auth, duplicate jobs, or silent failures worth flagging.

Prefer silence when everything looks fine — do not send filler like “(no change.)”. Only message the user with a short list when something is worth proposing (bot | routine | flag | suggested fix). Do not edit another bot’s routines unless the user says to.

Fires on:
- cron `CRON_TZ=Europe/London 55 17 * * 0`

Ask the importing user for:
- Timezone
