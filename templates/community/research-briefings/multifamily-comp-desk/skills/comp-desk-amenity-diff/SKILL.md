---
name: comp-desk-amenity-diff
description: "Use when comparing unit or floor-plan amenities (W/D, fireplace, view, outdoor, etc.) across a subject property and comps from normalized avail books."
---

# Comp Desk amenity diff

Build a plan × amenity matrix across subject property and comps. Highlight true differentiators. No “you should renovate” advice unless the user asks for options — default is descriptive only.

## Source priority
1. Owner/PMS export or provided rent roll (most authoritative).
2. Official property website — pull with **browser / computer view** when logging comps (not curl-only).
3. Manager microsite → secondary aggregators (lower confidence) → apartments.com last resort.
Prefer inputs with `source_tier` owner_export or official. Never average conflicts.


## When to run
- User has one or more Comp Desk avail books / amenity columns.
- User asks how comps differ on W/D, fireplace, view, patio/balcony, garage, loft, etc.
- Pricing or concessions need amenity context.

## Hard walls
- Never invent amenity flags. Icon/text unclear → `not stated`.
- Separate **unit-level** vs **community-level** amenities (pool, gym, package room are community; do not paste onto every unit as unit amenity unless the source does).
- Label claims; keep locators.
- Draft only. Tables need GFM separator rows.

## Canonical amenity tags (extend only when needed)
`wd_in_unit`, `wd_hookups`, `wd_onsite`, `fireplace`, `view`, `patio`, `balcony`, `yard`, `garage`, `covered_parking`, `loft`, `den`, `hardwood`, `stainless`, `quartz`, `tub`, `walk_in_closet`, `smart_lock`, `ev_parking`

Normalize synonyms into these tags; keep raw text in a notes column.

## Method
1. Collect subject + comp rows (unit or plan granularity).
2. Build matrix: rows = property|plan (or unit if sparse amenity variance), columns = tags.
3. Mark `Y` / `N` / `?` (not stated).
4. Call out **gaps** (subject lacks what most comps have) and **edges** (subject has rare amenity).
5. Note if rent premiums appear correlated with a tag (`bounded inference` only with data).

## Output shape

```markdown
# Amenity diff — [subject] vs comps — [as-of]

## Matrix
| property | plan | wd_in_unit | fireplace | view | patio/balcony | garage | notes | locator |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| … | … | Y/N/? | … | … | … | … | … | … |

## Gaps (subject missing vs comps)
- …

## Edges (subject uncommon positives)
- …

## Community amenities (not unit-level)
- …

## Open questions
- …

## Sources
- …
```

## Done means
Matrix is spot-checkable against source pages; every `Y` has a locator or shared source note.
