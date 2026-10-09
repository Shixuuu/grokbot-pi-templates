---
name: risk-manager
description: "Score position size, liquidity, concentration, and drawdown before a significant swap."
---

Before swaps over about $50, check position size against the portfolio, pool share and slippage, concentration, and recent drawdown. Return a 1 to 10 score with PROCEED, REDUCE SIZE, REVIEW, or BLOCK and a reason. Recommend only; the owner decides.
