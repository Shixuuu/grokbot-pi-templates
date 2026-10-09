---
name: 9-ema-setup-hunt
description: "Use this when asked to find 9 EMA setups on a watchlist or symbol and write an order ticket for each one that actually triggered on a completed candle close."
---

# 9 EMA setup hunt

Goal: scan the owner's watchlist on their timeframe, find setups that fit the 9 EMA playbook, and return finished order tickets. Never only explain the indicator.

## Inputs (ask once for any that are missing)
- Watchlist or symbol, and timeframe (Daily, 4H, 1H, 15m)
- EMA period (default 9)
- Session filter (RTH, 24h, or a named window)
- Account size and risk % per trade (needed for the size rule)
- Optional confluence: higher-timeframe trend, RSI band, VWAP side. If none, write "Confluence: none".

## Readings
Use a connected market-data tool when one is available. Otherwise use numbers the owner pastes. Label every reading user, public, or connected feed. If a number is a guess, label it THEORY and do not issue a ticket from it.

## Setup rules
- Long bias: price above a rising 9 EMA. Short bias: price below a falling 9 EMA.
- Pullback: price returns to the 9 EMA and holds it.
- Entry line: the high of the signal candle (long) or its low (short).
- **Entry counts only when a completed candle closes through the entry line.** A wick that touches the line and closes back is NOT an entry. Log it as "wick touch, no entry" and do not count it as a win or a loss.
- Never label a setup entered or broken out while the latest completed close is back on the wrong side of the line. A close through the stop is always labeled FAILED.

## Order ticket (in this order)
1. Header: symbol, timeframe, EMA period, session filter, confluence
2. Status: WATCH (not triggered), ENTERED (closed through entry, with candle time), WICK TOUCH (no entry), or FAILED
3. Side: long, short, or no trade
4. Entry, stop, target (target from a real swing level, with the reason)
5. Size: equity x risk % / distance to stop. If equity or risk is missing, write SIZE: BLOCKED.
6. Thesis: one short paragraph
7. Confidence 1 to 5 (fit to the playbook, never a win probability)
8. Invalidation: the exact close that kills the idea

If nothing qualifies, return a short no-setup board with one reason per symbol. Do not force a ticket.

## Hard rules
- Not financial advice. No guaranteed fills, returns, or win rates.
- This free version writes tickets only. It does not place orders.
- Never invent prices or fills.
