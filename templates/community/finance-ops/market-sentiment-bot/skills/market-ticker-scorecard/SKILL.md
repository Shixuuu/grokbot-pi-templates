---
name: market-ticker-scorecard
description: "Use when the user asks for a market overall scorecard, a custom ticker score, or says redo/ping on this scorecard bot — exact print format, pillars, caps, and ticker flow."
---

# Market + Ticker Scorecard

## Run mode
Run a scorecard only on request, or on a user-provided schedule. If no schedule is set, run only when asked.

## Build line
When a run starts, print one line, then calculate:
`Composing the scorecards now — weighting the tape, the macro, and the quieter pressures underneath.`
Do not narrate the math after that. Print the card when ready.

## Role
Score US risk assets on 1.0–10.0. 10.0 = extremely bullish for that target; 5.0 = neutral; 1.0 = extremely bearish. Unless the target is a hedge (TLT, GLD, USD, etc.), bullish means equity risk-on.

## Output style
- Each score gets at most 1–2 short sentences of reason. Nothing else under that score.
- Blank line between scores.
- Do not print a Confidence line.
- Do not print extra labels, disclaimers, or method notes unless asked.
- No essays. No “on the other hand.”
- After the market card, ask: Add a ticker for a custom score?
- If they give a ticker, print the custom card.
- Missing data: do not invent. Drop the input, renormalize weights, keep the reason to what you actually used.
- Never use X/Twitter for this card.

## Shared math
- Clip every pillar and overall to [1.0, 10.0]. Print one decimal.
- Prefer 3-year percentile for levels; z-score / short-window change for impulses.
- Higher bullish: `score = 1 + 9 * percentile`. Higher bearish: `score = 1 + 9 * (1 - percentile)`.
- Default pillar: `0.55 * level + 0.45 * 20-session impulse`. Geo: `0.35 * structural + 0.65 * confirmation` (gold/defense vs SPX 10d).
- Daily move caps: normal ±1.0 vs prior; Geo ±1.5.
- One input, one pillar. VIX is NOT a pillar input — only an Overall circuit breaker.
- Skip missing data. Never fabricate.

## Pillar ownership
- MACRO: growth, labor, inflation trend, PMIs. Not yields, Fed BS, VIX, oil.
- GEO: war/sanctions/chokepoint; confirm with gold vs SPX and defense vs SPX. Not VIX, DXY, WTI.
- OIL: WTI/Brent level, 20d change, 20d vol, diesel. Equity lens unless energy producer/hedge ticker.
- LIQUIDITY: 10y, curve, credit, dollar, Fed/TGA/RRP, MOVE. Not CPI/PCE, GDP.
- EARNINGS: revisions, estimate changes, breadth, beat/guide. Valuation is a CAP only.

## Market pillars
1) Macro: 25% GDPNow/GDP QoQ; 20% U 3m change (spike worse); 25% core inflation 3m ann vs 2.5%; 20% PMI level+3m; 10% retail/real consumer.
2) Geo: structural starts 7.0; chokepoint −3; great-power strike −2; systemic sanctions −1.5; durable de-escalation +1.5; clip [1,10]. Confirmation 65%: gold/defense 10d vs SPX. If gold and defense are NOT leading, do not let a headline sit at 2.
3) Oil (equity tax): 40% WTI 3y pctile (high=low score); 35% 20d % (spike worse); 25% 20d vol (high worse). Demand-crash: if WTI ≤15th pctile AND Liquidity ≤4.0 → Oil = 0.5*raw + 0.5*4.0.
4) Liquidity: 25% 10y level+20d; 20% HY OAS level+20d; 15% MOVE; 15% DXY 20d; 15% Fed BS+TGA+RRP 4w cash proxy; 10% 2s10s. Caps: 10y≥5% and up on week → ≤4.5; HY OAS +1σ in 10 sessions → ≤4.0; yields up + dollar up + credit wider → ≤3.0.
5) Earnings (default SPX): 30% 4w FY1 breadth; 25% 4w FY1 EPS %; 20% % sectors positive 4w; 15% NTM YoY growth; 10% beat/guide in window. Caps: NTM PE >90th of 10y AND revisions ≤0 → ≤6.0; cap-weight up / equal-weight down → −1.0.

## Market Overall
- Base: 0.20 Macro + 0.10 Geo + 0.15 Oil + 0.30 Liquidity + 0.25 Earnings
- Tight money (Liquidity ≤3.5 OR 10y≥5% rising): 0.15 / 0.10 / 0.15 / 0.40 / 0.20
- Oil/war (Geo ≤3.0 AND Oil ≤3.5): raise Geo+Oil combined to 0.35 from Macro and Earnings
- Circuits: VIX>28 or VIX +40% in 5d → Overall ≤5.0; Liquidity ≤2.5 → Overall ≤4.0; unless all five ≥6.5 → Overall ≤7.5

## Market print (exact)
```
Market Overall Scorecard  x.x/10
One or two sentences.

Macro Environment     x.x/10
One or two sentences.

Geopolitical          x.x/10
One or two sentences.

Oil                   x.x/10
One or two sentences.

Money Liquidity       x.x/10
One or two sentences.

Earnings Momentum     x.x/10
One or two sentences.

Add a ticker for a custom score?
```

## Ticker flow
Classify first. Reweight market pillars for bucket. Setup from name fundamentals. Tape from price/RS. Custom = 0.35 Market-beta + 0.40 Setup + 0.25 Tape. If revisions unavailable: 0.50 / 0.15 / 0.35. Tape≤3 and Setup≥7 → Custom≤6.5; Tape≥8 and Setup≤3 → Custom≤6.0. Hedges (TLT/GLD): VIX-up and equity Liquidity-down can raise the ticker score.

Buckets and market-beta weights: megacap/semis/QQQ 0.10/0.10/0.10/0.40/0.30; cyclical 0.30/0.10/0.15/0.25/0.20; energy producer Oil_flipped=11−Oil then 0.15/0.15/0.40/0.15/0.15; energy consumer keep Oil 0.20/0.10/0.30/0.20/0.20; banks Bank-Liquidity (credit tighter better, steepening better, 10y+credit blowout worse) 0.20/0.05/0.05/0.40/0.30; IWM/HY 0.20/0.10/0.10/0.45/0.15 and if market Liquidity≤3.5 Custom≤4.5; defensive 0.15/0.10/0.15/0.30/0.30; gold/miners 0.10/0.30/0.10/0.35*invert(real-yield)/0.15; TLT 0.20*(11−Macro)+0.10 Geo+0.10 Oil+0.50 Bond-Liquidity+0.10*(11−Earnings).

Setup: real fundamentals only; idiosyncratic stack from 7.0. Tape: 20d/60d vs sector, vs 50d/200d, vol, 20d high/low. Drivers: exactly 3 lines, ranked.

## Ticker print (exact)
```
TICKER  x.x/10
One or two sentences.

Market beta     x.x/10
One or two sentences.

Setup           x.x/10
One or two sentences.

Tape            x.x/10
One or two sentences.

Most likely drivers
1. ...
2. ...
3. ...

Another ticker?
```

## Style
Be a scorecard, not a newsletter. Binding caps go inside the 1–2 sentence reason for that score — no separate Watch line. Do not give NVDA and XOM the same Oil sign. Method on request: 8 lines max; dump full spec only if they ask for the spec.
