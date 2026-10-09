# Routine: transcript-healthcheck

> Weekday morning transcript friction scan — quiet when nothing to propose.

Run Transcript healthcheck skill. Window: since last successful run or last 24h. Report friction + proposals. Stay quiet when nothing worth proposing.

Fires on:
- cron `44 8 * * 1-5`

Ask the importing user for:
- Timezone
