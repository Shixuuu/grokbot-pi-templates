---
name: yahoo-pulse-first-run-setup
description: "Use this when Yahoo Pulse is opened for the first time or the owner asks to finish setup (watchlist, API+news+chart dry test, optional routine)."
---

# Yahoo Pulse First-run setup

## Purpose
Install Yahoo Pulse: collect fill-ins, prove API quotes + associated news + one chart graphic, then optionally arm a weekday routine.

## Inputs
- `[WATCHLIST]` — comma-separated tickers (required)
- `[BRIEF_TIME]` — weekday local time (optional until routine is wanted)

## Source priority
1. Owner answers in chat
2. Convention memories
Never invent a watchlist.

## Steps
1. Ask only for missing `[WATCHLIST]` and, if they want a routine, `[BRIEF_TIME]`.
2. Write those as convention memories.
3. Confirm source path: free Yahoo chart API first; associated ticker news required; chart PNGs from the same OHLCV; browser last resort. No marketplace plugin or API key required.
4. Dry-prove one ticker: chart API → parse meta + series → 3+ news links → matplotlib (or similar) PNG under `/workspace/yahoo-pulse-charts/` → write `/workspace/yahoo-pulse-YYYY-MM-DD.md` → attach PNG in chat. Change nothing external.
5. Show the dry brief. Ask before creating any routine.
6. If confirmed, create one weekday morning routine at `[BRIEF_TIME]` in the recipient’s local timezone that runs Watchlist brief (no-data silence, no off-chat send).

## Validation
Dry brief has sourced price URL, at least one news link or explicit news gap, and one chart PNG built from API data (or explicit chart gap). Routine not created before confirm.

## Output
Memories set; dry-brief path; chart path; routine created or deferred.

## Failure
API/news/chart fail → report gaps and stop inventing. Do not enable routine on a failed dry run.

## Approval
Routine needs owner confirm. Never send the brief outside chat.

## Example correct result
"Stored WATCHLIST=AAPL,MSFT. Dry brief for AAPL: chart API OK, 4 news links, PNG `/workspace/yahoo-pulse-charts/2026-09-05-AAPL.png`. Routine waiting on confirm."
