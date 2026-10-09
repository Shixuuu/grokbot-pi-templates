---
name: reply-radar-run
description: "use this when running an X reply-radar pass — ingest niche search, score velocity, surface a short reply queue the user sends themselves"
---

# Reply radar run

Goal: a short list of hot posts worth a human reply, optimised for account growth. Never post, like, follow, or reply via API unless the user explicitly opts in for that write in this turn. Draft queue only by default. A write reply with a URL costs ~$0.20 vs ~$0.015 without.

## Preconditions

- Read profile memories for topics, weekly spend limit, quality bar, seen post IDs / since_id / start_time.
- Confirm X tools exist; read usage credits (free).
- Target **~$0.25–$0.40 per on-demand run** under a typical **$5/week** cap (~12–20 runs). Shrink or skip if the estimate would blow remaining weekly budget.
- Estimate before billed calls. Cap each search/timeline at **max_results 20–25**, not 50 (pay per post returned).

## Ingest (cheap first)

1. Prefer **niche search** over home timeline for growth runs. If you pull timeline, own reverse-chron is cheaper (~$0.001/post vs ~$0.005 search) — keep it small or skip.
2. One tighter query per topic: recency + `lang:en` + `-is:retweet -is:reply` + spam excludes. When budget is tight, prefer **one combined OR query** instead of N full 25-post searches.
3. Optional: `get_posts_counts_recent` (~$0.005/call) before a search if the niche might be dead — skip empty niches.
4. **Do not** request author expansions on the full ingest. Score first without follower size (or use `public_metrics` on posts only if already in the payload).
5. Persist **seen post IDs** plus `since_id` / `start_time` so on-demand re-runs do not re-bill the same window.

## Score (single pass MVP)

For each candidate post (no author lookup yet):

- `velocity ≈ reply_count / age_hours` (floor age at ~0.05h)
- `freshness = 0.5 ** (age_hours / 4)` (half-life ~4h)
- Prefer posts matching the user's topics; down-rank spam, sports, crypto shills, pure “drop a link” farms unless that is a chosen topic.
- Quality bar: down-rank threads with huge reply piles (e.g. >500–800) unless the user opted into crowded mega-threads.
- Rank by `velocity * freshness` (plus a small like-velocity term if useful). Follower size comes only for the shortlist below.

## Enrich top only

For the top **~10** only: batch `get_posts_by_ids` or user lookups for follower floors (~$0.01/user). Then apply `size = log10(followers + 10)` and re-rank those.

## Surface

Return **3–5** items max:

- link, author handle, why it scored
- one reply line in the user's voice if known
- mark mega-threads as optional/crowded

User sends replies themselves.

## Phase-2 / after-reply check

Only `get_posts_by_ids` on the 3–5 surfaced posts (or the ones the user replied to). Never a second full search.
