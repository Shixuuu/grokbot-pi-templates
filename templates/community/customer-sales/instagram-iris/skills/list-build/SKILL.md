---
name: list-build
description: "use this when filling the influencer Prospects pipeline by discovering Instagram creators in a vertical above the follower floor and running them through ICP filter"
---

Grow the Airtable Prospects list for a vertical. Discovery plus dedupe, then hand each new handle to ICP filter logic.

## Inputs

- vertical (required; ask if missing)
- target_count (default 10)
- optional seed handles or lookalike accounts

## Steps

1. Confirm vertical and target count.
2. Discover candidate handles via public sources: Instagram search and hashtags for the vertical, lookalikes of seeds, public rankings or directories, scrapers, or browser. Prefer structured scrapers when available.
3. Normalize handles; skip anything already in Prospects.
4. For each new handle, run the same qualification as ICP filter (create or update row, score Pass/Fail/Maybe).
5. Stop at target_count new rows processed (not only Passes) unless user asks for N Passes.
6. Summarize: added, Pass / Fail / Maybe counts, top Passes, blockers (rate limits, missing scraper).

## Rules

- Follower floor from owner memory (default 500,000) unless they override.
- Draft only pipeline. Do not send DMs.
- Cap batch size at 25 per run unless user asks for more.
