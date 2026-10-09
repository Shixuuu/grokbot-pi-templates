---
name: fleet-post-sprint-hygiene
description: "Use after Hermes/Grok sprints before DONE or marketplace Share→Update — clean orphan browsers, stuck CLI harnesses, leftover SSH ask paths; HTTP :8642 only; long jobs via /v1/runs when MCP ~120s times out."
---

# Fleet post-sprint hygiene

## When to use
After any Hermes/Grok orchestration sprint with long asks, AR/merge, browser smokes, CLI harnesses, or heavy SSH — before declaring DONE or Share→Update marketplace templates.

## Standing law
- Fleet / identity talk path = **HTTP `:8642` only**. SSH ask is forbidden for fleet Hermes.
- SSH is for rare host surgery after API proven insufficient (a separate host-surgery runbook), or Desktop-primary one-off hosts via SSH Relay template — never as ask fallback.
- Long tool jobs: prefer host-local Hermes `POST /v1/runs` (Desktop-primary) when Grok MCP ask dies at ~120s (`-32001`). Raise MCP/sidecar timeout locally; upstream Hermes PR only with Desktop-hang repro.
- Your fleet controller bot orchestrates; troubleshooting digs → a dedicated Hermes frontier-model session, not Grok token burn.

## Checklist (run every time)
1. **Ask bus:** short `health` OK? If tool-ask `-32001` ~120s → use `/v1/runs` or raise sidecar timeout; do not invent MERGED.
2. **SSH leftovers:** no orphan SSH MCP/connector instructions labeled as ask path; fleet connectors say HTTP-only.
3. **Browser agents:** stop orphan computer-use / browser subagents; one dedicated browser host for the fleet; do not use the human as Network tab.
4. **CLI harnesses:** kill stuck Codex/Claude/gh/cloud-agent CLIs and leftover tmux/screen jobs from the sprint.
5. **Heavy SSH:** close idle SSH sessions announced as SSH-IN-PROGRESS; no cross-host Hermes SSH.
6. **Secrets:** nothing pasted in chat; secret manager only (e.g. Bitwarden Secrets Manager); no private restore URLs in public packs.
7. **Templates:** if playbooks changed, stage on SSH Relay / API Fleet / Fleet Ops then human Share→Update (never publish from the controller bot).

## Verification
- Fleet `health` → HTTP mode ok
- No stray browser/CLI processes from the sprint
- Incident-tracker hygiene boxes checked when this was a fleet incident
- Grok Bot computer: Tailscale up after any Computer Update (hourly restore routine green)

## Related
- Skills: Hermes HTTP-only talk path, desktop-v1-runs-escape, Paste to Hermes skill, Grok Bot computer update survival (Tailscale)
