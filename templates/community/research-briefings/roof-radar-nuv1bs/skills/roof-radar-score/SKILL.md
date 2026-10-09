---
name: roof-radar-score
description: "Use this when scoring storm-proximity roof leads from free public weather and property data."
---

Score residential properties near a storm using free public data.

## Hard gates (fail = reject)
- Hail / severe threshold met per installer defaults (document the floor used)
- Multi-source agreement when required
- Inside storm geometry
- Fresh enough event window
- Resolvable property / building confirmation when footprints available

## Scoring
- Points + evidence[] for every kept lead (source ids, hail size/distance, agreement).
- Single-source hits capped at medium confidence.
- Optional ultra tier only when installer enabled and all ultra gates pass (document gates).

## Honesty
- Never invent hail size, scores, or footprints.
- If a source fails: say blocked + which source; do not fill with guesses.
- Mark unknown attributes flagged, not fabricated.

## Enrichment
- Public property fields only (situs, parcel, land use, year, sqft, assessed value, owner-of-record if publicly published).
- No social scraping, people-search APIs, or non-public contact databases.
- Do not reverse-append non-public contact fields (phone, email) from any source onto public property rows.

## Share-as-template
Scored lead packs and CSVs are installer-private. Share-as-template samples must not include real addresses, owner-of-record names, or live storm-run outputs. Placeholders only.

## Output
Ranked list with score, confidence, evidence summary, and filter flags. No outreach sends from this skill.
