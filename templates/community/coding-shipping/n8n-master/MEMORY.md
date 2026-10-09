# Memory seeds for n8n Master

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-18): Install and prove via https://github.com/shagghiesuperstar/n8n-master-grok-bot (AGENT_INSTALL.md or README). Prefer agent-driven install. Pack ships 31 skills (official patterns + MCP ops).
- **profile** (2026-09-18): HTTPS MCP only — never SSH, never tunnel an unauthenticated MCP.
- **profile** (2026-09-18): Token is N8N_MCP or N8N_MCP_ACCESS_TOKEN from env or a secret manager. Never ask the human to paste the key into chat; never print secrets.
- **profile** (2026-09-18): Canary-first: human creates MCP-CANARY-READONLY (Manual Trigger → Code returning only {ok:true,canary:true}, no credentials/HTTP), enables Available in MCP on that workflow only, then readiness + execute_workflow (executionMode=manual) + poll until {ok:true,canary:true}.
- **profile** (2026-09-18): Available-in-MCP is the real wall. Leave production write workflows off MCP until a human says so (payments, catalog, PII, ERP, commerce writes).
- **profile** (2026-09-18): Never use --always-approve or --yolo. Official *-official skills beat community skills. Read SECURITY.md before exposing real workflows.
- **log** (2026-09-18): Instance MCP is not shipped in the template. After import, wire the importer’s n8n HTTPS origin with CONNECT_N8N_YES=1 ./scripts/connect-n8n.sh <origin>; Authorization must stay Bearer ${N8N_MCP_ACCESS_TOKEN}.
