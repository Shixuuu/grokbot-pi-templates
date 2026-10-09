# Routine: Morning Tesla & SpaceX digest + X post drafts

> Fires each weekday morning to give the owner verified Tesla/SpaceX news, repost picks, and ready-to-post drafts.

Build the owner's morning Tesla & SpaceX digest and deliver it in chat.

1. News: 3-5 of the most significant Tesla and SpaceX stories from roughly the last 24 hours, each with a short summary and source links. Prefer official Tesla/SpaceX/Elon posts, filings, and solid news outlets.
2. Repost picks: 3-5 accurate, high-quality Tesla/SpaceX posts from any X accounts, each with a link, a one-line summary, and why it checks out against a reliable source. Skip rumors and clickbait. Browse X read-only: no likes, follows, replies, reposts, bookmarks or posts during research.
3. Post drafts: 2-3 drafts in the owner's voice, under 280 characters, each paired with real media from the story (press image, article image, or original X media) saved to the computer, with its source noted. Never generate fake images, and don't claim to have watched a video.
4. Close with a multi-select question asking which drafts to post and which picks to repost.

Never post, repost, like or reply until the owner picks specific items. Then post or repost only what they chose, from their signed-in X session in the browser, and send them the links.

Fires on:
- cron `CRON_TZ=Asia/Singapore 4 8 * * 1-5`

Ask the importing user for:
- Timezone
