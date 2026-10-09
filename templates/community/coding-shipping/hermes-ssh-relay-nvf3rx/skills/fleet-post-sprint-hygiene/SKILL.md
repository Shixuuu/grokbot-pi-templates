---
name: fleet-post-sprint-hygiene
description: "Use after Hermes/Grok sprints before DONE or marketplace Share→Update — clean orphan browsers, stuck CLI harnesses, leftover SSH ask paths; HTTP :8642 only for fleet; long jobs via /v1/runs when a connector ask times out at ~120s."
---

# Fleet post-sprint hygiene

## When to use
After any Hermes/Grok orchestration sprint with long asks, browser smokes, CLI harnesses, or heavy SSH — before declaring DONE or doing Share→Update on marketplace templates.

## Standing law
- Fleet / identity talk path = **HTTP `:8642` only** (Hermes API Fleet). SSH ask is forbidden for fleet Hermes.
- SSH is for rare host surgery after the API is proven insufficient, or Desktop-primary / one-off hosts via the SSH Relay template — never as an ask fallback.
- Long tool jobs: prefer host-local Hermes `POST /v1/runs` (Desktop-primary) when a Grok connector ask dies at ~120s (`-32001`). Raise the connector/sidecar timeout locally; upstream Hermes PR only with a Desktop-hang repro.
- The orchestrator orchestrates; deep troubleshooting goes to a dedicated Hermes session, not Grok token burn.

## Checklist (run every time)
1. **Ask bus:** short `health` OK? If tool-ask `-32001` ~120s → use `/v1/runs` or raise sidecar timeout; do not claim MERGED/DONE without evidence.
2. **SSH leftovers:** no orphan SSH connector instructions labeled as an ask path; fleet connectors say HTTP-only.
3. **Browser agents:** stop orphan computer-use / browser subagents; keep one designated browser host; do not use the human as the Network tab.
4. **CLI harnesses:** kill stuck coding-agent / gh / cloud-agent CLIs and leftover tmux/screen jobs from the sprint.
5. **Heavy SSH:** close idle SSH sessions announced as in progress; no cross-host Hermes SSH.
6. **Gateway restarts:** if a Hermes gateway needs a restart to pick up changes, do it gracefully: send `SIGUSR1` to the launchd-supervised gateway PID (the official drain-aware restart, same path as `hermes gateway restart`), then re-check `/health`. Don't hard-kill it.
7. **Secrets:** nothing pasted in chat; Bitwarden / secret manager only; no private restore URLs in public packs.
8. **Templates:** if playbooks changed, stage on the relevant template bot, then a human does Share→Update (never publish from an orchestrator bot).

## Verification
- Fleet `health` → HTTP mode ok
- No stray browser/CLI processes from the sprint
- Any restarted gateway answers `/health`

## Related
- Hermes API Fleet (HTTP-only talk path)
- desktop-v1-runs-escape, Paste to Hermes skill
