---
name: polymarket-survival-loop
description: "Use when running the Polymarket US scan-price-size cycle on a schedule or on demand. After a candidate clears 8 points, the placing agent may run the buy skill. Hourly at most. Never start a 10-minute loop."
---

# Polymarket survival loop

Scan the **Polymarket US** book, price only what you can defend, and size a candidate. Do not invent a fair value. If a name clears the bar, the placing agent may run the Polymarket US buy skill. Do not wait for YES. Hourly at most. Never start a 10-minute buy loop.

If nothing clears, stay silent on routine fires.

Venue is polymarket.us. Public data: https://gateway.polymarket.us. International gamma/CLOB is a cross-check only, never the trade venue. No VPN. Do not open a login or request box help.

Scan-only agents never call the authenticated place/cancel API. Only the placing agent runs the buy skill.

## Hard rules

- Candidate only when |fair − implied| > 8 percentage points **after** spread (use Yes and No from marketSides, not the unordered outcomePrices array).
- Never invent a fair value. Need a public reference (spot + remaining-time distribution, official scoreboard, NOAA, published poll aggregator). Skip if the vol/model assumption would change the side.
- Kelly, then cap at **6% of buyingPower**. Skip size under about $2. One new candidate per cycle.
- If buying power is $0, stop, tell the user, and do not create or resume a 10-minute buy loop.
- Never print or send the API secret.
- Same edge already traded or pinged in the last hour with no real price change: stay quiet.
- Do not start a 10-minute scan or any sub-hourly auto-buy loop.

## 1. State

Read local Polymarket state (buyingPowerUsd / bankrollUsd, openPositions). Write lastScanAt every run.

## 2. Scan

GET https://gateway.polymarket.us/v1/markets?active=true&closed=false&limit=100&offset=…

Paginate. Keep parseable Yes/No from marketSides. Snapshot scans to a local scans folder.

## 3. Fair value

- **Crypto thresholds**: Coinbase/Kraken/Bitstamp spot plus a stated remaining-time distribution (realized vol from public OHLC). First-passage for hit / cross markets. If 30d vs crash vol flips the trade, skip.
- **Sports**: official scoreboard or a public moneyline. If a scoreboard host returns 403, skip, do not guess.
- **Politics / culture / IPO / Fed**: only with a public aggregator or official print. No gut.

Implied = Yes (or No) touch. Edge in percentage points toward the side you would buy.

## 4. Size (candidate only)

Buying Yes at implied p, fair f: edge f − p, odds (1 − p) / p, Kelly edge / odds, size min(0.06, max(0, Kelly)) * buyingPower.

If it still clears and this is the placing agent, run the buy skill with market slug, side, fair, implied, and size. Do not POST the order from this skill. Scan-only agents stop at the card.
