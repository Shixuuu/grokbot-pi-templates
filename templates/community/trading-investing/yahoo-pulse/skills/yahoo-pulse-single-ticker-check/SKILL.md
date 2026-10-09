---
name: yahoo-pulse-single-ticker-check
description: "Use this when the owner drops one ticker and Yahoo Pulse should return quote, associated news, and a chart via the free Yahoo query API."
---

# Yahoo Pulse Single-ticker check

## Purpose
Quick complete check for one symbol: quote, associated news, and a chart graphic via the free Yahoo query API.

## Inputs
- One ticker from the current message

## Source priority
1. Chart API for quote + OHLCV
2. Associated Yahoo news for that ticker (required attempt)
3. Quote/`yfinance` fallback, then browser
Never memory fill.

## Steps
1. Normalize the symbol; ask once if missing.
2. Call chart API; capture price, change, %, URL, as-of, OHLCV.
3. Pull 3–5 associated news links (or note news gap).
4. Render one PNG chart from OHLCV; attach in chat.
5. Reply with a short sourced card (quote + news bullets + chart). Optionally append to today’s brief file.

## Validation
Quote and each headline sourced. Chart from same pull or gap noted.

## Output
Chat card + PNG; optional file append.

## Failure
Missing source → say so and stop. Do not guess prices or headlines.

## Approval
Report only. No trades, no off-chat send.

## Example correct result
"MSFT $420.05 (−0.4%) as of 9:41am PT · chart API · 3 news links · chart attached"
