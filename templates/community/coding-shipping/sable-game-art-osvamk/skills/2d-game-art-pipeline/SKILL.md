---
name: 2d-game-art-pipeline
description: "Use this when producing 2D game art after a style lock: art sheets, sprite sheets, tilesets, UI, then slicing into game-ready PNGs with pivots, padding, and engine import gates."
---

# 2D game art pipeline

Production pipeline from a locked mockup to sliced, game-ready PNGs. This is not a drawing tutorial. For the pitch → style → mockup flow, use [Game art from pitch](sand-workflow:game-art-from-pitch) first. Confirm the style lock before starting this skill.

## Vocabulary (do not conflate)

- **Art sheet:** review collage (turnarounds, expressions, key poses, notes). Humans review it. The engine does not load it.
- **Sprite sheet:** one image of **uniform cells**, addressed by index and cell size. Use for frame animation with a fixed canvas.
- **Texture atlas:** packed image plus metadata (JSON/XML/.atlas). Frames can be irregular, trimmed, named. Prefer packing this at **build time**.
- **Tileset / tile sheet:** grid of environment tiles. Collision, nav, and occlusion are **engine data**, not pixels.

Draw and review on art sheets or tagged source files. Export a uniform sprite sheet **or** discrete PNGs. Let the engine or a packer build the atlas. Never ship a labeled review collage as a runtime atlas.

## 1. Read the lock

Before pixels, freeze:

- Native canvas (for pixel art, e.g. 320×180) and whether this asset is pixel art or high-res 2D
- Tile size and pixels-per-unit (PPU); one PPU for the whole world
- Palette or color script, outline rule, required states, 4-dir vs 8-dir
- Pivot convention (default for grounded characters: **feet / bottom-center**)
- Target engine if known (Unity, Godot, Phaser). If unknown, export PNG-32 plus a small manifest.

Write a short order sheet: name, size, directions, animation list, pivot, 9-slice yes/no. Do not start without it.

## 2. Choose the container

- **Character frame anim:** one source file, one tag per state, **fixed canvas** for every frame.
- **Tiles:** grid document, tile size = grid, **no gutters**.
- **UI chrome:** 9-slice masters plus separate icon files. Do not 9-slice icons.
- **HD cutout / many anims:** layered parts for Spine, DragonBones, or a Godot skeleton.

Pixel art vs high-res (never mix inside one “world” unless quarantined like game vs HUD):

| | Pixel art | High-res / hand-painted |
|---|---|---|
| Filter | Nearest / Point | Bilinear; mips if it downscales a lot |
| Scale | Integer only (2×, 3×, 4×) | Continuous OK |
| Canvas | Fixed native; scale the **canvas**, not individual sprites | Author at the highest target |
| Outline | One outline treatment per world | Painted / AA edges OK |
| Mipmaps | Off for characters and UI | On for HD 2D that shrinks |

## 3. Art sheet (review, not runtime)

Build turnaround (front / 3/4 / side / back), expressions if faces read, and key poses for each gameplay state. Same height, same ground line, same pivot. Get approval. This sheet is **not** what the engine loads.

**Background for generated sheets that will be sliced:** paint them on a flat **chroma-key green** (`#00FF00` / rgb 0,255,0), edge to edge. No gray studio, no white, no floor drop-shadows. Do not put green on the character. Keep white interiors (eyes, logos, highlights) on the sprite; they are not the backdrop.

Do **not** use rembg (or similar “guess the subject”) to cut these sheets. rembg treats white interiors as holes. Key the green out by hue (high-G, low-R/B, hue around 90–150°) and despill leftover green on edges. White, black, teal, orange, and other sprite colors stay.

If the sprite palette itself is lime green, pick a different key (magenta `#FF00FF`) and say so. White is never the key: anti-aliased edges pick up a halo.

Then animate in the source file:

1. Idle / hero pose first (proportion, silhouette, palette).
2. Walk/run from classical keys: **contact → recoil/down → passing → high/up**. 4 frames = keys only; 8 is a solid default. Opposite arm/leg. Intentional 1–2px bob, not random jitter.
3. Onion-skin the loop. Check at **game scale**, not zoomed canvas.
4. One row per action, or one tag per action (`idle`, `walk`, `run`, `jump`, `attack`, `hurt`).

## 4. Author metadata in the source

- Tags for animations; slices for crop regions; slice pivots; 9-slice center on UI chrome.
- Naming: lowercase, no spaces, role in the name. Sequences `walk_001.png` (tools auto-detect a shared base + numeric suffix).
- Folders: `art/src/` for layered sources, `art/export/` for PNGs + sidecar JSON. Keep `.aseprite` / PSD as source of truth; never ship the layered file as the game texture.

Suggested layout:

```
art/src/characters/<id>/
art/src/tilesets/<biome>/
art/src/ui/<screen>/
art/export/characters/<id>/
art/export/tilesets/
art/export/ui/
```

## 5. Tiles

- Set **tile size before** creating the atlas.
- Seamless edges: extrude edge pixels (duplicates color into the gutter without changing sprite size).
- Autotile: match the engine terrain mode. Cardinal-only ≈ 16 tiles; corners-and-sides ≈ 47-blob. Do not hand-paint 47 unique tiles; composite from a small template. Inner corners must exist if using blob matching.
- No 1px accidental gutters on the grid.
- Collision is authored in the tileset resource, never guessed from opaque pixels.

## 6. UI

- 9-slice panels, buttons, bars: corners stay; edges/center stretch or tile. Insets must contain the whole corner. Leave inner content padding so text never sits on border art.
- Unity: Mesh Type **Full Rect** (tight mesh breaks 9-slice). Do not allow rotation on UI atlases.
- Export states as separate frames: `btn_idle`, `btn_hover`, `btn_pressed`, `btn_disabled`.
- Pixel-art UI at native canvas; HD UI at the highest target. UI can be a separate “world” from the game pixels; do not leak a pixel icon into an HD HUD.

## 7. Export and slice

**Preferred for a generic assistant:** discrete named PNG-32s (and optional uniform grid sheet + JSON). Always transparent PNG, never JPEG.

- Generated art/sprite sheets: chroma-green backdrop, then **hue-key** to alpha. Do not rembg.
- Pixel-art game assets stay **1× native**. Integer scale only for marketing/preview.
- Padding: shape padding ≥ 2, or 1px plus extrude for tiles. Packed sheets that will be bilinear-filtered or mipmapped must not have zero padding.
- **Trim** only when metadata keeps the pivot (trim with JSON). Never crop-flush a character (origin jumps, they hop).
- Grid sheets: **do not trim**, so cell size stays constant.
- Author **straight alpha**. Convert to premultiplied only at pack time if the runtime is PMA. Do not mix PMA textures with straight-alpha blending.
- Phaser `load.spritesheet` and Godot `Hframes`/`Vframes` require **equal cell size**. Variable frames need an atlas + names.

After sheets are approved, offer slicing into discrete game-ready PNGs (UI included). Split keyed sheets by connected opaque regions. Prefer slices/tags in a real source file when one exists.

Optional pack (TexturePacker, Spine packer, Unity Sprite Atlas, Godot atlas): padding ≥ 2, no rotation for UI, bleed/dilation on, PMA iff runtime PMA, max page size per platform (often 2048 mobile / 4096 desktop). Multipack rather than downscale art.

Power-of-two is **not** a blanket rule; follow the target compressor (PVRTC wants square; some ASTC/ETC want multiples of 4).

## 8. Engine import gates

Detect the engine from the project; otherwise ship PNG-32 + a manifest (`name, w, h, pivot, border, tags, duration`).

**Unity:** Texture Type Sprite; one PPU for every sprite in the scene; Filter Point for pixel art; Mesh Full Rect for UI/9-slice; Pixel Perfect Camera Asset PPU must match; do not Allow Rotation on UI atlases; UI Image does not auto-update size/pivot when the sprite later changes.

**Godot:** Default Texture Filter = Nearest for pixel art; Fix Alpha Border on (or Premult Alpha **and** premul blend mode, not a mix); set tile size before auto-creating atlas tiles; Texture atlas importer ≠ TileSet atlas; `centered` defaults to true (center) — document feet pivot if you change it.

**Phaser:** spritesheet = uniform cells; atlas = named variable frames. Stay under max texture size.

**Pivots across engines:** one art convention (feet = bottom-center), then convert. Unity 0,0 is bottom-left of the untrimmed rect; Godot 2D Y-down, default center; Pixi default top-left. Trim without metadata is the usual “character hops” bug.

## 9. Quality gates (all must pass)

An asset is game-ready only if:

1. Name, canvas, PPU/tile size, palette, and states match the order sheet.
2. Layered source exists; export is flattened PNG-32 (plus JSON if packed).
3. Every animation frame shares a canvas; tiles are exact N×N; no stray gutter pixels.
4. Same origin across frames; playback does not bob except intentional walk bounce.
5. Loop silhouette holds; contact/pass height is correct.
6. Gutter or extrude present; no neighbor color at 1:1 (and under bilinear if HD).
7. No RGB-in-zero-alpha fringes; no Photoshop white matte; **white interiors (eyes, logos) still present after key**.
8. Filter path verified **in-engine at target resolution** (Point + integer scale for pixel art).
9. Tiles seam in a 3×3 test room; collision authored separately.
10. UI 9-slice holds at min and max size; icons not sliced; button states complete.
11. Atlas policy: UI not rotated; pixel-art atlas not mipmapped; max page size respected.
12. Slice rects, pivots, 9-slice borders, frame durations, and animation names travel with the PNG.

Do not treat AI-generated sheets as game-ready until these gates pass (alignment, palette, even cells, loop seam, interiors intact).

## Avoid

- Shipping the art sheet as a runtime atlas
- JPEG or quantized PNG-8 for sprites unless a palette pipeline is intentional
- White or gray backdrops on sheets meant to be sliced (use chroma green)
- rembg / subject-guessing on sheets with white interiors
- Bilinear/mipmaps on pixel-art characters and UI; non-integer pixel-art scale
- Mixing resolutions inside one world
- Tight mesh + 9-slice; tight-packed UI Image without a sprite mesh
- Painting collision into the artwork
- One texture per frame in the built game (fine as intermediate; pack before ship)
- Changing PPU per sprite
- Inventing engine defaults (PPU, filter, padding). If they are not in the repo, ask.

## Sources (practices drawn from)

Aseprite docs (sprite sheets, export, CLI); TexturePacker texture settings and engine tutorials; Unity Sprite Atlas, 9-slice, Pixel Perfect Camera; Godot TileSets, 2D sprite animation, importing images, NinePatchRect; Phaser textures/loader; Spine texture packer; Saint11 “Consistency”; SLYNYRD Pixelblog 50 walk cycle; Boris the Brave autotiling.
