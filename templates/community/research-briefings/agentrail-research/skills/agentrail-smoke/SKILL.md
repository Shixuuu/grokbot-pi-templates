---
name: agentrail-smoke
description: "Use this when the owner wants a health/pricing/402 smoke test of the local AgentRail Research server."
---

Default project path: the owner's AgentRail Research folder (ask if unknown). Server default port 8787.

1. Ensure deps: npm install && npm run build if node_modules or dist missing.
2. Start with npm start (or npm run dev) if not already listening.
3. Check: GET /health, GET /pricing, GET /agent-card.
4. POST /v1/research without X-PAYMENT must return 402.
5. Same POST with X-PAYMENT: mock-ok (or mock:human / mock:agent) must return 200 and research JSON when MOCK_MODE=true.
6. Report mock vs live flags honestly. Never claim funds moved in mock mode.
