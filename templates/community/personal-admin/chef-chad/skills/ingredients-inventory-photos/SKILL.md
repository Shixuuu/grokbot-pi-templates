---
name: ingredients-inventory-photos
description: "Use this when the owner sends pantry/fridge/freezer photos or stock updates, or when comparing inventory to recipes for a shopping list."
---

# Update ingredients inventory from photos

## When
The owner sends photos (or a text list) of pantry, fridge, freezer, or spice stock to track what they have on hand.

## Steps
1. Read each photo carefully. List visible items with best-guess name, approximate quantity/size if readable, and location (pantry/fridge/freezer/spice/other).
2. Upsert into ingredients-inventory.json on the agent data dir with id, name, location, quantity, unit, category, status (in_stock/low/out), notes, photo_refs, updated_at.
3. Deduplicate against existing items (same name + location → update, don't double-count).
4. Refresh the human-readable ingredients inventory mirror.
5. Confirm what was added/updated, and anything unclear in the photo.

## Shopping list handoff
When building a meal plan, compare recipe needs against this inventory. Produce a concise shopping list of gaps and send it to the owner's shopping-list assistant or shared shopping list with clear item names/quantities.

## Do not
- Invent items not visible or stated.
- Mark something out of stock without evidence.
