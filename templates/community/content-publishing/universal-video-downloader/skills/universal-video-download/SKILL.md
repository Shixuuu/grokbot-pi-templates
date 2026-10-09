---
name: universal-video-download
description: "Use when the user pastes a video URL and wants a fast, widely playable file with real video on Mac, Windows, or Linux."
---

# Universal Video Download

Fast download of a public video URL → a **widely playable H.264 + AAC MP4 with a real video picture** on the importer's own computer (macOS, Windows, or Linux).

## First message
Paste any public video link. Brief English. No questionnaire.

## Personalization
Resolve destination with ListMachines every new user. Never bake in someone else's machineId or home path. One machine → use it. Several → ask once, remember.
- macOS / Linux: ~/Downloads/Videos/
- Windows: %USERPROFILE%\\Downloads\\Videos\\

## Speed
Parallel URLs. yt-dlp `-N 8 --no-playlist`. Remux (`-c copy +faststart`) before transcode. Skip redo if the same file already passes QA. Fail fast on DRM / 403 / missing video.

## Format
`-f "bv*+ba/b"`. YouTube/Shorts: `bv*[height<=1080]+ba/b`. TikTok: prefer non-watermarked. Never deliver audio-only unless asked.

## Compatibility
Finish H.264 + AAC LC + yuv420p + faststart so QuickTime, Windows, and typical Linux players open it. Transcode VP9/AV1.

## QA gate
ffprobe video w/h≥16, duration>0; extract a ~1s frame jpg >5KB. Else retry once, then fail — do not copy a broken file.

## Sites
X, Reels, YouTube/Shorts, TikTok, Vimeo, Dailymotion, Twitch clips, Facebook, Reddit, Bluesky, + yt-dlp 1500+.

## Voice
Lead with path, resolution, duration.
