---
name: monarch-pulse
description: "Use for Monarch balances and recent spend. Show real charges in tables (date, merchant, amount, masked account) — not count-only when reporting charges."
---

# Monarch Pulse

Read-only household pulse: account balances + recent transactions.

## How to run

```bash
cd /workspace/monarch-manager/client
./mm accounts
./mm recent --days 3 --limit 40
# or quiet monitor:
../scripts/monitor_pulse.py --quiet --days 2
```

Client helpers: `list_accounts_masked()`, `recent_transactions(days=…)`,
`status_summary()`.

## Reporting rules

When the user asks about charges / spend / "what hit":

- Show a **table**: date | merchant | amount | category | masked account
- Do **not** replace the table with count-only summaries
- Quiet monitors may lead with counts, then still list uncategorized + large rows

Masked account format: `Display Name ····1234` (last four only).

## Quiet vs chatty

- **Quiet** (routines): one-line `pulse ok …` plus up to ~8 uncategorized and
  large (`|amount| >= 250`) rows.
- **Chatty**: full account list + recent window table.

## Safety

- Read-only by default.
- No money movement; no budget/account edits; no hide/delete.
- Never print tokens, sessions, or full account numbers.
