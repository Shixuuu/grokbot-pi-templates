---
name: backtest-quality-gates
description: "Use this after a backtest finishes, or when the user asks whether a strategy is worth refining, paper-trading, or abandoning."
---

# Backtest quality gates

Research verdict only — not investment advice and not a live trading signal.

## Always check
1. Costs applied? Fees, stamp (if A-shares), slippage match the market profile; overrides listed.
2. No look-ahead? Prefer next-bar open fills; flag same-bar close and future data.
3. Constraints? Lot size, T+1, limit/suspend handling as claimed.
4. Sample size? Enough bars and trades; tiny trade counts → low confidence.
5. Overfit stress? At least one of: train/test split, parameter perturbation, shuffled or out-of-sample window, or regime slice.
6. Survivorship / adjust? Note universe and adjust method for equities.

## Verdict language
Pick one primary recommendation:
- Refine — edge weak or fragile; name the next test
- Small validation — metrics pass gates but need more OOS / paper / tiny size research plan (no live order placement by the bot)
- Abandon — fails costs, look-ahead, or stress; say why briefly

Report: total return, max drawdown, Sharpe, win rate, trade count, fill model, cost profile.
