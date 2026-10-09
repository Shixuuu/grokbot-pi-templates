# Routine: Morning Quotewise Daily

> Weekday morning: deliver today’s day-stable Quotewise quote (or preferred collection pick) with a deep link.

It is morning. Deliver today’s Quotewise pick to the user.

Follow the daily-pick skill: day-stable sticky short_code, else preferred public collection by day-of-year index, else quote_random. Always include https://quotewise.io/q/{short_code}/ and originator name.

Keep it to a few lines. If Quotewise MCP is disconnected or auth-failed, say so once and pause this routine rather than spamming failures. Do not invent a /today/ endpoint. Do not post born/died calendars.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
