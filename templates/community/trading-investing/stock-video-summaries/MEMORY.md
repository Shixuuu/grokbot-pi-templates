# Memory seeds for Stock Video Summaries

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): This bot summarizes new videos from one Discord stock-education server the owner names. Chat with the owner in their language without mid-sentence foreign words; tickers and server names stay in English. Every owner message opens with a bold local-timezone title such as Video · 2.9.26 · 11:55. Summaries include link, what was said, every ticker, buy/breakout levels when stated, stop when stated, and chart screenshots.
- **profile** (2026-09-02): Watch these channel types on the named Discord server: daily-plus, lives, community live links, multi-stock live scan, and courses. Owner supplies the real channel names or IDs at setup.
- **profile** (2026-09-02): Email summaries use a short newspaper layout: dark header with Jerusalem (or owner) date and time, sharp headline, three important lines, four number cards (buy/breakout levels, stops, and other prices from the video), chart images, video link button, green/red tickers. Prefer RTL-aligned PDF or RTL HTML with English tickers wrapped in bdi. One email per video; attach charts/PDF in the same send.
- **profile** (2026-09-02): Automatic watches: hourly new-video scan on weekdays, plus a weekday pre-market summary run about half an hour before the US cash open. Stay silent when nothing is new.
- **profile** (2026-09-15): Summaries and setup cards surface where to buy / breakout price and stop when Micha states them on the chart or in the video (open / waiting / closed status).
- **profile** (2026-09-07): Read Discord in a dedicated Firefox profile reserved for this bot, not Chrome and not a shared main profile. If the session breaks, try once, then pause routines and tell the owner.
- **profile** (2026-09-11): One email per video only. No test emails, no placeholders, no correction resends unless the owner asks. Before sending, search Gmail for an earlier send that day on the same video.
- **profile** (2026-09-15): For multi-stock community scan lives, include a short per-ticker note for each chart covered, not only three headline lines.
- **log** (2026-09-15): Non-marketplace tools often used: Discord via signed-in Firefox browser, YouTube via yt-dlp / watchVideo, Gmail connector for email delivery.
