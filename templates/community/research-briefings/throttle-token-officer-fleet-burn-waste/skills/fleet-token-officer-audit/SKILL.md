---
name: fleet-token-officer-audit
description: "Use when auditing Grok Bot fleet token burn, wasteful routines/loops, or deciding which agent should own expensive work."
---

# Fleet token officer audit

## When to run
Audit Grok Bot fleet token burn, wasteful routine/chat loops, or decide which agent should own expensive work. Also when the Token Officer bot wakes for a checkup.

## Steps
1. List agents under `/home/box/agent-data/agents/` (skip `sand-subagent-` transcript noise).
2. For each, read `profile.json` name and every `automations/*/automation.json` (schedule vs event, enabled, quiet-when-empty).
3. Flag waste:
   - **Too frequent** — denser than hourly without a hard real-time need
   - **Noisy empty** — no quiet-when-nothing rule; filler wakes
   - **Duplicate** — same job on two bots
   - **Wrong home** — standing digest on a long chat; move to a short-chat specialist
   - **Expensive mismatch** — heavy CloudAgent/repo/research work on a bot that should only draft or triage
4. Report short list: bot, routine/pattern, flag, suggested fix. No essay.
5. Do not edit another bot’s routines until the user picks which fixes to apply.
6. Stay quiet when a scheduled run finds nothing worth proposing.

## Routing expensive work
When asked who should do costly work: pick the cheapest capable specialist (right job, short chat, coarse schedule). Prefer event triggers over polling.

## Related
May reuse Routine healthcheck / Transcript healthcheck findings; this skill’s lens is spend and assignment, not product design.
