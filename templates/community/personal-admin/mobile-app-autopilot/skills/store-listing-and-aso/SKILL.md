---
name: store-listing-and-aso
description: "Use when preparing or improving App Store / Google Play listing text, keywords, screenshots, icon, or feature graphic."
---

# Store listing and ASO

Draft everything, the owner approves everything. Store text is public; nothing goes live without a yes.

## Research (10 minutes)
- Search both stores for the app's top 5 search terms. Note competitor names, subtitles, first screenshot message, and complaint themes in their low-star reviews.
- Pick 1 primary keyword and 3-5 secondary ones. Never claim "#1", "best", awards, or user counts you can't prove (Play metadata policy bans rank/price/promo claims in title, icon, and graphics).

## Text fields (limits change rarely, but recheck in the consoles)
| Field | App Store | Google Play |
|---|---|---|
| Name/title | 30 chars | 30 chars |
| Subtitle / short description | 30 chars | 80 chars |
| Keywords | 100 chars, comma-separated, no spaces, don't repeat words from name | none (full description is indexed) |
| Promotional text | 170 chars, editable without review | n/a |
| Description | up to 4000 chars (not indexed for search) | up to 4000 chars (indexed, use keywords naturally) |
| What's New | per version | release notes, 500 chars per language |
Write: benefit-first first line, 3-5 short feature bullets, social proof only if real, clear subscription terms if any.

## Visual assets (verified Oct 2026; recheck the help pages)
- iOS screenshots: 1-10 per size, JPEG/PNG. Required iPhone set 6.9" (1320x2868, 1290x2796 or 1260x2736 portrait), or 6.5" if no 6.9". iPad 13" (2064x2752 or 2048x2732) required only if the app runs on iPad, so set `ios.supportsTablet: false` for phone-only apps. Source: developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/
- iOS icon: 1024x1024 PNG, no transparency, set via app.config `icon`.
- Play screenshots: 2-8 per device type, JPEG or 24-bit PNG (no alpha), sides 320-3840 px, long side at most 2x short side; give at least 4 phone screenshots at 1080 px+ (e.g. 1080x1920) to be eligible for recommendation surfaces.
- Play icon: 512x512 32-bit PNG, max 1024 KB, no pre-rounded corners. Feature graphic: 1024x500 JPEG or 24-bit PNG, no alpha, required.
Source: support.google.com/googleplay/android-developer/answer/9866151

## Screenshot plan
1. First 2-3 frames carry the message: one benefit headline (3-6 words) over a real app screen.
2. Order: core loop, key differentiator, proof (progress/results), customization, paywall value (if any).
3. Capture real screens: ask a cloud agent to add a Maestro flow or a screenshot script that runs on EAS (iOS simulator + Android emulator), or the owner captures on device. Then frame them: generate backgrounds with image generation, composite with a script (ImageMagick/Pillow) at exact pixel sizes, strip alpha for Play.
4. Never show features that don't exist (App Review 2.3 accurate metadata).

## Deliver
Write `store/listing.md` (both stores, each locale) and `store/screenshots/<platform>/<size>/` in the repo via a cloud agent PR, or as files on this computer. Show the owner a side-by-side preview and a checklist of what's missing. For updates, rewrite only what changed and propose one A/B idea (Play store listing experiments, App Store product page optimization).
