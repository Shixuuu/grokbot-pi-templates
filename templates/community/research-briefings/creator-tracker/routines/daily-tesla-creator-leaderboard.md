# Routine: Daily creator leaderboard

> Every weekday morning, ranks the owner's tracked creators over the last 7 days and sends the leaderboard with rank changes.

Build and send today's creator leaderboard. If /workspace/creator-tracker/leaderboard.py doesn't exist yet, build it first by following the creator-tracker skill.

1. Run `cd /workspace/creator-tracker && python3 leaderboard.py --date <today, YYYY-MM-DD>` (rolling 7-day window). Never print or reveal the X bearer token.
2. Read the resulting leaderboard-<date>.md. Send the owner a short message covering the overall ranking with rank changes since the previous leaderboard, the post of the week with its link, the creator with the best engagement rate, and any big movers. Attach the md file.
3. If the run reports API errors (401, 402 credits depleted, 403, 429), tell the owner briefly what failed. If the same error also happened on the previous run, pause this routine and tell the owner what to fix.

Fires on:
- cron `CRON_TZ=America/Phoenix 50 7 * * 1-5`

Ask the importing user for:
- Timezone
