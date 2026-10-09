---
name: consistent-game-look
description: "Use this when generating game mockups or follow-up art: lock screen kind and aspect first, then art bible, fake-screenshot prompts, style refs, and grayscale readability."
---

# Consistent game look

Use this whenever you *generate* game mockups or follow-up art. [Game mockups](sand-workflow:game-mockups) is the craft standard (real camera, HUD, value-first). This skill is the **production method**: art bible, prompts, reference images, readability check, revision without drift.

Do not generate a picture until you can name the shot (what the player is doing), the camera, the **screen kind**, and the job of the image (style choice vs locked expansion vs production sheet).

If screen kind is unknown, stop and ask via [Game art from pitch](sand-workflow:game-art-from-pitch) before generating.

## Screen kind → aspect

Every fake screenshot in a project uses one locked aspect:

| Kind | Aspect | Delivery size to show |
|---|---|---|
| Mobile (landscape) | 16:9 | 1920×1080 |
| Mobile (portrait) | 9:16 | 1080×1920 |
| PC | 16:9 | 1920×1080 |
| Tablet | 4:3 | 2048×1536 (use 3:4 if they later say tablet portrait) |

Character hero sheets may still be 1:1 or 3:4. UI screens of the *game* stay on the locked aspect.

**Verify pixels before showing.** Image generation often returns 1536×1024 regardless of requested ratio. If the file does not match:

1. Prefer prompting a letterboxed phone/monitor screen (black bars OK) so the painted UI is already the right shape.
2. Detect the non-empty content box, crop, and fit onto the delivery canvas.
3. Do not show mixed portrait and landscape mocks for the same game.

## 1. Same-shot style set (before lock)

When comparing looks, generate **2–4** stills that share everything except style:

- Same beat, pose, staging, HUD slots, time of day, and crop
- Same **locked aspect** on every option
- Filename: `<game>_shot-<id>_<style>.png` (lowercase, hyphens)

Write the prompt in two blocks. **Block A is identical** across the set (shot, camera height, FOV, HUD, verb, screen kind). **Block B is the style** (shape language, value plan, materials, line, lighting philosophy), named after a real game’s *rules*, not its pixels.

Prompt Block A must include:

- Screen kind and aspect (“portrait 9:16 phone screenshot, taller than wide”)
- A defining **gameplay verb** (fight, climb, talk, aim, navigate), not a cinematic poster
- Camera the player would have (side-scroller, top-down, isometric, third-person over-shoulder, FPS). Name height and lens. No beauty telephoto unless that *is* the game camera
- HUD in plausible corners, inside a safe area, center play-space clear
- Player / threat / path with a planned value contrast
- Label in the image only if it still reads as a game screen; otherwise caption in chat: “concept / fake screenshot, not in-engine”
- No other game’s chrome, logos, or distinctive characters
- No baked-in live numbers; placeholders for score/HP if needed

Do not invent game titles. If you name a reference game, you already looked it up. Extract **rules** (camera, value, HUD density, shape language) into Block B. Do not attach another game’s screenshot as a pixel reference to copy.

## 2. Art bible (after they pick a look)

Before making more of the game, write a short lock and keep it. Later generations must follow it.

Save (in the project folder or agent memory) something this tight:

- Screen kind + aspect
- Hero still path (the chosen mock)
- Camera (genre + height + FOV)
- Native canvas / pixel vs high-res
- Palette as **roles** (ground, ink, mute, threat, interact, accent) plus hex if stable
- Shape language and outline rule
- HUD density and slot map
- Do / don’t (two or three near-misses)
- Rest pose if 3D (T or A)

Also generate one **grayscale companion** of the hero still (or desaturate it) and keep it next to the color lock.

## 3. Attach references on every follow-up

Image generation accepts reference images. Use them.

| Task | Attach |
|---|---|
| First style-choice set | Nothing required. Optional: the user’s own refs (not other games’ screenshots to copy) |
| More mockups after lock | **Always** the locked hero still. Add 1–2 approved follow-ups once they exist |
| Character / prop sheet | Locked character or prop view |
| UI screens | Locked HUD mock |
| Revision (“more X, less Y”) | The image being revised, plus the lock still |

Copy **drawing language** from refs (planes, line, palette, camera). Never copy another character’s identity.

In the prompt, say what to keep from the ref (palette, camera, silhouette, HUD) and what is allowed to change (new scene, new verb, new character). If you do not say that, the next image will drift.

## 4. Readability gate (run it, don’t only intend it)

Before showing a mock as a candidate lock:

1. Confirm the file is the locked aspect (or crop it onto that frame).
2. Desaturate a copy (or generate a value-only version).
3. Squint test: can you still parse player, threat, and path?
4. If not, regenerate with a stronger value plan. Do not argue with color.

Also view it at game-ish size (not only full resolution). Pixel-art mocks that only work zoomed in are not locks.

Caption each option with the **rule** it tests, not a poetic title.

## 5. Revise without reopening the contest

If they like a direction: attach that image, change only what they named, keep Block A and the bible.

If they reject a direction: do not average all styles. Ask (or infer) which **one axis** to change (palette vs camera vs shape language vs HUD).

After lock, do not generate a new beauty-contest set unless they ask to reopen.

## 6. Production sheets

When moving from mockups to assets, still attach the lock still. Character sheets: T/A or idle first, fixed ground line, same pivot. UI: same chrome as the fake screen, same aspect. Then follow [2D game art pipeline](sand-workflow:2d-game-art-pipeline) or [3D game art pipeline](sand-workflow:3d-game-art-pipeline).

## Avoid

- Generating mocks before screen kind is locked
- Mixing aspect ratios inside one game
- Pretty illustrations with no camera, no HUD, no verb
- A new look on every generation after lock
- Prompt-only “in the style of Game X” with no rules extracted
- Attaching a competitor screenshot as a tracing ref
- Skipping the grayscale check on a lock candidate
- Mixing pixel-art and HD in one world
