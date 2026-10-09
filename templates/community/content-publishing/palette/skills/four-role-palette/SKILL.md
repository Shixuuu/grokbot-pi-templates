---
name: four-role-palette
description: "Use when extracting or applying a colour palette from a photo, place, object, or reference, and you need roles and proportions, not a flat list of hex codes."
---

Turn a scene into four named colours with a hierarchy. A hex code records a colour. It does not record its job.

Source: Christian Gideon / Lusso Archive, "Building a Color Palette from the World" (Aug 2026). Keep the method. Do not keep the essay.

## When

Someone hands you a photo, a place, a physical object, or a reference image and wants a palette you can reuse on a room, brand, UI, slide, or object.

Do not use this for semantic UI tokens (success / warning / error) or a 10-step neutral scale. Those are a different job.

## Roles

Read the source. Pick four colours. Name each by role, then by hex.

1. **Anchor** (~55%). Lowest value. Visual weight. Usually the darkest field. Need not be black. Deep green, navy, or burgundy often beat pure black because they still show a hue. Sets the contrast range so lighter colours read as light.
2. **Energy** (~20%). Highest chroma, or the warm/cool clash. Relational: a quiet red can go loud next to muted green. Too much flattens the hierarchy.
3. **Atmosphere** (~20%). Lighter, lower chroma. Cream, mist, stone, dusty pink. Softens the jump from anchor to energy and keeps the light of the original scene.
4. **Anomaly** (~5%). The colour you nearly missed. A vein, a fleck, a scrap of snow. Power is scarcity. This is usually the one people remember.

Start at 55 / 20 / 20 / 5. Adjust after that. Do not give every colour equal space.

## Process

1. Look at the source. Do not invent colours that are not there.
2. Assign the four roles. If two colours fight for energy, pick the one that is loudest *against the anchor*, not the loudest in isolation.
3. Record each as `role — hex — one-line note` (where it sat in the scene).
4. Apply in that order: field first, then energy, then air, then the fleck.
5. If this is UI or print with text, check contrast of body text on the atmosphere and of labels on the anchor. Fix the failing pair. Do not add a fifth decorative colour to paper over it.

## Output

Four lines, nothing else unless asked:

```
Anchor      #......  (note)
Energy      #......  (note)
Atmosphere  #......  (note)
Anomaly     #......  (note)
```

Then apply those roles to the job in front of you. Do not dump a 12-swatch mood board.
