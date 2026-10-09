---
name: rh-qualia-roadmap-update
description: "Use when updating the RH/Λ roadmap with Qualia-style new questions per subcategory, or when the roadmap ideation routine runs."
---

# RH Qualia roadmap update

## When
User asks to refresh the RH/Λ roadmap, invent new open questions per subcategory, or the scheduled roadmap ideation routine fires.

## Separate from
- Forward-U self-improve certifier loop (referee bar A/B)
Do not glue these threads into one fluent progress story.

## Run
In the research tree under roadmap/ (or the owner's equivalent):
`python3 qualia_roadmap_update.py`
(or regenerate ROADMAP.md/json and QUESTION_BANK.md by the same intent if scripts were customized).

## After run
1. Read LAST_RUN.json (or equivalent).
2. If questions were added: tell the user the count, list up to five with subcategory ids, point at ROADMAP.md.
3. If none added: stay quiet unless they asked for a manual run.
4. Never claim sentience, Λ=0, or that ideation exits documentation mode.

## Hard kills
Forbidden question patterns: prove RH, restore uniform H5 as U, energy forces reality, etc.
