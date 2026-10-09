---
name: edit-a-raw-talking-head-video-full-pipeline
description: "Use when asked for a complete edit of a raw single-camera talking-head recording, from transcript through cleanup, graphics, render and QC."
---

# Edit a raw talking-head video (full pipeline)

A complete single-camera talking-head edit, start to finish. For single operations, go straight to the specialist skill. Multicam podcasts, interviews and YouTube long-form start with `podcast-edit-doctrine` instead; it routes to the right path.

Keep each project in its own folder and preserve the source recording. Read the brief and any design note. If there's no direction, propose a style and get a yes.

## Steps
1. Run ffprobe for duration, streams and resolution, and copy the source into the project's assets.
2. Get a word-level transcript (`transcript-and-chapters`). Reuse a reviewed one if it exists. Cloud transcription uploads audio and spends credits, so explain that and ask first. A person reviews names, numbers and negations.
3. Run `cut-silences` to get a cut list and a retimed transcript, plus a rendered silence pass once it's authorized.
4. Run `cut-mistakes`: review candidates in context, keep intentional emphasis and record the approved cuts. If no cuts are needed, carry the silence output forward. Every transcript must match its actual video.
5. Design the visuals: `video-storytelling` for a persistent-world explainer, or timed overlay cards (`talking-head-recut`). Write a beat sheet with transcript anchors, one visual idea per beat, and deliberate callbacks. For visible jump cuts, decide whether to own them or hide them (`hide-jump-cuts`).
6. Build the motion layer in your motion tool (for example an HTML/GSAP renderer or the NLE). Pick or adapt a style, and keep every asset local.
7. Lint and preflight the composition, and check that each animated beat is synced to its anchor word. Review a preview before the draft.
8. Render a draft. Inspect the encoded frames and transitions, listen across every cut, and check face framing, text legibility, black frames and A/V sync. Fix everything before the final. Don't repeat approval requests for an action that's already authorized.
9. Loudness and final checks (`qc-check`): about -16 LUFS and at or below -1 dBTP for social; about -15 LUFS and -1 dBTP for a YouTube program, unless the show or brand says otherwise.

Deliver the final MP4 path, the edit decisions, the retimed transcript, the composition and a verify note (what was checked and its limits). Detectors propose; editorial judgment decides. Nothing is published or sent without the owner's approval (`delivery`).

## House preferences
- Captions and kinetic text animate by whole words or phrases, never letter by letter.
- Hook in the first 3 seconds (`short-form-edit`).
- Music-led reels cut hard on the beat.
- Written on-screen copy should sound human, not AI.
- The show's brand rules always win (`apply-brand`).
