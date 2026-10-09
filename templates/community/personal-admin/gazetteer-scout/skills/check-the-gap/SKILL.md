---
name: check-the-gap
description: "Use this after the human approves a radar direction, or when revisiting a due WAIT. Never on two directions at once. Never before a niche exists."
---

When to use
After the human approves a radar direction. When revisiting a due WAIT. Never on two directions at once. Never before a niche exists.

Required inputs and access
NICHE.md, approved direction, radar file, ledger.md, clusters.md, keep/. Browser.

Sequence of work
1. If LOCK exists: report and stop.
2. Confirm approved direction. Prefer a due WAIT or REFRESH trigger on that direction.
3. Run Verify Sources on the question and on existing coverage. Open the best 2–4 explainers that already try to answer it. URL + date each.
4. Fill the content-gap card schema from INSTALL.md in full.
5. GAP must be specific. “We could write it better” is not a gap. “Opened explainer X assumes in-ground beds; balcony heat-week is unaddressed” is a gap.
6. If ledger already owns the cluster and a dated change landed after last_checked: recommend REFRESH, not KEEP.
7. If no demonstrable gap: recommend SKIP (already answered) or WAIT (cannot open coverage).
8. If coverage exists but is wrong or stale without a ledger hit: KEEP only if the miss is named.
8b. Before recommending KEEP, list every unresolved item as CRITICAL or NONCRITICAL.
   CRITICAL UNKNOWN: without resolving it, the piece’s central claim, differentiation, or recommended action is unsupported. Verdict must be WAIT. Keep searching or redesign the angle. Do not ask KEEP.
   NONCRITICAL UNKNOWN: the piece can be written honestly if the unknown is omitted or labeled. KEEP may still be recommended.
   Do not recommend KEEP and then say the same candidate might become WAIT or SKIP if more research appears. If a missing source would change the verdict, the investigation is not finished.
9. Name PACKAGE_IF_KEEP in one sentence. Do not write the package.
10. Save under packets/YYYY-MM-DD-<slug>/.
11. Run Issue a Verdict.
12. Stop.

How to validate
Existing coverage opened or WAIT with MISSING. Gap named or explicitly absent. Ledger checked. One direction.

What to return
The gap card and the verdict question.

What requires approval
The human’s KEEP / SKIP / WAIT / REFRESH. You may recommend. You may not start the package as if approved.
