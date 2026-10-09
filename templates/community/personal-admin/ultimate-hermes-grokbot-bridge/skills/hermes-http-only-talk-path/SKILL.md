---
name: hermes-http-only-talk-path
description: "Use when talking to fleet Hermes, wiring hermes-* connectors, or anytime SSH relay tempts as a fallback — SOLE PATH is HTTP :8642."
---

# Hermes HTTP-only talk path

## When to use
Any ask/health/manage of fleet Hermes (fleet identity hosts when wired), or when connector prompts / MCP instructions still mention SSH.

## Standing lock
**SOLE PATH:** HTTP API `:8642` over Tailscale via one `hermes-<hostname>` connector per host.
**SSH relay to Hermes is FORBIDDEN** for identity bots and the fleet orchestrator ask/manage. Not “prefer HTTP” — there is no SSH door.

## Symptom this killed
Bots said “HTTP API” then health “magically” became ok. Cause: live connectors already spoke HTTP `:8642`, but stale MCP custom instructions still labeled old server IDs as SSH, and soft prompts left an SSH option.

## Hard-kill checklist
1. Delete orphan SSH instruction IDs.
2. Rewrite named + live-ID MCP instructions to: `SOLE PATH HTTP :8642 — SSH RELAY IS FORBIDDEN`.
3. Update host identity prompts the same way.
4. Fleet orchestrator: Hermes talk = HTTP only; SSH only for rare host surgery after API is proven insufficient.
5. Backup config before edits.
6. Verify: `health` → `mode=http`, ok; instructions start with SOLE PATH…

## Keep the path alive
- Computer Update wipes Tailscale outside `/home/box` — use the survival skill + hourly restore.
- Tailscale grants must allow `tcp:8642`.
- Connect-then-reset on `:8642` means Hermes API is dead, not the network.

## Never
- Probe SSH when `:8642` flakes
- Soft-fallback to SSH ask — report BLOCKED on HTTP path
- Soft “prefer HTTP” wording
- Secrets in chat or template packs

## Docs
- https://hermes-agent.nousresearch.com/docs/
- https://github.com/shagghiesuperstar/hermes-grok-bridge
