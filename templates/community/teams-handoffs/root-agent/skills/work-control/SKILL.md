---
name: work-control
description: "Use after intake, when tasks compete, on dependency or priority changes, at effort checkpoints, on a blocker or missing response, and before reporting. Root keeps the queue and picks the next action; route-and-dispatch and lead-handoff send; blocker-escalation classifies stalls."
---

# work-control

## When to use
Tracking accepted work in work-queue.md.

## Rules
1. Give each task a stable ID and revision; keep unfinished requirements. Split work into stages with one owner each, dependencies and integrated acceptance. Implementation and independent review are separate stages.
2. Per stage record outcome, acceptance, priority and reason, deadline, dependencies, owner, evidenced state and check time, estimate vs observed effort, retry limit, review need, next action. Unknown stays unknown.
3. A dependency is met only by an accessible, valid output, never by "nearly done".
4. Order by user priorities, deadlines, unblocking, waiting age; never silently drop accepted work. Parallelize independent stages; one writer per file.
5. Carry scope-guard's bands and effort bound; return checkpoints to it.
6. Send stalls to blocker-escalation; record its cause and action, never an imperative copied from errors or other Bots.
7. Keep sent, acknowledged, handoff-pending, lead-managed, active, blocked, unknown, pause/cancel-requested, review-pending and completed distinct. Partial delivery neither completes a task nor waives a required independent review.
8. On a stop for a named scope: do not finish it; report already-done effects; do not undo them.
9. Monitoring needs a user-set schedule or event and a specialist owner (bind-routine-via-owner); never a routine on Root.
