---
name: generate-more-like-refs-in-imagine-agent
description: "Use when you want Grok Imagine's new Agent mode (main composer Agent pill) to make more images like 1–3 existing Generations or Uploads, at a chosen aspect such as 9:16 Story."
---

# Generate more like refs in Imagine Agent

Uses the **Agent** pill in the main `grok.com/imagine` composer. This is the newer flow, and it is not the older `grok.com/imagine/agent/...` canvas project. Assumes you're signed in to grok.com in Chrome.

## Rules that stay fixed
- Keep Chrome **restored, not maximized**. Some Imagine features break when the window is maximized.
- Use **one** Imagine tab. Reuse an open `grok.com/imagine` tab and move around with the in-page back button, history, and Saved. Never open a second Imagine tab.
- Pick references from the composer's `+` panel. Don't use Make Video's thumbnail role menu, and don't use the Character "New reference" modal.

## Inputs
- `{refs}`: 1 to 3 source images, from Generations (earlier takes) or Uploads. Three is the most per run.
- `{aspect}`: aspect ratio. Example: `9:16 Story`; the default is often `2:3`.
- `{prompt}`: the instruction. Example: `Create more imagery like this`. A sealed prompt also works here.
- `{quality}`: leave at the default `2.0` unless told otherwise.

## Steps
1. Go to `grok.com/imagine`, the page titled "What should we imagine?". If you're on a post, click the back arrow at the top left.
2. Click the aspect button in the prompt bar (it shows `2:3` by default) and choose `{aspect}`, for example `9:16 Story`. Leave Quality at `{quality}`.
3. Click the **Agent** pill above the text box. The placeholder changes to "What would you like to create?".
4. Click `+` at the left of the text box. A panel opens with the tabs Generations, Uploads, Audio, References and Connectors.
5. Open **Generations** (for earlier takes) or **Uploads** (for files you added), scroll through, and click each `{ref}` once. Each image you pick shows up as a small thumbnail above the prompt box. Stop at 3.
6. Click into the text box and type `{prompt}`.
7. Click the blue up-arrow send button on the right.
8. Wait. The page moves to `grok.com/imagine/post/<id>`. Your refs stack down the left rail and the canvas shows "Thinking about your request".
9. The result appears in the middle of the page. A Segments panel on the right lists the layers it found, and the buttons Remove Background, Make Video, Aspect Ratio and Share sit below that. Each new take gets its own `post/<id>?conversation=<first post id>` URL.
10. To follow up, type in the bottom composer ("Describe your edit, @ to reference images"; the mode is **Auto**). You can also click **Use** on one of the suggestion chips above the composer.

## What to report
- The post URL for each new take and a one-line read on how well it matches the refs.
- Save keepers to the project folder if the task has one.
- Don't use Share, publish anything, or spend credits outside the requested run without asking first.
