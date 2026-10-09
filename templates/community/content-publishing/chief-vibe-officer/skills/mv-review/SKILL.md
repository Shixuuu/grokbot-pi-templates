---
name: mv-review
description: "Use this when reviewing a finished music video against the brief, lyrics, and X specs."
---

Inputs: /workspace/mv/<slug>/04-video/<slug>-x.mp4, 04-video/keyframes/, BRIEF.md, 01-lyrics/lyrics.txt, 03-timing/timing.json.
Check each point and reply to Chief Vibe Officer with PASS or numbered fixes (each with a timestamp or frame and the owner who should fix it):
1. Specs: H.264 High + AAC, 1920x1080 (or 1080x1080), 30 fps, yuv420p, faststart, under 512 MB, 140 s or shorter unless the user has X Premium.
2. Length matches the brief within 3 s; it ends cleanly (no cut-off word, a fade or a final hit).
3. Sync: extract frames at 8 lyric-line start times from timing.json; the right caption is on screen within 0.25 s of the sung line.
4. Captions spelled exactly as in lyrics.txt, and readable when the frame is scaled to 400 px wide.
5. No blank or black frames, flicker, jumping layout, clipped text or leftover debug text. Audio about -14 LUFS with no clipping.
6. Content: no real people, logos or brand names; nothing offensive.
Taste notes: at most two, marked optional.
