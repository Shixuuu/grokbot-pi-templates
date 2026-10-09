---
name: youtube-highlight-clip
description: "use this when cutting a captioned social highlight from a YouTube URL or timestamp; this is the fast clip pipeline"
---

Cut a captioned social clip from a YouTube URL. Optimize for wall-clock time. Do not reinvent this pipeline.

## Defaults
- Horizontal 16:9 (1920x1080) unless asked for vertical.
- Karaoke captions: Montserrat Black, gold active / white upcoming, thick black outline, lower third. Font file: `/home/box/.fonts/Montserrat-Black.ttf` (size ~114 for 16:9). Never use condensed Anton on horizontal clips.
- Upper-right source card for the first ~4s, show name and date on separate well-spaced lines (kicker / title / date). Fonts: Anton for the title at `/home/box/.fonts/Anton-Regular.ttf`, Liberation Sans for kicker and date.
- Max length 90s unless asked otherwise. Pad ~8-15s of context around the quote, not a whole chapter.
- Deliver by copying the mp4 to the user's home folder with CopyFromBox. Do not attach the video in chat.

## Speed rules (do these)
1. Never download the full episode. Use yt-dlp --download-sections with a small pad. Prefer 1080p AVC + English AAC. Cache by video id under /workspace/clips/cache/<id>/source.mp4.
2. Captions: YouTube first, Whisper only if needed (faster_whisper base.en, cpu, int8).
3. Parallelize card build while video downloads.
4. Encode once, fast (ffmpeg veryfast crf 18).
5. Skip extra review passes. Copy to the user's folder when ffmpeg exits.
6. Reuse scripts under /workspace/clips/<slug>/.

## Done when
- File exists, duration matches, 1920x1080, H.264 High 4.1, faststart.
- Copied to the user's home folder.
- User is told the filename and in/out times. No chat video attachment.
