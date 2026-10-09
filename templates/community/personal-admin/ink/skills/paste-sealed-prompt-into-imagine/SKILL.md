---
name: paste-sealed-prompt-into-imagine
description: "Use when pasting a sealed still prompt into grok.com Imagine (main composer): Chrome not maximized, one tab only, optional attached reference, Quality 2.0, aspect, x4 takes, then review the four-take grid."
---

Assumes you are signed in to grok.com. This is the main Imagine composer (https://grok.com/imagine), not Agent Mode and not the Saved-library review flow.

## Hard rule: Chrome NOT maximized
Keep the Chrome window restored (not maximized) for every Imagine still run. Some composer controls fail when maximized.

## Hard rule: ONE Imagine tab
Do everything in a single Imagine tab. Use the in-page UI (composer, back arrow, left-nav Imagine, history thumbnails, Saved). Never stack duplicate grok.com/imagine tabs.

Before any paste:
1. Make sure Chrome is not maximized.
2. Count open grok.com / Imagine tabs.
3. If more than one, close extras until exactly one remains, keeping the one with the session.
4. Only open https://grok.com/imagine when zero Imagine tabs exist.

## Optional: reference image in the still prompt
1. Attach the image into the main still composer. Do not open the Character "New reference" modal, and do not use Make Video's First/Last/Reference role menu (video only).
2. Type @ and mention the attached image before the prompt text.
3. Paste the prompt after the @image mention.
For sprite work, attach hollow outline references only, never baked or filled PNGs.

## Inputs
- {prompt}: sealed still prompt. Paste as-is; never paraphrase locked visual lines.
- {aspect}: default 1:1 for sprites.
- {count}: default x4 takes.
- Optional {ref_image}.

## Steps
1. Enforce the not-maximized and one-tab rules. Focus that tab.
2. If on a post or Saved view, return to the main composer in the same tab.
3. If {ref_image} is set, attach it and @ it at the start of the prompt field.
4. Click into the composer and paste {prompt} with the OS paste shortcut. Do not retype.
5. Set Quality 2.0 (turn off Speed if on). After a reference is attached, Quality and x4 may hide; keep the aspect right regardless.
6. Choose {aspect} and set take count to {count}.
7. Submit and wait for the placeholders to resolve.
8. Review in the same tab: open a take, step through siblings with the right arrow, back arrow to return to the grid.
9. Report the strongest takes and their post URLs. Download only if asked. Often only about one take per run downloads cleanly, so submit several runs when more takes are needed.

## Confirm first
Share to X, Download All, Enhance, Make Video, Remove Background.
