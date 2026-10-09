---
name: hermes-ssh-relay-setup
description: "Use when installing or wiring the Hermes SSH ask-relay MCP so a Grok Bot can talk to a Desktop-primary Hermes host over Tailscale."
---

# Hermes SSH relay setup

## When
Hermes is Desktop-primary (no standing API on :8642), or simplest ask path for a single host.

## Steps
1. Confirm private-net reach from Grok Bot computer to Hermes host. No Funnel.
2. Confirm BatchMode SSH: `ssh -o BatchMode=yes user@host`.
3. Clone https://github.com/shagghiesuperstar/hermes-grok-bridge (or copy `ssh-relay/`).
4. Add custom MCP (command mode): `python3` → `ssh-relay/src/hermes_grok_relay/server.py` with env `HERMES_RELAY_SSH_TARGET`, `HERMES_RELAY_IDENTITY_NAME`; optional identity/opts/timeout.
5. Never put SSH private keys or API keys into the template or git.
6. Optional: name a Grok Bot to match Hermes identity; confine to this MCP.
7. Smoke: MCP `health`, then trivial `ask`.
8. Never write Grok-originated content into Hermes memory plugins unless planned.

Docs: https://github.com/shagghiesuperstar/hermes-grok-bridge (`docs/SSH_RELAY.md`).
