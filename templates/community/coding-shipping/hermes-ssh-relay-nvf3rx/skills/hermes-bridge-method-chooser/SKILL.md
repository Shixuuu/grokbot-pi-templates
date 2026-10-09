---
name: hermes-bridge-method-chooser
description: "Use when deciding between Hermes SSH Relay and Hermes API Fleet (:8642) for putting Hermes inside Grok Bot — fleet default is HTTP-only."
---

# Hermes bridge method chooser

Two marketplace templates, one repo: https://github.com/shagghiesuperstar/hermes-grok-bridge

| Choose | When |
|--------|------|
| **Hermes API Fleet** (https://x.ai/bot/5KLpaL-JIM2q629kbTh5L) — preferred for fleet | Gateway + API server on port **8642**; parallel fleet asks; orchestrator / identity bots |
| **Hermes SSH Relay** | Hermes is Desktop-primary with **no** API gateway, the API isn't up yet, or a one-off single-host ask — never fleet orchestration |

## Standing lock
For orchestrator and identity-bot fronts: **sole path is HTTP :8642**. SSH relay is **forbidden** as an ask/manage path for them. A soft "prefer HTTP" leaves an SSH door open and causes flaky "says HTTP, health magically ok" results. Remove orphan SSH connector instructions and rewrite instructions to the sole path. Full playbook: Hermes API Fleet.

## Rules for both
- Private net only (Tailscale or equivalent) — never Funnel / public bind
- Never commit `API_SERVER_KEY`, SSH private keys, or live ledgers
- Do not have Grok bots write into Hermes memory plugins unless there is an explicit memory plan
- Messaging bots across hosts: never share one `TELEGRAM_BOT_TOKEN` via fleet-wide bulk inject — use `TELEGRAM_BOT_TOKEN_<PROFILE>` (Hermes auto-aliases). Secrets playbook: Hermes Fleet Ops (https://x.ai/bot/rzq0UV2MmBsvVR1EspZE-)
- If `:8642` ask/health fails: report **BLOCKED on HTTP path**; fix sidecar/private net/API — do not open SSH ask

## Point installers
- API path → **Hermes API Fleet** + `docs/NATIVE_API.md`
- SSH path (Desktop-primary, no API, or one-off) → **Hermes SSH Relay** + `docs/SSH_RELAY.md`
