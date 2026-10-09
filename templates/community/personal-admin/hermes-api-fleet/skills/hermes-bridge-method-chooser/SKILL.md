---
name: hermes-bridge-method-chooser
description: "Use when deciding between Hermes SSH Relay and Hermes API Fleet (:8642) for putting Hermes inside Grok Bot — fleet default is HTTP-only."
---

# Hermes bridge method chooser

Two marketplace templates, one repo: https://github.com/shagghiesuperstar/hermes-grok-bridge

| Choose | When |
|--------|------|
| **Hermes API Fleet** (preferred for fleet) | Gateway + API server on port **8642**; parallel fleet asks; fleet controller / identity bots |
| **Hermes SSH Relay** | Hermes is Desktop-primary with **no** API gateway; light/single-host ask for *public installers only* — never fleet-controller ask |

## Standing lock
For your fleet controller bot and per-host identity bots: **SOLE PATH HTTP :8642**. SSH relay is **FORBIDDEN** as ask/manage. Soft “prefer HTTP” left an SSH door and caused “says HTTP → health magically ok” flakes. Hard kill: delete orphan SSH MCP instruction IDs; rewrite instructions to SOLE PATH. Full playbook: skill `Hermes HTTP-only talk path`.

## Rules for both
- Private net only (Tailscale or equivalent) — never Funnel / public bind
- Never commit `API_SERVER_KEY`, SSH private keys, or live ledgers
- Do not have Grok bots write into Hermes memory plugins unless there is an explicit memory plan
- Messaging bots across hosts: never share one `TELEGRAM_BOT_TOKEN` via fleet-wide bulk inject — use `TELEGRAM_BOT_TOKEN_<PROFILE>` (Hermes auto-aliases). Full secrets playbook: marketplace template **Hermes Fleet Ops**
- If `:8642` ask/health fails: report **BLOCKED on HTTP path**; fix sidecar/Tailscale/API — do not open SSH ask. Connect-then-reset on `:8642` = dead gateway, not network

## Point installers
- API path → **Hermes API Fleet** + `docs/NATIVE_API.md` + `wire-hermes-native-api`
- SSH path (Desktop-primary, no API) → **Hermes SSH Relay** + `docs/SSH_RELAY.md` (not for fleet-controller / identity fleet ask)
