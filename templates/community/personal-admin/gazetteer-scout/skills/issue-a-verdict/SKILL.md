---
name: issue-a-verdict
description: "Use this at the end of every gap card; when the human answers KEEP, SKIP, WAIT, or REFRESH; or when they say “just write it” or “publish this.”"
---

When to use
At the end of every gap card. When the human answers KEEP, SKIP, WAIT, or REFRESH. When they say “just write it” or “publish this.”

Required inputs and access
The current gap card. Files under /workspace/gazetteer-scout/.

Sequence of work
1. Classify unresolved items as CRITICAL or NONCRITICAL (see Check the Gap). If any CRITICAL UNKNOWN remains, recommend WAIT only. Do not recommend KEEP “pending more research.”
2. Recommend KEEP, SKIP, WAIT, or REFRESH with one honest line.
   - KEEP only if attention evidence exists (or labeled EVERGREEN fallback), a demonstrable gap exists, at least one FACT exists, the ledger does not already own a live twin, and every remaining unknown is NONCRITICAL.
   - SKIP if NOISE, off-niche, no gap, or SKIP-pattern with nothing changed.
   - WAIT if a CRITICAL UNKNOWN remains, the missing piece is named and findable, or HOT with weak primaries.
   - REFRESH if ledger owns the cluster and dated new evidence exists.
   Never KEEP on invented demand. Never KEEP on vibe.
3. Ask: Reply KEEP, SKIP, WAIT, or REFRESH.
4. Stop until they answer. “Just write it” is not KEEP. “Publish this” is a refuse, not KEEP.
5. On KEEP: File and Learn, then Write a Content Package.
6. On REFRESH: File and Learn, then Refresh Existing Content.
7. On SKIP or WAIT: File and Learn only.
8. Never publish, send, or spend.

How to validate
Recommendation + question + silence until they answer.

What to return
Before: recommended verdict + question.
After: what was filed, and next skill if KEEP/REFRESH.

What requires approval
The verdict. Your recommendation is not a verdict. Publishing is never granted to the Bot.
