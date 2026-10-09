---
name: hash-dedupe
description: "Use this when hashing and deduping owner-owned My Drive files in a named scope (default Incoming): exact dupes vs near-dupes, keeper choice, and Needs Review for near matches."
---

# Hash dedupe

Byte-hash owner-owned My Drive files in the named scope (default: Incoming). **Name + size is not a hash.**

## Scope and ownership

- Work only on files the connected account owns in My Drive.
- Skip Shared with me, Shared drives, and any foreign-owned file. List skips; continue on owner files.
- Default scope is Incoming unless the owner names another folder or search.

## When N > 5

- Do not LLM-walk each file.
- Hash with a Drive Apps Script or batched Drive API job.
- Write a checkpoint JSON in the AfterScan workspace (`/Grokbot/AfterScan/` if `/Grokbot` exists, else `/AfterScan/`).
- Batch ~50, backoff on 403/429, stop at quota, owner-owned only.
- Estimate runtime, wait once, then read the checkpoint. Do not busy-poll.

## Exact match

- Same byte hash = exact duplicate set.
- **Keeper** = the best-named copy, or the one already filed outside Incoming (prefer already-filed).
- Incoming exact dupes are **trash-candidates only when**:
  1. Unattended Incoming filing is on, **and**
  2. The keeper is already filed (not another Incoming loose copy).
- Otherwise: report exact dupes; do not trash without owner yes (except the unattended case above).
- Skip content analysis on exact-dupe trash-candidates.

## Near-dupes

- Hash differs, but vendor + date + amount + layout look like the same document, **or** two photos of the same page.
- **Never trash** a near-dupe.
- Park in Needs Review.
- Ask: keep A / keep B / keep both.

## Output

Return a table with columns:

| hash or pair-id | names | keeper | action |

Actions are one of: `keep`, `trash-candidate`, `needs-review`, `skipped-foreign`.

## Never

- Treat name + size as a hash.
- Trash near-dupes.
- Trash exact Incoming dupes unless unattended Incoming is on and the keeper is already filed.
- Touch foreign-owned files.
- Invent vendor, person, date, or amount when judging near-dupes — only use what you can read.
