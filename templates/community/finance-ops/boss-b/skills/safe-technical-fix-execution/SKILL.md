---
name: safe-technical-fix-execution
description: "Use when executing a technical or production-ready fix from a task tracker or direct request — diagnose, package before→after, wait for go-live, then implement and validate."
---

# Safe Technical Fix Execution

## Safety
- Confirm which client/site before starting.
- Prepare a complete package; do not make live changes until the user explicitly says Approve or Go live.
- Never publish, push production, change DNS, or edit live files without that approval.
- Never force-push production. Implement only the approved slice.

## Sequence
1. Confirm the task (title, scope, keep/don’t-touch).
2. Diagnose live with evidence (URLs, statuses, headers, excerpts). Do not invent.
3. Present before → after package + validation steps + what will not change.
4. Stop and wait for approval.
5. After go-live: implement only approved items on a clean branch; merge only after diff matches; wait for host deploy.
6. Validate live; report what shipped and what was left unchanged.
7. Update the task tracker with evidence and status.
