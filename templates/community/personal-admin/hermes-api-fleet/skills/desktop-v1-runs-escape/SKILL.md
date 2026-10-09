---
name: desktop-v1-runs-escape
description: "Use when a Grok connector ask to Desktop-primary Hermes dies around ~120s (-32001) — escape via host-local POST /v1/runs; also restarting a gateway from a work order and telling provider failure from host failure. Not a fleet ask path."
---

# Desktop /v1/runs long-job escape

## When
A Grok connector `ask` to Hermes dies around ~120s with tool error `-32001` (or similar timeout) on a **Desktop-primary** host that already has the Hermes HTTP API on localhost.

## What this is / is not
- **Is:** long-job escape for Desktop-primary installs (SSH Relay lane or local API-on-loopback).
- **Is not:** the fleet/controller/identity ask path — those stay Hermes API Fleet over private-net `:8642` only. SSH ask remains forbidden for fleet.

## Steps
1. Confirm Hermes API is up on the host (`API_SERVER_ENABLED`, strong `API_SERVER_KEY`, typically `localhost:8642`).
2. Prefer host-local Hermes `POST http://127.0.0.1:8642/v1/runs` with the live `API_SERVER_KEY` for long AR/merge/tool jobs (proven on Desktop-primary AR/merge).
3. **Body shape (required):** `{"input": "<work order text>"}` — `prompt` / `goal` / `message` alone return 400 Missing `input`. Auth: `Authorization: Bearer $API_SERVER_KEY` and/or `X-API-Key`. Success: HTTP 202 `{"run_id":"run_…","status":"started"}`. Poll: `GET /v1/runs/{run_id}`.
4. From your fleet controller bot when MCP ask flakes: use that host's registered-machine Shell to POST localhost (do not open SSH ask path). Load the key from the host's `~/.hermes/.env` — never echo it.
5. Raise the Grok connector / sidecar timeout locally if short asks still flake near ~120s.
6. Do **not** open an upstream Hermes PR for timeout unless you have a Desktop-hang repro.
7. Never put `API_SERVER_KEY` in the marketplace template, chat, or git — local env / secret manager only.

## Restart a gateway from a work order
- In the `/v1/runs` work order, have the agent send `SIGUSR1` to the launchd-supervised gateway PID and then end its turn. `gateway/run.py` maps `SIGUSR1` to the drain-aware `request_restart(via_service=True)`, the same path as `hermes gateway restart`.
- The run store is in memory, so after the restart the old run id returns **404**. Treat a 404 as "restarted", then check `/health` and start a fresh verify run.

## Provider failure vs host failure
- If runs fail with `Connection error` or "every provider in the fallback chain kept failing over" while `/health` is ok, the host is fine. Test the model provider directly before touching the host.
- A provider usage-limit 429 (for example a token-plan `usage limit reached`) looks exactly like a host fault from the outside.

## Related
- Fleet post-sprint hygiene
- Hermes API Fleet (fleet ask)
- Hermes SSH Relay (Desktop-primary / one-off installer)
