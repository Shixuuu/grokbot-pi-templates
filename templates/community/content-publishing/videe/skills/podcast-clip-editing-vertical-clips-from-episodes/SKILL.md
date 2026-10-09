---
name: podcast-clip-editing-vertical-clips-from-episodes
description: "Use when cutting a long podcast, interview or testimonial episode into 15-60 s vertical clips: story-first selection, honest hooks, captions, loudness, loop seams and QC."
---

# Podcast clip editing (vertical clips from episodes)

Cut a long podcast, interview or testimonial episode into 15-60 s vertical clips. Companions: `podcast-edit-doctrine` (house rules and run order), `edit-podcast-reels` (multicam switching and bridges) and `podcast-interview-story-editing` (deep doctrine).

## Workflow
1. **Contract first.** Agree the audience, promise, desired action, platform and duration. Never change meaning: keep qualifiers, never splice words into statements that weren't made, never swap reactions.
2. **Transcript.** Reuse the episode's reviewed, word-timed transcript (`transcript-and-chapters`). Read all of it and mark the candidates: complete thoughts, emotional turns, concrete claims or stories, surprising lines, laughs. Each clip must stand alone.
3. **Story functions:** orientation, tension, development, landing. Prefer chronological source order. Use a non-chronological hook only if the next beat tells the viewer what it refers to. Judge setup by how it plays, not by whether the nouns technically appear. Keep causal, temporal and contrastive connectives ("but", "so", "for two years") inside one source-contiguous clip.
4. **Hook (the first 3 s).** Give a specific reason to keep watching, and pay it off. Close the open loop before the CTA. Pulling a stronger later line to the front is fine only if it's truthful and the payoff is delivered.
5. **Cut order:** content → cadence → micro-edits → restoration → mix. Use the best complete take. Remove filler only when it carries no meaning. Keep natural breaths and meaningful silence, and shorten dead air. Cut on gesture or breath boundaries, with room tone under joins. Transcript sentence ranges are candidates, not edit points: once the story works, run a frame-level edge-trim pass on every kept phrase.
6. **Picture.** The speaker's close-up is home base. Angles, reactions and punch-ins happen only when something changes for the viewer (`edit-podcast-reels`, `camera-direction`). Prefer honest cutaways to jump cuts, and use J/L cuts for flow. No picture hold under about 0.6 s.
7. **Multicam audio.** Cut every ISO mic identically and keep them all in the mix. Mute a specific interval of one ISO only when crosstalk on it audibly hurts the chosen line, and note why.
8. **Captions.** Phrase groups of 2-3 words (high energy) or 3-5 (conversational), placed on exact word onsets. Safe zone on 1080x1920: x 90-930, y 200-1600, never over the face. Sync from the final audio by re-transcribing the edited base. One idea per graphic, whole words only (`captions`).
9. **Audio.** Dialogue first. A music bed sits 14-20 dB under the voice and ducks. Social target is -16 LUFS with true peak at or below -1.5 dBTP: `loudnorm=I=-16:TP=-1.5:LRA=11`, two-pass, on a derived file. The show's settings override.
10. **QC.** Watch it end to end. Run blackdetect, freezedetect and volumedetect, and check names and numbers in the captions (`qc-check`). Sign off with `EDIT_SIGNOFF story=PASS meaning=PASS picture=PASS audio=PASS delivery=PASS`. Nothing is published or sent without the owner's approval (`delivery`).

## Handy ffmpeg
- Find dead air: `-af silencedetect=noise=-35dB:d=0.6 -f null -`
- 16:9 to 9:16 center crop (then check faces on a contact sheet): `-vf "crop=ih*9/16:ih,scale=1080:1920,setsar=1"`
- Browser-safe, keyframe-dense H.264 for HTML motion tools: `-c:v libx264 -pix_fmt yuv420p -r 30 -g 30 -keyint_min 30 -sc_threshold 0 -movflags +faststart`
- Contact sheet: `-vf "fps=1/3,scale=216:-1,tile=4x2:padding=12:margin=12"`

## Loop edit ("end on because, start after because")
1. The output starts right after the bridge word and ends on the bridge phrase, including it.
2. Choose takes by transcript quality, not by first complete attempt. Concatenate the ranges into a vertical base.
3. Re-transcribe the base before adding graphics. This catches bad joins and dropped words.
4. If a graphics layer was rendered with the wrong audio, remux the final audio from the base.
5. Verify the seam: concatenate the last ~2 s of audio with the first ~3 s and transcribe the result. It must read as one continuous sentence.

## Testimonial guardrails
- Verified identity and a signed release.
- No combined or strengthened quotes.
- A claim ledger: timecode, baseline, timeframe, typicality.
- No stock or generated people implying real customers.
- Disclosures carry into every cutdown.

## Default look
When the show has no rule of its own: keep text clear of faces, avoid clutter (badges, arrows, progress bars), let B-roll run full-bleed, and keep CTAs calm and human. The show's brand kit always wins.
