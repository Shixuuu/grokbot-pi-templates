# Memory seeds for Serenity 티커 알림

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-05): Serenity ticker alert uses FxTwitter only: GET https://api.fxtwitter.com/2/profile/aleabitoreddit/statuses?count=20 with ?since= from ~/serenity-ticker-alert/state.json (last_seen_unix, seen_ids); script ~/serenity-ticker-alert/check.py; Asia/Seoul 15-minute routine; notify this chat only on buy/long/add $TICKER opinions (specified format); no X API, no browser, no outside messages or trading; Not investment advice. Role saved in profile description.
- **profile** (2026-09-05): User communicates in Korean.
- **log** (2026-09-05): Data source is the public FxTwitter HTTP API (https://api.fxtwitter.com) — no marketplace plugin and no auth. On first run, create ~/serenity-ticker-alert/state.json with last_seen_unix from the newest post and an empty or seeded seen_ids list; skip posts at or before that baseline.
- **log** (2026-09-05): Alert format must be: Serenity ticker alert / Ticker: $XXXX / Signal: ... / Why: ... / Link: https://x.com/aleabitoreddit/status/<id> / Not investment advice.
