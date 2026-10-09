---
name: edit-podcast-reels
description: "Use when editing or reviewing a multicam podcast reel where camera switching, reactions, J/L cuts, vertical reframing or an editable stacked NLE handoff decide the result."
---

# Edit podcast reels (multicam)

Edit or review a multicam podcast reel where camera switching, reactions, J/L cuts, dialogue tightening, vertical reframing, captions or an editable NLE handoff decide the result. Read `podcast-edit-doctrine` first. The dialogue edit, the picture edit, the client styling and the NLE handoff are separate layers, and they must agree.

## Invariants
- Sync every camera and recorder to one program time before choosing moments. Check both the start offset and the drift at the end.
- Identify people by name and map each camera and mic to a person. Never settle for generic labels like "guest".
- A reel supplies its own setup, tension or question, answer, and landing. A strong isolated quote isn't enough if its nouns, people or stakes are undefined. Judge setup by how it plays: keep the subject, relationship and time frame together long enough for a new viewer to form the premise.
- Tighten without changing meaning. Sentence timestamps are discovery ranges, not clip edges. Trim each head and tail to the audible wording. Keep repetition or connective words that carry character, context, tension or honesty.
- Prefer one source-contiguous dialogue clip when the clauses already play together. Never split audio for caption grouping, a picture cut or a scale change; picture and captions can cut above continuous audio.
- Apply every trim, splice and source jump to the entire ISO mic stack. A speaker or "active mic" flag may guide monitoring, but it never triggers a mute. A deliberate clip-level mute is fine when normal-speed listening confirms crosstalk on that ISO hurts the line. Mute only that interval, keep the clip, and note the reason.
- Build review audio from every enabled ISO with its clip gain, mute, pan and fades, then sum. One dominant mic is not the multicam mix.
- Keep the original media references and source timecodes. A review MP4 never replaces the editable stack.
- Branding is separate from editorial grammar. The client's design spec, logo, type, colors, safe zones and dislikes stay authoritative.

## Workflow
1. **Map and sync** cameras, scratch audio, recorder ISOs, frame rates, sample rates and identities (`multicam-sync`).
2. **Transcribe and verify** names, terms, questions, negations and payoff lines against the audio (`transcript-and-chapters`).
3. **Build the narrative on audio.** Choose a self-contained arc, usually in chronological order, with the fewest source jumps. Collapse adjacent selections back into one run wherever nothing meaningful was removed. Audition every edge and the summed mix at normal speed.
4. **Direct the picture.** The active speaker's close-up is home base. Cover seams with motivated angle changes, listener reactions or sparse punch-ins. Let picture lead or trail audio edits (J/L) when that helps continuity.
5. **Reframe for vertical.** Protect eyes, mouth, mic, eyeline and platform safe zones. Treat the wide as source material for a purposeful alternate single or reaction, not automatic two-shot coverage.
6. **Style after the edit works.** Captions and graphics come only once the story plays without them. Use the spoken words verbatim (`captions`).
7. **Deliver and verify.** Render the review file and keep the editable timeline. Check the opening, every major source jump, the payoff and the last frame.

## Camera decisions
- Switch for a reason: handoff, reaction, quoted turn, rhetorical landing, emotional shift, or a seam that needs coverage.
- In a question-and-answer opening, the questioner owns the whole question (including the words that define its subject). Switch on the answer.
- Reactions are punctuation, not wallpaper: short, truthful and matched to the line. Start them slightly before a seam they need to bridge.
- Each close camera has one stable base frame. Prefer a real angle change over punch/reset cycling, and save punch-ins for a few thesis or payoff lines.
- One dominant visual idea per beat. Don't stack fragmentation, close/wide/close cycling and punches on one short thought. A strong story can hold one shot for 10 s or more.
- Picture can be denser than audio. Don't hide every cut with the wide; a close reaction or a modest reframe keeps intimacy.
- Calibration: close-ups 60-75% of runtime, reactions 12-20%, median hold 2-3 s, reactions 0.75-1.8 s, nothing under about 0.6 s.

## Stacked handoff (OTIO, XML, Premiere)
- One named video track per camera (for example `V1 - CAMERA 1 - <NAME> CLOSE`) and one named audio track per ISO (`A2 - MIC 2 - <NAME> ISO`).
- At each picture interval: cut all camera tracks at the same boundary, keep them stacked, and enable only the chosen angle. Keep any reframe metadata on that clip.
- At each dialogue interval: cut every ISO at identical boundaries and keep them all enabled, phase-aligned and carrying their authored gain, mute, pan and fades.
- Picture and audio boundaries may differ; that difference is the J/L cut.
- Match the delivery size and the native frame rate, keep the sample rate, use readable names, and add no extra leader.
- If the adapter can't keep a property, say exactly what was lost and supply markers, a camera-decision list or an XML. Never silently flatten.

## Done when
- The opening makes sense with no episode context.
- There's no dead air before the first word or after the last thought.
- Pronouns have referents, and questions keep their answers.
- Reactions are credible and crops stay inside the safe zones.
- Every camera and ISO is present and in sync, with a stated reason for any muted interval.
- The review mix demonstrably comes from every enabled ISO.
- The render and the editable timeline carry the same selection.
