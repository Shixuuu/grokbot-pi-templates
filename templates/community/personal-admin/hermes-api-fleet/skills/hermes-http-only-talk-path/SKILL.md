---
name: hermes-http-only-talk-path
description: "Use when talking to fleet Hermes, wiring hermes-* connectors, or anytime SSH relay tempts as a fallback — SOLE PATH is HTTP :8642."
---

# Hermes HTTP-only talk path

## When to use
Any ask/health/manage of fleet Hermes (each Hermes host you have wired), or when connector prompts / MCP instructions still mention SSH.

## Standing lock
**SOLE PATH:** HTTP API `:8642` over Tailscale via one `hermes-<host>` connector per Hermes host.
**SSH relay to Hermes is FORBIDDEN** for identity bots and fleet-controller ask/manage. Not “prefer HTTP” — there is no SSH door.

## Symptom this killed
Bots said “HTTP API” then health “magically” became ok. Cause: live connectors already spoke HTTP `:8642`, but stale per-server MCP custom instructions still labeled **old** server IDs as SSH, and soft prompts (“HTTP not SSH”, “the controller may SSH”) left an SSH option. First call woke the real HTTP path after SSH confusion.

## Hard-kill checklist (controller / Grok Bot)
1. Delete orphan SSH MCP instruction entries (old server IDs that no longer map to a live connector).
2. Rewrite **named** + **live-ID** MCP instructions to: `SOLE PATH HTTP :8642 — SSH RELAY IS FORBIDDEN` (no “prefer”).
3. Update each host's identity-bot prompt the same way — SSH does not exist for talk.
4. Your fleet controller bot: Hermes talk = HTTP only; SSH only via a separate host-surgery runbook for rare host surgery **after** the API is proven insufficient.
5. Back up config before edits (for example a timestamped folder under `/home/box`).
6. Verify: `health` → `mode=http`, ok; runtime MCP instructions start with `SOLE PATH… SSH RELAY IS FORBIDDEN`.

## Keep the path alive
- **The Grok Bot computer loses Tailscale on every Computer Update.** An update can happen any time and wipes installed software, processes, and everything outside `/home/box`. When Tailscale is gone, every `:8642` call dies. Keep Tailscale state, keys, configs and restore scripts under `/home/box`, use a tagged reusable auth key stored as a secure secret, run an hourly every-day detect-and-restore routine, and pass the uninstall drill before calling setup done. Recipe: skill `grok-bot-computer-update-survival-tailscale`.
- **Tailscale grants must allow `tcp:8642`** from the bot's computer to every Hermes node, and from any Hermes node that probes other Hermes nodes (for example a health watchdog). A missing grant looks like a timeout.
- **Connect-then-reset on `:8642` means the gateway behind it is dead, not the network.** If the TCP connect succeeds and the connection is then reset (`ConnectionResetError`, empty reply), Tailscale and grants are fine; restart or repair the Hermes API server on that host. Only a connect timeout points at Tailscale or grants.

## Still open (do not confuse with path kill)
- Connector **tool schema** for `health` may still say “SSH or HTTP” — package copy in hermes-grok-bridge; patch schema so it cannot re-teach SSH.
- Ask timeouts (`-32001`) are **sidecar/fluidity**, not path confusion.

## Marketplace templates
- **Hermes API Fleet** — primary talk path (`:8642`). Keep installer docs aligned with SOLE PATH language.
- **Hermes Fleet Ops** — fleet ops / secrets / homogenize; talk path still HTTP-only; do not document SSH ask as a fallback.
- **Hermes SSH Relay** — separate public template for Desktop-primary hosts without API gateway. Do **not** use it for fleet-controller/identity fleet ask. Do not tell identity bots to use SSH.

## Never
- Probe SSH as a first call when `:8642` flakes
- Fall back to SSH ask when health/ask fails — report **BLOCKED on HTTP path**; fix sidecar/Tailscale/API
- Soft “prefer HTTP” wording that leaves SSH as an option
- Secrets in chat or template packs

## Docs
- Official Hermes: https://hermes-agent.nousresearch.com/docs/
- Bridge native API: https://github.com/shagghiesuperstar/hermes-grok-bridge (NATIVE_API / SSH_RELAY docs)
