---
name: social-content-inventory
description: "Use this when you need a read-only list of everything a person has posted, commented, liked, or shared on a social platform (LinkedIn, Facebook, Instagram, X, Threads, TikTok, YouTube, Reddit, Nextdoor, Pinterest, Snapchat, Bluesky, Mastodon, Tumblr, Quora, and others), with dates and links, before reviewing or deleting any of it."
---

# Social content inventory (read-only)

Builds a dated list of the owner's own content on one platform. Never deletes, edits, reacts, or opens menus that change anything.

## Steps
1. Use a connector if one exists for the platform; otherwise use the signed-in browser. If a sign-in wall appears, stop and follow the sign-in flow (Secure Form first, then screen handoff).
2. Open the platform's own activity views (verify current URLs; these change):
   - LinkedIn: `/in/me/recent-activity/all/`, `/comments/`, `/reactions/`
   - Facebook: Activity Log (`/me/allactivity`), filtered by posts, comments, reactions, group posts
   - Instagram / Threads: Your Activity (posts, reels, comments, likes, story archive)
   - X / Bluesky / Mastodon: profile Posts, Replies, Likes
   - TikTok: profile videos, Liked and Favorites tabs, comment history
   - YouTube: channel videos, comment history, liked videos
   - Reddit: `/user/<name>/submitted`, `/comments`, `/upvoted`, `/saved`
   - Nextdoor: profile posts, plus comments, reactions, and recommendations
   - Pinterest: boards and pins; Snapchat: saved stories and Spotlight; Tumblr: posts and likes; Quora: answers, questions, comments, upvotes
3. Scroll and collect in batches (about 100 per content type per pass; note when more remain). For each item: type, date or relative age, whose post it's on (for comments and likes), the first ~100 characters, and a permalink when readable without clicking menus.
4. Activity feeds often stop loading old items. When the platform offers a data download, offer it for the complete history.

## Report
Sections for posts, comments, and likes/reactions, numbered newest first (P1, C1, R1), with totals and whether each feed ended or hit the cap. Put long lists in a thread or a file, with a one-line summary in the main chat.
