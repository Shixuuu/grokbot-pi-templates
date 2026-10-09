---
name: norm-skills-normalize
description: "Use after Norm discovery + naming map lock — show soft suggestions for skill overlaps, orphans, and live-vs-template gaps; never auto-delete; owner confirms each skill edit; one change at a time. Public-safe."
---

# Norm skills normalize

**One job:** soft skill-cleanup suggestions on the owner-chosen scope, then apply **only** owner-confirmed edits — one at a time.

Public-safe twin of house skill-hygiene process. **Never** pack `fleet-*`. Follow [Human gate every step (public)](sand-workflow:human-gate-every-step-public). For irreversible skill deletes/rewrites, show the draft and get an explicit confirm (danger-styled for deletes).

## When

- After [Norm roster discovery](sand-workflow:norm-roster-discovery) scope + [Norm naming map lock](sand-workflow:norm-naming-map-lock) (or explicit map defer with owner OK to proceed on hints-only)
- When the owner asks “any overlapping skills?” / “clean up skills after a bot delete”

## Standing rules

1. **Soft suggestions only** in the first report — no silent deletes or rewrites.
2. **Owner confirms each skill edit** (add / rewrite / reattach / delete). One change per gate.
3. **No auto-delete.** Delete proposals always need an explicit danger-styled confirm.
4. **Scope from discovery** — Live only by default; Templates only if opted in; never “all accounts.”
5. Prefer **rewire / fold prose** over creating new bots.
6. Do not import another account’s skill matrix as truth for this sidebar.

## Hint classes (report)

| Class | Meaning |
|-------|---------|
| **Overlap** | Same sand-workflow id (or near-dupe job) linked by 2+ bots in scope |
| **Orphan** | Skill whose obvious owner bot is gone / folded — reattach, retarget, or delete (confirm) |
| **Hang** | Stale teammate names in skill prose; teaser bots with no skills; widgets that double-gate |
| **Live↔Template gap** | Live process skill missing from its template twin (or reverse) — hint only; template edits need opt-in scope |
| **Pack risk** | `fleet-*` or house seat names found in a bot that publishes templates — flag; do not “fix” by packing fleet skills |

## Steps

1. **Preconditions** — discovery scope recorded; naming map locked or deferred with owner OK. Else stop and run those skills first.
2. **Skill map** — for each bot in scope, list skill ids from profile / skill library links (sand-workflow pills). Cap the first report; offer “show more.”
3. **Soft report** — P0 / P1 / P2 hints in plain English (counts + a few examples). No apply yet.
4. **Batch pick widget** (ends turn):

   **Prompt:** Soft skills report ready — what next?

   **Options:**
   - **Walk fixes one-by-one** (primary)
   - **Show more detail** — expand one class
   - **Stop — hints only**

5. **One-change loop** (only on Walk):
   - Propose **one** edit: target bot + skill id + action (rewire link / rewrite prose / reattach / delete) + simulated draft/diff summary.
   - Widget: **Apply this edit** | **Skip** | **Stop normalize**
   - Apply only on Apply. After apply: check for new errors; then next single hint or stop.
6. **Deletes** — separate confirm with danger style; never bundle with a rewire in the same OK.
7. Record a short closeout in memory (labels): what was hinted, what applied, what skipped.

## Anti-patterns

- Auto-deleting skills
- Batching unrelated skill edits in one OK
- Normalizing Templates without discovery opt-in
- Treating silence / dismiss as Apply
- Using another house’s ACTIVE_FLEET matrix as this importer’s source of truth
- Packing `fleet-*` hygiene skills into the public Norm pack
- Claiming “all skills normalized” after hints-only

## Success proof

Owner saw a soft report first; every applied skill edit had its own explicit OK; no skill deleted without a danger confirm; Templates untouched unless opted in.
