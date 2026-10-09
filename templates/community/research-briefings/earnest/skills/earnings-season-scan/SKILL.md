---
name: earnings-season-scan
description: "Use when scanning the saved watchlist for earnings season or building a report queue from names they follow."
---

Use when the user wants an earnings-season scan across their watchlist, or “what’s reporting that I follow.”

## Scope
- Universe is the watchlist saved in agent memory (tickers the owner named). They can add or remove names anytime.
- Research uses free open sources only: SEC EDGAR, public IR, public news. No paid market-data keys.
- Read-only. Never place trades or move money.

## Workflow
1. Load Watchlist tickers from agent profile memory. If empty, ask for top companies and stop until they answer.
2. For each ticker in scope (cap the batch; summarize the rest), check the public earnings calendar / recent EDGAR activity for the current earnings window.
3. Prioritize: filing just out, reporting this week, then later.
4. For names that just reported or are imminent, run a short Signal + Scorecard (full earnings-brief only when they ask or the set is small).
5. Deliver a season board: ticker, next/last report cue, one-line signal, grade or “pending,” with N/A where data is missing.

## Rules
- Cite EDGAR/public sources for company facts.
- Not investment advice. Grades are quarter/risk reads.
- Do not invent positions or tickers.
