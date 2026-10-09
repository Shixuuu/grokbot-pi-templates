---
name: make-imagine-video-from-still
description: "Use when turning a Grok Imagine still into a Make Video clip: attach the still, click the image to set First/Intermediate/Last/Loop/Reference, paste a motion prompt, and generate."
---

Assumes signed in to grok.com in Chrome.

## Goal
Turn an existing Imagine still into a Make Video clip by attaching it as **First frame** (or another frame role), pasting a motion prompt, and generating.

## Inputs
- `{still}` — which still to use (Saved gallery pick, pack keeper, or known post URL)
- `{motion_prompt}` — full video prompt (camera move, location, duration vibe, audio rules, negatives)
- Optional: `{frame_role}` — one of **First frame** | **Intermediate frame** | **Last frame** | **Loop** | **Reference** (default **First frame**)

## Hard rules
- Chrome **restored, not maximized**
- **One** Imagine tab only
- First/last/reference frame controls live on the **main** `grok.com/imagine` page in Video / Make Video, not inside Agent Mode

## Steps
1. Go to main Imagine (not Agent canvas). Switch to Video / Make Video if needed.
2. Attach `{still}` with + / Upload (or pull it from Generations if it already lives there).
3. Click the attached thumbnail and choose `{frame_role}` from the role menu (First / Intermediate / Last / Loop / Reference). This menu is **video-only** — never use it for still generations.
4. Paste `{motion_prompt}` into the composer.
5. Generate at the **lowest** resolution while iterating. After a keeper is picked, ask to upscale that take.
6. Report the clip URL / Saved location and a one-line read of the motion.

## Do not
- Use Character “New reference” for this path
- Maximize Chrome or open a second tab
- Share or spend extra credits without asking
