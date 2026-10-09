---
name: paste-sealed-prompt-into-imagine
description: "Use when pasting a sealed still prompt into grok.com Imagine (main composer) — Chrome not maximized, ONE tab only; optional attach + @image before prompt."
---

Assumes signed in to grok.com. Main Imagine composer (`https://grok.com/imagine`), not Agent Mode and not the Saved-library review skill.

Prefer the local `grok` CLI when it can run the same Image 2.0 still; use this web path when the user is already on Imagine or wants the web take grid.

## Hard rule — Chrome NOT maximized
Keep the Chrome window **restored (not maximized)** for every Imagine still run. Some composer controls and features fail when maximized. Do not maximize unless the user explicitly says they have tested otherwise and clears this lock.

## Hard rule — ONE Imagine tab
Reuse an already-open `grok.com/imagine` tab. Use the in-page back button, history, and Saved. Never open a second Imagine tab.

## Inputs
- `{sealed_prompt}` — the full sealed still prompt text
- Optional `{ref_image}` — a local image to guide the still
- `{aspect}` — default is often 2:3 Portrait; use what the brief says
- `{quality}` — default Quality 2.0
- `{count}` — e.g. x4 when the UI offers it

## Steps
1. Open or focus the single Imagine tab at `https://grok.com/imagine`.
2. Confirm Chrome is restored, not maximized.
3. Set aspect and Quality as specified.
4. If using a reference still: put `{ref_image}` into the composer, then type `@` the image **before** the sealed prompt text so it guides the still. Do not use Make Video’s click-thumbnail First/Last/Reference role menu for stills (that menu is video-only). Do not use the Character “New reference” library modal for this path.
5. Paste `{sealed_prompt}` after any `@` image tag. Do not paraphrase locked visual lines.
6. Generate. Wait for the take grid.
7. Report the strongest take with the post URL and a short visual read. Save keepers to the project folder when the task has one.

## Do not
- Maximize Chrome
- Open duplicate Imagine tabs
- Share or publish without asking
- Burn credits outside the requested run
