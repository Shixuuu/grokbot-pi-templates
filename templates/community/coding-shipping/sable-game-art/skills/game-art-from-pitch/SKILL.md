---
name: game-art-from-pitch
description: "Use this when a game developer is brainstorming a game and needs visual styles, mockups, then 2D art sheets or sprite sheets sliced into game-ready PNGs."
---

# Game art from pitch

Walk a game developer from a verbal idea to visual mockups, then to 2D (or 3D) production assets. Guide them through the steps; do not dump the whole pipeline as a checklist.

How to build the stills: [Game mockups](sand-workflow:game-mockups). How to generate them without drifting: [Consistent game look](sand-workflow:consistent-game-look). After lock: [2D game art pipeline](sand-workflow:2d-game-art-pipeline) or [3D game art pipeline](sand-workflow:3d-game-art-pipeline).

## 1. Hear the pitch, then lock the screen

Get genre, hook, and the feeling they want on screen. If they already have references, use those.

**Before suggesting styles or generating any mockup**, ask what kind of game they are creating. Use a question widget with these options:

- Mobile (landscape)
- Mobile (portrait)
- PC
- Tablet

If the pitch already names one (for example “portrait-mobile”), confirm it in one sentence and lock it. Do not skip the lock.

Map to a delivery aspect and keep it for every fake screenshot in that project:

| Kind | Aspect | Notes |
|---|---|---|
| Mobile (landscape) | 16:9 | Phone held sideways |
| Mobile (portrait) | 9:16 | Phone held upright |
| PC | 16:9 | Monitor / Steam window |
| Tablet | 4:3 | iPad-class; if they later say tablet portrait, use 3:4 |

Verify pixel size on every generated file. Image generation often returns 1536×1024 even when another ratio was requested. If the file does not match the locked aspect, letterbox or crop the painted screen onto the correct frame **before showing it**. Mix of portrait and landscape mocks in one project is a bug.

Ask one thing at a time. Platform/aspect is the first thing when it is unknown.

## 2. Suggest visual styles
Propose several visual styles drawn from real, named games that fit the concept or theme. Say why each style fits (camera, value plan, HUD density, shape language). Keep the list short (about 3–5). Do not invent fake game titles. Look the games up if needed. Prefer comps that share the same screen kind (portrait mobile comps for a portrait mobile game).

## 3. Mock the same idea in those styles
Create 2–4 fake screenshots of the **same shot** in those styles (same beat, camera, HUD slots), all at the **locked aspect**. Follow [Consistent game look](sand-workflow:consistent-game-look): HUD on, value contrast planned, caption the rule each option tests. Prefer a representative play moment, not a random mood piece.

## 4. Lock a style, then expand
When they pick a mockup, write the short art bible (include screen kind + aspect) and keep the hero still. Every later image attaches that still as a reference and uses the same aspect. Expand with more scenes, characters, UI, and key moments in the locked look. Do not reopen a beauty contest unless they ask.

## 5. Produce art assets
When they are ready to build:
- For 2D games, create art on art sheets or sprite sheets, then offer to slice to game-ready PNGs ([2D game art pipeline](sand-workflow:2d-game-art-pipeline)).
- For 3D games, ask whether they want 3D models generated from the 2D art using Tripo3D or Meshy3D. Do not start 3D generation until they choose ([3D game art pipeline](sand-workflow:3d-game-art-pipeline)).

**Generated sheets meant to be sliced** use a chroma-key green backdrop (`#00FF00`), not gray or white. Fake gameplay screenshots stay on their game backgrounds; greenscreen is for production sheets only.

## 6. Slice to game-ready files
After 2D sheets exist, offer to prepare the assets: slice the sheets into discrete game-ready PNGs. This includes UI elements. Key the green out by hue. Do not use rembg when sprites have white interiors (eyes, logos).

## Taste and constraints
Follow any locked house style the user already has. Name the thing you are drawing. Deliver images, not essays. Confirm a style lock before mass-producing assets. Run a grayscale readability check before treating a mock as a lock.
