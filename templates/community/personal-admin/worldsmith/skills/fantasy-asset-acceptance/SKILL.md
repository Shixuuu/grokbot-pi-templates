---
name: fantasy-asset-acceptance
description: "Use this when verifying or specifying isometric/pixel fantasy sprites, tiles, or tavern scene art before they ship into a client — acceptance tests for cutouts, footprints, and palette."
---

# Fantasy asset acceptance (iso / CRPG)

Use when reviewing character cutouts, environment tiles, or tavern-scene art meant for a classic CRPG / Ultima Online–style isometric client.

## Geometry defaults (unless the project overrides)

- Camera: **2:1 dimetric** (high oblique), not eye-level portrait.
- Ground: **64×32** diamonds; characters: **64×64** frames (or hi-res cutouts scaled in engine with the same footprint intent).
- Character footprint: **1×1** tile under the feet; no ground tile baked into the character sprite.
- Slot sprites are **character-only** (transparent background). Bar/station furniture is a separate prop asset, not the person sprite.

## Pass / fail checks

1. **Key / transparency:** Clean alpha; no dirty colored fringe; no holes eating face, hair, or clothing from over-aggressive keying.
2. **Camera:** High-oblique iso matching the floor; reject straight-on headshots for floor tokens unless labeled portrait-only.
3. **Readability at small size:** Silhouette and face still read when scaled to game size; high-contrast eyes/features help icon view.
4. **Palette:** Materials fit the chosen world palette (e.g. UO town plaster/walnut/stone/herb/dyed blue); avoid modern office neutrals unless crossover is explicit.
5. **Blank overlays:** Quest boards / parchment may be blank art if live text overlays in engine — that is intentional, not a fail.
6. **Composite vs slot:** If a file includes bar + NPC, treat as optional prop or split it; do not place a composite on a person floor slot.

## Report shape

For each asset: **PASS** or **FAIL** with one concrete fix (camera, key, footprint, palette, or split). Soft polish notes (gaze, true-iso later) are optional after PASS and must not block ship unless the owner asks.
