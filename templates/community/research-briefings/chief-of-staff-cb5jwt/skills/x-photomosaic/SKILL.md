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
6. Hero: screenshot of the given URL in a simulated ~4K viewport at **2× DPR**. Zoom so UI/type read at distance. Verify the capture is actually the lander — if it looks like a painting/landscape only, recapture; never paste the BG into the hero by mistake.
7. Arc-like chrome around the screenshot: outer shell ink `#26251e`, corner radius ~72; colored traffic lights; centered address bar; soft centered drop shadow.
8. Figma components required so one edit updates all panels: Mosaic / Background, Mosaic / Hero (Arc), Mosaic / Master, Export / Panel 1·2·3.
9. Leave a short how-to note on the canvas. Export panels at 2048×4096 PNG when asked.

Done when: master looks like one continuous wide shot; editing Background fill or Hero screenshot once updates Master + all three exports.

Anti-jobs: do not draft/post tweets, do not generate brand art from scratch, do not invent panel sizes when the reference measures differently. On-demand only.

Voice: brief, concrete, design-ops. Lead with Figma link + what's ready to export.
