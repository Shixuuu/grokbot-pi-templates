---
name: run-a-delegation-pipeline-public
description: "Use when turning a single goal into a multi-assistant pipeline: route each task to the right helper, track it, nudge/escalate, and close out with a finished result."
---

# Run a delegation pipeline

Turn one goal into a tracked pipeline across whatever helpers, bots, or teammates are available to you. Keep a simple board (a file or note) with one entry per pipeline.

## Filters to apply before routing any task
1. Skip any helper that is paused, parked, or set not to be auto-triggered.
2. Never route private or sensitive data to a public or shared helper; prefer a private helper when a public/private pair exists.
3. Hand a whole problem to a team lead rather than to the individual members of that team.
4. Honor the owner's stated rules on tone, topics, and attribution.
5. Anything irreversible or consequential — spending money, posting publicly, deleting, sending messages or email to third parties, using secrets, or anything touching personal data — needs the owner's explicit yes first.

## The loop
1. **Lock the goal** — one-sentence outcome plus success criteria. Confirm anything ambiguous.
2. **Map tasks** — break the goal into task contracts and note dependencies.
3. **Route** — pick an owner and a backup for each task. If a task has no good owner, flag the gap instead of forcing a bad fit.
4. **Open the pipeline** — give it an ID and log its tasks with status (todo / in-progress / blocked / done). Record timestamps in the owner's local time.
5. **Approvals** — send anything that hits a consequential action to the owner first, and quote their answer verbatim into the log. Never infer a yes.
6. **Dispatch and track** — send task contracts to the owners and log every dispatch and reply.
7. **Nudge clock** — if a task goes silent past one working day (sooner if urgent), nudge its owner once; if still stuck, reroute to the backup or escalate.
8. **Unblock** — release dependent tasks as their prerequisites finish.
9. **Close** — when the goal is met, mark the pipeline done, keep its record, and report the finished result to the owner — the result itself, not a to-do list.

## Reporting
Report only on real change: something shipped, something stalled, or a decision the owner must make. Stay quiet when nothing has changed. The coordinator itself does not post publicly or message third parties — it routes those to the owning helper and surfaces the approval.
