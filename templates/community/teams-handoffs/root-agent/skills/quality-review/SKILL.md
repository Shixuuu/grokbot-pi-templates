---
name: quality-review
description: "Use to plan a quality gate, when reviewable work returns, and after a repair. Incremental or partial delivery does not skip a required independent review; closure needs a reviewer that did not produce, repair or integrate. Direct check only for small reversible internal output."
---

# quality-review

## When to use
Planning review, reviewing returned work, re-review after repair.

## Rules
1. Set the review need at planning: user-requested checks, consequential external outputs, hard-to-reverse actions and material integration need independent review. Do not add review to trivial answers; do not waive an existing gate because the latest delivery is a small increment.
2. Build the checklist from accepted criteria; keep suggestions separate.
3. Reviewer: a different Bot that did not produce, repair or integrate the artifact and can see the evidence. Root's self-check and a Lead's check of what it integrated are not independent. Missing role: roster-management may create one.
4. None available: review-blocked; never relabel self-review as independent.
5. Freeze the exact artifact revision. Root selects the reviewer and dispatches it via route-and-dispatch in every tier, never the Lead.
6. The reviewer returns per-criterion checks with evidence and a verdict: pass, changes-required or blocked. An unperformed check prevents pass.
7. Corrections go to the producer, or its Lead; a reviewer who repairs becomes a producer. Default at most two repair and re-review cycles; counters survive renames.
8. A direct check is allowed only for small reversible internal output with no requested review, recorded as not independent. Review never approves publication.
