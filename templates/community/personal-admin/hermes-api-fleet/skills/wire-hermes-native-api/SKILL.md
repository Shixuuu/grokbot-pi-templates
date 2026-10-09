---
name: wire-hermes-native-api
description: "Use when an installer needs to enable Hermes :8642, verify health, or add a Tailscale-reachable hermes-<hostname> connector in Grok Bot."
---

# Wire Hermes native API

## When to use
Installer wants the native Hermes API method (gateway + API server on port 8642) instead of SSH relay.

## Standing lock (fleet controller)
Talk path is **SOLE PATH HTTP :8642** over Tailscale. SSH relay is **FORBIDDEN** for the fleet controller and per-host identity bots. Soft “prefer HTTP” is wrong — there is no SSH ask door. See skill `Hermes HTTP-only talk path`.

## Preconditions
- Hermes gateway running with `API_SERVER_ENABLED=true`
- Strong `API_SERVER_KEY` in a secret store (never in the template or chat paste)
- `API_SERVER_HOST` bound for Tailscale/private reach — not Funnel, not public internet
- Grok Bot's computer is on the private network (Tailscale restored after Computer Updates — skill `Grok Bot computer update survival (Tailscale)`) and can curl `http://<tailscale-ip>:8642/health` and authenticated `/v1/models`

## Steps
1. Confirm gateway + API server on the Hermes host; restart gateway after env changes.
2. Verify from the Grok controller: health endpoint, then authenticated `/v1/models`. Expect `mode=http`.
3. Add one connector per host named `hermes-<hostname>` pointing at that base URL + Bearer key from the secret store.
4. Set MCP / bot instructions to **SOLE PATH HTTP :8642 — SSH RELAY IS FORBIDDEN** (named + live server IDs). Delete orphan SSH instruction IDs.
5. Smoke-test with a tiny ask/health call; do not write into Hermes memory plugins unless planned.
6. Desktop-primary hosts with **no** API gateway: installers may use the separate **Hermes SSH Relay** marketplace template — that is not fleet-controller ask and must not be wired into identity bots.
7. Messaging bots are orthogonal: if they also run Telegram/Discord across profiles, send them to Hermes Fleet Ops and `hermes-fleet-messaging-token-isolation` (`:8642` does not fix shared `TELEGRAM_BOT_TOKEN` conflicts).

## Never
- Pack or echo API keys, SSH keys, or live ledgers
- Suggest Funnel or public bind of `:8642`
- Probe SSH or fall back to SSH when `:8642` flakes — report BLOCKED on HTTP path; fix sidecar/Tailscale/API
- Turn this bot into a fleet ops orchestrator — stay on template hygiene and installer wiring

## Docs
https://github.com/shagghiesuperstar/hermes-grok-bridge/blob/main/docs/NATIVE_API.md
