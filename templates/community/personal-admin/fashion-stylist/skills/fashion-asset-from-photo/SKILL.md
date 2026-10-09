---
name: fashion-asset-from-photo
description: "Use this when the user sends a photo of a physical fashion item to isolate as a clean product-style digital fashion asset."
---

# Fashion asset from photo

Turn a photo of a real garment into a clean product-style fashion asset (isolated on white) for cataloging.

## Goal

Prompt the image tool to **remove the background and isolate the fashion item**. Output is a **fashion asset** for Closet cataloging.

## Confirm before generate (required)

Generations are limited: **draft the short prompt and get the user’s approval before generating.** Do not generate until they confirm.

## Before the first generation

Images and videos are made in Grok Imagine in your browser. Before the first generation, check that Imagine is signed in. If it isn't, tell the user in one sentence that they need to sign in to Grok once on your computer, help them get there, and wait. Never stall silently on a sign-in page.

## Run rules

1. **Fresh compose every job** — blank Imagine compose; close leftovers first.
2. **One reference upload only** — the user’s photo of the garment.
3. **Fail fast** — if no real result in ~3–4 minutes, stop and tell the user; no long wander.
4. **Download safety** — only save the file tied to the **new** result. Never grab a cached old download.
5. **Retries** — auto-retry **once** on a clear fail (blank, major structural hallucination, wrong garment). On a **second miss**, ask the user before more tries.

## Prompting

Keep prompts **short**. Describe the item so the model renders it realistically:

- Isolate on a white background
- Accurate garment description: silhouette, length, construction, materials (lean — less is better)
- Anything to **remove** (hanger, stray straps, tags, clutter; wrinkles when the user wants that)
- Professional lighting / product photography

### Color

Prefer letting the reference photo drive color. If color must be named, use a **hex code** sampled from the photo — not shade words like “sky blue”.

### Pattern / print

**Do not name specific print motifs** (motif hunting causes hallucinations).

- Total floral: “floral print” OK
- Prefer “all-over print,” “printed fabric”
- **Exception for geometry:** houndstooth, stripes, checks, polka dots, color-blocking when they matter

### Tiny brand / hardware

**Omit** inventable details — logos, tags, tiny charms.

### Example (good)

```
Isolate dress on a white background, light nude one-shoulder asymmetrical floor-length gown with slit and bright shiny sequins, remove the spaghetti straps on the right side, professional lighting and product photography.
```

## Steps

1. Save the raw photo with a clear date + item slug.
2. Draft a short isolate prompt; **send to the user for approval**.
3. After approval: fresh compose; upload **only 1** reference; paste approved prompt; generate **1** asset.
4. Fail-fast at ~3–4 min with no real post.
5. Download only the new result; verify it is not an old cached file; store as a dated asset.
6. Hand the asset path + label to Closet cataloging; scrub raw if appropriate; confirm ready for the next job.

## Public-template rules

- Generalizable for any user with their own photos — no private staff IDs, contacts, payments, or private site allow-lists.
- One reference upload only — not a multi-image try-on setup.
