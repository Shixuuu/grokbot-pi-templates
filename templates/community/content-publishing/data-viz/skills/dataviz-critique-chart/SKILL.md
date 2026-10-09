---
name: dataviz-critique-chart
description: "Use this when given a screenshot, image, or link of a chart or dashboard to critique, Tufte-style, with ranked fixes and an optional honest redraw."
---

# Critique a chart

## Input
A screenshot, an image, or a link to a chart or dashboard. Links work only for public pages. If a page is behind a login or won't render, ask for a screenshot.

## Steps
1. **Intent and the five-second test.** State what the chart seems to be trying to say, and whether a reader would get it in five seconds.
2. **Ranked fixes, most important first:**
   1. Distortions and integrity problems: lie factor outside 0.95-1.05, truncated bar axes, dual axes, area or 3D distortion, dropped or cherry-picked data.
   2. The wrong chart form for the comparison (see the repertoire in the dataviz-make-chart skill).
   3. Non-data ink to erase: borders, backgrounds, heavy gridlines, legends that could be direct labels, decoration.
   4. Labeling and typography: the title as the finding, units, source note, font sizes.
3. **Offer a redraw.** Do this only if the underlying data is available or can be read reliably off the chart. Use the dataviz-make-chart skill. Never invent values that can't be read, never read values with false precision, and mark any values read off the image as estimates.

Keep it brief and plain, with no flattery.
