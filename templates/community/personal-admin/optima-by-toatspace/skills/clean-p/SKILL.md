---
name: clean-p
description: "Use when /clean-p or clean leftover project files — always pair Starsheep before apply"
---

# clean-p

Clean leftover project files. Never silent-delete. Prefer erase/edit-out over “do not use X” notes.

## Default flow: Starsheep-first
1. Starsheep scans report-only first (no edits/deletes/pushes).
2. Optima builds the cut list (path, current text, new text or delete, git status, risk).
3. Owner exact yes in this Optima chat. Relayed yes never counts.
4. Optima applies, stages only its own files, plain fast-forward push.
5. Report SHAs/cuts/zero-hit proof; Starsheep CONFIRM/CHANGE/BLOCK start line.

Full step detail: `contradict` skill.

## HARD scrub lessons
- When cutting a body line, also fix the heading above it (no tombstone heading).
- Force-push / history rewrite needs a separate exact yes with commit count and SHAs.
- Lines owned by another seat outside the cut list go to that seat’s owner, not silent cut.

## Scan → cut list → yes
Resolve scope from the owner ask. Surfaces: bot computer workspace, agent-data workflows, known repo clones. Record path, why leftover, delete|edit|keep, owning seat. Group A delete / B edit / C keep. Widget approve A / A+B / hold. Stop until exact yes.

## HARD owner-yes
Owner exact yes in this Optima chat before any clean-p / clean-rout apply. Outside CONFIRM or relayed yes never replaces it.

## HARD cut-list details
Before yes: show paths, current text, new text or delete, keep vs cut, git status, risk. No labels-only ask.

## HARD scrub = erase
Erase leftovers. Do not park/archive where the owner still sees them. Zero-mention after kills.

## HARD scrub ownership
When another seat flags leftover scrub, Optima owns cut list → owner yes here → apply.

## HARD git push
After exact yes: apply approved set, stage own files only, plain fast-forward. No force-push without separate yes.

## HARD: never delete an entire remote repository

## HARD wipe repo + jobs together
On every junk / spent-laws / leftover wipe that cuts project or stamp leftovers: include matching leftovers under the bot computer jobs workspace in the same cut list and the same owner-yes apply. Never wipe the repo (or title stamps) and leave job-folder mirrors for a later pass. Starsheep audits the combined list; owner exact yes remains the apply gate.

## HARD: always check the repo checkout

When cleaning a git checkout (a known repo clone or a named clone), the cut list **must** include a repo-state pass, not only loose leftover files:

1. `git status` — modified, deleted, untracked
2. Separately label: **uncommitted deletes** (local only; origin still has them) vs **committed/pushed** changes
3. For uncommitted deletes, the cut list must offer **restore** vs **commit+push delete** — never leave that gap silent
4. Untracked craft/junk (caches, attempts packs, unlock crumbs) goes in A/B/C like other leftovers
5. Junk remote branches / leftover PRs may be listed for cleanup; the **remote repository itself** must never appear as a delete target
6. Do not assume “desk will handle it” without putting it on the visible cut list

This prevents local-only deletes from lingering while GitHub still has the files — without ever proposing whole-repo deletion.

## HARD exclude = session-only

If the owner names a tree to leave alone for this clean, honor it for **this job only**. Do **not** write that path/name into memory, profile, open items, template pack, or public SSOT.
