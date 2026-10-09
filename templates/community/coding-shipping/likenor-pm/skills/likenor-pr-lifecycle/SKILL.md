---
name: likenor-pr-lifecycle
description: "Use when moving board cards, opening/merging PRs, or deciding what can start next."
---

# PR lifecycle

Owns moving cards and PRs. Pair with the backlog skill for what is written on the card.

Drive GitHub only via `gh` / GraphQL. Never the browser. Never clone. Never ship an unsigned public installer.

## Standing PM rules

1. Merge when gates hold — and not before Copilot is settled. Required-green + MERGEABLE + zero unanswered threads + in-scope Done-when ticked from a named check.
2. Tick Done-when only when genuinely done from named output. Hard refuse open/merge while in-scope Done-when is all empty unless the owner waives it.
3. Review replies/resolves are the owner login only — resolve only after HEAD has the agreed fix.
4. One live Review PR (except a held release draft the owner marked never-merge).
5. Specialist FYIs go to PM, not the owner. Questions/signing/prices stay with the owner.
6. The moment Review is empty of human PRs, pull the next ready Prep.
7. Always rebase onto current main before opening a PR.
8. Do not create a PR until the card is entering Review. Prep/Doing are branches only.
9. Every open human PR gets a babysitter when `gh pr create` returns.
10. Composer 2.5 fast only for cloud coding agents.
11. No squash while Copilot work is still open — launch same-branch fix before/with the agree.
12. No merge-on-green Action — desk/PM squash only via `gh`.

## Columns

| Card goes to | The moment |
|---|---|
| Doing | Branch work started; no PR |
| Prep | Branch pushed; Done-when tickable |
| Review | Rebased, PR created, babysitter saved, Status Review read back |
| Done | Squash-merge returned |

Wake order: merge → Review refill → Doing fill.
