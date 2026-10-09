---
name: can-slim-ticker-analysis
description: "Use when analyzing a stock ticker with IBD-style CAN SLIM at basic, intermediate, or advanced depth, including market direction, buy/sell rules, VCP/pocket-pivot setup quality, and a go/no-go verdict."
---

# CAN SLIM ticker analysis

Run an IBD-style CAN SLIM case on one ticker. Do not place trades unless the owner has explicitly authorized trading in a specific account. Do not invent proprietary IBD Composite, EPS, RS, or SMR ratings as if they came from a paid subscription.

## Depth
Ask only if the owner did not name a depth. Default is Intermediate.
- Basic: fast pass/fail on current quarterly EPS growth (C) and whether it is accelerating, annual EPS + ROE (A), market direction (M), plus a price/volume snapshot. One-screen verdict.
- Intermediate (default): full 7-letter CAN SLIM with institutional ownership, technical positioning, volume context, and public-data proxy ratings.
- Advanced / Full: Intermediate plus multi-year trends, float and short interest, peer/industry leadership, precise market-timing notes (follow-through day, distribution days), an actionable plan (entry zone, 7-8% stop, position-sizing example), catalysts, and bull/base/bear scenarios.

## Data
1. Pull public data first (Yahoo Finance, Finviz, or equivalent, or a connected broker). Cite the source and as-of time.
2. Never invent prices, EPS, shares outstanding, or ratings. If a field is missing, say so and use a labeled proxy or skip that letter.
3. Proprietary IBD Composite / EPS / RS / SMR need a paid IBD subscription: state that, then give the closest public proxy and label it.
4. A concentrated employer stock gets the same rules, no extra leniency.
5. Always verify the company name behind a ticker before scoring.

## CAN SLIM letters
Score each letter pass / fail / mixed with a one-line why and the number used.
- C: current quarterly EPS growth >=25% and preferably accelerating vs the prior quarter. Revenue growth >=20% YoY supports it. Two-quarter deceleration is a danger sign.
- A: annual EPS growth and high, stable ROE.
- N: new product, management, or catalyst, or a new price high on volume.
- S: supply/demand: float, volume confirmation on up days, short interest.
- L: leader, not laggard: relative strength vs the market and industry peers (proxy >=80, ideally >=90).
- I: institutional sponsorship: quality and trend, not just headline %.
- M: market direction: major indexes in an uptrend; note follow-through days and distribution days. A poor M can fail an otherwise good stock.

## Technical health filter (public proxies)
- Price above the 50-day MA/EMA
- 10-day EMA above the 20-day EMA
- Within ~15-20% of the 52-week high
- Prefer names more than ~70% above the 52-week low
Label any RS rating as a proxy (relative performance vs SPY, relative volume, distance from highs).

## Setup quality (Minervini / Kova overlay)
Screener narrowing when scanning: price above $10, average daily range above ~4%, RS proxy above 90 when available, above the 50-day EMA, 10 EMA above 20 EMA, more than ~70% above the 52-week low, then chart passes: clean cup-with-handle / flat base / VCP near a 10/20 EMA cross or late-stage contraction. Candidates are not setups; no setup day means no buy bias.

VCP needs three contractions together: price pullbacks each shallower than the last, late-stage volume well below the 50-day average, and shrinking intraday ranges. Pivot = consolidation high. Buy trigger is the pivot plus ~$0.10 with breakout-day volume 40-50%+ above the 50-day average. Buy zone is pivot to ~5% above; beyond that do not chase.

Pocket pivot (early entry): up-day volume exceeds the highest-volume down day of the prior ~10 sessions.

## Risk / sell / add rules (state in write-ups)
- Hard stop 7-8% from buy point; prefer tighter (under pivot, entry-day low, 21 EMA, or ~2x ATR).
- Time stop: little progress after 2-3 weeks = exit bias.
- Heavy-volume close under pivot = breakdown; light-volume pierce that closes back above = possible shakeout.
- Never average down. Pyramid winners only. Cap any single name at ~25% of capital in examples.
- Never add more than 5% above pivot, or while the market is weakening.
- Offensive sells: 8-week/20% rule, climax runs, churning. Defensive sells: heavy-volume break of the 50-day, trendline break, 5+ distribution days in 4-5 weeks, earnings gap-down.
- Exposure: bull market up to 4-5 leaders at <=25% each; correction means total exposure under ~30%.

## Output shape
Keep it scannable: snapshot (price, change, volume vs average, as-of), CAN SLIM breakdown for the chosen depth, market context, setup note (VCP / pocket pivot / none, distance from high, MA stack), verdict (buy-setup / watch / avoid) with the single strongest reason, pros/cons/risks, and next steps (what to watch). Basic can be shorter; Advanced adds the trading-plan block and scenarios.

## Anti-patterns
No raw data dumps, no pretending paid ratings were fetched, no relaxing the 7-8% rule or C/A thresholds for a favorite ticker, no conflating a screener candidate with a live setup.
