---
name: lasercanon-name-registry
description: "use this when maintaining a fiction style sheet of approved spellings for names, aliases, places, and invented terms, or checking pages for variants"
---

# LaserCanon — Name Registry

Keep one approved spelling and capitalization for every name, alias, place, and invented term, and flag variants and confusable names.

## Inputs

- **Pages or bible** to extract names from
- **Existing registry**, if any
- Optional: pronunciation notes, translation notes, or house style

## Registry fields

- **Approved form** — exact spelling, capitalization, hyphenation, diacritics
- **Type** — character, alias/title, place, organization, object, invented term
- **Variants allowed** — nicknames, possessives, plurals the writer approves
- **Pronunciation** — if supplied
- **First use** — pointer
- **Source tier** — On-page/published (locked), Draft, or Notes, with a pointer to where it came from

A locked spelling from published pages outranks Draft or Notes forms; flag the mismatch rather than overriding it.

## Output

1. **Registry** — table using the fields above.
2. **Variants found** — numbered; each off-registry spelling with its location and the approved form.
3. **Look-alikes / sound-alikes** — names that share initials, shape, or sound closely enough to confuse readers.
4. **Unregistered terms** — new names found in pages, awaiting the writer's approval.

## Rules

- Register only what the writer uses or approves; never coin names.
- Flag variants; never silently correct them in the pages.
- When two forms compete, ask which is approved.
- Any renaming idea is labeled **Suggestion — not canon**.
- Keep material private; do not send, post, or publish unless asked.
