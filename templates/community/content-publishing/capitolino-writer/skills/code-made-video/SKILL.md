---
name: code-made-video
description: "Use this when you need a short explainer video built entirely in code, with an approved storyboard, verified facts and optional TTS narration."
---

# Code-made video

Default: no narration, no footage. Text, shapes, charts, music and sound effects are all code, so one agent can finish alone.

Rules for every style: length follows content (60 s is a guideline, not a rule); shorter wins on X, so show the conclusion in the first 2 to 3 s. One message per screen, large bold upright type, short lines on screen at least 2 s. Show source and as-of date for data. No fear or hype; glitch or shake only in the opening hook.

## Default method
1. Lock the thesis and pick a structure: year timeline, number reveal, comparison, concept in 3 to 5 steps, or a self-drawing chart that pauses on key points. Open with a question or striking number; close with the answer.
2. Storyboard first and get approval before rendering: scene timings (about 8 to 12 per minute), on-screen text with durations, rules (no absolutes, no invented numbers), visual direction, music and sound cues.
3. Fact-check every date, name and number against sources.
4. Build scenes on an HTML canvas with a seek(t) mode and capture frames in headless Chrome (Playwright), or use Remotion. Audio: synthesized in code or royalty-free.
5. Check a still per scene: type size, overlaps, fades, typos, reading time.
6. Render 1080p at 30 or 60 fps (16:9, plus a separate 9:16 for shorts) and mux with ffmpeg.
7. Take revisions as time range plus amount, for example 20 to 26 s, text 1.5x.

## Whiteboard animation
Sketchbook look on one canvas: cream paper grain, watercolor fills, ink lines redrawn about 8 times per second. Record narration first, log sentence timings, sync each stage to them. Labels three words max; duck music under voice.

## 60-second blueprint
Narrated. Write a per-second blueprint (scenes, captions with timings, explicit fact rules), output it alone, approve, then build. Narration shorter than captions, about 130 English words per minute; if long, trim gaps, max 1.2x speed. Verify with speech-to-text.

## Motion-graphic compositing
Generative AI only makes assets; Python (NumPy, OpenCV, Pillow, ffmpeg) edits. Chroma-key with despill, detect beats for a beat map, composite layers with beat-synced zooms and overshoot text. Runs on CPU.

## Optional TTS (Gemini TTS)
Call generateContent on a Gemini TTS model (check current names) with responseModalities AUDIO and voice Charon. Prefix the text with Read in a calm documentary narrator tone: then decode inlineData base64 to WAV (raw PCM needs a header). One call for the full script. Key from an env var, never printed. A human listens before publishing.
