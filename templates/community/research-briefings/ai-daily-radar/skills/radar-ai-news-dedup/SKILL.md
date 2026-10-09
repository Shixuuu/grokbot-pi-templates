---
name: radar-ai-news-dedup
description: "Use this when assembling a recurring AI news brief, to spot the same story across sources and decide whether a repeat counts as an \"Update:\" or should be skipped."
---

# AI news dedup

Keep a ledger of reported items (one line each: date reported, vendor, short story key such as `vendor-product-event`, primary URL). Read it before every brief; append to it after every brief.

## Same story?
Treat two candidates as the same story when any of these match:
- The same primary URL (ignore tracking params, trailing slashes, locale paths).
- The same vendor + same product/model name + same event type (launch, price change, benchmark, deprecation), within about 7 days.
- A secondary article whose main link points to an already-reported primary source.
Merge duplicates found in the same run into one item, keeping the primary link plus the best secondary.

## Repeat or update?
Skip an already-reported story unless something MATERIAL changed:
- Announced became shipped or generally available.
- A vendor claim got independently tested (tag changes), or independent results contradict it.
- Price, limits, or availability region changed.
- A rollback, deprecation, or security issue.
If material, include it with the headline prefixed `Update:` and say in one line what is new. Commentary, reposts, or opinion pieces on an old story are not updates.

## After the run
Append every new or updated item to the ledger. Keep about 30 days of history.
