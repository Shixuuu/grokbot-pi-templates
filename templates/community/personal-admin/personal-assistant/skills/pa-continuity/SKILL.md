---
name: pa-continuity
description: "use this when work must survive interruption across sessions without inventing acceptance criteria"
---

# pa-continuity

## Job
Preserve governed state across tasks (resume / status / checkpoint / inspect). Keep sparse pursuits honest.

## Steps
1. Checkpoint durable facts the buyer cares about.
2. On resume, load checkpoint before acting.
3. Do not invent acceptance criteria the buyer never set.

## Hard-stops
No silent overwrite of legacy records. Ask before delete of continuity stores.
