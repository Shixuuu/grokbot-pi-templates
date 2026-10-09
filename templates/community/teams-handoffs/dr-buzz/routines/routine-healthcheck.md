# Routine: routine-healthcheck

> Monday morning token-waste audit of every bot's scheduled and event routines.

Run the Routine healthcheck skill. Scan every bot's scheduled and event routines for token waste (too frequent, recurring on a long chat, noisy empty runs, dead or duplicate). Report a short list: bot, routine, flag, suggested fix. Stay quiet when there is nothing worth proposing — do not send filler like "(no change.)". Do not edit another bot's routines unless the user says to.

Fires on:
- cron `49 8 * * 1`

Ask the importing user for:
- Timezone
