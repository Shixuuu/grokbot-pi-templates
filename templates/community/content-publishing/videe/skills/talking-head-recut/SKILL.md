---
name: talking-head-recut
description: "Use when layering timed motion-graphic cards over footage that is already edited, or cutting promo versions of a finished clip."
---

# Talking-head recut (graphics over finished footage)

Layer timed motion-graphic cards (titles, lower thirds, quotes, data, side panels) over footage that is already edited and plays untouched, or cut promo versions of it. Not for plain captions (`captions`), raw multicam cuts (`podcast-edit-doctrine`) or videos built from nothing.

## Needs
- The finished clip. It plays in full underneath; this skill doesn't re-cut it.
- A reviewed word-level transcript for that exact clip (`transcript-and-chapters`). Local Whisper works as a fallback; correct it and expect loose timing.
- The show's brand kit: design values, fonts, logos and lower-third rules.
- ffmpeg and a motion renderer (an HTML/GSAP-to-video tool or the NLE's titler).

## Steps
1. Make a work folder with a `cards/` subfolder. Probe the clip's duration, size and fps.
2. Prepare the transcript as a flat word list matching this clip's timeline. Fix names and terms without moving timestamps, and clamp the last word to the clip's duration.
3. Choose the canvas: 16:9 for YouTube, 9:16 for Reels, Shorts and TikTok, 4:5 or 1:1 for feeds. For vertical from 16:9, decide the crop first, protecting eyes, mouth and mic.
4. **Storyboard.** Cards come from what's said, not from a template. Each card gets an id, intent, start, end, zone and content (kicker, title, detail, quote or data).
   - Zones:
     - fullscreen: hero moments and big numbers;
     - lower-third: a bottom band over visible video;
     - side-panel: the right 42% on landscape, the bottom 40% on portrait;
     - whiteboard-area: dense data;
     - video-overlay: mostly transparent annotations.
   - Pace: about 6-8 s per card under 60 s; 8-12 s for 1-3 min; 12-20 s for 3-10 min; 20-35 s for 10-30 min; 30-60 s beyond that. Dense material ×0.7, light material ×1.5. At least 5 cards.
   - A card held past about 15 s needs a richer build (staggered sub-points).
   - Name lower thirds come first, with spellings from the booking.
5. **Promo cuts.** Pick the moments first with the `podcast-clip-editing` or `short-form-edit` rules (setup, tension, payoff, landing). Cut, then storyboard on the new timeline. Hook in 3 s; end on a clear landing or a calm CTA.
6. **Build each card** as a self-contained fragment.
   - Styles scoped to the card, with no external URLs or scripts.
   - Local fonts and assets only, and colors from the brand kit.
   - Portrait needs bigger type: titles about 88-132 px, body 30-40 px.
7. **Assemble.** The clip goes in as muted video, with the same file as the audio track. Each card sits on a timed track under one paused, deterministic timeline: no randomness, clocks or infinite repeats. Animate transforms and opacity, and move the video's wrapper rather than resizing the video.
8. Build each card's readable hero frame first. Nothing covers faces, mouths or mics unless that's intended. Lint, snapshot a frame, then render at the clip's fps.
9. Watch the whole render: card timing against the words, legibility on a phone, audio intact, no black tail.
10. Run `apply-brand`, then `qc-check`. Copy the finals to `EXPORTS/`.

## Done when
- The footage plays untouched and in sync.
- Every card lands on the words it supports and clears before the next idea.
- Brand values come from the brand kit, with no invented logos.
- The report covers the work folder, the storyboard, the card count and why, the render path and the transcript source.
