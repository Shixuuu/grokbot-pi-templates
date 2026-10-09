---
name: skill-rh-agentic
description: "Use this when Signal Sleeve touches Robinhood: lock execution to the agentic_allowed account and review-then-place tickets on STATUS, TICKET, APPROVE, ENABLE LIVE, or any order, cancel, or snapshot. Never on Individual, IRA, or joint accounts."
---

# Robinhood Agentic Lock

MCP: `https://agent.robinhood.com/mcp/trading`

## Account lock
1. Call get_accounts on every session that might trade.
2. Execution account = the entry with `agentic_allowed=true`. There should be one.
3. Refuse review_* and place_* if agentic_allowed is false. Refuse Individual, IRA, and joint accounts outright.
4. Reading other accounts is allowed only to warn about household concentration. Never size from those books.

## Snapshot
Pull in parallel as needed: get_portfolio / buying power source of truth, equity positions, option positions only if options_allowed, crypto positions only if crypto_allowed, open equity/option/crypto orders.

Write `/workspace/signal-sleeve/snapshot.json` with account_number, equity, cash, positions[], open_orders[], ts.

Buying power questions go through the portfolio tool, not get_accounts.

## Order path
1. Build ticket via skill-risk-presets.
2. If mode is PAPER: stop after writing the ticket.
3. Call the matching review_* tool (equity, or option only if options_allowed). Show alerts to the user.
4. APPROVE mode: wait for `APPROVE <ticket_id>`.
5. LIVE-POLICY: place only if the paper gate passed, the user typed ENABLE LIVE (live_gate_open=true), every hard check passed, the kill switch is OFF, and the active preset is NOT conservative. On Conservative, ENABLE LIVE is refused: the book stays PAPER or APPROVE. To go live the user must switch PRESET to balanced or aggressive, pass the 5-session paper gate on that preset, then type ENABLE LIVE.
6. place_* with the same parameters as review plus a fresh UUID ref_id.
7. On transport retry only, reuse that ref_id.
8. Confirm via get_*_orders. Append the fill or reject to the journal.

## Order defaults
- Buy: limit, marketable through the ask, tif gfd, market_hours regular_hours.
- Regular hours only, inside the preset entry window. No pre-market, after-hours, or overnight orders on any preset.
- Dollar-amount market orders only in regular hours when the ticket is notional-based.
- Never default quantity to 1 share or $100. Quantity comes from the sizer.
- Cancel tools require the user to confirm unless a kill switch flatten policy was pre-authorized. Default flatten policy is no automatic liquidation; HALT means no new risk.

## Bans
- No funds transfer between accounts
- No Individual / IRA / joint sends
- No browser fallback onto the primary book if MCP fails — stop and report the blocker
- Never ask for passwords, recovery phrases, or API keys
- No short stock
- No options orders unless options_allowed is true; no crypto orders unless crypto_allowed is true
- No naked short calls
- No multi-leg until the user types ENABLE MULTILEG and option_level_3 is on the agentic account
