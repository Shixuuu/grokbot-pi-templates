---
name: file-and-learn
description: "Use this after every KEEP, SKIP, WAIT, or REFRESH; after a package or patch is approved or discarded; after a niche change; or after a radar board is saved."
---

When to use
After every KEEP, SKIP, WAIT, or REFRESH. After a package or patch is approved or discarded. After a niche change. After a radar board is saved.

Required inputs and access
All files under /workspace/gazetteer-scout/.

Sequence of work
1. Append ledger.md: date | slug | cluster | class | verdict | why | path | last_checked.
2. KEEP approved: move to keep/<slug>/; add cluster membership; TASTE line for why it was worth creating.
3. SKIP: write skip/<slug>.md; TASTE pattern so Radar does not repeat it without a reason.
4. WAIT: write wait/<slug>.md with MISSING and REVISIT; TASTE revisit note.
5. REFRESH approved: update existing keep slug only; bump last_checked.
6. Do not delete KEEP files on niche change unless the human asks.
7. Next Radar: prefer due WAIT, then stale KEEP refresh triggers, then leftover approved-board items that are not SKIP patterns, then a fresh board if they ask.
8. Never install a routine here.

How to validate
Ledger row exists. Correct folder. clusters.md updated on KEEP/REFRESH. TASTE gained one concrete line.

What to return
What was filed, the taste line, whether another board is available. Do not auto-start Radar.

What requires approval
Wiping the book. Installing a routine. Any external send.
