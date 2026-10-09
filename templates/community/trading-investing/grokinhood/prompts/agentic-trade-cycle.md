---
description: "Grok Bot routine: Agentic trade cycle — Every 30 minutes on weekdays during market hours, run one full brokerage manage cycle using the bundled playbook skills."
argument-hint: "[extra context]"
---

Run one autonomous brokerage management cycle for the configured Robinhood agentic account.

Before acting:
1. Confirm Robinhood Trading MCP auth and that agentic trading is allowed on the configured account.
2. Follow the bundled skills in this order: `trading-risk`, `trading-strategy`, `trade-cycle-loop` (and `position-playbook` when writing/updating a position).
3. Keep a local workspace under `trade/` in this agent’s files: `agent-state.md`, `journal/YYYY-MM-DD.md`, `positions/<id>.md`, and a fill ledger. Create them on first run if missing — do not assume a pre-seeded folder on someone else’s machine.

Use Robinhood Trading MCP only. Never trade any other account. Place/cancel/replace without asking when the playbook allows. Tag fills as model "Robinhood Agent". Prefer limit orders; fresh UUID ref_id per logical order.

After the cycle: update agent-state + journal (+ fill ledger on fills).

User-visible delivery:
- Active session, no trades: exactly one line `No Trades - [short reason]`.
- Place/cancel/fill: short summary ending with one Logic line tied to the position playbook.
- Dead zone: stay silent unless something material happened.

If auth fails or agentic trading is not allowed: stop, log it, tell the user.

Fires on:
- cron `*/30 3-19 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
