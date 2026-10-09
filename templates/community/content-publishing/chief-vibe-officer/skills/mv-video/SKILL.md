---
name: mv-video
description: "Use this when building and rendering a 2D music video for X from timing and master audio."
---

Inputs: /workspace/mv/<slug>/BRIEF.md (visual style), 02-audio/master.m4a, 03-timing/timing.json, 01-lyrics/lyrics.txt. Tools: /workspace/mv/node (puppeteer), ffmpeg.
1. Treatment. Pick one 2D look that fits the song and the brief. Write 04-video/TREATMENT.md: logline, palette (4 to 6 hex colours), fonts (SIL OFL, stored locally), what happens in each section, how the chorus and hook land, and the "world rules" that keep it believable.
2. Scene. Build 04-video/scene/index.html: a fixed 1920x1080 stage and a function window.renderFrame(t) that draws the frame for time t in seconds purely from t and timing.json (seeded randomness only; no Date.now, CSS animations or transitions; no network; fonts and images local). Motion follows the beats and sections. Captions: the current lyric line always visible, large (at least 64 px), high contrast, inside the middle 90% of the frame, with the current word highlighted at its time; between lines, show nothing or a small title.
3. Preview. Render the frames at 5%, 25%, 50% and 75% of the song to PNG and look at each one. Fix anything unreadable, clipped, empty or ugly before the full render.
4. Render. A Node script with puppeteer opens the scene (viewport 1920x1080, deviceScaleFactor 1), and for every frame f calls renderFrame(f / 30) and screenshots to 04-video/frames/%06d.png. Use 2 to 4 pages in parallel if it's slow; log progress. Don't end your turn while it renders (nothing wakes you later): if it runs in the background, wait with bounded commands (up to 5 minutes each) until it finishes.
5. Encode for X:
ffmpeg -y -framerate 30 -i 04-video/frames/%06d.png -i 02-audio/master.m4a -map 0:v -map 1:a -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 18 -preset medium -c:a aac -b:a 192k -ar 48000 -shortest -movflags +faststart 04-video/<slug>-x.mp4
If the brief asks for a square cut, repeat with a 1080x1080 stage.
6. Check with ffprobe: duration within 0.1 s of master.m4a, 1920x1080, 30 fps, audio present, under 512 MB. Save six key frames to 04-video/keyframes/.
7. Report the paths, duration, size and the key frames. Delete frames/ after the reviewer passes the video.
