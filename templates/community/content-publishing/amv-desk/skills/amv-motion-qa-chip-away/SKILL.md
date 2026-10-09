---
name: amv-motion-qa-chip-away
description: "Use when polishing multi-clip AMV/motion cuts by chip-away: dead-tail/freeze detect, laterality/melt checks, pick-table-before-restitch, no setpts fill."
---

# AMV motion QA / chip-away

Use this when polishing an animated music video (or any multi-clip motion cut) by surgically fixing bad beats instead of regenerating the whole timeline.

## Goal
Keep loved footage locked. Fix only broken molecules. Accumulate keeper seconds. Never regenerate the whole cut to fix a local flaw.

## Hard rules
1. **Chip-away only** — replace or trim the bad beat; leave keepers untouched.
2. **No freeze pads** — do not use `tpad`, `setpts` stretch, or still-holds to fake duration.
3. **No photoreal leaks** into anime/OC locked cuts (reject variants that break style).
4. **Propose a pick table before restitch** — for each beat: current clip, candidate alts, why, GO/NO.
5. **Shared language** — report **post-trim net good seconds**, not theater. Say what changed in one line.
6. **Prefer existing unused variants** before new generation. New gens only for remaining holes.
7. **Dead-tail freezes are editor fixes** when content is loved — trim tails + transitions; do not re-run I2V just to unfreeze.
8. **WONTFIX is allowed** when the human locks it — stop reopening that molecule.

## Pre-flight (before any new gen)
- Confirm song/master audio lock and target duration (full-song keeper seconds).
- Inventory unused swarm/variants for the broken beats.
- List locked picks that must not change without explicit reopen.

## Motion / content QA checklist (per clip or beat)
Run before putting anything in a stitch:
- **Dead-tail / freeze** — last 0.5–2s: motion near-zero? freeze → trim or reject.
- **Run-in-place / tread** — locomotion without travel/parallax?
- **Laterality** — left/right arms, hands, props consistent with canon?
- **Limb detach / melt** — hands through tables, railing detach, morphing anatomy?
- **Extra limbs / props** — third gauntlet, severed hand, chest morph on back-only tattoo, etc.
- **Style gate** — anime stays anime; photoreal/face-bleed = reject.
- **Canon cast** — required people/creatures present when locked (e.g. finale roster).
- **Continuity tattoos / brand marks** — colors and placement match refs.

## Chip workflow
1. Human (or lead) names broken molecules only.
2. For each: search unused variants → if none, one targeted gen (or small swarm) for that beat only.
3. Visual QA against checklist; reject bad alts silently when possible.
4. Build a **pick table** (beat | current | proposed | reason).
5. Restitch only after picks locked.
6. Editor pass: trim dead tails; intentional transitions (hard cut / soft dissolve / short dip-to-black).
7. Duration: if short after prune, fill with unused variants first; new gen only for leftover holes. If long, proportional trim — never stretch.
8. Deliver review via Drive link only after size ≥ 1MB verified. No chat video attachments for full cuts.

## Anti-jobs
- Do not reopen locked picks without an explicit GO.
- Do not “improve” perfect beats.
- Do not blind-upscale locked anime OC as a remaster step.
- Do not narrate verification theater to the human — hand the working link.

## Done when
- Every named molecule is fixed or WONTFIX-locked.
- Cut has continuous motion at target duration with no freeze pads.
- Human keepable verdict recorded.
