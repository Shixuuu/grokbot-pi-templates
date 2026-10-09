---
name: short-form-edit-talking-head-to-reel-ad
description: "Use when turning talking-head footage into a finished 9:16 reel, Short or short ad with a hook, open loops, synced captions and graphics, B-roll, music and quality gates."
---

# Short-form edit (talking head to reel or ad)

Turn talking-head footage into a finished 9:16 reel, Short or short ad: hook first, open loops, transcript-synced captions and graphics, B-roll, music and SFX, with gates before delivery. Deliver 1080x1920, plus 1920x1080 only if asked (with its own framing and CTA). Virality can't be guaranteed. Work locally. Nothing is published or sent without the owner's approval. For clips from a multicam episode, select with `podcast-clip-editing` and switch cameras with `edit-podcast-reels` first; this skill finishes them.

## Gate 1 (priority)
"In the first 3 seconds, is someone convinced they need to watch until the end?" Give a specific reason to stay, and earn the payoff inside the video. Polish comes after this test.

## Establish the edit
1. Read the brief; it beats aesthetic defaults. Keep each project in its own folder.
2. Probe the sources with ffprobe and keep the originals. Use the reviewed word-timed transcript (`transcript-and-chapters`). Never substitute an older take. If there's a reference reel, make contact sheets and frame strips at its transitions and write timestamped observations. Borrow its mechanisms; don't copy it.
3. Shortlist assets with exact usable intervals, action, consequence, provenance and story role. Show the complete action and result before cropping tighter.
4. Read every spoken line. Run `cut-silences` and `cut-mistakes`, then review by hand (a detector that finds nothing can still miss a retake). Keep qualifiers, the payoff and breaths at joins. Render the clean cut once and derive word timing from its cut list. Lock the cut after the rough animatic; any later timing change rebuilds captions, graphics and sound from the same map.

## Design the journey
- Before building, write a design note and a beat plan: hook, open loop, escalation, evidence, payoff, CTA.
- Track open loops: each honest viewer question, where it's planted, its reminders and where it closes. Use one main loop and at most one secondary. Close the promised lesson before the CTA.
- Build three materially different rough openings from the same truthful speech. Compare their first 3 s for clarity, curiosity, muted comprehension and follow-through, and record the choice.
- Render a low-res moving animatic with speech and rough sound before polishing.
- Vary the rhythm (burst, anticipation, reveal, breathing room). Narration and captions carry the words; graphics show the example, relationship, evidence or consequence.
- Treat the first 3 s as their own edit. The first frame is meaningful (a contradiction, a glimpse of the result, a human expression). Visible evidence arrives by second 3. The first spoken word survives intact, and any impact sound lands within 2 frames of its visual. It works muted. No unrelated logo bumper, and don't stamp the same device on every reel.

## Visual rules
- **Safe zone on 1080x1920:** x 90-930, y 200-1600. Captions go in short phrase groups on exact word onsets, adjusted to the face position.
- **Logos:** never invent, approximate or redraw one. Use the supplied or official asset (record its source and checksum) or plain brand-name text.
- **Real people:** use real footage or a verified portrait with provenance. Never generate a likeness and present it as real.
- **B-roll:** keep a duration ledger. Use each distinct scene once per reel; a renamed, recropped or reversed copy still counts as a repeat. B-roll must really move; a zoomed still is a photo layer, not B-roll. Authentic footage beats generated footage, which is metaphor, never evidence.
- **Graphics:** every graphic beat needs an action with an outcome (no settle-and-freeze title cards). Vary the mechanisms and call an object from the hook back at the payoff. Kinetic type animates by whole words or lines, never letter by letter.

## Generate and assemble
- **Generated B-roll** spends credits, so ask first. Record the model, prompt and task id. Inspect the real files, including corners, for stray text and malformed hands.
- **Timing:** bind reveals to their own spoken nouns, with captions and impacts within 2 frames of the onset (at most 0.15 s of deliberate anticipation).
- **Music:** cleared music only, with the license recorded. Start the instrumental bed about 14-20 dB under the voice and duck it under speech. Final mix about -16 LUFS, at or below -1 dBTP.
- **SFX:** take them from the visual-event map and align the audible peak, not the file start. Vary the density and leave some cuts silent.
- **Assembly:** normalize every input to one time base and check for one-frame mismatches at cuts. Lint, preview, draft, inspect, revise, final.

## Gates (on the encoded final)
- Hero frames for every shot, at full size and phone size.
- Contiguous frame strips across every cut: no black flash, pop or freeze.
- Speech joins and the last syllable are intact.
- A fresh transcription of the final audio matches the captions. As negative controls, a 0.3 s caption shift or a dropped word must fail.
- Voice and bed balance, SFX timing, no clipping. No gap over about 2.2 s without a deliberate hold.
- Write a separate entertainment review: attention drops, predictable stretches, unresolved promises, reading overload. Never invent a retention score.
- Write a verify note with the output hash, measured results and known limits, and say which checks you could not perform. Never claim a pass from reading code. Never label a draft final.
- Return the path to the playable MP4 (`qc-check`, then `delivery`).

## House notes
Music-led reels: whole-word kinetic type snapped to the beat, hard cuts on drops. Interview reels: hook first and truthful. The show's brand kit always wins.
