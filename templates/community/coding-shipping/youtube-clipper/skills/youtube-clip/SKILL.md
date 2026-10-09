---
name: youtube-clip
description: "Use this when the user wants a clip cut from a YouTube video: link plus timestamps or a rough description, optional social platform export size."
---

Cut a segment from a YouTube video and deliver it in chat with the transcript of that exact cut. Optionally export to a social platform’s recommended frame size.

## Inputs (required)

1. **YouTube link** (watch URL or youtu.be).
2. **Where to cut**, one of:
   - **Exact timestamps** (start and end, or start + duration), or
   - **Rough description** of the part when they do not have timestamps.

Optional:

- **Max length** — only if the user sets one. Do **not** invent a default duration cap.
- **Social platform / export size** — see below.

## Social export size

If they name a platform (or ask what size to use), **recommend the most common recommended size for that platform**, say why in one short line, and ask them to confirm or pick another before encoding to that frame — unless they already named the exact size.

Use these defaults when recommending (update if platform guidance clearly changes):

| Platform | Recommend | Notes |
|---|---|---|
| **X** | **1920×1080** (16:9) | Best default for feed video; offer **1080×1920** (9:16) if they want full-bleed mobile / immersive. |
| **LinkedIn** | **1920×1080** (16:9) | Native feed; offer **1080×1080** if they want square, **1080×1920** for mobile-first. |
| **Instagram Reels** / **TikTok** / **YouTube Shorts** | **1080×1920** (9:16) | Full-screen vertical. |
| **YouTube** (standard / landscape) | **1920×1080** or source **4K 3840×2160** if available | Prefer highest quality that still matches 16:9. |
| **Facebook** / **general feed** | **1920×1080** (16:9) | Safe default; offer 9:16 if they say Stories/Reels-style. |

If they do **not** name a platform, deliver the cut in the **source aspect** at the best available resolution (4K first) — no forced crop.

When exporting to a non-matching aspect (e.g. 16:9 source → 9:16):

- Prefer a **smart center crop** (or slight reframing if faces/speakers are clearly off-center) over letterboxing, unless they ask for letterbox/pillarbox.
- Say in the delivery note what size you exported (e.g. `1080×1920 for Reels`).

## Quality

Always prefer **4K / 2160p** source when the upload provides it, then scale/crop down to the chosen social size if needed. If no 4K exists, take the best available and tell the user the source quality and the export size.

## Workflow

### A. Timestamps given

1. Parse URL and start/end.
2. If they named a platform and not a size, recommend the table default and confirm (or use it immediately if they already said “use the recommended size for X”).
3. Download best stream, cut with ffmpeg (frame-accurate when boundaries matter), apply social resize/crop if chosen.
4. Same turn: attach the mp4 **and** paste the **exact transcript** of the clipped audio.

### B. Description only (infer)

1. Pull captions / transcript.
2. Find the best matching segment. One short line with in/out + quote preview so they can stop you if wrong.
3. Handle platform size the same as path A.
4. Download, cut, deliver mp4 + transcript.
5. If several segments could match, pick the clearest fit and say what you chose; if none fit, ask one clarifying question.

### C. Follow-up trims / re-exports

Keep the last source and last cut. “Start from this line,” “tighten the end,” or “make it Reels size” are re-trims/re-encodes on the locked source — do not re-search YouTube unless the URL changed.

## Delivery (every time)

In one turn:

1. Short note: timestamps, source quality if not 4K, and export size/platform if not source-native.
2. The **exact spoken transcript** of the clip (quoted).
3. The **mp4 attached in chat** for download.

Do not ship a file without the transcript. Only the clipped range — not the full video transcript.

## Technical notes

- Prefer yt-dlp (cookies / browser profile when blocked) plus ffmpeg.
- Re-encode when keyframe copy would miss the in-point or when resizing/cropping for social.
- Scratch files under a job folder; overwrite when iterating.
- If download fails, say what blocked it — do not invent a clip.
