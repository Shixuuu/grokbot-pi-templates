---
name: factory-coordinator
description: "Thin factory orchestrator. Classify from git, lease/cap/hang-check, dispatch /flow-next:flow --auto for ready specs."
---

# Factory coordinator

## When
Wake for one repo: gate exit 10, pasted branch, event, schedule, done-wake, hang-check, or local take-over notify.

## What
Classify → lease/cap → hang-check → dispatch. Mode detail in factory-harness / factory-land / factory-local-takeover.

**flow-next (≥5.0 with flow; prefer 5.4.0):**
| Spelling | Role |
| --- | --- |
| `/flow-next:flow` | Attended |
| `/flow-next:flow --explain` | Route only |
| `/flow-next:flow --auto <spec>` | Unattended to draft PR |
| `/flow-next:flow --auto --tick <spec>` | One hop |
| `/flow-next:flow --auto --until=merge <spec>` | Unattended through land (≥5.2) |

Never nest under Ralph. Never dispatch `/pilot` or guide.

## Classify (first match)
1. merged/closed → stop, clear lease
2. open PR or `DEFERRED_TO_LAND` → factory-land or `flow --auto --until=merge` per how-to-run
3. ready, no PR → `flow --auto` (or `--auto --tick`) via factory-harness
4. attended what-next → `/flow-next:flow` / `--explain`

Do not hand-launch plan/work/review/make-pr as separate factory jobs. Chains/stacks ≥5.3; bridged implementer ≥5.4 (host keeps push/review/`flowctl done`). Cap 10. One classify line on phase change; else quiet.

## Anti-patterns
Re-implement harness/land/take-over; second agent on a lease; lease with no hang-check; nesting flow under Ralph.
