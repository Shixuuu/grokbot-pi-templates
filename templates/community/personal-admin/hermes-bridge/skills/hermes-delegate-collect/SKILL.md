---
name: hermes-delegate-collect
description: "Use when a Grok Bot should hand Hermes a bounded task, get a run id, poll to completion, and return Hermes's final output (fire-and-collect)."
---

# Hermes delegate — fire and collect

Hand Hermes a task, get a `run_id`, poll until done, bring the **final output** back into the Grok Bot chat. Default async delegation mode.

## When to use

- One bounded job Hermes can finish without mid-flight pairing
- You need a result ticket (`run_id`) and a clear completed output
- Parallel-friendly: you can start the run then do other work while polling

Don't use for:

- Short sync Q&A → [Hermes conversation](sand-workflow:hermes-conversation)
- You will steer every turn → [Hermes collaborate](sand-workflow:hermes-collaborate) or [Hermes delegate pair](sand-workflow:hermes-delegate-pair)
- Hermes should keep owning a long workstream with light check-ins → [Hermes delegate own](sand-workflow:hermes-delegate-own)
- Peer missing → [Hermes bridge setup](sand-workflow:hermes-bridge-setup)

## Prerequisites

- `hermes` CLI; peer registered (`hermes peer list`) or remembered default peer
- Never print `API_SERVER_KEY` / `HERMES_PEER_*_KEY`
- Prefer non-destructive / non-spend tasks unless the user explicitly authorized otherwise

## How to run

```text
# from a file (good for longer prompts)
hermes peer run <peer> --idempotency-key <stable-ticket-id> < task.txt

# then poll
hermes peer status <peer> <run_id>

# if you must abort
hermes peer stop <peer> <run_id>
```

HTTP equivalent (auth from env in-process, never on argv):

```text
POST /v1/runs   (+ Idempotency-Key)
GET  /v1/runs/{run_id}
GET  /v1/runs/{run_id}/events   # optional SSE
POST /v1/runs/{run_id}/stop
```

## Procedure

1. Write a self-contained task: goal, constraints, success criteria, your bot identity, "reply with the deliverable when done."
2. Choose a stable `--idempotency-key` (same key retries safely; don't reuse for a different job).
3. `hermes peer run <peer> ...` → record `run_id` (and session_id if printed).
4. Poll `hermes peer status` until `completed` / failed / stopped. Back off (e.g. 2s+); don't hammer.
5. Completion: status `completed` and an `output` (or explicit failure). Deliver that output to the user; cite `run_id`.
6. Do not start a duplicate run for the same ticket while one is `running`.

## Pitfalls

- `started` / HTTP 202 is **not** done — always poll to a terminal status.
- Idempotency keys are durable (~24h on this API) — colliding keys replay the old run.
- Don't confuse Hermes `:8642` with Grok Bot `:1340`.

## Verification

- A smoke run with input "Reply exactly: run-pong ok" reaches `completed` with that output.
- No secrets in chat.
