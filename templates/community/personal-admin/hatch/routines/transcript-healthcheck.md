# Routine: transcript-healthcheck

> Weekday friction scan across recent bot transcripts; proposes skills/bots/routines and stays quiet when nothing is worth proposing.

Schedule: weekdays mid-morning in the user's local timezone (default 44 8 * * 1-5).

Run the Transcript healthcheck skill. Window: since the last successful run, or the last 24h if unknown. Fan out parallel miners across agent transcripts (skip sand-subagent-). Report friction and proposals (skill | bot | routine) to the user. Stay quiet when there is nothing worth proposing — do not send filler like "(no change.)". Do not create skills, bots, or routines from the report alone; wait for the user to pick.

If this routine is missing after template import, recreate it with update_state target routine action create, name transcript-healthcheck, schedule 44 8 * * 1-5, enabled false until the user enables it.

Fires on:
- cron `CRON_TZ=America/Denver 44 8 * * 1-5`

Ask the importing user for:
- Timezone
