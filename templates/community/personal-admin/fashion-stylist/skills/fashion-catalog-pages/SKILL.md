---
name: fashion-catalog-pages
description: "Use this when building or updating fashion catalog pages (category tile pages with SKUs and captions)."
---

# Fashion catalog pages

Build printable/shareable category catalog pages from per-item folders. One page image per category.

## Purpose

One page per category (Dresses, Tops, Skirts, Pants, Jackets, Shoes, Accessories, Purses, Jewelry, Formal). Shoes get their own page split into sections by type (Sandals, Heels, Boots, …). Accessories holds Hats and Scarves as sections. Jewelry has sections Necklaces, Earrings, Bracelets. Favorites come first within every section. Title centered; section headers left; tile captions centered under each image.

## Custom sections

The standard setup covers the user's own closet only. Status lanes (Incoming, Order Complete, Returns, Shopping Favorites or a Style Journal) and order tracking are not standard features. Add one only if the user asks for it as a custom section, and keep it in its own file, never mixed into the closet.

## Per-item folder (source of truth)

Each item gets its own folder with:

- `closet-asset.jpg` — isolated product on clean white (preferred for catalog tiles)
- `photo-800x800.jpg` — square crop for tight grids
- optional `on-body.jpg` / try-on when no isolate yet
- `item.md` with stable fields:
  - Title / display name (no color words in the name if color lives in its own field)
  - Brand, Color, Style, Size notes
  - Photos line (what files + who made the isolate)
  - Notes (fit quirks, “part of a set”, travel layer, etc.)
  - Display string for the tile caption
  - SKU, Category

## SKU scheme

Letter + 3 digits, stable forever:

- D### dresses · T### tops · S### skirts · P### pants/bottoms · J### jackets · H### shoes · A### accessories · JW### jewelry (NS### layered necklace looks, BS### bracelet stacks)

Never reuse a SKU; retire with a note if merged.

## Tile caption

1. Name (style only — keep color out of the name when possible)
2. Brand · Color · SKU

Never put the user's size in captions.

## Catalog layout standards

Catalog pages use the same page rules as the [Fashion Codex](sand-workflow:fashion-codex) so they drop straight into the book:

- A4 portrait, 1240×1754 px, white background, page title centered, section headers left-aligned, page number as a centered footer only
- 4×4 grid, 16 pieces per page, no tile boxes or borders; pieces centered in equal cells, scaled to the same height, never cropped
- Favorites first (small pink heart at the top-right of the cell, name tinted in the accent color), then rainbow color order: pinks and reds, corals and oranges, yellows, greens, blues and aquas, purples, then neutrals (white, cream, beige, brown, gray, black); light to dark within a family
- When a page fills, start the next page rather than cramming
- Formal / occasion pieces can get their own page separate from day dresses
- Stable SKUs (letter + digits); never reuse

## Labeling items from photos (when brand/name is missing)

1. Describe what you see in plain words: silhouette, neckline, sleeve, length, fabric look, print, hardware.
2. Propose a display name from that description (e.g. “Tiered Puff-Sleeve Midi”, “Cowl-Neck Dolman Top”) — style words, not color words in the name if Color is its own field.
3. Ask the user once: brand if known, favorite or not, size note.
4. File: category folder → item folder → isolate (white bg preferred) + square crop + item note with Brand / Color / Notes / SKU.
5. Rebuild that category catalog page; show them the tile + page for lock.

If they later lock a brand or rename, update the note and rebuild — **don’t invent brands**.

## Ask the user first

1. Category
2. Brand + style name (if known)
3. Color (separate field)
4. Size note (optional)
5. Approve the isolate before it replaces an old take; delete rejected versions

## Asset pipeline

Generate the white-bg isolate from a phone photo or product shot (see [Fashion asset from photo](sand-workflow:fashion-asset-from-photo)) → file it, assign SKU, rebuild the page image, confirm. Prefer a clean handoff between generate and catalog rather than mixing both in one pass.

## Starter prompts

- “Brand and style name if you know them — color stays on the Color line.”
- “Any size note?”
- “Part of a set with anything already filed?”
- “Approve this isolate to replace the old take?”

## Public-template rules

No private staff IDs, contacts, payments, or private site allow-lists. Authorized for the public marketplace template.
