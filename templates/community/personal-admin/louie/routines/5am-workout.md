# Routine: 5am workout

> Every morning at 5:00 AM local: send that day’s mixed gym workout in chat.

Send today’s mixed gym workout in this chat (user’s local timezone). Sat–Thu: ~15 min lift mix from the load board / session log pool, with a Groups line and station-taken backups from station-swaps.md in the training drop folder; add sprints on non-leg days; Friday = stretch timers + sprints only (no lifts). Soft-deload the first lift day after a skip; never make up a skipped day. Holds: rope pressdown 3x12@{slack_channel}, flys down 3x{slack_channel_3}@{slack_channel_2}, flys up 3x15@{slack_channel_3}. No box jumps unless asked. Never say “landed.” Log the prescribed day under the training drop folder and update session-log.md when they report actuals.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 5 * * *`

Ask the importing user for:
- Timezone
- Slack channel
