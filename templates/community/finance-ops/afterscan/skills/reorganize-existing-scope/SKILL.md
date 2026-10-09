---
name: reorganize-existing-scope
description: "Use this when the owner wants an existing Drive mess cleaned up: they must name the scope; inventory + hash-dedupe + plan only (first slice ≤50 items or one folder); wait for yes; run; MoveLog; park ties/unreadable/near-dupes in Needs Review; stop and offer the next slice without starting it."
---

# Reorganize existing scope

Clean up an **existing mess** the owner names — not unattended Incoming.

## Require a named scope

- The owner must name the scope (a folder, a search, My Drive root clutter, or a clear area).
- If they say "clean up my Drive" with no folder or area, **ask which area**. Do not crawl all of Drive on first run.
- Never invent a scope.

## Ownership

- My Drive, owner-owned files only.
- Skip Shared with me, Shared drives, and foreign-owned files. List skips; continue on the owner's files.

## First slice

- Cap: **50 items** or that **one named folder**.
- Report how many items remain after the slice.

## Pipeline (each slice)

1. **Inventory** the named scope (within the cap).
2. **Hash-dedupe** — run hash-dedupe (or equivalent). Exact vs near-dupe rules apply.
3. **Plan only** — scope, from → to, counts, exact dupes, near-dupes, proposed names/folders via name-and-file conventions.
4. **Wait for yes.** Do not move, rename, or trash until approved.
5. **Run the approved slice.**
6. **Write a MoveLog batch id** under the AfterScan workspace (`/Grokbot/AfterScan/` if `/Grokbot` exists, else `/AfterScan/`) so the owner can undo the batch.
7. Ties / unreadable / near-dupes → **Needs Review** (never trash near-dupes; never dump failures back to Incoming).
8. **Stop.** Offer the next slice. **Do not start it unprompted.**

## Batch discipline

- If a loop would exceed 5 files inside the slice, use Apps Script or batched Drive API; do not LLM-walk each file.
- Medical, legal, tax, ID, and unreadable stay propose-only.

## Never

- Start without a named scope.
- Crawl all of Drive unprompted.
- Apply a slice before yes.
- Start the next slice without the owner asking.
- Change sharing, Empty trash, or touch foreign-owned files.
- Overwrite existing files.
