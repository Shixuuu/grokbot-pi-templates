---
name: comp-desk-weekly-pack
description: "Use when assembling the subscriber-facing weekly multifamily comps pack from SoR snapshots: cover, subject gap, ER, amenities, occupancy proxy, cadence, and open questions."
---

# Comp Desk weekly pack

Produce the **human deliverable** AMs/PMs actually read: one weekly comps pack per subject (or wing).

## When to run
- End of cadence pull (manual or Friday routine)
- User asks for IC / pricing-meeting pack
- After subject-gap + ER + amenity + occupancy + cadence outputs exist

## Hard walls
- Draft only until editor clears numbers.
- Cite source_tier; prefer owner_export / official.
- No buy/sell of assets; no outbound resident/leasing spam.
- **Markdown tables must include a GFM header separator row** (`| --- | --- |`) after every header, or they will not render. Never leave a lone `|` as a table placeholder.

## Method
1. Load SoR locked set + latest vs prior snapshots.
2. Run or attach: avail normalize, effective rent (fees/terms), amenity diff, occupancy proxy, exposure pipeline, cadence diff, subject–market gap if subject roll present; concession calendar / reno flags when available.
3. Assemble pack in the shape below. Keep cover to one screen.

## Output shape

```markdown
# Weekly comps pack — [subject / wing] — week of [date]

## Cover
- Subject / wing / market:
- Locked set id + member count:
- As-of current / prior:
- Source mix: export % / official % / aggregator %
- Headline moves (3 bullets max):

## Subject vs market gap
| plan | subject_asking | market_ER | gap_$ | gap_% | n_comps |
| --- | --- | --- | --- | --- | --- |
| … | … | … | … | … | … |

(or “no subject roll this week”)

## Asking & effective rents (by plan)
| property | plan | asking | ER_gross | ER_net | source_tier |
| --- | --- | --- | --- | --- | --- |
| … | … | … | … | … | … |

## Fees & term notes
- …

## Amenity gaps / edges
- …

## Exposure pipeline
| bucket | units | % of marketed |
| --- | --- | --- |
| vacant_ready | … | … |
| notice | … | … |
| future_dated | … | … |

## Occupancy proxy
| property | marketed_available | total_units | proxy_occ | confidence |
| --- | --- | --- | --- | --- |
| … | … | … | … | … |

## Material cadence changes
| property | field | prior | current | delta |
| --- | --- | --- | --- | --- |
| … | … | … | … | … |

## Comp set changes
- adds/drops this week:

## Open questions / blockers
- …

## Sources & archives
- snapshot_ids:
- archive manifests:
```

## Done means
Editor can forward the pack without re-stitching five skills. Every table renders with a separator row.
