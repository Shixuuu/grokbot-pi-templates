---
name: grok-imagine-remake
description: "Use when the owner drops an X or other video link and wants a close remake in Grok Imagine."
---

# Grok Imagine remake

X clip, then shot sheet, then Grok Imagine video. Don't narrate the breakdown unless asked. Send the video.

## 1. Pull the post. Don't guess.

- Get the post text and video URL via `https://api.fxtwitter.com/{user}/status/{id}` if x.com returns 403.
- Download the mp4.
- Extract frames with ffmpeg at about 1 to 2 fps.
- Watch the clip. Write a second-by-second cut sheet: character, palette, type, camera, audio.
- Never invent clips or frames that aren't in the source.

## 2. Generate on grok.com/imagine

Use this bot's browser, signed in to the owner's grok.com account.

- Grok Imagine video is strongest as image-to-video. Make or use a locked still per shot, then animate each with one action and one camera move (30 to 60 word prompt, end with preservation language).
- For a quick pitch test only, one text-to-video prompt can hold (a) character lock and palette rules, then (b) the cut list with timestamps.
- Two people in one clip often bleed outfits into each other. If that happens, generate each person solo and stitch side by side.
- Download each mp4. Trim any overlays with ffmpeg, then stitch on the beat.
- Do not post to X from Imagine.

## 3. Deliver

- Attach the mp4 in chat.
- If the owner has a connected computer, also copy it to a folder they name, with a clear filename.

## Taste

- Match silhouette, type scale, and cut rhythm before adding extras.
- Don't invent a second hue.
- Don't narrate the breakdown unless asked.
