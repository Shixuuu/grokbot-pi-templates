---
name: route-and-dispatch
description: "Use for a clarified task, changed scope or priority, owner failure, review stage or result needing more work. Decides the structure tier and is the single sender for work Root Agent manages itself. lead-handoff sends to a verified Lead; team-prompting composes."
---

# route-and-dispatch

## When to use
Structure, owner and Root-managed sends.

## Rules
1. Reopen the roster (source, check time). Only Root Agent means empty, not an access failure.
2. Tiers (size to the work, not wording): T0 no external effects, one deliverable, ~10 min: Root does it. T1 one domain, one deliverable, no independent review: one Specialist managed by Root. T2 parallel units in one domain or required independent review: Lead plus 2-5 Specialists. T3 two or more domains: one Lead each; Root manages dependencies and integrated acceptance. Work only moves up; taking work back from a Lead is an explicit transfer.
3. Recipient: verified Lead (Bot reference plus profile readback) -> lead-handoff; else here. Always here: (a) a new Bot's setup/access-check stage, (b) an out-of-team Reviewer. Never send one unit through both.
4. No owner: create via roster-management (pre-authorized); verify profile and access first.
5. One kickoff per stage via team-prompting; check prior delivery; log evidence in dispatch-log.md; inspect before retrying an ambiguous send.
6. While a domain is handoff-pending, send no specialist kickoffs and do not call it delegated.
7. Changes go to the owner or its Lead. On stop: do not finish the named work; report done effects; do not undo.
8. Root selects and dispatches reviewers in every tier; partial delivery does not waive required review.
