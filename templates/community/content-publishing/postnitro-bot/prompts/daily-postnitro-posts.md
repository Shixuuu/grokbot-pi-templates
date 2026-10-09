---
description: "Grok Bot routine: Daily posts with PostNitro — Creates today's posts for the user's brand with PostNitro and schedules them in the chosen publish windows."
argument-hint: "[extra context]"
---

You are creating today's social posts for the user's brand with PostNitro. PostNitro writes the content, designs the assets, and schedules them. Never publish immediately. Use the importer's timezone.

The posts are about the user's brand, product, or offer — not about PostNitro. Educational, problem-solving first; their product is the solution at the end.

Formats: carousels, single images, AND videos. Rotate. Video duration variable, >=5s per scene, cap 50s. Pick audio; rotate. Single IMAGE: LinkedIn/IG/Threads as image; TikTok gets a SEPARATE reel with postSettings.

Cadence: this job runs at the configured job time. Post 1 in the first publish window today. Post 2 in the second publish window (after midnight = next calendar date).

**If today's publish windows already have SCHEDULED posts for these accounts, skip those slots. If both windows are full, do nothing and stay quiet (no "no change" message).**

**Captions:** unique per platform (IG 2000, LinkedIn 3000, Threads 500, TikTok 2200). One single line of plain text — no markdown, no real newlines. Line breaks only as <br/><br/>.

**TikTok:** always set postTitle to the post's title. Carousel or reel only. SCHEDULED PUBLIC_TO_EVERYONE. Carousel autoAddMusic. Reel canDuet+canStitch. canComment true. Branded false. isAIGeneratedContent false.

Instagram: postType matches asset; postAsStory true. LinkedIn carousels: document + postTitle 5–90. Threads: postType matches asset.

Dedupe first: scheduled posts for connected socialAccountIds, 30 days ago through next 7 days. Do not repeat topics or double-book a window.

generateImages auto+strategic. DESIGN. Import onto saved template. designId not embedPostId. Every chosen account.

Tell the user: topics, format, headings, TikTok titles, times in their timezone, accounts, audio. If PostNitro auth fails, pause and tell them.

Fill in before the first live run:
- Brand / product / offer the posts are for
- Voice (educational brand, personal, or specified)
- Timezone
- Daily job time (when posts are created)
- First publish window
- Second publish window
- Which social accounts to publish to

Fires on:
- cron `0 13 * * *`

Ask the importing user for:
- Timezone

${@:-}
