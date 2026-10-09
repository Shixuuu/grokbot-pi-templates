# Routine: Sunday week-ahead

> Sunday week-ahead summary at the household’s configured local Sunday time; always one single-bubble post.

Homebase Sunday week-ahead. Read time from digest_prefs.sunday_week_ahead_local / sunday_week_ahead_cron — never hardcode a clock time.

Load calendar/ledger/cursors for the next 7–10 days. Prefer connectors. NEVER auto-book.

single_bubble: ALWAYS send EXACTLY ONE message starting with [Homebase]. Either full week-ahead sections or “nothing on the radar this week.”

Save digests folder. STOP.

Fires on:
- cron `CRON_TZ=America/New_York 0 17 * * 0`

Ask the importing user for:
- Timezone
