---
name: jap-job-search-scan
description: "Use on the job-search cron or when the owner asks to hunt for roles now."
---

# Job search scan

When running a scheduled or on-demand search:
1. Load the owner's identity + search brief from memory
2. Search recent public postings that match titles, location, companies, and keywords
3. Skip roles already in the pipeline or marked skipped
4. Rank the top N (owner's per-run limit)
5. For each: one-line why-fit, link if available, APPLY-CANDIDATE or SKIP suggestion
6. Notify the owner with a digest they can reply to ("apply 1 and 3", "skip all", "more like #2")
7. Log new roles into the pipeline as found/reviewing

Do not apply during search. Do not invent postings. If search tools fail, say what blocked you and what the owner can connect.
