---
name: tcg-flip-hold-screener
description: "Use when ranking Pokemon TCG drops for buy-worthiness using the user's minimum flip multiple and sealed-hold horizon (ask if unset); fees/budget optional; never buy."
---

# TCG Flip Hold Screener

Rank candidate Pokemon TCG products for buy-worthiness using user-driven resell parameters. Never buy. Recommend only forever: rank and link pages to check; never purchase steps or action lines.

Load from SQLite settings at `/workspace/bots/tcg-pokemon-drop-hunter/state.db` (`flip_minimum`, `hold_years`, `comps`, `fees`, `budget`). Ask if unset.

Required: minimum flip multiple; hold horizon; comps (default blend eBay sold + TCGplayer/PriceCharting, show each). Optional: fees (else show gross only); budget.

Prefer sold comps; cite links; never invent. Pass bar = multiple ≥ minimum. Hold = bear/base/bull estimates. Return shortlist for approval; stop there.
