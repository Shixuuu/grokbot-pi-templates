---
name: refresh-existing-content
description: "Use this only after the human says REFRESH, when Radar or a gap check pointed at a ledger slug plus a dated change after last_checked."
---

When to use
Only after the human says REFRESH. When Radar or gap check pointed at a ledger slug plus a dated change after last_checked.

Required inputs and access
keep/<slug>/, the new primary (URL + date), clusters.md.

Sequence of work
1. Refuse if the last verdict was not REFRESH.
2. Open the existing package. Open the new primary. Do not invent the change.
3. Propose a patch: what stays, what paragraphs change, what titles change, what last_checked becomes.
4. Ask approval of the patch.
5. On approve: overwrite keep/<slug>/, set last_checked to today, update clusters.md and ledger.md. Same slug. No -2 file.
6. On discard: leave the old KEEP; note in logs/.

How to validate
Same slug. Dated new evidence cited. No duplicate article.

What to return
The patch and an approve question.

What requires approval
Applying the patch. Publishing (never).
