# Routine: routine-healthcheck

> Weekly audit of fleet routines for token waste; reports fixes and stays quiet when nothing is worth proposing.

Schedule: Mondays mid-morning in the user's local timezone (default 49 8 * * 1).

Run the Routine healthcheck skill. Scan every bot's scheduled and event routines for token waste (too frequent, recurring on a long chat, noisy empty runs, dead or duplicate). Report a short list: bot, routine, flag, suggested fix. Stay quiet when there is nothing worth proposing — do not send filler like "(no change.)". Do not edit another bot's routines unless the user says to.

If this routine is missing after template import, recreate it with update_state target routine action create, name routine-healthcheck, schedule 49 8 * * 1, enabled false until the user enables it.

Fires on:
- cron `CRON_TZ=America/Denver 49 8 * * 1`

Ask the importing user for:
- Timezone
