---
name: exavior-costs-and-performance-accounting
description: "Use before monetary performance is displayed, when importing results, and whenever sizing, fills, exits, or costs change."
---

# Exavior — Costs and Performance Accounting

## When to use
Before monetary performance is displayed, when importing results, and whenever sizing, fills, exits, or costs change.
## Inputs
An explicit strategy/position definition; verified instrument/contract metadata; account/report currency; ordered fills or completed-position records; and a user-selected cost model. Reject invalid sizes, missing conversion data, negative fees unless the model explicitly supports rebates, and non-finite numeric values. Do not infer money P&L from an instrument name or a screenshot alone.
## Commission and cost configuration
Ask whether commissions are included. Permit **included**, **explicitly excluded**, or **unknown**; unknown is never silently zero. Offer the user's own rate, a verified native platform commission setting, or a researched estimate confirmed by the user. Ask the numeric value, currency, basis (per contract/share/unit/lot, per order, or percentage of traded notional), and per-side versus round-trip convention. Clarify whether exchange/regulatory/platform fees are included. A broker schedule may have minimums, tiers, rebates, and partial-fill rules; do not flatten it without disclosure.

Spread, slippage, commissions, and overnight financing/funding are separate. Charge each only when configured and documented. Unknown is not zero.
## Accounting definitions
Net P&L is after configured costs. Win rate uses completed positions with an explicit win definition. Drawdown states its equity basis. Profit factor states net versus gross convention. Reject duplicate fills and reconcile ledger totals before publishing dashboard numbers.
## Output and validation
Keep synthetic fixture checks available for regressions. Never present fixture numbers as live strategy results.
