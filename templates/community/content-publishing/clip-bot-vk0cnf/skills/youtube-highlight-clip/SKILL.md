---
name: youtube-highlight-clip
description: "use this when cutting a captioned social highlight from a YouTube URL or timestamp; this is the fast clip pipeline"
---

Cut a captioned social clip from a YouTube URL. Optimize for wall-clock time. Do not reinvent this pipeline.

## Defaults
- Horizontal 16:9 (1920x1080) unless asked for vertical.
- Karaoke captions: Montserrat Black, gold active / white upcoming, thick black outline, lower third. Font file: `/home/box/.fonts/Montserrat-Black.ttf` (size ~114 for 16:9). Never use condensed Anton on horizontal clips.
- Upper-right source card for the first ~4s, show name and date on separate well-spaced lines (kicker / title / date). Fonts: Anton for the title at `/home/box/.fonts/Anton-Regular.ttf`, Liberation Sans for kicker and date.
- Max length 90s unless asked otherwise. Pad ~8–15s of context around the quote, not a whole chapter.
- Deliver by copying the mp4 to the user's home folder with CopyFromBox. Do not attach the video in chat.

## Speed rules (do these)
1. **Never download the full episode.** `yt-dlp --download-sections "*START-END"` with a small pad. Prefer 1080p AVC + English AAC (`bv*[height=1080][vcodec^=avc1]+ba[acodec^=mp4a]/b[height<=1080]`). If YouTube blocks the default client, retry with `--extractor-args "youtube:player_client=android,ios,tv"`. Cache by video id under `/workspace/clips/cache/<id>/source.mp4`. Reuse that file for recuts of the same episode.
2. **Captions: YouTube first, Whisper only if needed.** Pull English auto/manual subs in json3 (`--write-auto-sub --sub-langs en --sub-format json3`). Convert word timings to the clip's local timeline. Run Whisper only when subs are missing or clearly wrong. If Whisper: `faster_whisper` model `base.en`, `device=cpu`, `compute_type=int8`, `beam_size=1`, `word_timestamps=True`, transcribe **only the clip audio** (extract wav with ffmpeg `atrim` first). Do not use `small.en` or beam 5.
3. **Parallelize.** While video downloads, build the source card and pull metadata (title, channel, upload date). Do not wait for Whisper to start the card.
4. **Encode once, fast.** ffmpeg `-preset veryfast -crf 18 -profile:v high -level 4.1 -pix_fmt yuv420p -r 30000/1001 -g 30 -keyint_min 30 -sc_threshold 0 -movflags +faststart`. Loop the card image (`-loop 1 -i card.png`) and overlay with `eof_action=pass` so the encode is not truncated. Burn ASS captions with `fontsdir` pointing at the fonts folder. Do not use slow/medium presets.
5. **Skip extra review passes.** Copy the file to the user's folder as soon as ffmpeg exits. Do not wait on a video-review pass unless the file is zero-length, the duration is wrong, or the user said the last one looked bad.
6. **Reuse scripts.** Keep working files in `/workspace/clips/<slug>/`. Copy fonts from `/home/box/.fonts`. Auto-group caption lines by ~3s and max ~1740px width. Do not hand-index every word unless the user asks for a recut of specific lines.

## Source card
- Kicker (small gold, e.g. PODCAST), show name (white, Anton), date (grey) on three lines.
- Gap from title ink to date ink at least 22px. Date never collides with the title.
- Fade the card out after ~4s (0.8s alpha fade). Place at `W-w-48:40`.

## Karaoke ASS
- Style: Montserrat Black, primary white, karaoke gold `&H0000E5FF&` (BGR), outline 6, shadow 0, alignment 2 (bottom center), `MarginV` lower third (~90–110).
- `\k` tags in centiseconds per word. Upcoming words stay white, active word gold.
- Clean fillers lightly (`you know`, `yeah`, false starts) without rewriting the quote.

## yt-dlp section example
If the quote is at 20:47 and the clip should run ~20:34–21:44:

```
yt-dlp -f "bv*[height=1080][vcodec^=avc1]+ba[acodec^=mp4a]/b[height<=1080]" \
  --download-sections "*20:30-21:50" --force-keyframes-at-cuts \
  -o /workspace/clips/cache/<id>/source.mp4 --no-playlist \
  "https://www.youtube.com/watch?v=<id>"
```

Then trim precisely in ffmpeg (`trim`/`atrim` on the exact start/end).

## ffmpeg overlay sketch
- Input 0: source video. Input 1: looped card png.
- Filter: scale/fps/format the base, fade the card, overlay, then `ass=captions.ass:fontsdir=...`.
- Audio: atrim to the same window, stereo 48kHz.

## Done when
- File exists, duration matches the requested window (±0.3s), 1920x1080, H.264 High 4.1, faststart.
- Copied to the user's home folder.
- User is told the filename and the in/out times. No chat video attachment.
