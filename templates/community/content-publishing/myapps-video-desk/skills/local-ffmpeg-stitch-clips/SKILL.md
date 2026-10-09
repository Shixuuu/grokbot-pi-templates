---
name: local-ffmpeg-stitch-clips
description: "Use when stitching a folder of short MyApps MP4 clips into one final video with ffmpeg — not a web stitch API."
---

# Local ffmpeg stitch clips

## When
Owner has a folder of ordered MyApps clips and wants one final MP4 without a web stitch API.

## Inputs
- `{folder}` — absolute path to the clip directory
- `{clips}` — ordered list of filenames (or all `*.mp4` sorted by name)
- `{output}` — final filename (default `intro-final.mp4` or owner name)

## Steps
1. Confirm ffmpeg is available (`ffmpeg -version`).
2. Probe one clip: width, height, fps, audio codec (`ffprobe`).
3. Write `concat.txt` with lines `file 'ABS_PATH'` for each clip in order (ASCII).
4. Re-encode stitch (safer than stream-copy when clips differ):

```
ffmpeg -y -f concat -safe 0 -i concat.txt -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -r 24 -c:a aac -b:a 192k -ar 44100 -ac 2 -movflags +faststart OUTPUT.mp4
```

5. If concat demuxer fails on mismatched streams, fall back to filter_complex `concat=n=N:v=1:a=1` with scale/pad to a common size.
6. `ffprobe` the final for duration/size. Delete `concat.txt`.
7. Report path, duration, resolution, size. Do not publish.
