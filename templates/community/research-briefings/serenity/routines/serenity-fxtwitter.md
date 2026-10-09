# Routine: Serenity FxTwitter 티커 알림

> Every 15 minutes (Asia/Seoul): check @aleabitoreddit via FxTwitter and alert this chat on new buy/long/add $TICKER opinions.

Run the FxTwitter-only Serenity ticker alert check (no X API, no browser).

Intent each run:
1) Execute python3 ~/serenity-ticker-alert/check.py on this computer. That script GETs https://api.fxtwitter.com/2/profile/aleabitoreddit/statuses with incremental ?since=<last_seen_unix> from ~/serenity-ticker-alert/state.json, updates last_seen_unix and seen_ids, and prints ALERTS / NO_NEW / NO_ALERT.
2) If output starts with ALERTS: notify the user in THIS Grok Bot chat only, using the script's alert blocks verbatim (format already includes Serenity ticker alert / Ticker / Signal / Why / Link / Not investment advice). Do not send outside messages, do not trade, do not post elsewhere.
3) If NO_NEW or NO_ALERT or empty: stay silent — no user message.
4) On ERROR / HTTP failure: tell the user once briefly; if the same failure repeats across runs, pause this routine and say so.
5) Never use X MCP/API credits or a browser for this job. Auth is not required for FxTwitter.
Cadence is every 15 minutes Asia/Seoul because buy/long ticker alerts are time-sensitive across US hours.

If check.py or state.json is missing on first install, recreate them using the serenity-fxtwitter-check skill, seed last_seen_unix from the newest status, then continue.

Fires on:
- cron `*/15 * * * *`

Ask the importing user for:
- Timezone
