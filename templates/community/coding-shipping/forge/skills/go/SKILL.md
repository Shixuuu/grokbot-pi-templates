---
name: go
description: "Use when the owner runs /go, says keep shipping, or pastes a branch, PR, or spec for the factory."
---

# /go

Router. The owner wants the factory to run this work.

**Do:** follow [handover](sand-workflow:handover) to resolve repo, target, and mode, then dispatch to factory-coordinator (or factory-land for an open PR). Coordinator launches `/flow-next:flow --auto` (or `--auto --tick` / land per how-to-run). One classify line, then quiet.

**Ask only if:** repo, spec, or PR is ambiguous, or plan vs skip plan has no default.

Attended "what next" without a factory wake → `/flow-next:flow` / `--explain`, not `/pilot`.

Command table: [Factory commands](sand-workflow:factory-commands).
