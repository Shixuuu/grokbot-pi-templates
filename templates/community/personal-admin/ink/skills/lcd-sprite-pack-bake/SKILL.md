---
name: lcd-sprite-pack-bake
description: "Use when turning a picked Imagine take into a game-ready 1-bit LCD sprite pack (256×256 SVG with embedded PNG, left and right facings, one file per mood)."
---

# Bake an LCD sprite pack

## Inputs
- The locked take for each form and mood.
- Ink colour (one solid RGB), frame size (default 256×256), side air (default at least 12px).
- Mood list (for example happy, neutral, sad, hungry, fainted, blink, dirty).

## Steps
1. Lock the happy pose first and get the owner's pick before making moods.
2. Generate moods with the locked happy attached as a hollow outline reference, ideally as one sheet so the body stays consistent. Regenerate single cells that drift.
3. Segment each creature, threshold to binary full-opacity ink in the chosen colour, and keep outlines only.
4. Fit: uniform-scale so the full silhouette (tail, wings, horns, snout) sits inside the frame with the side air. Never crop ink at the edge.
5. Keep each form's poses at matching heights (blink vs happy especially) so the sprite does not jump when it animates.
6. Clean up stray islands near the edges; bridge small detached features to the body when the game needs one connected shape.
7. Write right-facing SVGs with the PNG embedded (pixelated / crisp-edges rendering), then mirror for left.
8. Verify: binary ink only, SVG matches its PNG sidecar pixel for pixel, bounding box and clearance met, lefts are exact mirrors.
9. Make a proof sheet (all moods at full size and at small LCD scale) and show it to the owner.
10. Hand the folder to whoever lands art. Don't push to a repo without the owner's OK.

## Targeted fixes
For small fixes (eyes, wings), change only the pixels the fix needs, verify nothing else moved, and report exactly which pixels changed.
