---
name: printful-tee-design-pipeline
description: "Use this when creating or publishing print-on-demand designs for a Printful DTG t-shirt (idea → print-ready file → mockup → approve → publish)."
---

# Printful tee design pipeline (v1)

Printful-only workflow for one product. Do not expand to other POD sites, stores, ads, newsletters, or analytics unless the user explicitly unlocks that scope.

## Default product (v1)

- **Product:** Unisex Staple T-Shirt | Bella + Canvas 3001 (Printful)
- **Method:** DTG
- **Placement:** front / large front (prefer large_front for new products)
- **Master canvas:** transparent PNG, **4500 × 5400 px**, **300 DPI** target (min 150 DPI), **sRGB IEC61966-2.1**, under 200 MB
- **Background:** fully transparent (no white box)
- **Note:** Bella + Canvas 3001 may downscale on XS–M (smaller max print area ~11.5″ × 13.8″ vs ~15″ × 18″ on L+). For v1, design for the large front area; mention size scaling only if the user asks.

Always re-check the product’s **File guidelines** tab in the Printful catalog before upload — product templates win over this skill if they disagree.

## IP guardrails

- **Merch art:** original designs only. Do not put official X, SpaceX, SpaceXAI, Cursor, or Grok logos/marks on shirts unless the user has explicit written permission. Fan-themed original art / slogans are the default.
- Prefer “Created with Grok” attribution where Grok-generated images are published, per SpaceXAI brand guidelines.
- Never include secrets or credentials in shared templates.

## Hard rules

1. **Approve before publish.** Never publish, sync to a store, or place a paid order without explicit user approval in chat.
2. **Printful only** for v1.
3. **One product type** unless the user expands scope.
4. Single-bot architecture for v1 (no multi-bot groups unless user unlocks).

## Pipeline

### 1. Theme / branding
- Confirm niche, tone, colors, and words/subjects to avoid.

### 2. Concept
- Propose 3–5 short design concepts (name + one-line visual + suggested shirt colors).
- User picks before generating final art.

### 3. Create the print file
- Generate artwork (e.g. Grok Imagine / image gen) sized for the master canvas.
- Keep important elements inside a safe centered area (avoid extreme edges).
- Favor bold, simple graphics that read at tee distance; avoid hairline strokes and tiny text.
- Export: transparent PNG, sRGB, 4500×5400 @ ~300 DPI when possible.

### 4. Fit check
- Verify dimensions, transparency, and that the design isn’t a full-bleed white rectangle.
- If using Printful’s downloadable template for the SKU, align art to that template.

### 5. Mockup in Printful
- Open Printful (browser or signed-in session).
- Create / edit a product template for Bella + Canvas 3001.
- Upload the print file, place on front, generate mockups.
- Show mockups to the user.

### 6. Approval gate
- Ask the user to **approve**, **alter**, or **decline**.
- On alter: revise art or placement and re-mockup.
- On decline: stop; keep the file for reference if useful.

### 7. Publish (only after yes)
- Publish or sync only the approved product.
- Capture: product name, Printful product/template ID, variants enabled, timestamp.

### 8. Optional status (stretch)
- If asked: check recent orders or sales for that product only. Do not build bookkeeping systems in v1.

## Outputs the user should see

- Concept list → chosen concept
- Print-ready file path / preview
- Mockup images
- Clear **approve / alter / decline** decision
- After publish: confirmation plus a short write-up of what the bot did

## Out of scope for this skill

Other POD platforms, Canva/GIMP tooling, personal storefronts, newsletters, ads, review-email monitoring, multi-product catalogs, automated bookkeeping, multi-bot teams.

## First message (for new owners)

After adding this bot, send:
Design a Bella + Canvas 3001 tee for my brand — make original art, a print-ready transparent PNG, and a Printful mockup, then wait for my approval before publishing.
