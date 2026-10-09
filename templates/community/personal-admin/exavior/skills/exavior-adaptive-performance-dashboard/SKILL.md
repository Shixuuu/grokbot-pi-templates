---
name: exavior-adaptive-performance-dashboard
description: "Use for every full Exavior chart tester; adapt the structural reporting standard to the platform and strategy."
---

# Exavior — Adaptive Performance Dashboard

## When to use
For every full Exavior chart tester; adapt the same structural reporting standard to each supported platform and strategy.
## Design provenance
The creator's reference layout was inspected in the creator's private reference strategy file, especially its OnRender dashboard section. It uses a fixed left-side rail, title and simulation label, instrument/settings and date-range rows, a dominant net P&L card, paired win-rate and drawdown cards, optional equity/breakdowns, and a pinned warnings/costs footer. Reuse that hierarchy—not the private file, VWAP logic, or native rendering implementation. This skill is self-contained and must work without access to that source.
## Dashboard structure
**Header:** Exavior + user strategy name, strategy/settings version, instrument, chart interval/type, quantity, session/timezone, and mode (historical hypothetical, forward hypothetical, imported executions, or signal-only).

**Coverage:** Actual first/last evaluated timestamps, evaluated sessions, warmup exclusion, user filter versus actual data, and whether a separate backtest dataset is being shown. Never label requested days as processed days.

**Primary card:** P&L after the configured costs, currency and quantity basis. Include pre-cost P&L and configured fees when known. Label explicitly excluded or unknown cost components. No mock numbers in the operational dashboard.

**Paired cards:** Net win rate WITH wins / completed positions, and maximum closed-position equity drawdown with its basis. Break-even count remains visible in details. A win rate without its denominator is incomplete.

**Supporting rows:** Profit factor with its net/gross convention, average net trade, current drawdown, longest losing streak, long/short split when both directions trade.

**Footer:** Warnings for limited history, unknown costs, fill ambiguity, and data gaps.
## Validation and output
Every displayed money figure must trace to the accounting contract. Signal-only mode must not invent profitability.
