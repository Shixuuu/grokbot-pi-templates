---
name: video-storytelling-persistent-world-visuals
description: "Use when designing the visual layer of a long-form explainer as one persistent world, or fixing an edit judged confusing, text-heavy or clearly AI."
---

# Video storytelling (persistent-world visuals)

Design the visual layer of a long-form talking-head video as one persistent world, with camera moves, a spotlight and spatial open loops. Use it as well to fix an edit judged confusing, text-heavy or "clearly AI". It replaces scene-thinking: a new graphic every few seconds forces the viewer to restart comprehension. This designs the thing the video is about, not overlay cards (for those, see `talking-head-recut`).

## Four principles
1. **One persistent world.** Nothing resets. Drawn elements are never redrawn, moved or relabelled. Decide the spatial grammar once (for example: left to right means toward the outcome, up is human and warm, down is the system of record) and break it exactly once, for meaning.
2. **The camera is the edit.** Move through a stable space instead of cutting.
   - Use three altitudes: World (orient and payoff), Region (most of the runtime) and Detail (one element). Move only between adjacent altitudes.
   - Name each framing as an exact world window, with its boundaries between labels. Reuse the same window for the same purpose, and let duration grow with distance.
   - Camera moves and wipes happen in sequence, never overlapping. Make the cover layer opaque before a camera move. Keep every label at least 60 px from the frame edge.
   - Merge a reframe and a wipe into one gesture with a shared symmetric ease (power2.inOut). Keep front-loaded eases for element entrances.
3. **Attention is a spotlight.** Exactly one element is at full brightness; the rest are quiet but legible.
   - Luma targets: active 200-235 (opacity 1.0), context 120-150 (about 0.56), spent 85-105 (about 0.33). No label goes below 90.
   - Labels inherit their element's state, and finished props retire to 0.
   - Give each element one opacity authority per window, or it will strobe in the master.
4. **Open loops are spatial.** Never say "we'll come back to this". Leave something visibly incomplete, then return to it.

## Discipline
- Everything drawn is a labelled element, a connector, the travelling subject or the ambient ground.
- About 20 on-screen words per section, with labels of 1-2 words.
- One travelling subject whose state visibly changes, moving along connectors at constant speed.
- Tokens:
  - stroke widths 1.5 / 2.5 / 4 / 7;
  - type sizes 22 / 30 / 42 / 60 / 84;
  - corner radii 10 / 22 / 40;
  - five colors with fixed meanings (warm means human only);
  - never pure white type.
- Motion: entrances use cubic-bezier(0.16,1,0.3,1), exits are faster, duration scales with mass, and a back-out ease appears exactly once per section.
- No cross-fades, ever. Full-bleed layers enter and exit by clip on an opaque background.

## Build contract and gates
- One generator per section; edit the generator, not its output. Shared geometry stays shared. Namespace SVG defs before assembly, because colliding ids paint nothing.
- Time everything to word starts, entering 0.15-0.25 s ahead of the anchor word. Audit any dead screen longer than 1.5 s.
- Leave air at sentence boundaries: donor room tone with 10 ms fades and a 40 ms equal-power crossfade, never digital silence.
- Gates: check tokens, no cross-fades, legibility, seam jumps and dead frames. Then watch the assembled render anyway.

## House notes
This fits long-form explainers and case studies. It's too heavy for 15-second reels, which get one idea per beat and whole-word type only. Follow the show's brand rules. On podcast or interview footage, the cut itself follows `podcast-edit-doctrine`; this skill designs the visual layer on top.
