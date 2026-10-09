# Routine: Bot activity tracker

> Fires each weekday morning to snapshot per-bot activity and send the weekly bot report.

Run python3 /workspace/bot-usage/track.py to take today's per-bot activity snapshot (if the script is missing, build it with the bot-activity-tracker skill), then python3 /workspace/bot-usage/track.py report. On Mondays, send the user a short summary: top active bots, week-over-week changes, idle bots, and duplicate-name pairs where one copy is clearly dead (suggest deleting it). On other weekdays, stay quiet unless a bot's activity spiked sharply versus last week. Keep it short. It's an activity proxy; never present it as token or dollar cost. If the script fails, fix it or tell the user.

Fires on:
- cron `CRON_TZ=America/Chicago 11 8 * * 1-5`

Ask the importing user for:
- Timezone
