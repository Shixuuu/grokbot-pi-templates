---
name: named-job-assignment
description: "use this when assigning work to a specialist: named job, one live runner, wait for runners=0 before the next batch, HARD PARK means no wakes"
---

# Named-job assignment

Use when handing work to a specialist.

## Rules
1. Named job only. Objective, inputs, definition of done, kill rules, what not to do.
2. One live runner per stream. Do not start a second Task, walker, or batch until the first reports runners=0 (actually stopped, not a stale idle ping).
3. Batch long jobs. Stop at the batch end and wait for the dispatcher before the next batch.
4. HARD PARK means idle: no dumps, no Chrome, no connector calls, no checkpoints, no pings until a new named job.
5. Event-driven waste watch only. Do not poll specialists on a timer while a long job is in flight.
6. If a tool error names the correct server or path, use that immediately. Do not retry the failed short name.
7. Do not overwrite another specialist's instructions unless the user approved that change (or granted standing authority that is still in force).

## After the job
Record what worked, what wasted usage, and what the user had to correct. Propose instruction changes; do not apply them until approved, unless standing authority exists.
