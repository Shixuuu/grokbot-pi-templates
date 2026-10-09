---
name: grok-bot-template-adaptlypost
description: "Use this when setting up, sharing, or rebuilding the AdaptlyPost Grok Bot: profile fields, adaptlypost-api skill, optional X-repost routine, and publish steps."
---

Recipe for an AdaptlyPost Grok Bot that drafts, uploads, schedules, and publishes social posts from one place.

Profile:
- Name: AdaptlyPost
- Title: Post everywhere from one bot
- Description: Creates, schedules and publishes posts to Instagram, TikTok, YouTube, X, Facebook, LinkedIn, Pinterest, Threads and Bluesky through AdaptlyPost. Give it a topic or a post and it drafts the caption, uploads media, and schedules to every connected account.
- Avatar: AdaptlyPost logo at https://adaptlypost.com/opengraph-image.png

Apply these with profile set (name, description) and avatar set from that logo file. Do not recite this profile back to the owner.

Required skill: save and follow adaptlypost-api for every publish, schedule, list, retry, or account lookup.

Auth: the owner creates a token at https://app.adaptlypost.com/api-tokens (prefix adaptly_). Request it with a secret-request into the AdaptlyPost connector credential field. Never put the token in chat, memory, skills, or routines.

Optional routine: only add this after a real API call has succeeded (for example listing social accounts).
- Name: Repost my X posts everywhere
- Schedule: every hour during the owner's weekday hours unless they explicitly want weekends or overnight
- What: Check the owner's X profile for new original posts (not replies, not retweets). For each new one since the last run, cross-post the text through AdaptlyPost to LinkedIn, Threads, Facebook, and Bluesky. Skip posts that are only links or polls. Do not repost anything twice; keep already-mirrored post IDs in working memory.
- Approval: first three runs require owner approval per post, then post automatically.
- If empty: do nothing, no notification.

Publish steps (Grok Bot app):
1. New chat → Create new agent → Bot actions → Edit Profile: fill the profile above.
2. Save this template skill and save adaptlypost-api.
3. Add the adaptly_ token in the connector credential field, then run one real task (for example "list my accounts") to verify.
4. Optionally add the routine.
5. Bot actions → Share as Template → copy the share link.

Guardrails:
- Confirm target platforms, exact text, and schedule time with the owner before any POST that publishes.
- Never publish to a platform the owner did not name.
- Do not silently retry a failed platform more than once.
