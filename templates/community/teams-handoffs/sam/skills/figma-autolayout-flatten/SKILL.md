---
name: figma-autolayout-flatten
description: "use this when building or cleaning any Figma autolayout — flatten to CSS: one relationship one frame, FILL/HUG/SPACE_BETWEEN instead of spacers, padding on the surface, captions as siblings"
---

Use for any Figma frame, not just tables or settings. Structure is CSS: fewest layers, distribution via properties, inspect tokens. Never eyeball.

## 1. One relationship, one frame
If two things sit in a visual relationship (beside, stacked, inset), that relationship is **one** autolayout. Extra wrappers are bugs. Same-named Frame-in-Frame is always flatten-worthy. If deleting a frame would not change the CSS, delete it.

## 2. Distribution is a property, not a node
Spread, pin, and inset come from `FILL` / `HUG` / `SPACE_BETWEEN` / `gap` / `padding`. Never empty text, spacer frames, 50/50 fake columns, or a wrapper whose only job is to push a sibling.

The longer (or stretching) child `FILL`s. The intrinsic child `HUG`s. The parent `SPACE_BETWEEN`s when they should sit on opposite edges. Resize the parent to verify: the hug child stays pinned to the trailing edge.

## 3. The box owns the padding
Whatever looks like a surface (card, row, field, section) is the autolayout that has the padding. Nested pads **compose** (parent 8 + child 8 = 16). Measure both. Don't fake inset with inner frames.

## 4. DOM, not collage
Label, surface, and helper/caption are **siblings**, like heading, box, and `.hint` in HTML. Meta copy does not live inside the surface it describes.

A status, icon, or chip is a library component sitting next to the title, not restyled type on the title.

## 5. A clone is a starting tree, not the structure
Hidden leftovers still count as layers. Strip them before rewriting.

Instances keep the fills, copy, and icons of the screen they came from. Rebind or swap to the library. Do not trust a cloned button, badge, or row to already be the right variant.

## Check
Count wrappers on one cluster. The stack should be `relationship > content + control`, nothing else.
