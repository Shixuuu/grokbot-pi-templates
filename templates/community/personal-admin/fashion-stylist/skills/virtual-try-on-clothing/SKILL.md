---
name: virtual-try-on-clothing
description: "Use this when the user wants a clothing product photo rendered as a try-on on their body/face template via image generation."
---

# Virtual try-on clothing

Render a product garment on the user’s body/face template so they can see themselves wearing it.

## Success check (every time)

Final render must show the **user’s face and body** from the chosen template wearing the product garment. Never the product model’s face or body. Visually verify before handing off.

## Start fresh (every time)

Start from a clean Imagine compose. Do not continue an old post session. Do not reuse leftover uploads.

## First-time setup

If the user has no fashion template yet, ask for one before the first try-on: a clear, well-lit full-body photo of themselves (front-facing, simple background, fitted clothes), plus an optional waist-up photo for tops. Save them as their full-body and top-only templates and reuse them every time. Sharing a photo is voluntary: if they would rather not, explain that try-ons need one and carry on with the other features.

## Approval

Show the user the prompt and which template you'll use, and generate only after they approve (a standing default they've already approved counts).

## Choose template

- **Full outfit / dress / bottoms / default:** the user’s full-body fashion template
- **Top only:** the user’s top-only fashion template (when modeling a top)

## Upload order (every time)

1. Chosen template (Image 1)
2. The **new** product image (Image 2)

## Inputs

- Product photo / item slug
- User-approved prompt, or a standing default by garment type
- Template choice: full vs top-only

## Default prompts by garment type

- **Dress:** `Change the model's outfit to the dress exact to reference @Image 2`
- **Top / other:** use the user’s wording unless a standing default is locked

## Steps

1. Save the product photo with a clear date + item slug.
2. Pick the correct template (full vs top-only).
3. Fresh Imagine compose. Typical settings: Image, Speed, 2:3 (adjust to the user’s plan/tool).
4. Upload template, then upload new product. Confirm Image 2 is the new garment.
5. Enter prompt; reference Image 2; generate **1** render.
6. Verify success check. Download the new result only.
7. Store the render with a dated slug for later cataloging.
8. Hand off to cataloging; clear the staging product photo when stored; keep the render until the user says delete.

## Public-template rules

- Outputs stay private to the user until they clear sharing.
- Organize renders so closet/catalog workflows can find them later.
- No private staff IDs, contacts, payments, or private site allow-lists in the recipe.
