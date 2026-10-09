---
name: creator-tracker
description: "Use this when building, running, or fixing a Creator Tracker for any list of X accounts: the X API scripts behind the new-post alerts and the creator leaderboard."
---

# Creator Tracker (X API v2)

Read-only tracker for any list of creators on X, optionally filtered to one topic. It uses the official X API with the owner's own Bearer Token and never posts, likes, follows, or replies.

## Setup
- Project folder: `/workspace/creator-tracker`. Keep all owner choices in one file, `config.py`, that both scripts import:
  - `HANDLES`: the owner's list of X usernames (no @). Usually 5 to 20; more handles means more API calls.
  - `TOPIC_NAME`: a short label such as "Tesla", "crypto", or "F1". Leave it empty to track everything.
  - `TOPIC_KEYWORDS`: case-insensitive substrings that make a post on-topic. Draft 15 to 25 of them from the topic (names, products, tickers, common abbreviations) and show them to the owner. An empty list means every post counts.
  - `EXCLUDE_PATTERNS`: regexes that mark a post off-topic even when a keyword matches (for example, sponsored promos or unrelated events). Start empty and add patterns when the owner flags false positives.
  - `INCIDENTAL_PHRASES`: phrases stripped before matching so they only count alongside another keyword. Start empty.
- Token: read `X_BEARER_TOKEN` from the environment. If it's missing, fall back to the box secrets file (`/home/box/agent-data/box-secrets.json`, key `.card.X_BEARER_TOKEN`). Put it only in the `Authorization: Bearer` header, and never print, log, or write it.
- Use `note_tweet.text` when present, because long posts get truncated in `text`.
- Safety: on HTTP 401, 402 (out of credits), 403, or 429, stop making calls and report the error. Append every request to `calls.log` (no token), and cache raw JSON responses under `data/`.

## API calls
- Look up user ids once and cache them: `GET /2/users/by?usernames=<comma list>&user.fields=public_metrics`. This also returns follower counts. Report any handle that doesn't exist or is private.
- To get posts: `GET /2/users/:id/tweets` with `exclude=replies,retweets`, `max_results=100`, and `tweet.fields=created_at,public_metrics,note_tweet,entities`. Follow `next_token` only when present, up to 3 to 5 pages.

## alerts.py (new-post alerts)
- State file `data/alerts_state.json` stores `{handle: {since_id, last_checked}}`. Each run makes one call per handle with `since_id`.
- First run: seed each `since_id` with the newest post id and don't alert on anything.
- Only on-topic posts become alerts (all posts when there's no topic). Skip alerts for posts older than 24 hours, but still advance `since_id` past them.
- Cap each run at 25 alerts, keeping the newest. Hold back overflow by keeping `since_id` just below the oldest held post and storing already-handled ids in `seen_ids`, so nothing is lost or repeated. Advance state only for handles whose call succeeded.
- Write `data/alerts/<YYYY-MM-DD_HHMM>.json` with a list of alerts: handle, post_id, url `https://x.com/<handle>/status/<id>`, created_at (owner's local time), text, and metrics (views, likes, reposts, replies, quotes, bookmarks). Include run info: api_calls, errors, new_posts, alerts, and skipped counts.
- Flags: `--dry-run` (no calls), `--no-advance`, and `--latest-summary-file`, which makes the last stdout line `OUTPUT: <path>`.
- The assistant writes a one-sentence summary per alert from the post text only, and saves the summaries to `<same stem>.summaries.json`.

## leaderboard.py (rolling 7-day leaderboard)
- Run as `python3 leaderboard.py --date YYYY-MM-DD`. Use a 7-day window ending at the run time, with `start_time` set on the timeline call. Save a follower snapshot to `data/snapshots/<date>.json` for weekly gains.
- Count on-topic original posts only (all original posts when there's no topic). For each creator compute views, engagement (likes + reposts + replies + quotes + bookmarks), engagement rate (engagement divided by views), followers, and post count.
- Rank the creators on each of those 5 categories using competition ranking. The overall score is the average of the 5 ranks (lower is better), with ties broken by views.
- Output `leaderboard-<date>.md` titled with the topic name, with the overall table, per-category tables, post of the week (top post by engagement), most efficient creator (top engagement rate), and a section per creator with their ranks, the gap to the creator above, and their best post link with a one-line summary. If a previous leaderboard exists, show the rank change since then.
- Paid subscriber counts aren't available in the X API. Say so if the owner asks.

## Changing the list later
When the owner adds or removes a creator or changes the topic, edit `config.py`, look up any new user ids, and seed new handles in the alert state (no alerts on their old posts). Tell them how the daily call count changed.

## Cost
Every call costs X API credits, including checks that find nothing new. One alert check is about one call per creator, and one leaderboard run is about 1 + 1 to 3 calls per creator. Tell the owner these numbers when choosing schedules.
