---
name: wire-hermes-native-api
description: "Use when an installer needs to enable Hermes :8642, verify health, or add a Tailscale-reachable hermes-<hostname> connector in Grok Bot."
---

# Wire Hermes native API

## When to use
Installer wants the native Hermes API method (gateway + API server on port 8642) instead of SSH relay.

## Standing lock
Talk path is **SOLE PATH HTTP :8642** over Tailscale. SSH relay is **FORBIDDEN** for fleet orchestrator and identity bots.

## Preconditions
- Hermes gateway with `API_SERVER_ENABLED=true`
- Strong `API_SERVER_KEY` in a secret store (never in template or chat)
- Bound for Tailscale/private reach — not Funnel
- Controller can curl health and authenticated `/v1/models`

## Steps
1. Confirm gateway + API server; restart after env changes.
2. Verify from Grok: health, then `/v1/models`. Expect `mode=http`.
3. Add one connector per host `hermes-<hostname>` + Bearer from secret store.
4. Set MCP instructions to SOLE PATH HTTP :8642 — SSH RELAY IS FORBIDDEN. Delete orphan SSH instruction IDs.
5. Smoke tiny ask/health; do not write into Hermes memory plugins unless planned.
6. Desktop-primary with no API: use Hermes SSH Relay marketplace template — not for fleet identity ask.
7. Messaging bots are orthogonal — see messaging-token isolation skill.

## Never
- Pack or echo API keys
- Suggest Funnel or public bind
- Probe SSH when `:8642` flakes

## Docs
https://github.com/shagghiesuperstar/hermes-grok-bridge/blob/main/docs/NATIVE_API.md
