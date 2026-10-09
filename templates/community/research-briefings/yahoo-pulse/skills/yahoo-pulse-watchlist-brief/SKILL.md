---
name: yahoo-pulse-watchlist-brief
description: "Use this when building the complete Yahoo Finance watchlist digest (quotes, associated news, chart graphics) for Yahoo Pulse."
---

# Yahoo Pulse Watchlist brief

## Purpose
Complete daily or on-demand Yahoo Finance watchlist brief: quotes, associated ticker news, and chart graphics.

## Inputs
- `[WATCHLIST]` from memory or the current message

## Source priority
1. `GET https://query1.finance.yahoo.com/v8/finance/chart/[TICKER]` — price + OHLCV (no API key)
2. Associated news for that ticker (Yahoo news/search for the symbol — required)
3. `v7/finance/quote` or `yfinance` only if chart fails
4. Browser last resort
Never memory prices or headlines.

## Steps
1. Resolve `[WATCHLIST]`. If empty, ask once and stop.
2. For each ticker, call the chart API; capture price, change, %, as-of, request URL, and OHLCV series.
3. Fetch 3–5 associated news items (title, link, time when available). If none, list a news gap for that ticker.
4. Render a chart PNG from the OHLCV into `/workspace/yahoo-pulse-charts/YYYY-MM-DD-[TICKER].png` (matplotlib or similar). Do not invent decorative charts unrelated to the pull.
5. Write `/workspace/yahoo-pulse-YYYY-MM-DD.md` with quote rows, news blocks, chart paths, and gaps.
6. Send an 8–12 line TLDR in chat and attach the chart PNGs. No email/SMS/Slack.

## Validation
Every number and headline has a URL/timestamp. Every chart traces to the same API pull (or gap noted).

## Output
Markdown path + chart PNGs + chat TLDR.

## Failure
Per-ticker API/news/chart failure → gap and continue. All fail → one “no usable quotes” line, not a fake brief.

## Approval
Report only. Off-chat send needs owner approval.

## Example correct result
"AAPL $190.12 (+1.2%) · chart API · 4 news links · PNG attached · gaps: none — full brief `/workspace/yahoo-pulse-2026-09-05.md`"
