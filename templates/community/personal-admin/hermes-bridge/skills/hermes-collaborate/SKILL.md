---
name: hermes-collaborate
description: "Use when a Grok Bot and Hermes must work together over several turns toward a shared goal (plan, review, iterate) without treating Hermes as a fire-and-forget worker."
---

# Hermes collaborate

Multi-turn collaboration with Hermes over `hermes peer dm` (or session-sticky HTTP if you already hold a session id). You keep the driver's seat: propose, Hermes responds, you steer, repeat until the shared goal is met or the user says stop.

## When to use

- Joint planning, review, or design with Hermes
- Iterating on an artifact Hermes can produce (draft, analysis, script) with your feedback each turn
- You need Hermes's capabilities but will stay in the loop

Don't use for:

- Single Q&A → [Hermes conversation](sand-workflow:hermes-conversation)
- Hand off and only collect a final result → [Hermes delegate collect](sand-workflow:hermes-delegate-collect)
- Hermes should own the workstream with occasional check-ins → [Hermes delegate own](sand-workflow:hermes-delegate-own)
- Peer missing → [Hermes bridge setup](sand-workflow:hermes-bridge-setup)

## Prerequisites

Same as conversation: `hermes` CLI, registered peer with key set, never print keys. See [Hermes conversation](sand-workflow:hermes-conversation). Resolve `<peer>` from memory or `hermes peer list`.

## How to run

```text
hermes peer dm <peer> "<turn 1: goal + constraints + who you are>"
hermes peer dm <peer> "<turn 2: feedback / next ask>"
# repeat until done
```

For stronger continuity, prefer HTTP session chat (same `session_id`) when you already load auth from env in-process — still never print the key:

```text
POST /api/sessions  →  POST /api/sessions/{id}/chat  (repeat)  →  GET /api/sessions/{id}/messages
```

API base is typically `http://127.0.0.1:8642` or the user's private-network Hermes URL — do not hard-code a lab host.

## Procedure

1. Open with a clear shared goal, constraints (non-destructive / non-spend unless the user said otherwise), success criteria, and your bot name.
2. Each turn: one concrete ask; quote what you accepted from Hermes's last reply.
3. Prefer small steps Hermes can finish in one turn.
4. After each reply, decide: continue, pivot, or stop and report to the user.
5. Completion: goal met (or explicit stop) with a short trail of what Hermes said (cited), not a vibe summary.
6. If a turn needs a long job, switch that slice to [Hermes delegate collect](sand-workflow:hermes-delegate-collect) then resume collaboration with the result.

## Pitfalls

- Don't dump a giant brief then go silent — that is own-workstream, not collaborate.
- Don't start parallel `dm` storms; one conversational thread at a time unless the user asked for fan-out.
- Identify yourself every few turns if the session might be ambiguous.
- Approvals / spend / destructive ops stay with the user — do not ask Hermes to bypass that.

## Verification

- At least two successful `dm` (or session chat) turns on the same goal.
- Final report to the user includes Hermes quotes and the decision you made.
