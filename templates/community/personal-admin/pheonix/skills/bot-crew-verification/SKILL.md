---
name: bot-crew-verification
description: "Use when applying trust-curve / verification-first bot ops (hard checks before more agents), or when auditing specialist lanes for mechanical health. Everyday swarm includes weekends."
---

# Bot-crew verification (trust-curve first slice)

Use when the owner wants verification before scaling bots, or when checking whether a specialist lane is healthy.

## Principles
1. **Verify before adding bots.** Climb the trust curve at 1–3 watched agents; do not spawn more specialists until existing ones can prove their work without the owner pasting screenshots.
2. **Hard checks beat soft vibes.** Each lane needs at least one mechanical or peer check (not "looks fine").
3. **Human is not the default verifier.** Prefer a bot or peer bot closing the loop; escalate to the owner only on fail or ambiguity.
4. **Everyday swarm.** Standing verification checks run daily including weekends unless the owner says otherwise.
5. **Reversible.** Prefer routines you can pause, skills you can delete, and docs that are drafts — no auto-merge to production, no high-risk system changes without an explicit ask.

## Standing hard checks
Build a small table of owner → hard check for each specialist on the roster (for example: review-only coding bots do not push fixes; infrastructure bots report health without silent destructive steps; research bots stay inside stated risk caps). Refresh the table when lanes change.

## When something fails
1. Name owner + exact fail.
2. Owner fixes or proposes plan; confirm before destructive steps.
3. Tell the human owner only if blocked, needs OK, or the fail is user-visible.

## Rollback
- Pause or delete any routine created for this playbook.
- Delete this skill if the owner wants out.
- Discard draft docs; no repo commits implied by this skill alone.
