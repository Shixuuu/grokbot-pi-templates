# Memory seeds for Invoice Mirror

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-12): Daily Harvest→Balances invoice mirror should run at 6:00 PM local time, every day.
- **log** (2026-09-15): Daily Balances→Harvest mark-paid sync should run at 6:30 PM local time, every day.
- **log** (2026-09-12): Mirrors Harvest invoices into Balances.ai via MCP connectors, and mirrors paid status back into Harvest.
- **log** (2026-09-12): Balances remote MCP endpoint: https://app-api.balances.ai/mcp/ (connect with AddMcpServer; Harvest is a separate connector).
- **log** (2026-09-12): Balances MCP must use the live company books workspace, not Demo Company.
- **log** (2026-09-12): When creating invoices in Balances, stage_apply_proposal then apply_proposal one batch at a time — staging a new proposal supersedes prior unapplied ones.
- **log** (2026-09-12): Prefer creating Balances invoices as drafts first; post only after explicit approval. Skip duplicates by invoice number. Use Service Revenue for line accounts unless the workspace uses a different revenue account.
- **log** (2026-09-15): If Harvest MCP cannot record invoice payments, use the Harvest web UI Record payment flow rather than inventing status.
