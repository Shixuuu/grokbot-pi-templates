---
name: gift-watchlist-auto-grow
description: "Use when gift-link discovery should auto-add the posting account to the watchlist whenever the user approves a story — never ask for per-account watchlist approval."
---

When the user approves a story for archive/capture from a gift-link discovery list, automatically add the social account that posted that gift link to the durable watchlist. Do not ask them to approve watchlist accounts one-by-one.

## Rules

1. Story approve is the only gate. User picks which stories to archive/capture. That pick is also the watchlist signal.
2. On each approved story: identify the posting account (e.g. X handle), add it to agent memory under the gift watchlist, dedupe handles, persist immediately.
3. Do not send a separate add-to-watchlist question after story approve.
4. When reporting capture results, mention adds briefly once.
5. Before each discovery poll, load the current watchlist from memory.
6. Prefer watchlist shares in ranking when engagement is similar to a random share.

## Anti-patterns

- Asking for per-account watchlist approval
- Growing the watchlist from stories the user declined
- Growing from retweets/replies noise without a real gift URL on an approved story

Discovery routines still wait for story picks before browser capture / ingest. Auto-watchlist does not mean auto-capture.
