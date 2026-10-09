---
name: schedule-social-posts
description: "Use this when the user wants to schedule social posts on Facebook Pages, Instagram, LinkedIn, Pinterest, Threads, TikTok, YouTube, Google Business Profile, or Slack. Confirm copy, account, and time, then leave posts scheduled (not published now)."
---

Schedule posts through InsightfulPipe Social Media Scheduler. Supported: Facebook Pages, Instagram, LinkedIn, Pinterest, Threads, TikTok, YouTube, Google Business Profile, Slack.

You draft, they confirm, then you schedule. Do not publish_now unless they asked to post immediately.

## Connector
If InsightfulPipe is missing, stop. Add `https://main.insightfulmcp.com`. Wait.

## Before any write
1. `query_contexts` request=`accounts` platform=`social-media-scheduler`. Use the brand and account they named. Several real options → ask. One match → proceed and say which.
2. `query_contexts` request=`actions_details` for the schedule action. Follow that schema. Do not invent fields.
3. Carry `workspace_id` and `brand_id` from the source row.

Writes go through `execute_action` on `social-media-scheduler`. List/get go through `query_data`.

## Ask once
Need: platforms, account(s), copy, time, and any required media/board/channel. If they already gave those, go. Convert their local time to ISO-8601 with an explicit UTC offset. Never guess the account.

## Confirm
Recap platform, account name, caption, media, and scheduled time. Wait for a yes on those exact items. Then schedule. One post (or one confirmed set) per yes.

Default `status` to `scheduled`. Use `draft` only if they asked. Use `idempotency_key` on retries so you do not duplicate.

## Media
Instagram, TikTok, Pinterest, and YouTube need media. Upload via `media-files` `upload_image` / `upload_video` (public https URL → library file id), then pass ids in `media`. Facebook / Threads / Slack can take one pass-through URL with a real file extension; multi-image Facebook posts need library file ids. Max 3 URLs per schedule call on platforms that import first.

## Platform requirements (verify against live schema)
- **Facebook** — `schedule_facebook_post`. content, media, or a link (link posts cannot also carry media).
- **Instagram** — `schedule_instagram_post`. media required. content is the caption.
- **LinkedIn** — `schedule_linkedin_post`. content required. Pass `account` if both a page and a profile are connected.
- **Pinterest** — `schedule_pinterest_post`. media and `board` required.
- **Threads** — `schedule_threads_post`. text and/or media.
- **TikTok** — `schedule_tiktok_post`. media required.
- **YouTube** — `schedule_youtube_video`. video media and `video_title` required. content is the description.
- **Google Business Profile** — `schedule_google_business_post`. text and/or one image. No video.
- **Slack** — `schedule_slack_message`. content and `channel` (Slack channel id) required.

## After
Report post id, platforms, account, scheduled_for. Offer list / reschedule / cancel if useful. `cancel_scheduled_post` returns a scheduled post to draft. Do not cancel a live publish.
