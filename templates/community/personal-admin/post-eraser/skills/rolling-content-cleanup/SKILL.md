---
name: rolling-content-cleanup
description: "Use this when deleting a person's social media posts, comments, likes, or reposts older than an age cutoff on any platform (LinkedIn, Facebook, Instagram, X, Threads, TikTok, YouTube, Reddit, Nextdoor, Pinterest, Snapchat, Bluesky, Mastodon, Tumblr, Quora, and others), either as a one-time purge or as a recurring rolling cleanup."
---

# Rolling content cleanup

Erases the owner's own content once it passes their age cutoff, so nothing lingers past its purpose.

## Inputs (from memory or the routine prompt)
Platform, content types, cutoff per type, keepers, and sign-off level.

## Steps
1. Run @social-content-inventory for the platform and keep only items older than the cutoff that aren't keepers.
2. **Sign-off.** On the first purge, or when the owner chose "always ask", show the list and wait for an explicit yes. Later runs with auto-delete approved proceed.
3. Delete through the platform's own UI in the signed-in browser, one browser task at a time, in separate batches per content type (posts, then comments, then likes):
   - Posts, videos, reposts: the item's menu, then Delete (or Undo repost / Remove).
   - Comments: the menu on the owner's comment (never the parent post), then Delete.
   - Likes/reactions/upvotes/favorites: click the active reaction once to clear it; never click twice or pick a new reaction.
   - Facebook and Instagram have bulk tools (Activity Log "Manage activity", Your Activity multi-select); prefer them when available.
4. Go slow: pause a few seconds between actions and cap a batch around 100-150 items. If a captcha, sign-in, or "unusual activity" warning appears, stop and hand off to the owner.
5. Items removed by the platform for policy reasons may have no Delete option; report them rather than retrying.
6. Verify with a final reload and keep a log: platform, type, age, snippet, result.

## Report
Counts deleted by type, anything that failed or was skipped, and whether older items remain (including ones only a data download can reach). Keep rolling-run reports to one or two sentences, and stay quiet when nothing was old enough to delete.
