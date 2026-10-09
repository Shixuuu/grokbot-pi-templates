---
name: hermes-delegate-own
description: "Use when Hermes should own a longer workstream: start an async run, check in or unblock occasionally, and avoid turn-by-turn pairing."
---

# Hermes delegate — own workstream

Hermes **owns** the workstream. You start an async run (or a clear ownership brief), then only **check in / unblock / steer lightly**. You do not pair every turn. Report progress to the user; don't micromanage Hermes.

## When to use

- Multi-step or longer missions Hermes should drive
- You need to stay available for other work while Hermes continues
- Occasional steer or stop is enough; full pair loop is overkill

Don't use for:

- Need the answer in one sync turn → [Hermes conversation](sand-workflow:hermes-conversation)
- Tight back-and-forth until done → [Hermes delegate pair](sand-workflow:hermes-delegate-pair) or [Hermes collaborate](sand-workflow:hermes-collaborate)
- Single bounded job with immediate collect → [Hermes delegate collect](sand-workflow:hermes-delegate-collect)
- Peer missing → [Hermes bridge setup](sand-workflow:hermes-bridge-setup)

## Prerequisites

Same peer/auth rules as other Hermes skills. Prefer `hermes peer run` so you have a `run_id` to status/steer/stop. Resolve `<peer>` from memory or `hermes peer list`.

## How to run

```text
hermes peer run <peer> --idempotency-key <mission-id> < mission.txt
hermes peer status <peer> <run_id>          # check-in
# HTTP steer when needed:
# POST /v1/runs/{run_id}/steer   {"message":"<guidance>"}
hermes peer stop <peer> <run_id>            # abort if the user says stop
```

## Procedure

1. Write a **mission brief**: goal, constraints, definition of done, reporting expectations, your bot identity, what Hermes may decide alone vs must escalate to the user.
2. Start with `hermes peer run` + stable mission idempotency key. Save `run_id`.
3. Tell the user the mission is with Hermes and give the `run_id`.
4. Check in with `status` at coarse intervals (or when the user asks). If blocked on approval/spend/secrets, surface that to the user — don't invent approvals.
5. Steer only when direction changes; prefer one steer message with clear guidance.
6. Completion: terminal status + output, or the user cancels (`stop`). Summarize outcome with `run_id` and cited output.

## Ownership rules

- Hermes decides sequencing and tools inside the brief.
- You own user communication and any Grok Bot–side side effects.
- Destructive / spend / identity actions still need the user.

## Pitfalls

- Don't convert this into a hidden pair loop (constant steers).
- Don't start a second mission run for the same key while one is live.
- A quiet `running` status is normal for long jobs — check events if you need detail (`GET /v1/runs/{id}/events`).

## Verification

- Mission starts with a `run_id`; a later `status` shows progress or `completed` with output.
- The user was told who owns the work (Hermes) and how to stop it.
