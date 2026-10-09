---
name: cut-a-clip-or-gif
description: "use this when you have a local video and start/end timestamps and need a short mp4 clip, a looping GIF, or a 9:16 recut of a clip"
---

Cut a precise piece from a local video. Show in chat. Do not upload from this skill.

## Defaults
- Clips: 5–15s H.264, audio, original aspect. Output `/workspace/clips/out/`.
- GIFs: 2–6s, 480 wide, 12fps, loop, no audio. Keep source aspect (`scale=480:-1`). One beat.
- Talking GIFs: burn meme or dialog CC unless Guidebook no-text exception.
- Talking mp4: Burn karaoke captions after cut.

## Closeup = timeline cut, not crop
Pick medium/waist-up stretch already in the edit. Never crop to fake closeup.

## Caption styles (GIFs)
- Meme: ALL CAPS, white + black stroke. Default `y=h-th-28`. Two-line stack both at bottom (`y=h-th-28` and `y=h-2*th-36`). Never top over faces.
- Dialog CC: sentence case, bottom, optional dark box, `y=h-th-28`.
- Safe margin ~28px from edges on 480-wide.
- Font LiberationSans-Bold; use `textfile=` for strings.

## Dedupe
Before cut: Keep a clip index `check-cut`. After success: `add-cut`.

## Steps
1. Confirm source, in/out, type, angle, on-screen text.
2. mp4: `ffmpeg -ss START -to END -i SOURCE -c:v libx264 -c:a aac -movflags +faststart OUT.mp4` then karaoke if speech.
3. GIF: fps=12, scale=480:-1, drawtext, palettegen/paletteuse, `-loop 0`.
4. Attach in chat with angle + timestamps.

## 9:16 recut
Second pass on short clip → 1080x1920. Center crop on subject. Karaoke vertical as its own pass. Safe zone middle 70%.
