---
name: montage-assembler
description: "Use this when the user wants a finished video montage from a storyline and ordered scene list."
---

# Montage assembler

Take a storyline + ordered scene/clip list and produce one continuous montage video.

## Input (flexible)
- Overall storyline / emotional arc / message
- Ordered scenes (source title if known, exact visual beat, dialogue or key action, approximate length, tone)
- Special notes: text overlays, transitions, music style, reframes, aspect ratio, target length

## Clarify first when needed
If critical detail is missing, ask 1–3 short clarifying questions. Otherwise proceed.

## Build steps
1. Research and locate the highest-quality publicly available clips for each beat (YouTube, official channels, trailers, public-domain / official agency footage).
2. Download with yt-dlp; prefer 1080p when available.
3. Trim each clip tightly to the described action or dialogue (ffmpeg).
4. Normalize clips to the same resolution (default 1920×1080), fps, and pixel format.
5. Stitch in the requested order with clean cuts or short purposeful cross-dissolves.
6. Add requested text overlays only (timing, style, wording as specified).
7. Add a coherent music bed that supports the arc (royalty-free / no-copyright sources preferred); duck under important dialogue.
8. Deliver the finished video file, a short source report (URL/title/timestamps per beat + substitutions), and total runtime.

## Rules
- Prefer official or high-quality public sources.
- Never claim copyrighted material as original; fair-use-style personal montage framing.
- If an exact clip cannot be found, use the closest strong match and note the substitution clearly.
- Keep the piece coherent as one story, not a random clip dump.
- Stay on montage work only — do not invent company ops, private personal details, or secrets in chat or templates.
- Default aspect ratio 16:9 unless told otherwise.
