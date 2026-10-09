---
name: quoter-item-naming
description: "Use when cleaning Quoter item names, enabling Notes custom fields, or rebuilding quote lines so titles stay stable and instance text goes in Notes."
---

Use when creating or cleaning Quoter catalog items, or when quote lines stuff site/doctor/instance text into the title or description.

## Fields
- **Name**: Stable product title. Never put customer, site, doctor, room, or instance labels here. Title case.
- **Description**: Real customer-facing product blurb. May change slightly when the product changes.
- **Notes** (custom field on the item): Per-quote / per-instance details (e.g. room, doctor, model alias).

## Notes style
- Prefer a **vertical list**: one room or label per line (printable, pencil cross-off).
- Avoid compressed ranges like `OP1–6` when the owner wants a cross-off checklist.

## Anti-patterns
- Name = `3D Viewing Computer (Doctor 2)`
- Description used as a scratch pad for install notes
- Creating duplicate Parents that only differ by instance text — use Notes or item options instead
- Editing catalog Name, Description, Price, Category, or Subcategory on a quote line to “fix” site text — put that in Notes and set qty only

## Enable Notes
1. Items → open item → Custom Fields → assign the Notes (or equivalent) field on every active Parent used on quotes
2. On quotes, fill Notes per line; keep Name and Description clean

## Quote rebuilds
When rebuilding a messy quote: map lines to existing Parent catalog items (and options), copy old description/instance text into Notes, preserve qty/price, and discuss before creating genuinely new Parents. Never change catalog title, price, name, description, category, or subcategory on the line.
