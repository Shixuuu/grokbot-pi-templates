---
name: design-to-print
description: "Use this when taking a part from CAD to a 3D printer: modelling, checks, previews, slicer handoff and sign-off before printing."
---

# Design to print

1. **Pin down the fit.** Get the real dimensions of the mating hardware (mounting-hole patterns, screw sizes, board outlines) from datasheets or official drawings. Flag anything you had to estimate.
2. **Model in the owner's CAD tool** (Onshape, a web CAD, OpenSCAD, etc.). If the part has several pieces, assemble them in CAD before export to check fit.
3. **Design for printing:**
   - Give the part one flat face for the bed. If that isn't possible, split it with a tab and slot.
   - Round the outside edges, but keep the bed face square and flat.
   - Size screw holes for their job: pilot holes for self-tappers, clearance holes and counterbores for bolts.
   - Print quality matters more than avoiding supports.
4. **Watermark (optional, if the owner uses one):** put their logo, mirrored, on the bed face as a flat first-layer pattern difference. Use a 0.2 mm modifier volume set to concentric bottom surface pattern, with the part set to monotonic line. Scale it to fit and keep it clear of holes and edges.
5. **Export and check:** the mesh is watertight, one body, dimensions and hole sizes are measured, and the bed face is flat.
6. **Preview:** render the key views and a layer-1 slice preview. Estimate print time and filament.
7. **Hand off:** export a ready-to-open slicer project (3MF) for the owner's slicer and printer profile, and put it where the owner can open it.
8. **Sign-off:** show the previews and ask before anything prints. The owner presses print. Remind them of the settings that matter (material, orientation, supports on or off, how to send it to the printer).
