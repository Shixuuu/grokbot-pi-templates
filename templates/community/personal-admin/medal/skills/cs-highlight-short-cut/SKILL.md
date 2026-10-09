---
name: cs-highlight-short-cut
description: "Use this when cutting a CS/Medal highlight short from source clips into one vertical short with covers ready to post."
---

# CS highlight short cut

Build one vertical highlight short from Medal (or local) source clips for review, then post only when the owner says so.

## Goals

- One short that includes every verified owner kill from the chosen sources.
- Title/cover say **clips** (not montage) unless they ask otherwise.
- Each map/round stays one contiguous block in the timeline — never bookend the video with pieces of the same round.
- About **2 seconds** of picture before each kill burst; cut dead walking inside a round.
- Hard-cut death screens and long ROUND WON / MVP linger.

## Verify kills

Owner = left name in the killfeed and/or money pops (+$100 / +$300 / +$1500). Extract frames; do not trust caption models alone. Skip teammate-only kills.

## Encode (default)

- 9:16 master: 1080×1920 blur-pillar, bold overlay labels like `4K · MAP`, game audio primary, 60fps, libx264 veryfast CRF ~20, AAC ~192k.
- 16:9 master: 1920×1080, same timings, no overlay when used for widescreen thumb sources.
- Final concat: full re-encode (avoid copy-concat DTS glitches).

## Covers

- 16:9 YouTube thumb must be **exactly 1280×720 JPEG**.
- 9:16 cover for TikTok/Instagram.
- Text like **CLIPS / owner tag** matching their brand style.

## Music when posting

- TikTok / Instagram: prefer a **new** fitting in-app library phonk/hype track; keep game feel. Fallback: royalty-free mix under game audio.
- YouTube: game audio unless Studio has Add sound.
- X: no in-app library — use mix if they want music; custom poster usually unavailable.

## Post order

Show the cut + covers first. After go-ahead, post to the platforms they named with cover where supported. Report live URLs. Never invent or reuse an old video id as "success".
