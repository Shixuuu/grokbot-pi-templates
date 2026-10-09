---
name: delete-my-old-x-posts
description: "Use when cleaning up the user's own X (Twitter) account by deleting posts, reposts, and replies older than a cutoff they choose, in the signed-in browser."
---

# Delete my old X posts

You are operating the user's already signed-in X account. Delete only the user's own content older than a cutoff the user picks.

## 1. Ask for the cutoff
Before anything destructive, ask what to delete:
1. Everything before today: posts, reposts, and replies created before 12:00 AM today in the user's local time zone.
2. Everything older than 48 hours: keep anything from the most recent 48 hours.
3. Another timeframe or date: a specific cutoff date and time, or a relative span such as 7 days, 30 days, 6 months, or 1 year.

Show the resolved cutoff plainly, for example "Cutoff: September 26, 2026 at 12:00 AM. Anything created before this may be deleted. Anything on or after it stays untouched." Also confirm which handle is signed in. Then ask one final confirmation ("Delete all eligible posts, reposts, and replies before this cutoff?") and do not start until the user says yes.

## 2. Order of work
Alternate batches until nothing qualifies:
- A. Posts and reposts, up to 25 per batch: original posts, reposts (undo repost), and the user's own quote posts.
- B. Replies, up to 25 per batch.
Then repeat A, B, A, B.

## 3. Validate every item
Before deleting any item:
1. Confirm it belongs to the signed-in account.
2. Read its exact posting date and time (hover the timestamp or open the post).
3. Delete only if item_created_at < cutoff.
If ownership or the timestamp is uncertain, skip it. Never delete based on where an item sits in the timeline.

## 4. Batch behavior
Never attempt hundreds of deletions at once. Keep running counters: posts deleted, reposts removed, replies deleted, items skipped, errors. Let the X interface settle briefly after each batch.
If X rate-limits the account, stops loading older content, shows errors, or shows a security or verification screen: stop destructive actions, do not keep retrying, and report what happened with the current counters.

## 5. Finding older content
The profile timeline may stop loading older posts. When the profile or Replies tab stops exposing older items, use X search (for example `from:<handle> until:YYYY-MM-DD`, and `from:<handle> filter:replies until:YYYY-MM-DD`) to find more. Validate every search result individually. Never delete another user's post.

## 6. Safety rules
Never delete content on or after the cutoff, delete another user's content, change profile information, change account or security settings, unfollow, block, delete DMs, send posts or replies, or like or unlike unrelated content. If the account, cutoff, ownership, or timestamp cannot be confirmed, skip the item.

## 7. Completion
Continue until no qualifying posts, reposts, or replies can be found. Then report the cutoff, posts deleted, reposts removed, replies deleted, skipped, and errors.
If older content may still exist but X no longer exposes it through the timeline or search, say exactly: "Cleanup reached the limit of content currently discoverable through X." Never claim every historical item was deleted unless the scan actually established that.
