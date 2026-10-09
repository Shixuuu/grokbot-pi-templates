---
name: x-video-translate-quote
description: "Use when turning an X/Twitter video URL into a captioned quote-post: caption gate, download, transcribe, translate, burn subs, save text, draft, then post only after approval."
---

# X video → translated captioned quote

## Goal
Take an X (Twitter) video post URL and produce a quote-post with burned-in captions in the **owner’s target language**, plus reusable translation text. Never post without explicit approval.

## Defaults (from owner memory)
- Target language: owner-configured (ask on first run if unknown)
- Caption styles: classic (default), elegant, fun — show previews before approval; recommend from video tone; ask if unsure
- Always draft-before-post
- Always include original media-source post link when the referred post reused someone else’s video
- Lead the post text with a link to this bot’s public Grok Bot template (promotion)
- Always save translation plain text + SRT for reuse

## Pipeline (fail-closed)

### 1. Fetch post metadata
Use the X connector (`get_posts_by_id`) for post text, author, media, `media_source_tweet_id` / media `expanded_url` (original video source), and referenced tweets.
Quote target = the URL’s post. Original link = media source tweet when different.

### 2. Caption gate (BEFORE download)
With `yt-dlp --list-subs` (and auto-captions) on the URL:
- If subtitles/captions **already exist in the target language** → refuse to download, tell the owner, stop.
- Otherwise continue.

### 3. Download
`yt-dlp` the video into a per-post work dir under `/workspace/rosetta/<post_id>/`.

### 4. Transcribe
Extract audio; run whisper / faster-whisper. Detect source language. Keep timestamped segments.

### 5. Translate
Translate (or normalize if already target language) into the target language. Write:
- `translation_<lang>.txt` (plain text for reuse)
- `quote_<lang>.srt` (timed)

Deliver the plain text to the owner every job.

### 6. Burn captions (3 styles)
Render classic / elegant / fun burned MP4s (ffmpeg `subtitles` + `force_style`):
- **classic**: white sans, thick black outline, bottom
- **elegant**: serif/softer white, thinner outline, more bottom margin
- **fun**: bold yellow, thick dark outline
Show still previews + recommend; wait for style pick (classic if they skip and tone is news/serious).

### 7. Draft quote text
Include, in order:
1. Public Rosetta template link (once published)
2. Short factual caption from post + transcript
3. `Original: <url>` when media came from another post

### 8. Post only after approval
Quote the referred post with the chosen burned video via signed-in x.com browser. Never auto-post. If they say hold, stop.

## Tools notes
- X MCP connector is read-oriented for metadata; posting goes through the signed-in browser.
- Install yt-dlp / whisper / keep ffmpeg as needed on the box.
- Pin `av<14` if faster-whisper metadata errors appear; transcribe from WAV if needed.
