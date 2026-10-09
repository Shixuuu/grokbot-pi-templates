---
name: hermes-ssh-relay-setup
description: "Use when installing or wiring the Hermes SSH ask-relay connector so a Grok Bot can talk to a Desktop-primary Hermes host over a private network."
---

# Hermes SSH relay setup

## When
Hermes is Desktop-primary (no standing messaging gateway / no API on :8642), the API isn't up yet, or you need a one-off relay. Fleet orchestration uses Hermes API Fleet (:8642) instead.

## Steps
1. Confirm Tailscale (or equivalent private net) reach from the Grok Bot computer to the Hermes host. No Funnel / public bind.
2. Confirm BatchMode SSH works from the Grok Bot computer to that host (`ssh -o BatchMode=yes user@host`).
3. Clone https://github.com/shagghiesuperstar/hermes-grok-bridge onto the Grok Bot computer (or copy the `ssh-relay/` tree), keeping it under the computer's persistent folder so it survives a Computer Update.
4. Add a custom connector (command mode):
   - command: `python3`
   - args: path to `ssh-relay/src/hermes_grok_relay/server.py`
   - env:
     - `HERMES_RELAY_SSH_TARGET=user@host` (required)
     - `HERMES_RELAY_IDENTITY_NAME=<label>` (display label for that Hermes identity)
     - optional: `HERMES_RELAY_SSH_IDENTITY`, `HERMES_RELAY_SSH_OPTS`, `HERMES_RELAY_HERMES_BIN`, `HERMES_RELAY_TIMEOUT_SEC`
5. Do **not** put SSH private keys, API keys, or live hosts into the marketplace template or git. Keep secrets in local env or a secret manager.
6. Optional: create/name a Grok Bot to match the Hermes identity; confine it to this connector.
7. Smoke: connector `health`, then a trivial `ask`.
8. Never write Grok-originated content into Hermes memory plugins unless the operator has an explicit memory plan.

Docs: https://github.com/shagghiesuperstar/hermes-grok-bridge (see `docs/SSH_RELAY.md`).
