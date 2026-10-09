---
name: media-outer-loop
description: "Use when generating or restyling images or video: gather brand/refs/subject, write the Imagine prompt, generate, cut on FAL, review, and only lock when the owner says so."
---

# Media outer loop

This bot sits **above** image and video generation. It does not invent a new pipeline each time. It gathers context, writes the prompt, runs Imagine, cuts the background on FAL, and iterates until the owner locks.

Avatars are one use of this loop. The same loop covers icons, stills, clips, and overlays.

Coding-agent outer-loop skills are reference only. Do not run a coding workflow unless the user asked.

## First-run setup

Do this once. Stop only for things only the user can do (paste a key, name brand colors).

1. **xAI.** Connector secret `xai` / `api_key`. Needs Imagine credits. Stills: `POST https://api.x.ai/v1/images/generations` model `grok-imagine-image-2.0`. Edits: `POST https://api.x.ai/v1/images/edits` with `images: [{url, type: "image_url"}]` — a raw `image` object-array 422s. Video: Imagine video when the owner asks for a clip; same key.
2. **FAL.** Connector secret `fal` / `api_key`. Header `Authorization: Key $FAL_KEY`. Never print keys.
3. **Brand.** Ask for solid hexes (and optional plates/wallpapers). Record them. Do not invent a palette.
4. **Subjects.** For a roster, lock who/what each output is. Style may change; subjects stay until the owner swaps them.
5. **Surfaces index.** If a `surfaces.md` sits next to the lock/brand files, that is the gather list. Read it before prompting.
6. **No standing routine** unless they ask for a watch or a batch loop.

## A single job (the loop)

### 1. Scope

Get: still vs clip, subject, destination (avatar, icon, overlay, one-off), constraints, and done-when. If the destination is a live avatar, do not apply until they say lock.

### 2. Gather

Read-only first. Pull from what you already have:

- surfaces index (`surfaces.md`) if present
- locked subjects, fit, and plate colors
- house style / prompt stem
- style refs the owner liked (real Memoji refs, official logos, prior winning plates)
- brand solids
- last failure (moderation, cut ate the subject, uncanny face) so the next prompt avoids it

Do not regenerate a locked identity to fix framing. Replate or recut first.

### 3. Write the Imagine prompt

Hand off the **subject and the look**, not a pixel prescription.

Include:

- subject (locked idea)
- house style stem (Memoji person, glossy 3D object, white logo, etc.)
- camera (portrait vs 3/4 high-angle object)
- plain light/white background so FAL can cut
- hard negatives (yellow people emoji, pixel art, photoreal, text, watermark, unclothed)

A labeled hypothesis is fine ("last cut ate the wood, try Matting") if you mark it non-binding.

### 4. Generate

Imagine still or clip. Save the original locally. If 400-moderate, soften wording and retry once. If the subject is a person and the gen is the wrong gender, yellow emoji, or uncanny, regenerate before cutting.

### 5. Cut

Run FAL background cutout.

- Image: `fal-ai/birefnet/v2` (Portrait for faces, Light for objects, Matting if Light eats edges)
- Video: `fal-ai/birefnet/v2/video` or `fal-ai/ben/v2/video` when you need true alpha (webm / ProRes 4444, not x264 mp4)

Download immediately. FAL URLs expire.

### 6. Output

Composite onto the named destination: solid brand color, existing plate, or leave as a transparent cut. Save every layer (original, cut, plate). Show the plate in chat.

### 7. Review

Check: subject readable, not tiny, not clipped badly, not a person-when-object, background is what they asked for. Rework the weak step only (prompt, cut model, or plate). Do not restart the whole roster to fix one file.

Apply a live avatar or publish only when they say lock.

## Prompt quality bar

- One subject
- Named destination
- Done-when a stranger could check
- Constraints as fences, not a tutorial
- No "move this pixel 4px left" unless they asked for a pin/gap fix

## Hard fences

- Do not print keys.
- Do not apply live outputs until the owner locks.
- Do not change a locked subject or identity to fix crop.
- Do not leave the only copy on a FAL URL.
- Do not widen "help me think through a prompt" into generating a full roster unasked.
