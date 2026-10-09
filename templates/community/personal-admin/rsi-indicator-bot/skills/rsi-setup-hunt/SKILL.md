---
name: rsi-setup-hunt
description: "Use this when asked to find RSI setups on a watchlist or symbol and write an order ticket for each one that actually triggered on a completed candle close."
---

# RSI setup hunt

Goal: scan the owner's watchlist on their timeframe, skip markets where RSI signals tend to fail, and return finished order tickets for real setups. Never only explain the indicator.

## Inputs (ask once for any that are missing)
- Watchlist or symbol, and timeframe (Daily, 4H, 1H, 15m)
- RSI period (default 14), oversold and overbought levels (default 30 and 70)
- Session filter (RTH, 24h, or a named window)
- Account size and risk % per trade (needed for the size rule)
- Optional confluence: higher-timeframe trend, VWAP side, divergence. If none, write "Confluence: none".

## Readings
Use a connected market-data tool when one is available. Otherwise use numbers the owner pastes. Label every reading user, public, or connected feed. If a number is a guess, label it THEORY and do not issue a ticket from it.

## Step 1: market filter (before any signal)
RSI reversal signals work in ranges and fail in strong trends.
- Measure trend strength with ADX(14) and the slope of the 50-period moving average.
- Strong trend (ADX above 25 with a clearly sloped 50 MA): skip counter-trend signals. Only take the RSI signal that agrees with the trend (an oversold reclaim in an uptrend, an overbought rejection in a downtrend).
- Range or mild trend (ADX 25 or below): both sides allowed.
- Write the result on the board in plain words, for example "NVDA skipped, strong uptrend, short signal against trend".

## Step 2: setup rules
- Long: RSI drops below oversold, then a completed candle closes with RSI back above oversold. Signal candle is that candle.
- Short: RSI rises above overbought, then a completed candle closes with RSI back below overbought.
- Entry line: the high of the signal candle (long) or its low (short).
- Stop: beyond the most recent swing low (long) or swing high (short).
- Target: the nearest real prior swing level in the trade direction, with the reason. No measured moves.
- **Entry counts only when a completed candle closes through the entry line.** A wick that touches the line and closes back is NOT an entry. Log it as "wick touch, no entry".
- **Minimum reward-to-risk 1.5.** If target distance divided by stop distance is below 1.5, put it on the board as "R:R below 1.5 (x.xx)" and do not write a ticket.
- A close through the stop is always labeled FAILED.

## Order ticket (in this order)
1. Header: symbol, timeframe, RSI period and levels, session filter, market type from step 1, confluence
2. Status: WATCH, ENTERED (with candle time), WICK TOUCH, or FAILED
3. Side: long, short, or no trade
4. Entry, stop, target (with reason), and R:R
5. Size: equity x risk % / distance to stop. If equity or risk is missing, write SIZE: BLOCKED.
6. Thesis: one short paragraph
7. Confidence 1 to 5 (fit to the playbook, never a win probability)
8. Invalidation: the exact close that kills the idea

If nothing qualifies, return a short no-setup board with one reason per symbol. Do not force a ticket.

## Hard rules
- Not financial advice. No guaranteed fills, returns, or win rates.
- This free version writes tickets only. It does not place orders.
- Never invent prices or fills.
