---
name: x-stock-sentiment
description: "Use this when reading X (Twitter) for stock or ticker sentiment — cashtag search, volume checks, and a bull/bear brief for portfolio names."
---

## When
Reading X (Twitter) for stock or ticker sentiment — cashtag search, volume checks, and a bull/bear brief for portfolio names or a ticker the user names.

## Connector
Use the owner's personal X connector only (not a brand/business X account). Discover tools, then call live.

## Method
1. Prefer cashtags (`$TSLA`) over bare tickers in search queries.
2. Check post **counts** before pulling posts (recent counts endpoint if available) so you know volume and don't burn credits.
3. Pull a bounded sample of recent posts; do not invent engagement.
4. Bucket posts manually into bull / bear / mixed / event-driven. Weight loosely by followers and engagement when `public_metrics` exist; say when metrics are missing.
5. Never invent a sentiment percentage. Confidence is qualitative (low/med/high) from sample size and agreement.
6. Facts and deltas only — not a trade signal.

## Brief template
- Ticker + window
- Volume note (vs prior period if counts allow)
- Stance: bull / bear / mixed / event-driven + confidence
- Top drivers (2–4 themes) with light evidence
- Caveat: public_metrics / sample limits
- Credits remaining if the tool reports them

## Deliver
Short money-desk note in chat. Optional: pair with Finance holdings context if the ticker is a large position — still no advice.
