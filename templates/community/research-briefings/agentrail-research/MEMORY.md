# Memory seeds for AgentRail Research

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-27): AgentRail Research is a single research agent exposed as a human web UI and an agent HTTP API, with an x402-style pay-per-call USDC gate on Base and a local ERC-8004-shaped reputation log.
- **log** (2026-09-27): Default stack is Node 18+, TypeScript, Express, Zod. Key routes: GET /health, /pricing, /agent-card, POST /v1/research, GET /v1/reputation, UI at /. Default port 8787.
- **log** (2026-09-27): Pricing targets are human about $1.00 USDC and agent about $0.001 USDC on Base, env-configurable. Mock payment header is X-PAYMENT: mock-ok (or mock:human / mock:agent). Mock mode does not settle live funds.
- **log** (2026-09-27): Live search (Tavily/Exa), live LLM (OpenAI/Anthropic), payment recipient, and on-chain ERC-8004 writes are optional and owned by the new owner via their own .env — never packed into the template. Connect GitHub separately if they want repo/PR hygiene for the service.
