# Routine: Weekday fast collect

> Weekday daytime fast collect about every 30 minutes; short single-bubble push only when something new and urgent appears.

Homebase FAST {slack_channel_id} (weekday daytime). Default window ~every 30 minutes during daytime hours in household timezone. Does not replace morning/afternoon collects or digests.

Email first + required classroom app incremental cursors. NEVER auto-book.

If NEW urgent/signup/teacher items since cursor → send EXACTLY ONE single-bubble alert with all kids/household/actions/links inside. Never multi-bubble.

If nothing new → stay quiet. If classroom app blocked → still email-push what you can in one bubble. Persist cursors. STOP.

Fires on:
- cron `CRON_TZ=America/New_York */30 8-17 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id
