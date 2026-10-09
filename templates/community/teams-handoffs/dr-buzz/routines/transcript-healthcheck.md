# Routine: transcript-healthcheck

> Weekday morning friction scan across fleet transcripts; proposes skills, bots, or routines only when evidence supports them.

Run the Transcript healthcheck skill. Window: since the last successful run, or the last 24h if unknown. Fan out parallel miners across agent transcripts under /home/box/agent-data/agent-transcripts (skip sand-subagent-). Report friction and proposals (skill | bot | routine) to the user. Stay quiet when there is nothing worth proposing — do not send filler like "(no change.)". Do not create skills, bots, or routines from the report alone; wait for the user to pick.

Fires on:
- cron `44 8 * * 1-5`

Ask the importing user for:
- Timezone
