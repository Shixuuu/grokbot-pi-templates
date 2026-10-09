---
name: re-imagine-listing-edit
description: "use this when polishing real estate listing photos with Grok Imagine (interiors or exteriors), including the PhotoFix workflow"
---

# Real estate Imagine listing edit

Use when polishing home listing photos (interior or exterior) with Grok Imagine, then QC and deliver full-resolution files.

## Quality pipeline (non-negotiable)
1. Upload the **full original** to Imagine. Never pre-shrink unless the site rejects the file; if forced, shrink as little as possible and note it.
2. Prefer Imagine **edit this photo** (attach source), not text-to-image invention.
3. Download Imagine’s **highest-res** export.
4. Verify pixel size before delivery. Chat preview is not the client file — deliver via Drive/zip and confirm dimensions.
5. No people/persons/figures in any prompt.

## Vocabulary (define once in plain English)
- **Verticals / keystone:** straighten leaning walls, door frames, window frames so the house doesn’t look tipped.
- **White balance:** remove yellow/orange mixed-bulb cast so whites look white; keep wood/stone/siding real.
- **Window pull:** bring back outdoor view in bright windows without glowing white edges.
- **Glare / reflection cleanup:** remove bright streaks on glass that can look like cracks or dirt — unify the pane; do not invent a different view.
- **Sky:** simple natural daytime sky; no swirly fake clouds; no cut-off white blobs that look like buildings.
- **Declutter / object removal / sky swap / virtual staging:** ask the owner first; may need MLS disclosure.

## Auto-ok (honest polish)
Brighten invitingly; lift dark corners locally; recover highlights on windows; straighten verticals modestly without cropping off the house/room; neutralize color; light denoise + mild sharpen; clean finger/lens artifacts; remove glass glare streaks that read as cracks.

## Ask before
Sky replacement, heavy lawn makeover, day-to-night, virtual staging, removing furniture/clutter/cords/personal items, inventing views.

## Never
Invent rooms, finishes, repairs; hide damage/stains; navy-shift charcoal siding; nuclear-green grass or green-tinted rocks; people in frame; crop light fixtures buyers should see; plastic HDR / glowing window halos.

## Master Imagine prompt — EXTERIOR
Copy and adapt; keep the “edit this photo” framing:

```
Edit this exact real estate listing photo. Do not reinvent the property. Keep this same house, architecture, materials, landscaping layout, and camera angle. Full structure in frame — do not crop off ends of the house. No people, no figures, no faces.

Apply standard MLS listing polish only:
- Straighten verticals (walls, windows, door frames) modestly
- Balance exposure: readable shadows, inviting light, not washed out
- Neutral white balance: whites white; siding/wood/stone colors stay true (charcoal stays charcoal, never navy)
- Soften blown highlights; clean window glare streaks that can look like cracks — unify glass, keep the real view
- Sky: simple natural daytime blue with soft realistic clouds only — no fake swirls, no cut-off white clouds that look like a building
- Lawn: only if asked — soft natural green on grass blades only; never tint rocks or dirt
- No virtual staging, no invented features, no hiding damage
```

## Master Imagine prompt — INTERIOR
```
Edit this exact real estate listing photo. Do not reinvent the room. Keep the same architecture, finishes, window coverings, fixtures, flooring, and camera angle. Keep ceiling light fixtures visible when they are in the shot. No people, no figures, no faces.

Apply standard MLS listing polish only:
- Straighten verticals (walls, door/window frames)
- Neutral white balance so walls read as even clean white/off-white; wood floors stay real
- Brighten dark corners and under-window bands evenly — inviting, not patchy masks
- Soft window pull: recover outdoor view if possible without glowing edges; clean glass glare streaks that can look like cracks
- Remove photo defects only (finger in frame, dust spots) — leave outlets unless asked
- No virtual staging, no inventing furniture, no hiding damage
```

## QC before delivery
Same property (not reinvented)? Full house/room in frame? No people? No navy siding drift? No green rocks? No fake sky swirls/cutoff blobs? Window glare streaks cleaned? Lights kept? Resolution ≥ source when possible, else max Imagine allows? Deliver Drive/zip with verified dimensions. Zoom small fixtures (bars vs hooks, bulbs, finishes) before locking a keeper.
