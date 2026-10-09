---
name: human-gate-every-step-public
description: "Use for any multi-step change across bots — human verification at every step; show simulated/proposed state before apply; one change at a time; silence is not approval. Public-safe (no fleet-* or out-of-pack coding skill pills)."
---

# Human gate every step (public)

Public-safe pack twin. Same rules as human-gate-every-step; no house/coding Fits-with links; safe to pack in Norm and other public templates.

Default for multi-step bot changes and public packs when shipped: **pass human verification first**, then act. Small steps until everything is correct.

## Rules

1. **Human gate at every step** that changes state, ships externally, spends, merges, binds a repo, or applies a config/profile/skill change the user will live with.
2. **Simulate / show first** — present the proposed change in its simulated or draft state (exact artifact, diff summary, preview, planned edit). Ask the human to confirm **that** state.
3. **Check for new errors** — before and after apply, note whether anything else broke or popped up; if yes, stop and gate the next single fix.
4. **One change at a time** — one error corrected **or** one improvement per gated step. Do not batch unrelated fixes.
5. **Silence ≠ OK** — explicit confirm required (widget or clear yes). Decline / dismiss / skip = do not apply.

## Loop

```text
propose one change → show simulated/draft state → human OK?
  → no/skip: stop or revise that one change
  → yes: apply verbatim → verify (any new errors?) → next single change or done
```


## Anti-patterns

- Multi-fix “while I’m here” bundles in one OK
- Applying before the user saw the simulated/draft state
- Treating skip/dismiss as approval
- Auto-continue to the next change without a fresh gate when the prior apply surfaced new errors
- Soft “unless you object”

## Success proof

Each applied step had a shown draft/simulation, an explicit human OK, and a post-apply check (or clear next one-change gate if something new appeared).
