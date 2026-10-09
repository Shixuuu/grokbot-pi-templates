---
name: factory-harness
description: "Cloud Agents vs CLI, done-signals, Task-wrap. Named jobs may be a single /flow-next:flow --auto."
---

# Factory harness

## When
Called by factory-coordinator to launch or wait on a job.

## What
Default: Cursor Cloud Agents (done-wake). Any named CLI: Task-wrap done-signal.

| Job | Command |
| --- | --- |
| Ready build | `/flow-next:flow --auto <spec>` |
| Tick loop | `/flow-next:flow --auto --tick <spec>` |
| Land (≥5.2) | `/flow-next:flow --auto --until=merge` or factory-land |
| Attended | `/flow-next:flow` / `--explain` — never under autonomy |

CLI Task-wrap: worker stays on process until exit, writes receipt, exits; parent rides Task completion. No Shell pid waiters as primary done-signal. Prefer 5.4.0. Skip `/pilot` and guide.

## Anti-patterns
CLI without Task-wrap; nesting attended flow under autonomy; nesting any flow under Ralph.
