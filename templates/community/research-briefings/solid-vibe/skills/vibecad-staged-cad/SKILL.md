---
name: vibecad-staged-cad
description: "Use when building non-trivial parametric parts or multi-body mechanisms in VibeCAD/FreeCAD — engineer a brief, stage prompts, and fall back to freecadcmd Python if the assistant stalls."
---

# VibeCAD staged CAD + Python fallback

## When
Multi-feature solids, mechanisms, or any prompt denser than a one-liner. Tiny smoke tests can stay single-shot.

## Engineer first
Write a short brief with: units, origin, topology numbers, named parts, feature order, success measurements, and explicit do-nots. Keep an assistant prompt that mirrors those numbers.

## Prompt strategy
1. Prefer **staged** assistant turns (housing → fasteners/pins → shafts → hard curve/disk → carrier) over one mega-prompt.
2. Prefer **VibeScript** for scripted profiles; use Native for simple pad/pocket work.
3. Save the document before each major stage. Export **FCStd + STEP + 3MF** when handing off to print or other tools.

## If the assistant stalls
Symptoms: long Thinking with zero tool/geometry commits; Stop leaves an empty or unchanged document.
Recovery:
1. Stop the run.
2. Generate geometry with **freecadcmd / AppRun Python** from the engineered brief (parametric, named objects, measurable dims).
3. Open/verify in VibeCAD; re-check the brief’s success measurements.
4. Report which path worked and why the assistant path failed (for future staging).

## Curve / mechanism tips
- Exact cycloid/pin-circle profiles can self-intersect; document the formula and allow a named fallback (e.g. hypotrochoid) with the same R, e, rp.
- Measure after build: counts, PCDs, eccentricity, thicknesses — not just “looks right.”

## Outputs
Always note paths for `.FCStd`, `.step`, `.3mf`, and any build script under a shared workspace folder.
