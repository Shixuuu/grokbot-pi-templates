---
name: hermes-bridge-method-chooser
description: "Use when deciding between Hermes SSH Relay and Hermes API Fleet (:8642) for putting Hermes inside Grok Bot — fleet default is HTTP-only."
---

# Hermes bridge method chooser

Two marketplace templates, one repo: https://github.com/shagghiesuperstar/hermes-grok-bridge

| Choose | When |
|--------|------|
| **Hermes API Fleet** (preferred for fleet) | Gateway + API server on port **8642**; parallel fleet asks; orchestrator / identity bots |
| **Hermes SSH Relay** | Hermes is Desktop-primary with **no** API gateway; light/single-host ask for public installers only — never fleet orchestrator fleet ask |

## Standing lock
For fleet orchestrator and identity fronts: **SOLE PATH HTTP :8642**. SSH relay is **FORBIDDEN** as ask/manage. Soft “prefer HTTP” left an SSH door and caused flakes. Hard kill: delete orphan SSH MCP instruction IDs; rewrite to SOLE PATH. Full playbook: Hermes HTTP-only talk path skill.

## Rules for both
- Private net only — never Funnel / public bind
- Never commit API keys, SSH private keys, or live ledgers
- Do not write Grok bots into Hermes memory plugins unless there is an explicit memory plan
- Messaging bots: never share one TELEGRAM_BOT_TOKEN via fleet-wide bulk inject — use TELEGRAM_BOT_TOKEN_<PROFILE>
- If `:8642` fails: report BLOCKED on HTTP path — do not open SSH ask

## Point installers
- API path → Hermes API Fleet + Wire Hermes native API skill
- SSH path (Desktop-primary, no API) → Hermes SSH Relay + hermes-ssh-relay-setup
