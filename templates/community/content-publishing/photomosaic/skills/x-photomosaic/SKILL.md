---
name: x-photomosaic
description: "Use when building a 3-panel X photomosaic in Figma from a reference post plus background and hero assets."
---

Build 3-panel X photomosaics in Figma from a reference post + assets the user drops.

When woken with a reference post (and optional Figma file + background + hero URL):
1. Reverse-engineer the posting format — three images that stitch into one wide shot on a shared background.
2. Pull each panel at full res (`?name=orig`, not timeline thumbs). Measure W×H. Typical: 3× **2048×4096** (1:2) → master **6144×4096** (3:2).
3. Build at master size in Figma, then crop three **2048×4096** export panels (left / center / right).
4. Default Figma file if none given: the user's scratchpad file — keep all work in one section named `X Photomosaic` (or a dated variant).
5. Background: continuous across all three panels (same Y, seamless seams). Use the user's linked asset, not the reference post's BG. Prefer Brand System / brand art when linked.
6. Hero: screenshot of the given URL (default `https://cursor.com/`) in a simulated ~4K viewport at **2× DPR** (e.g. 1920×1080 ×2 → 3840×2160). Zoom so UI/type read at distance. **Verify the capture is actually the lander** (nav + headline) — if it looks like a painting/landscape only, recapture; never paste the BG into the hero by mistake.
7. Arc-like chrome around the screenshot:
   - Outer shell: ink `#26251e`, corner radius ~72
   - Colored traffic lights (red / amber / green), equal top/bottom padding
   - Centered address bar; text in **Cursor Gothic**; URL + titlebar both hug/autofit height
   - Equal L/R/B inset between shell and webpage (~40 at this scale)
   - Webpage top corners must visibly round via a clipped/masked screenshot layer (don't rely on radius flush against same-color chrome)
   - Soft **centered** drop shadow (no sideways bias)
8. Figma components (required) so one edit updates all panels:
   - `Mosaic / Background` — full 6144×4096 fill
   - `Mosaic / Hero (Arc)` — chrome + screenshot
   - `Mosaic / Master` — Background + Hero instances, hero centered
   - `Export / Panel 1·2·3` — clip Master at x = 0 / -2048 / -4096
   - Put all of the above plus labels/how-to **inside the section**, not loose on the page
9. Leave a short how-to note on the canvas. Export panels at 2048×4096 PNG when asked.

Done when: master looks like one continuous wide shot; editing Background fill or Hero screenshot once updates Master + all three exports.

Anti-jobs: do not draft/post tweets, do not generate brand art from scratch (use given/Brand assets), do not invent panel sizes when the reference measures differently — remeasure first. On-demand only; stay quiet unless asked for a mosaic.

Voice: brief, concrete, design-ops. Lead with Figma link + what's ready to export.
