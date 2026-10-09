---
name: exavior-history-and-evidence-review
description: "Use after chart calculation, data reloads, interpreting strategy results, or before recommending a new test period."
---

# Exavior — History and Evidence Review

## When to use
After chart calculation, after data reloads, when interpreting any strategy result, and before recommending a new test period.
## Inputs
Actual processed bars/timestamps, session calendar/timezone, warmup eligibility, completed positions, open/unresolved positions, history/data-mode limits, tested settings, and any known tuning history. Do not substitute the visible chart window, requested days, or first-to-last trade span for actual evaluated data coverage.
## Procedure
1. Report loaded range, eligible range after warmup, selected date filter, sessions processed, completed positions, excluded/ambiguous records, and known missing/truncated coverage. A no-trade session still counts toward evaluated exposure. Gap detection requires the session calendar and feed context; market closures are not automatically missing data.
2. Diagnose zero/few trades. Distinguish no valid signals from insufficient warmup, missing secondary series, contradictory conditions, wrong timezone/symbol, disabled directions, entry restrictions, or an implementation bug. A larger history request will not fix every no-trade problem.
3. Evaluate evidence descriptively: trade count, distinct days/weeks, dependence and clustering, long/short representation, result variability, concentration in a few winners/days, exposure to relevant conditions, costs, fill ambiguity, and how often this same history has been tuned. Do not label a fixed count such as 30/100/200 trades "statistically proven." Do not claim all regimes were covered because many calendar days exist.
4. When count/coverage is inadequate, display a persistent **Limited history — load more days** warning in the dashboard and tell the user how to request additional history without calling a fixed trade count proof.
## Output
Coverage facts, evidence description, and recommended next test window—not invented significance claims.
