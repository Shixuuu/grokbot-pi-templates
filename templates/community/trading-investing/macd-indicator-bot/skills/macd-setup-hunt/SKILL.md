---
name: macd-setup-hunt
description: "Use this when asked to find MACD setups on a watchlist or symbol and write an order ticket for each one that actually triggered on a completed candle close."
---

# MACD setup hunt

Goal: scan the owner's watchlist on their timeframe, skip choppy markets where MACD crosses whipsaw, and return finished order tickets for real setups. Never only explain the indicator.

## Inputs (ask once for any that are missing)
- Watchlist or symbol, and timeframe (Daily, 4H, 1H, 15m)
- MACD settings (default 12, 26, 9)
- Session filter (RTH, 24h, or a named window)
- Account size and risk % per trade (needed for the size rule)
- Optional confluence: higher-timeframe trend, RSI band, VWAP side. If none, write "Confluence: none".

## Readings
Use a connected market-data tool when one is available. Otherwise use numbers the owner pastes. Label every reading user, public, or connected feed. If a number is a guess, label it THEORY and do not issue a ticket from it.

## Step 1: market filter (before any signal)
MACD is a trend tool. Its crosses fire constantly in sideways markets and mostly fail there.
- Measure trend strength with ADX(14) and count MACD signal-line crosses over the last 20 candles.
- Choppy (ADX below 20, or 4 or more crosses in 20 candles): skip the symbol entirely.
- Trending (ADX 20 or above, fewer than 4 crosses): only take crosses in the direction of the 50-period moving average slope.
- Write the result on the board in plain words, for example "IWM skipped, choppy market (ADX 14)".

## Step 2: setup rules
- Long: MACD line crosses above the signal line on a completed candle, with price above the 50 MA. Signal candle is that candle.
- Short: MACD line crosses below the signal line on a completed candle, with price below the 50 MA.
- Entry line: the high of the signal candle (long) or its low (short).
- Stop: beyond the most recent swing low (long) or swing high (short).
- Target: the nearest real prior swing level in the trade direction, with the reason. No measured moves.
- **Entry counts only when a completed candle closes through the entry line.** A wick that touches the line and closes back is NOT an entry. Log it as "wick touch, no entry".
- **Minimum reward-to-risk 1.5.** If target distance divided by stop distance is below 1.5, put it on the board as "R:R below 1.5 (x.xx)" and do not write a ticket.
- A close through the stop is always labeled FAILED.

## Order ticket (in this order)
1. Header: symbol, timeframe, MACD settings, session filter, market type from step 1, confluence
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
