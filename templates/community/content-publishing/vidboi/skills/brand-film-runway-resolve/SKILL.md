---
name: brand-film-runway-resolve
description: "Use when producing a brand or launch film: pull brief, optional reference video, once-per-project generation defaults (model/duration/size/batch), cost confirm only when over preference, contact sheet cull/regen/replace, best-of in-points, song, beat-match, Resolve package, optional VO."
---

# Brand film: generative picture + contact sheet + Resolve package

Run end-to-end unless the owner overrides a step.

## Intake
1. Prefer briefs pulled from connected comms (Slack, ClickUp, Discord, etc.). Before spend, confirm **film duration**, **how many clips**, and **what kind of clips** (genre or subject), plus vibe / script / VO / aspect if missing.
2. Optional **reference video**: owner pastes a link or uploads a file. Pull a rough layout and vibe (pacing, shot types, tone) to steer directions and the picture bank. Do not copy the source frame-for-frame.
3. Brief → 2-3 directions → mark a pick → greenlight craft before spend.

## Project generation defaults (once per project)
At the **start of a new project** (or when no defaults exist yet), ask in a **single pass** for the owner's default generation brief:
- Preferred **model** (e.g. Seedance 2.5)
- Default **duration** per clip
- Default **resolution / size**
- **Batch size** preference (max clips per economical batch)

Save those answers to **profile memory** and reuse them automatically for every subsequent Runway or Higgsfield generation in that project. **Default path after that: zero questions.** Pass saved model, duration, and size through to each generation call.

The owner may **override per generation** (different model, duration, size, or count) when they want; only then ask for the changed knobs. Do **not** re-ask the full questionnaire before every batch.

## Cost-aware gate (only when over preference)
Keep a cost check **only** when a planned batch would **exceed** the owner's stated economical preference (for example more clips than their batch-size preference, or jumping to 4K / a higher res than their default). In that case, one short confirmation with an estimated credit cost — not a new questionnaire. Within preference: generate with no extra confirm.

## Picture bank
1. Write all gens into a subfolder under the owner's chosen **project folder path**.
2. Generate with **Runway or Higgsfield** (either one, or both) from chat when possible so the owner does not need to open those UIs. Use project defaults unless overridden; apply the over-preference cost gate only when needed.
3. Stay economical; check credits / plans when available; track task ids.
4. **Contact sheet (person in the loop):** after the bank lands, deliver a grid of stills in chat (one per clip). Mark bad gens to regenerate, drop shots they dislike, or swap in a replacement, without remaking the whole video. Do this before beat-match and Resolve packaging. Regen/swap uses project defaults with zero questions unless they override or the batch exceeds preference.
5. Apply culls and swaps first; **no clip reuse**; gap-fill only after that pass.

## In-points (best of each clip)
When boarding the beat-matched timeline, do **not** use a random stretch of each generation. For every kept clip, pick the **most visually interesting / exciting portion** (peak motion, clearest subject, strongest composition, or the beat that sells the shot) and set the timeline in-point there for the duration the cut needs.
- Prefer that peak over the first frames or a flat middle hold.
- Record the chosen in-point in the cut map so the owner can see what was used.
- Still write the **full source clip** into `media/` so they can scrub and change the in-point manually in DaVinci Resolve if they disagree.

## Song + beat-match
1. Song options: owner **uploads or links their own track**, or generate music with **Runway or Higgsfield** (use project defaults when they apply; cost confirm only if spend would exceed preference).
2. Detect grid → beat-match the cut to the chosen song, using the best-of in-points above (not arbitrary slices).

## Optional VO
- Speech gen when needed; if a stakeholder must trim, picture bank can proceed; deliver MP3 + WAV; do not lock VO boarding until they cut.

## Resolve package
Deliver a package the owner opens on their machine (no remote Resolve control). Under the project folder include `media/` (full clips), cut map (with in-points), picture-lock MP4s, and **FCPXML** for DaVinci Resolve.

Split archives over ~100MB. Iterate with single replacement clips (same idea as the contact sheet: fix one shot, not the whole bank).

Picture lock = clips (+ beat + VO when used) only; owner owns titles, overlays, logo, and grade unless they ask otherwise.

## Do not
- Invent product UI
- Re-ask model / duration / size / batch size before every generation when project defaults already exist
- Burn credits on a batch that exceeds the owner's economical preference without a single cost confirmation
- Skip the contact-sheet review when the owner wants a say on individual shots
- Board random or first-frame-only slices when a stronger moment exists in the clip
- Assume remote control of the owner's Resolve
- Leave bank files outside the owner's chosen project folder path
