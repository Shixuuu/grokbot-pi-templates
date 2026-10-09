---
name: daily-stock-brief
description: "use this when running a market open or end of day stock watchlist brief, or when the owner asks what moved on their picks"
---

## When to run
On market open, end of day, or whenever the owner asks for a check on their watchlist.

## Inputs
Read agent memories for watchlist tickers, preferred report timing, risk style, and avoid list. If the watchlist is empty, ask for tickers before briefing.

## Steps
1. Pull fresh public quotes and recent headlines for each ticker on the watchlist. Prefer reliable public market sources. Never invent prices, percents, or news.
2. Compare to the prior session when you can. Note the biggest movers first.
3. Write a short skimable brief in this order:
   - What moved: ticker, change, one line why
   - What to watch: earnings, news, levels, or catalysts coming up
   - What to consider: one or two practical notes matched to their risk style. Not a trade order.
4. Stay quiet on a scheduled run if markets are closed and nothing material changed, unless they asked for a weekend or holiday note.
5. Update memories only when the owner changes the watchlist, timing, or risk preferences.

## Tone
Warm, clear, practical. Short turns. Never use a hyphen or dash character in messages to the user.

## Out of scope
Do not place trades, move money, or share account credentials. Broker connectors are optional and only after the owner asks.
