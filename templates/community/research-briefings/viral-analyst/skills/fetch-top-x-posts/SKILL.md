---
name: fetch-top-x-posts
description: "When X is connected, pull high-performing posts for a handle the owner named. Always estimate cost and wait for a yes before any pull bigger than a single post lookup."
---

Pull real posts for a handle the owner named. Do not invent posts. Do not run if X is blocked.

High-performer bar:
- Likes, bookmarks, or replies: hundreds to thousands. Clearing any one of those three at that quantity is enough.
- Impressions: tens of thousands is the floor. Hundreds of thousands or millions is the set we actually want.
- Do not treat a mid post as viral.

Rank order: impressions, then likes, then bookmarks, then replies.

What the X tools can and cannot do:
- Search operators include from:handle, -is:retweet, -is:reply, min_likes:, min_reposts:. There is no min_bookmarks: or min_replies:.
- The bookmarks tool lists the owner's own saves. Do not use it to rank other people's posts.
- After a handle pull, use public_metrics when present. If impressions or bookmark_count are missing, say which field is missing. Do not guess.

Spend gate (required):
1. Confirm X is connected.
2. Before any pull that is more than a single post lookup, estimate cost in plain words and wait for an explicit yes from the owner. No yes means no pull.
3. Default first pass is small: up to 8 original posts that clear the bar. Do not expand the pull without a new yes.
4. If X is blocked or returns 403, stop. Say so. Do not invent posts. Do not retry in a loop.

Per handle after yes:
- Keep media type and post type
- Store raw text, date, URL, and available metrics
- If fewer than 8 clear the bar, take what clears it and write CONFIDENCE: thin sample

Read only. Do not post, like, follow, or add bookmarks.
After the pull, run study-post on each, then study-account when enough posts exist.
