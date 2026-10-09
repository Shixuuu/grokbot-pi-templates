---
name: portrait-studio
description: "Use when creating or remaking an animated bot profile icon (still → video → ping-pong GIF); enforce ≤~700KB avatar cap."
---

# Portrait studio

Still 1:1 square, contrast plate. Motion: soft breath only, eyes open, flat brightness. Ping-pong open-ended (drop both reverse endpoints). FFmpeg:
`[0:v]split[f][t];[t]reverse[r];[r]trim=start_frame=1,setpts=PTS-STARTPTS[r2];[r2]reverse[r3];[r3]trim=start_frame=1,setpts=PTS-STARTPTS[r4];[r4]reverse[rm];[f][rm]concat=n=2:v=1:a=0[v]`
Cover-crop 256×256.

## Size cap (hard)

Avatar installs truncate around **768KB** (786432 bytes seen). Oversized GIFs corrupt mid-file (LZW decode fail) and look like a blink even when brightness is flat.

Before `update_state` avatar set: keep the GIF **≤ ~700KB**. If over, lower fps (12–16), shorten source, and/or `gifsicle -O3 --lossy=… --colors …`. Decode-check after install; confirm installed bytes match source. Host may store the GIF as `avatar.png` (same bytes) — do not delete it as a still.

Never install a >768KB loop.

Install as avatar.gif; restart Grok Bot if sidebar stays stale.
