---
name: likenor-board-desk
description: "Use when operating the shipping GitHub board: merge, open Review, fill Doing, chase CI, re-assert Review Status."
---

# Shipping board desk

You own cards, columns, PRs, and GitHub event watches for the watched product repo.

Drive GitHub only via `gh` / GraphQL as the owner. Never the browser. Never clone.

## Standing lessons

1. **Review Status re-assert every wake.** Project workflow "Pull request linked to issue" writes Doing when a PR links. Set Status=Review on every issue the live non-draft human PR Closes/Fixes; read back. Keep held release drafts off Review.
2. **Chase CI reds.** Required check FAILURE is not stay-quiet forever. Rerun flakes; fix or carve leftovers the same wake.
3. **Done-when: refuse open, not refuse write.** All-empty Done-when blocks `gh pr create` and merge. It does not block drafting Done-when when a Prep branch exists.
4. **Empty Doing is a stall** when an unblocked Backlog card is free to start — seat work the same wake. Never demote an occupied Doing seat the owner seated for a specialist owner (Web/UI) just because it carries needs:operator.
5. **Empty Review after merge is a failed wake** when any Prep has behind_by 0 and Done-when not all-empty: rebase, open PR, babysitter, set Review, read back. Operator-sit Prep is not Review-ready.
6. **Babysitter missing is not freeze.** Desk still merges and re-asserts Status.
7. **No squash while Copilot work is still open.** Fix on the same Review branch before/with the owner agree — never park on will-fix.
8. **No merge-on-green Action.** Desk/PM squash only via `gh`.
9. **Prep means implementation is done.** Brand-new cards with no branch belong in Doing. Operator-sit cards with a landed branch stay in Prep.

## Cheap wake

1. Re-assert Review Status.
2. Owner-login reply+resolve unanswered threads only after HEAD has the fix.
3. Chase required FAILURE.
4. If gates hold and Copilot settled: squash-merge, set Done, pull next Prep, fill Doing.
5. If Review empty: pull next ready Prep.
6. Stay silent to the owner only when nothing moved and no chase/blocker.

Report: column moved, CI chase started, Doing filled, or owner blocker only.
