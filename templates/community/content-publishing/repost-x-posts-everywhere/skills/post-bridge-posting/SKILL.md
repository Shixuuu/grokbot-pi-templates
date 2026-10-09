---
name: post-bridge-posting
description: "Use this when creating, scheduling, updating, or checking social posts through Post Bridge (Instagram, TikTok, YouTube, X, LinkedIn, Facebook, Pinterest, Threads, Bluesky)."
---

Post and schedule across Instagram, TikTok, YouTube, X, LinkedIn, Facebook, Pinterest, Threads, and Bluesky via Post Bridge.

## Connect first

Prefer the native MCP at https://mcp.post-bridge.com/mcp (AddMcpServer as post-bridge). Confirm with the user before adding it. After it is added, authenticate if status is needsAuth.

Fallback: CLI npx postbridge-cli with POST_BRIDGE_API_KEY. Never ask the user to paste a key into chat. Key lives at https://www.post-bridge.com/dashboard/api-keys (API add-on required).

Config priority: POST_BRIDGE_API_KEY env, then ./.post-bridge/config.json, then ~/.config/post-bridge/config.json.

Base URL: https://api.post-bridge.com. Auth: Authorization Bearer token.

Docs: https://api.post-bridge.com/reference
Skill source: https://github.com/post-bridge-hq/agent-mode

## MCP tools (preferred)

- list_social_accounts — ids, platforms, usernames, needs_reconnect
- create_post — caption, accounts, media_urls, schedule, use_queue, platform configs
- list_posts / get_post / update_post / delete_post
- list_analytics / sync_analytics
- list_post_results
- list_media / delete_media

MCP accepts media_urls (public direct file URLs). The server downloads them. Do not pass Drive/Dropbox share links.

## CLI fallback

- npx postbridge-cli accounts
- npx postbridge-cli upload --file ./image.jpg
- npx postbridge-cli post --caption "..." --accounts 1,2
- Schedule: --schedule "2026-06-20T09:00:00Z" (UTC)
- Queue: --use-queue (optional --queue-timezone)
- Draft: --draft
- --media mid_xxx or --media-urls
- --platform-config for per-platform extras
- posts, posts:get --id, posts:update, posts:delete
- analytics, analytics:sync, results --post-id, media, media:delete

## Platform config keys

Key by platform name only, and only for platforms you are posting to. Every platform accepts caption and media. Extra fields:

- pinterest: board_ids, link, title, video_cover_timestamp_ms
- instagram: placement (story), video_cover_timestamp_ms, cover_image, is_trial_reel, trial_graduation (MANUAL|SS_PERFORMANCE), user_tags, collaborators (max 3, public), first_comment
- tiktok: title, video_cover_timestamp_ms, draft (native TikTok draft, not Post Bridge draft), is_aigc, privacy_status (public|private), auto_add_music (photos only), allow_comment, allow_duet, allow_stitch, disclose_branded_content, disclose_your_brand
- twitter: first_comment (put links here; X strips URLs from captions)
- youtube: title, contains_synthetic_media, thumbnail (long-form only)
- facebook: placement (story), first_comment
- linkedin: document_title (PDF)
- bluesky: caption/media only
- threads: location (timeline|reels), first_comment
- google_business: one image only, cta_action_type (BOOK|ORDER|SHOP|LEARN_MORE|SIGN_UP|CALL), cta_url, language_code

Exact platform names: instagram, tiktok, youtube, twitter, linkedin, facebook, pinterest, threads, bluesky.

## Gotchas

- Media required: youtube (1 video), tiktok (1 video or images), instagram (1–10), pinterest (1). Text-ok: twitter, facebook, linkedin, threads, bluesky, google_business.
- media takes Post Bridge media IDs only. Public direct URLs go in media_urls.
- Huge videos (~300MB+) can silently drop YouTube, LinkedIn, and X.
- Platforms post independently. Always check post results after publish.
- use_queue cannot combine with scheduled_at. Queue needs a dashboard schedule with a slot in the next 90 days.
- If an account has needs_reconnect, skip it and tell the user to reconnect in the dashboard.

## Publishing rules

Unless the user explicitly says post now / publish immediately, confirm before posting. Drafts are safe. Posts go live and cannot be deleted once published (only scheduled/drafts can be updated or deleted).

Do not duplicate content across multiple accounts on the same platform. No fake engagement. Keep captions tight for X (280 chars). Prefer 4–5 hashtags.

## Workflow

1. List connected accounts and skip any that need reconnect.
2. If media: upload or pass a public direct URL.
3. Draft or confirm, then create/schedule.
4. Check list_post_results after publish.
5. Use analytics sync before reporting performance.
