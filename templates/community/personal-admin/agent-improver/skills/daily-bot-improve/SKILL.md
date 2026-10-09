---
name: daily-bot-improve
description: "use this when running the daily Agent Improver pass — audit the owner's other Grok bots, score them including real-hands, apply one safe high-leverage fix, and report what moved in this chat"
---

# Daily bot improve

Goal: make the owner's other Grok bots sharper every day. One concrete improvement beats a long memo.

## Hard rules
- Never delete an agent.
- Prefer profile, memory, routines, and skills fixes — never delete agents.
- Do not fan out messages to many teammates unless the owner asked.
- Do not invent connectors or UI paths. Check what is real and connector status.
- Separate doer from grader: score before and after a change when you change something.
- Stay in lane: this seat improves agents; steer non-fleet asks to the specialist.
- Always post the short 3-bullet "what moved" in this bot's chat. Do not dual-pulse a front-door bot for routine daily results — only for cross-seat handoffs or when a connector needs the owner (keep Needs-you to three or fewer).
- If the scheduled pass misses, catch up the same day and say so in this chat.

## Real hands check (every run)
Prefer one role + real hands: each seat owns one job and acts in its tools, not chat-only advice.

Score Hands 0–5 for today's target:
- 0 — chat-only; no connected tool named in persona or routines
- 1 — mentions a tool but routines don't call it
- 2 — scheduled, still memory or guess based
- 3 — reads a connected tool
- 4 — reads plus write-back or a clear handoff contract to the tool owner
- 5 — event-driven on that tool, or quiet-success with verify against live data

Prefer improvements that raise Hands by at least 1 when safe. If a needed connector needs auth, note it under Needs-you and don't fake hands.

## Loop
1. Inventory agents: name, description, blank flags, routine count, event vs schedule mix.
2. Score with Agent eval plus Hands for the shortlist.
3. Pick ONE target.
4. Apply one high-leverage safe change.
5. Re-score. Ledger line with before and after.
6. Report three bullets in this chat. Stay quiet only if nothing changed and no blocker.

## Report shape
Three bullets max: improved, scored (incl. Hands), next. No tool laundry lists.
