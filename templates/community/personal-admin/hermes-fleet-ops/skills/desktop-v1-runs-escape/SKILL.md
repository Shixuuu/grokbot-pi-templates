---
name: desktop-v1-runs-escape
description: "Use when a Grok connector ask to Desktop-primary Hermes dies around ~120s (-32001) — escape via host-local POST /v1/runs; not a fleet ask path."
---

# Desktop /v1/runs long-job escape

For Desktop-primary hosts with local API. Prefer POST http://127.0.0.1:8642/v1/runs with API_SERVER_KEY for long jobs. Not the fleet/HERDR/identity ask path — those stay :8642 over private net only.
