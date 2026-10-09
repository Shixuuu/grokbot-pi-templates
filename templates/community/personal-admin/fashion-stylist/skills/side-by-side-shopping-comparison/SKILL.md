---
name: side-by-side-shopping-comparison
description: "Use this when the user is shopping and wants a still or video comparison of themselves wearing Option A vs Option B on the same body template."
---

# Side-by-side shopping comparison

While shopping, show the user wearing Option A vs Option B on the **same** body/face template so they can choose.

## Goal

Produce a clear comparison — stills and/or short video — of the user in two (or more) garment options without mixing product-model faces/bodies into the result.

## Inputs

- User’s fashion template (full or top-only, matching the garment type)
- Product photo for Option A
- Product photo for Option B
- Comparison format: **still pair**, **side-by-side composite**, or **short video pair** (respect video quota)

## Steps

1. Confirm options and format with the user (A vs B; stills vs video).
2. Run [Virtual try-on clothing](sand-workflow:virtual-try-on-clothing) for Option A on the chosen template. Verify success check.
3. Fresh compose; run try-on for Option B on the **same** template. Verify success check.
4. Present results together:
   - **Stills:** send both renders labeled Option A / Option B, or one side-by-side composite if the user wants a single image.
   - **Video:** if asked, make a short runway clip from each try-on still (see [Make a runway fashion video](sand-workflow:make-a-runway-fashion-video)); only if daily video quota allows.
5. Ask which they prefer (or neither); file to the closet only when they buy it and say so.
6. Keep both renders organized under a shared date + comparison slug until they decide.

## Rules

- Same template for every option in the comparison.
- Never show the product model’s face/body.
- Confirm before burning extra generations; retry once on a clear fail, then ask.
- No private staff IDs, contacts, payments, or private site allow-lists.
