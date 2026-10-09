---
name: game-mockups
description: "Use this when making game mockups or fake screenshots: same-shot style frames, value-first readability, real camera and HUD, then a lock package for 2D/3D production."
---

# Game mockups

How to make *game* mockups: play-shaped stills that lock look through the real camera. Not generic graphic-design comps, and not a restatement of [Game art from pitch](sand-workflow:game-art-from-pitch) (that skill is *when* to mock; this one is *how*). After a style lock, 2D production is [2D game art pipeline](sand-workflow:2d-game-art-pipeline).

A good game mockup is a play-shaped picture: the camera the player will have, the information they will need, the values they will read, at a fidelity the team can actually ship.

## Give every image a job

| Artifact | Answers | Playable? |
|---|---|---|
| **Mood board** | What should this *feel* like? Alignment only. Not original design. | No |
| **Thumbnail / value study** | Does this shot read? Composition, silhouette, camera. | No |
| **Fake screenshot / style frame** | How will *this game* look through the *game camera*, in a *typical play moment*, with HUD? | No |
| **Greybox paintover** | How could *this level* look, at real scale? | No |
| **Finished production asset** | This specific character/prop/set can be modeled, textured, shipped. | No |
| **Prototype** | Should we make this? Cheap, disposable. | Often |
| **Vertical slice** | Can we *produce* this? Near-final playable segment. | Yes |

Do not let one picture pretend to be all of these.

Split two still types and never let one silently replace the other:

- **AD fake screen:** honest typical gameplay, real FOV, HUD on. Ground of truth for production.
- **Pitch key visual:** may be a peak moment, but it still uses the same camera and HUD rules. Caption it “concept / target render,” not a fake ship screenshot.

## 1. Write the visual question

One sentence: emotion + 3Cs (character, camera, control) + what the player is *doing* in the shot. Without this, thumbnails wander.

## 2. Reference as rules, not a collage dump

Mood board with sections: camera, value, materials, HUD density, shape language, lighting, and a **do-not-use** column. Mix real-world photos with several games as *structural* refs (FOV, value plan, silhouette taxonomy, protected hues, HUD density). Extract rules, not pixels.

Do not trace, photobash, or AI-blend another game’s screenshot into a “our game” image. Do not use another game’s UI chrome, logos, or distinctive designs. Borrowed assets are allowed only in a **private disposable prototype**, never in a mockup that is shared, pitched, or used as a production target. If the board cites real games, label “structural reference” vs “aesthetic vibe.”

AI, if used at all: thumbnails and ideation only. Human redraw before anything is locked. Not a locked style frame.

## 3. Thumbnail flood (same beat)

6–12 small frames of the **same play beat**: camera height, staging, silhouette, where HUD sits. Review only readability and feeling, not detail. Pick 1–3 to develop. Do not polish unlocked designs (that costs several times more later).

## 4. Value lock before color

Paint 2–5 values, or desaturate. Player, threat, cover, and path must survive grayscale and squint. Value is read first, hue second, saturation third. Equal contrast everywhere is noise. Fail here → do not color.

## 5. Comparable style frames

When choosing a look, show **2–4** alternatives, not a buffet of finished paintings.

1. Freeze content: same beat, same pose, same FOV, same HUD wire, same time of day unless lighting *is* the variable.
2. Change only style: shape language, value plan, palette, material/shader, line weight, lighting philosophy.
3. Present as a grid at identical pixel size, plus a grayscale row.
4. Caption each with the *rule* being tested (e.g. “low-contrast world, high-contrast characters”), not only a pretty name.

After lock, stop the beauty contest. New images **expand** the locked language (new biomes, new verbs); they do not reopen it.

## 6. What must be in the first real mockup

Mock a **defining gameplay situation through the real camera**, not a cinematic poster.

- Aspect ratio of the target (usually 16:9; also check 21:9 and notches).
- Gameplay-readable subject: one clear play verb (fight, climb, talk, aim, navigate).
- Silhouette and value hierarchy: hero vs environment still reads in grayscale.
- **Actual game camera:** FOV, height, lens from design. Do not invent a flattering telephoto gameplay will never use.
- **HUD that will actually be on screen.** A clean still with no HUD is often marketing, not a game mock.
- Lighting that sets mood *and* points at the next space.
- Correct metrics: door widths, character height, cover, map scale. If a prototype or greybox exists, **paint over a real screenshot**. If not, 2D thumbs are valid vis-dev, but the *lock* still must use real FOV/metrics as soon as they exist.
- A typical moment, not only the peak cinematic.
- Label “concept / fake screenshot / not in-engine” if it could be mistaken for a capture.

## 7. HUD pass

HUD is a readability system on an uncontrolled background, not decoration.

- Frequent *and* urgent → persistent slot; else contextual or menu. Menus can be dense; HUD cannot.
- Persistent core in fixed positions (habit). Keep the center play-space clear unless the genre demands otherwise.
- Never validate contrast only on a pretty dark plate. Test light, snow, explosion, cave.
- Color is never the only carrier of meaning; pair with shape, icon, position.
- Draw title-safe (~inner 90%) and action-safe guides. Text, health, ammo, objectives, prompts stay inside title-safe. Only backgrounds/VFX bleed. Respect notches.
- Mock at 1:1 target aspect; also drop the 16:9 HUD onto 21:9 and a phone-notch overlay.
- Type at real pixel size, then view the PNG on a phone and from couch distance. Floors (not targets): about 26 px body at 1080p on console, 18 px on PC; players should be able to scale to 200% without losing content. Design UI function at the **lowest** supported resolution; author UI textures at the highest.
- Do not bake live numbers into “final” UI art unless the mock is explicitly a static comp.
- HUD minimalism is a genre choice, not a quality bar. Diegetic HUDs only when the whole game is built for them.

## 8. Honesty and feasibility

Replace any invented cinema camera with gameplay FOV. If vibe needs motion more than a still, a fake trailer is an alternative; stills remain the default.

Then a feasibility pass with whoever owns tech and design: can this team ship this shader, material density, and brush language? Adjust the *still* until it is a promise you can keep. Stylized is not automatically cheaper.

## 9. Lock and expand

Lock **one** master fake screen (optional second biome/verb if the game is not one-look). Distribute it; a concept that never reaches modelers is worthless.

Expand inside the box:

- Color script for zones/acts (protected hues for threat/interact/team).
- Greybox paintovers for real spaces.
- Character/prop concepts with callouts, turnarounds if 3D, material notes.
- UI screens from the same chrome.
- Each new image must be checkable against the master still (milestone screenshot diffs).

Lookdev of a hero asset (silhouette match → materials → in-engine, not only an offline beauty shot) is the gate **before** volume production. A vertical slice is later: do not polish a slice until prototypes said “make this” and mockups said “it looks like this.”

## Handoff package (when the look is locked)

- Locked fake screenshot(s) at gameplay FOV + HUD
- Grayscale/value companion
- Palette as relationships (dominant / filler / shadow / accent), not only hex (engines shift color)
- Shape-language sheet + do/don’t
- Color script
- Callout/turnaround for hero characters
- Greybox + paintover for a representative space
- UI wire + hi-fi HUD at min and max res, with safe-area overlay
- Explicit “this is not the cinematic camera” note
- Feasibility notes (what the team can actually ship)

## Avoid

- Over-polishing thumbnails or unlocked designs
- Decorating instead of showing play (empty beauty vista, no verb, no path)
- Cinematic camera that gameplay FOV cannot match
- Unreadable values: hero, terrain, and BG in the same range
- Color before value
- Treating a mood board as a locked style or as an outsource brief
- Treating a mockup as a vertical slice
- Endless “one more direction” after hero lock
- Copying another game’s screenshot or chrome into a production/pitch mock
- Unlabeled fakes that impersonate a shipped product
- AI as a locked style frame
- Mocking a world the greybox cannot contain
- Protected gameplay colors reused as ambience
- Overpromising complexity the team cannot ship

## Sources (practices drawn from)

Charles Boury (fake screens); Neil Blevins (games vs film concept, greybox); Rami Ismail (prototype vs vertical slice); Peter Angstadt (value/readability); WANDR (HUD); Xbox Accessibility Guideline 101 and Game Accessibility Guidelines; Unity Safe Area and Unreal UMG Safe Zone; Nasty Rodent (lookdev, color); Game Art Services (concept pipeline). Recaps of Gerben Pasjes and Christian Lichtner used for 3Cs / silhouette principles, not as verbatim talks.
