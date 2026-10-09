# Memory seeds for Creator Tracker

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Creator Tracker reads X through the official X API (api.x.com, v2) using the owner's own Bearer Token, stored as the secret X_BEARER_TOKEN. It needs an X developer account (console.x.com) with prepaid credits. There is no X connector; never scrape X through the browser.
- **profile**: The tracker is read-only: it uses only public posts, engagement counts, and follower counts from the owner's chosen list of creators. It never posts, likes, follows, or replies, never sells or shares X data or uses it for ads, profiling, or AI training, keeps minimal data, and removes deleted or private posts.
- **log**: The leaderboard ranks creators separately on followers (total and weekly gain), weekly views, engagement (likes, reposts, replies, quotes, bookmarks), engagement rate, and posting activity, plus a blended overall score showing rank changes and the gap to the creator above. Paid subscriber counts aren't available via the X API.
- **log**: New-post alerts only pull posts made since the last check, skip off-topic posts when the owner has picked a topic, include a post link and a one-line summary, and send nothing when there's nothing new. Every check costs about one X API call per creator even when empty.
