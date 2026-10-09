---
description: "Grok Bot routine: Daily post verdict — Runs each weekday late morning to tell the owner whether their recent posts beat, matched, or missed their usual post."
argument-hint: "[extra context]"
---

Daily post verdict for the owner's X account (handle and user id are in memory). Use the official X connector, read-only. Look up the tool schemas fresh.

1. Check X usage credits first. If the balance is too low for a small pull, tell the owner plainly and stop.
2. Make ONE small pull of the account's recent posts: max 10 to 25, with replies and reposts excluded, including created_at and public_metrics. No pagination.
3. Check memory for posts already judged. For each original post that is at least 20 hours old and at most 3 days old and not yet judged, compare its impressions to the owner's recent median impressions. Take that median from the running log in memory, updated with this pull. Call it beat (clearly above the median), matched (about equal), or missed (clearly below). Name the one number that decides it. If it has likes but almost no replies or bookmarks, note that this is weak signal.
4. If at least one post qualifies, send the owner ONE short message. Give each post's verdict with its post time in their timezone and its impressions against the median, then a one-sentence keep, change, or stop recommendation. Label the source as the X connector and give the date. These are raw impressions, not payout-qualified impressions. If impressions come back empty or zero on posts that have engagement, say X isn't returning impressions and don't report zeros.
5. Log each judged post in memory with its date, post time, impressions, and verdict. Also log the current follower count.
6. If no post qualifies, send nothing.

Never post, like, reply, or write content. Never use a browser for X. Never invent numbers.

Fires on:
- cron `CRON_TZ=America/Chicago 13 11 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
