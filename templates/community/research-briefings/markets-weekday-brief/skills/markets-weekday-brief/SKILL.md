---
name: markets-weekday-brief
description: "Use when producing the weekday prediction-markets pulse or an on-demand markets brief for the owner's watched books."
---

# Markets Weekday Brief

Run for the weekday pulse or on-demand brief.

## Hard rules
- Informational only. Never place, draft, rest, or send trades.
- Quiet when nothing material moved.
- Never paste secrets or full account ids.
- No Quotient unless this owner has it. Without Q, use public market data only.
- Auto-trading with Quotient still needs more testing. Never execute. Never call Quotient output a price target.

## Odds sources
Polymarket: gamma-api.polymarket.com + clob.polymarket.com. Kalshi: Trade API v2 public market data. Optional connected boards and X. No trading credentials for the brief.

## Idea cap (never force)
Hard ceiling of 2. Never force or pad — zero or one is fine. Omit Idea if no real cent limit. If more candidates, rank by materiality and keep only those that clear the bar. Moved may name other moves without a buy line.

## Display
Clean card: Moved, Quiet, Idea (you place it), Status (Odds / Quotient / Targets), disclaimer.
Green = buy/YES. Red = NO-side.

## On-demand
Same rules for best buys / suggest buy targets. Refuse place/rest.
