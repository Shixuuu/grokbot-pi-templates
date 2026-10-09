---
name: comp-desk-comps-sor
description: "Use when creating or updating the durable multifamily comps system of record: property IDs, wings, official URLs, locked comp sets, and snapshot indexes for long-term tracking."
---

# Comp Desk comps SoR

Maintain the **system of record** for Comp Desk: stable IDs, locked comp sets, and a snapshot index so cadence diffs and weekly packs have somewhere durable to live.

## When to run
- First setup for a subject or portfolio
- Editor accepts/rejects suggested comps (lock a set version)
- After each successful avail pull (register snapshot pointer)
- User asks where history lives or how to name properties/wings

## Hard walls
- **Markdown tables must include a GFM header separator row** (`| --- | --- |`) after every header, or they will not render.
- Do not invent rents here — only registry + pointers to avail books / exports.
- Do not store secrets, PMS passwords, or raw PII beyond property/business contacts the user provided.
- Draft only unless the user names a concrete store (Drive folder, Notion DB, local path) to write into.
- Source priority unchanged: owner/PMS export > official site (browser) > manager site > aggregators > apartments.com last.

## Registry schema (minimum)
| Field | Notes |
| --- | --- |
| property_id | Stable slug, e.g. `market-property-001` |
| wing_id | Optional, e.g. `C` / `R` / `null` |
| display_name | Marketing name |
| address / market / submarket | As stated |
| official_url | Primary public site |
| export_path | Last tier-1 rent roll/avail if any |
| class_cues | Vintage, units, stories — labeled |
| locked_comp_set_id | Current approved set version |
| notes | Quality split, access issues |

## Locked comp set schema
| Field | Notes |
| --- | --- |
| set_id | e.g. `market-set-wing-2026-01-01-v1` |
| subject_property_id + wing_id | |
| members[] | property_id, official_url, why_included, status active/dropped |
| add_drop_log | date, editor, reason |
| scoring_rules_note | radius/weights if non-default |

## Snapshot index schema
| Field | Notes |
| --- | --- |
| snapshot_id | `property_id_wing_YYYY-MM-DD` |
| as_of | America/Chicago |
| source_tier | owner_export / official / … |
| pull_path | browser / export |
| avail_book_path | Path or URL to markdown/CSV |
| archive_manifest_path | Pointer to pull-archive skill output |
| schema_version | Comp Desk skill/schema version string |

## Method
1. Upsert subject (+ wings) into registry.
2. On editor accept of suggest-comps → write locked set + add/drop log.
3. After each pull → append snapshot index row; never overwrite prior snapshots.
4. Return a short SoR card: IDs, locked set members, latest snapshot pointers.

## Output shape

```markdown
# Comp Desk SoR card — [portfolio or subject] — [as-of]

## Properties / wings
| property_id | wing | display_name | official_url | latest_snapshot |
| --- | --- | --- | --- | --- |
| … | … | … | … | … |

## Locked comp set
- set_id:
- members:
- last change:

## Snapshot index (recent)
| snapshot_id | as_of | source_tier | avail_book_path |
| --- | --- | --- | --- |
| … | … | … | … |

## Open questions
- …
```

## Portfolio
Maintain a watchlist of property_id/wing_id + locked_set_id for Comp Desk portfolio watchlist. Store spatial/class cue fields from Comp Desk spatial class cues on each property row when available.

## Done means
Editor can re-open last week’s book by snapshot_id; locked set is auditable.
