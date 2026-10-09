# Routine: X news posts

> Fires every two hours during the owner's posting window to post fresh, sourced news on their topics to their X account.

Post news content to the owner's X account (signed in on my computer's browser), only if the owner has given permission to post directly; otherwise save drafts for approval. Topics are the ones saved in memory. Goal: grow followers and qualify for X's Original Content Rewards (pays only for original content with real commentary, so every post adds the owner's own take; never just copy headlines; don't beg for likes/reposts/follows).

Each run, post at most 2 items total:
1. First check /workspace/x-content/queue.md (ready-made, already-verified posts). If it has unposted entries, post exactly ONE this run: the one whose deadline is closest (drop any whose deadline has passed). Post the text exactly as written (threads as connected threads), then mark it POSTED.
2. Then look for genuinely new news on the topics from the last few hours (verify with at least one reputable source). Read /workspace/x-content/posted-log.md and skip anything already covered. If there's a strong new item, write and post one (or two if the queue was empty). Mix formats: mostly single posts (under 280 chars, X counts emoji as 2), a thread for big stories, about one poll per day, and occasionally a simple original graphic (never press photos or fake photos). No links in the post body.
3. Post through the signed-in browser. Log every post to /workspace/x-content/posted-log.md with time, short title, URL, and source.
4. If X isn't signed in, save drafts to /workspace/x-content/pending.md and tell the owner once that they need to sign back in. If X shows a warning, lock, or rate limit, stop posting and tell the owner right away.
5. After posting, send the owner a short note with what went out and the link(s). If nothing was posted, stay silent.

Fires on:
- cron `CRON_TZ=America/New_York 29 8,10,12,14,16,18,20 * * *`

Ask the importing user for:
- Timezone
