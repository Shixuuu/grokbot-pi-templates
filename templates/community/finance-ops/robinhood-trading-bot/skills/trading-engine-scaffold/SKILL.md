---
name: trading-engine-scaffold
description: "Use when scaffolding a Robinhood-only trading engine with simulation, risk gates, and dry-run — no strategies yet."
---

Use when scaffolding or rebuilding a Robinhood-MCP trading engine without strategies yet.

## Constraints
- Broker: Robinhood MCP only (no IBKR, paid Alpaca, Hostinger for this engine).
- Defaults: simulation; `new_entries_enabled=false`; `broker_writes_enabled=false`.
- No live orders, no credentials in the repo, no strategy/scanner/AI scoring in scaffold phase.
- Repo coding goes to a Cursor cloud agent (existing repo or new Origin repo). Attach any owner handoff/spec as a file.

## Deliverables for scaffold phase
1. Python `src` layout + project config.
2. Disabled-by-default settings with Robinhood adapter binding, configurable first/last 30-minute entry blocks.
3. Durable control state, risk gates, order intents/outbox with idempotency keys, SimulatedBroker, reconciliation stub, SQLite (or documented Postgres later) for control_state, order_intents, outbox, audit_events.
4. CLI `status` and `dry-run-tick` that prove risk can reject a fake intent with writes off.
5. `docs/CURRENT_STATE.md`, `docs/CAPABILITY_MATRIX.md`, README.
6. Tests: writes disabled blocks submit; freeze blocks entries; idempotent intents; live mode rejects unresolved required fields.

## After scaffold
Report PR/branch, test results, and ask whether to merge or start Phase 2 (market data + a single owner-approved strategy profile). Never enable live writes without explicit owner approval of that exact config.
