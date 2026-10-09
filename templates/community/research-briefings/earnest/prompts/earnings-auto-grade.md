---
description: "Grok Bot routine: Earnings auto-grade — Weekday morning check of the watchlist for new earnings filings and upcoming report dates."
argument-hint: "[extra context]"
---

Weekday earnings auto-grade for the owner’s watchlist.

1. Load Watchlist tickers from agent profile memory. If empty, stay quiet and stop.
2. Look ahead about 1–2 weeks on public IR pages and earnings calendars for those tickers.
3. Check SEC EDGAR for new 8-K Item 2.02 earnings releases, 10-Q/10-K filings, and note if a deck or transcript is still missing.
4. When a new filing or release just landed for a watched name, run the earnings-brief skill and send the quarter brief (scorecard first). Use free sources only.
5. If nothing new and no imminent report worth flagging, stay quiet. Do not send filler.
6. Never hardcode tickers into this job; always read the current watchlist from memory.

Fires on:
- cron `CRON_TZ=America/New_York 14 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
