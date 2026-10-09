---
name: postnitro-social-posting
description: "Use this when a user wants to connect PostNitro and set up posting of carousels, single images, and videos for their own brand. Start by asking for any missing setup (API key, brand, accounts, posts per day, job time, publish windows, days, timezone, format mix), then lock copy, import, and schedule."
---

# Social posting with PostNitro

Help the user connect PostNitro and set up posting for **their own brand, product, or offer**: carousels, single-image posts, and short videos. PostNitro is the content-creation platform that also schedules — it writes the copy, designs the assets, then books the time. Look up live PostNitro tool schemas every run. Refresh platform facts from https://postnitro.ai/llms-full.txt or https://postnitro.ai/facts. Never bake in another workspace's IDs, API keys, times, captions, or brand voice.

## 0. Intake — ask only what is missing

Do not assume a cadence, timezone, brand, or account list. Collect setup in a short conversation, **one question at a time**, skipping anything already answered in this chat. Use a question widget when there are a few real options.

**Required before you schedule anything live**

1. **API key** — Embed key starting with `pn-` (if PostNitro is not already connected).
2. **Brand / product** — what the posts are for (their company, product, or personal brand). Not PostNitro unless they *are* PostNitro.
3. **Which social accounts** — after you list the connected ones, ask which to publish to. Do not assume all.
4. **Posts per day** — how many distinct posts to create each run (e.g. 1 or 2).
5. **When the job should run** — clock time in the user's timezone (this is when you *create* the posts, not when they go live).
6. **Publish windows** — one window per daily post (example: 3–5pm and 10pm–1am). Times go out inside those windows, randomized.
7. **Days** — weekdays only, or all 7 days.
8. **Timezone** — if it is not already known.

**Ask if still unclear (sensible defaults if they say "you pick")**

- Mix: **carousel, video, and single image** (default when posting twice a day: rotate so the week includes all three).
- Instagram: feed only, or feed + story (default: feed + story).
- Test as `DRAFT` first, then go `SCHEDULED` (default: draft test first).
- Voice: educational brand, personal/founder, or something they specify (default: educational brand, not founder).
- Audience and topics / lanes they care about (or rotate the default craft lanes below).

Do not import or schedule until required items are answered. Then recap the plan in one short message and wait for a yes.

## 1. Connect PostNitro

If it is not connected: PostNitro is usually not in the catalog. Add the remote server:

- URL: `https://mcp.postnitro.ai/mcp`
- Header: `Authorization: Bearer <pn- key>`

Confirm, then add. Key lives at PostNitro profile → Embed → Generate API Key. Tools appear on the next message.

## 2. Discover the workspace

List templates, brands, AI presets, social accounts, audio, and saved defaults. Page if needed.

**Check defaults every run.** Call the get-defaults tool. If it returns `hasDefaults: false`, defaults are NOT set — pass `templateId`, `brandId`, and `responseType` explicitly on every import that run. Do not assume defaults exist just because you offered to save them earlier; a previous save can be wiped.

If there is exactly one template / brand / preset, offer to save them as defaults with `DESIGN` (do not switch to PDF unless they need file URLs).

Show the social accounts you found, then ask which to use (intake item 3). Keep those account IDs for scheduling **and** the history/dedup query.

## 3. Content rules

Educational, problem-solving, strategies and tips for **their audience**. People should recognize the stall. The user's product or offer is how you run the tactic — not a feature dump, and not a PostNitro ad.

Show them the production win in the workflow (idea → designed post → scheduled) without making PostNitro the hero of the slides unless they sell PostNitro.

- No generic self-promo. No founder-personal voice unless they ask.
- **Carousel / video (5–7 slides or scenes):** 1 `starting_slide`, 1 `ending_slide`, 3–5 `body_slide`s. First slide moderate (curiosity). Last slide moderate (close + where their product fits). Body elaborates.
- **Single image:** one slide object (not an array), no slide `type`. Only `heading` is required; add `sub_heading`, `description`, `cta_button` as needed. One complete thought. Infographic layout is allowed on this single slide.
- Infographics where they help. Call the import-template tool first.
  - `layoutType: infographic` replaces the image.
  - `cycle`: sequential, counters, **all items in the first column**.
  - `grid`: comparison, max 3 columns.
  - Caller-provided `id`s on every column and item. Item `description` is HTML.
- Slide formatting (restraint): `<strong>` `<em>` `<u>` `<c>` and `<br/><br/>`.
  - `<c>` highlights 1–3 emphasis words per headline. Never combine `<c>` with `<u>`.
  - `<strong>` for the single most important phrase per slide, max one.
- CTA rotation: one CTA per post, and rotate so it differs from the most recent post (Save / Share / Follow). Use "Follow" sparingly (roughly 1 in 3). No engagement bait or fake urgency.

**Write copy in chat and lock it before importing**, unless they have already approved an ongoing pipeline.

Default craft lanes (swap for their topics when they have them): first-slide hooks; slide structure; repurposing; cadence; platform differences; brand kits; AI as a teammate.

## 4. Import

You write the copy. Import onto the saved template/brand (or the explicit IDs from section 2 if no defaults).

**Use the async import pattern** — wait/synchronous tools can time out even when they succeed. A convenience import-and-wait call can take 15–60s and time out at the transport layer while the job keeps running server-side. Retrying a wait-style call after a timeout can create duplicate designs. Instead:

1. Call the async import tool (`import_carousel` / `import_image` / `import_video`) — it returns an `embedPostId` immediately.
2. Poll `check_status` with that `embedPostId` until `COMPLETED` (or a step reports `FAILED`).
3. Call `get_output` to read the `designId` (and file URLs if PNG/PDF).

On a timeout, **poll — never re-call the import**. On a 429, wait ~15–55s and retry the same call.

- Carousel: `slides` array (`starting_slide` / `body_slide` / `ending_slide`).
- Video: same `slides` array; each slide is a scene. Pass `videoSettings.videoDuration` (variable, ≥5s per scene when it fits, **max 50s**). Pick `audioId` from the library to match mood; rotate. Omit audio only if the library is empty.
- Single image: `slide` as **one object**, not an array, no `type`. Use the image import tools, not the carousel ones.

Always pass:

```
generateImages: {
  context: "<you write this from the post>",
  imagePlacement: "auto",
  imageStrategy: "strategic"
}
```

Make `context` a text-safe composition brief: describe the theme, keep the focal subject in a lower/side third with clean negative space in the upper-center where the heading sits, high contrast, one clear visual metaphor, no text in the image.

AI images require a paid plan and consume a separate AI-image quota (distinct from post credits). Images are best-effort: the post still completes if they fail or the quota is exhausted. Confirm they landed via the `GENERATE_IMAGES` step in `check_status`. Infographic slides never receive an image — that is expected.

Keep `DESIGN` unless they need file URLs. Do not use generate-from-topic unless they want that.

## 5. Captions

Unique per platform. Fill each in; do not pad to the cap.

**Captions are one single line of plain text.** No markdown, no real newlines, no extra formatting. For a line break, insert `<br/><br/>` only. Open every caption with the same hook line as slide 1.

| Platform | Max | How |
| --- | --- | --- |
| LinkedIn | 3000 | Longer, professional, light or no hashtags |
| Instagram | 2000 | Hook first, scannable, hashtags at the end |
| TikTok | 2200 | Spoken, hook first, native hashtags |
| Threads | 500 | Conversational, must stay under 500 |

Lock captions on the first few posts the same way as slides.

## 6. Platform settings

Look up the live schema. Defaults unless they overrode them in intake:

- **Instagram:** `postType` matches the asset (`carousel` | `image` | `reel`). `postAsStory: true` unless they chose feed only.
- **TikTok:** **carousel or reel only** — never `image`. **Always set `postTitle` to the post's title** (required, not optional). `SCHEDULED` → `privacyLevel: PUBLIC_TO_EVERYONE`. `canComment: true`. Carousel: `autoAddMusic: true`. Reel: `canDuet` + `canStitch` true. Branded flags false. `isAIGeneratedContent: false` unless they say otherwise.
  - Single-image design: schedule LinkedIn/Instagram/Threads as `image`. Create a **separate** TikTok scheduled post as a `reel` with `postSettings` (duration max 50) **and a `postTitle`**.
- **LinkedIn:** carousels always `postType: document` with `postTitle` 5–90 chars when `SCHEDULED` (a missing/short title returns 400). Single image: `image`. Video: `reel`.
- **Threads:** `postType` matches the asset (`carousel` | `image` | `reel`).
- **Reels:** `postSettings.videoDuration` (max 50) and `audioId` when using a track.

## 7. History: dedupe + failure audit

Before writing, list social accounts, then list scheduled posts. This is both your dedup source and your health check.

**Always pass `socialAccountIds`** (the accounts from section 2) on the list call. Without it the query returns the whole workspace and can exceed the tool's output limit. Window: **30 days ago through the next 7 days**.

The result can be large. If it overflows, parse it with `jq` or hand it to a subagent to extract just what you need — do not read the raw blob into context.

**Dedupe:** do not repeat a design name, hook, or topic in that window. Rotate the CTA away from the most recent post. Skip a publish window if it already has a `SCHEDULED` post for these accounts.

**Failure audit (every run):** `SCHEDULED` does not mean it went live. Scan for post-level `FAILED` or `PARTIALLY_FAILED`, and any per-account entry with a failed status or `errorMessage`. Known fragile cases: Instagram/Threads connections that silently fail (often no per-account error string — the aggregate status is the only signal), and render errors like "Preparation failed: Render service failed". Surface these to the user (which post + platform + error). This routine cannot force a republish — flagging is the deliverable.

## 8. Schedule

`scheduledAt` is a future ISO-8601 time inside the publish windows they chose. Never publish immediately on first setup.

Pass the time with the user's UTC offset (e.g. `+05:00`); the API stores it as UTC. Recompute the offset per run for timezones with DST — do not hardcode it.

Randomize the minute within the window and avoid reusing the exact minute from the previous day.

If the job runs late and a window has already passed, do not error or pick a past time. Use the next future slot and note the deviation in the run summary.

Use `designId` (never `embedPostId`). If import works but schedule fails, retry the schedule only — do not re-import. If you schedule multiple posts in one run and a later one fails, keep the ones that succeeded and report exactly what did and didn't schedule.

First test: `DRAFT`. After they approve: `SCHEDULED`.

## 9. First test, then automate

1. Recap intake (brand, posts/day, job time, windows, days, accounts, format mix). Get a yes.
2. Lock one post (copy + captions) in chat. Prefer a carousel for the first test unless they ask otherwise. The locked copy should be *their* topic, with *their* product as the close.
3. Import `DESIGN` + `generateImages` (async pattern from section 4).
4. Create a **DRAFT** on the chosen accounts (plus the extra TikTok reel draft if it was a single image).
5. Send the editor URL. Stop creating posts until they say so.
6. After they approve, save a **daily routine** as an intent (not a frozen tool recipe) using their brand, job time, posts/day, windows, days, and mix of carousel / image / video. Each run: dedupe + failure audit (section 7), write, import, caption with `<br/><br/>` only, apply settings including TikTok `postTitle`, schedule, then tell them what went out and flag any prior-run publish failures. If PostNitro auth fails, pause the routine and tell them.

## 10. What PostNitro is (the tool, not the post subject)

- AI **writes** content (topic, URL, X post, or pasted text) **and** designs carousels, single-image posts, and videos. Users can also import their own copy.
- Native publish: LinkedIn, Instagram, TikTok, Threads. X is a source/export, not a native target.
- Scheduling is the last mile. The win is skipping the blank page, the design file, and the extra scheduler.
- Brand handle on the kit may read "Design. Schedule. Publish." That is product context, **not** a required closer on slides or captions.
