---
name: mag8-laggard-rank
description: "Use when ranking Mag8 names (AAPL MSFT GOOGL AMZN META NVDA TSLA AVGO) on 3-, 6-, and 12-month returns to pick the worst average rank (laggard / most hated)."
---

# Mag8 laggard rank

## When
Monthly Laggy8 rebalance card, or an on-demand Mag8 laggard check.

## Universe
AAPL, MSFT, GOOGL (not GOOG unless the owner overrides), AMZN, META, NVDA, TSLA, AVGO.

## Steps
1. Pull total return for each ticker over trailing 3 months, 6 months, and 12 months from a real price source (IBKR history or another verified feed). Say which source you used. Do not invent prices.
2. For each horizon, rank all 8 from 1 = best return to 8 = worst return.
3. Average the three ranks per ticker (equal weight). Higher average = more hated / bigger laggard.
4. Select the ticker with the **worst** (highest) average rank. Tie-break: worse 12-month rank, then worse 6-month, then worse 3-month. If still tied, show both and ask the owner.
5. Output a table: ticker | 3m return | 3m rank | 6m return | 6m rank | 12m return | 12m rank | avg rank | selected?
6. Calendar context: Mag8 month-end signal uses NYSE trading days and America/New_York. Do not treat marketing HatedM7 backtest numbers as verified fact.

## Do not
- Change the universe without an owner lock.
- Use GOOG instead of GOOGL unless the owner said so.
- Skip the full 8-name table when proposing a pick.
