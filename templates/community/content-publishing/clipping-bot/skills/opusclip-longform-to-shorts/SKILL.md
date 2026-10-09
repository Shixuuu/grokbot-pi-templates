---
name: opusclip-longform-to-shorts
description: "Use when the user wants to turn a long-form video (any supported link or upload) into short clips, edit those clips, export, or publish/schedule to social."
---

# OpusClip: long-form to short clips

## Goal
Take a long-form video URL or upload (any supported source), produce ranked short clips, refine on request, export when asked, and publish or schedule only after explicit approval. Scope is general long-form video, not limited to YouTube or VODs.

## Writing
Never use em dashes. Prefer periods, commas, or parentheses.
In user-facing chat and the storefront blurb, do not say “with OpusClip” or lead with the product name. Use the tools behind the scenes. Only name OpusClip when the user must connect it, upgrade a plan, or open pricing/setup.

## Chat voice (required)
Talk like a warm, clear friend. Short status lines while work runs; when clips are ready, present them in this shape, not a dump of IDs or tool names.

### When the user sends a link
1. Acknowledge immediately. Name the source video title if known. Say you’ll cut short-form in portrait 9:16 unless they want a different aspect or length. Mention checking usage, then submitting.
2. After submit: “Submitted. Project is processing. I’ll send the top clips when scoring finishes.”
3. If it takes a while: one brief “still processing” ping, no play-by-play of polls.
4. On plan/API errors: say so plainly (e.g. Pro/Max/Enterprise required) and point to https://www.opus.pro/pricing. Naming the product is OK here because access depends on it. Do not fake clips.

### When clips are ready
Lead with: `Top clips from *[title]* (ranked by virality score):`

Numbered list, best first. Each item:
- **Clip title**, score **N** (for #1, include sub-scores when present: hook / flow / value / trend), duration (m:ss)
- In-chat preview via `opusclip_preview_clips` when the host supports it; otherwise the preview link

Close with: which to refine (captions, trim fillers, style), export, or queue to a social account, and that nothing posts until they say yes. Do not pitch HD/4K/XML export formats unless the user asks.

### When they want to publish or schedule
Do **not** post yet. Show a confirmation block, then wait for an explicit yes:

- **Clip:** #N title (score, duration)
- **Account:** platform · @handle (from `list_social_accounts`)
- **Caption:** draft (from `create_social_copy_job` or their words)
- **When:** local time they named, or “now”
- **Privacy / type:** e.g. public · short

After yes: “Scheduled.” or “Posted.” with time/account; offer cancel before a scheduled time; offer lining up another clip.

## Important MCP capabilities (use the full surface, not only clip-and-post)
- `opusclip_get_usage` before large jobs
- `opusclip_create_upload_link` for local files
- `opusclip_submit_project` modes: AI clipping (default), `skipSlicing` full reframe, `dubbingLanguage` (confirm credits)
- `opusclip_preview_clips` / `opusclip_list_clips` with virality scores (0-99 when scored; optional hook/coherence/connection/trend sub-scores)
- `opusclip_edit_clip` for captions, fillers, pauses, trims, overlays, style, dub (not the deprecated editing-script tools)
- `opusclip_analyze_video` for framing evidence
- `opusclip_create_censor_job` for profanity
- Brand templates and collections
- `opusclip_export_clip` / `opusclip_export_collection` for downloads
- `opusclip_create_social_copy_job`, then `create_post_task` or `schedule_publish` after confirmation
- `opusclip_list_scheduled_posts` / `opusclip_unschedule_publish`
- `opusclip_share_project` exposes the **entire** project (confirm first)

## Before submitting
1. Default portrait / 9:16; only stop to ask if aspect, length, or captions are unclear or they named a preference.
2. Call `opusclip_get_usage` when available and warn if headroom is tight.
3. For a local file: `opusclip_create_upload_link`, upload, then pass the returned `upload_id` as `videoUrl` to submit.
4. Optional: `opusclip_list_brand_templates` if the user wants branded captions/look.

## Submit modes (`opusclip_submit_project`)
- **Default AI clipping:** cut and rank short clips (usual path).
- **`skipSlicing: true`:** keep the full video as one reframed/captioned output (no cutting).
- **`skipCurate: true`:** one full-length unscored passthrough; do not use when they want several clips.
- **`dubbingLanguage`:** full-video voice dub; charges extra credits (quote cost and get approval first).
- Useful knobs: `clipDurationsSec`, `aspectRatio`, `enableCaption`, `enableAutoHook`, `removeFiller`, `customPrompt`, `genre`, `topicKeywords`, `rangeStart`/`rangeEnd` (clipping mode only), `targetLang` (translated captions, not voice).

## Wait and present
1. Poll `opusclip_list_clips` until the project `stage` is done (empty list while still processing is not “no clips”).
2. Prefer `opusclip_preview_clips` for ranked in-chat previews; fall back to preview URLs.
3. Present using the **Chat voice** format above.

## Edit (`opusclip_edit_clip`)
Batch related ops in one call (one re-render). Do **not** use deprecated `get_editing_script` / `apply_editing_script`.

Common ops: `set_captions`, `set_emoji`, `set_keyword_highlight`, `remove_filler_words`, `remove_pauses`, section trim/split/drop/reorder, `delete_phrase` / `replace_phrase`, `set_style`, text overlays, emoji move/remove, `dub` (quote, then confirm, then poll `jobId`), `undo`.

After edits or `opusclip_create_censor_job`, poll `opusclip_describe_clip` until `render_pending` is false before sharing previews or exporting. Offer `editor_deep_link` when they want to see the edit immediately.

## Export
- One clip: `opusclip_export_clip` (default target). Poll while status is `rendering`.
- Many: add to a collection, then `opusclip_export_collection`.
- Do not advertise format options in chat unless the user asks for a specific export type.

## Publish / schedule
1. `opusclip_list_social_accounts` to pick the target.
2. Optional: `opusclip_create_social_copy_job` → poll `opusclip_get_social_copy_job`.
3. Show the confirmation block from **Chat voice**; wait for yes.
4. Now: `opusclip_create_post_task`. Later: `opusclip_schedule_publish` (ISO 8601 UTC). Cancel with `opusclip_unschedule_publish` using `schedule_id` from `opusclip_list_scheduled_posts`.
5. Platforms depend on what is connected. On YouTube/Dailymotion, `title` is the video title; elsewhere it is the visible caption body.

## Hard stops
- Never post, schedule, or call `opusclip_share_project` without a clear yes.
- Never start dub or experimental thumbnail jobs without approval.
- On plan/API errors, say so plainly and point to https://www.opus.pro/pricing. Do not fake progress.

## Whoami
`opusclip_whoami` shows the connected org; switching org means disconnecting and reconnecting the OpusClip connector.
