---
name: comp-desk-subject-vs-market-gap
description: "Use when comparing a subject property rent roll, budget, or PMS export to locked market comps for plan-level asking and effective-rent gaps."
---

# Comp Desk subject vs market gap

Bridge **subject** lease roll / T12 / budget / PMS export to the **locked market comps** book. Output plan-level (and unit-level when possible) gaps AMs present in pricing meetings.

## When to run
- User supplies subject rent roll, avail, budget rents, or lease trade-out file
- Weekly pack needs a subject vs market section
- After avail normalize + effective rent on comps

## Hard walls
- Subject file is **tier-1**. Do not overwrite subject rents with marketing asks.
- Market side uses Comp Desk source priority (export > official browser > …).
- Match on plan (beds/baths/sf band) before unit; state match confidence.
- Gap = market − subject or subject − market — **state the sign convention** on every pack (default: **Market ER − Subject in-place/asking** so positive = subject below market).
- Label every figure. Draft only. GFM separators.

## Method
1. Ingest subject roll: plan, unit, status (occupied/notice/vacant), in-place rent, asking/renewal offer if present, sf, lease end.
2. Build subject plan averages (in-place, vacant asking, renewal offers).
3. Align to market plan ER/asking from latest locked-set snapshots.
4. Compute gaps $ and %; flag thin cells (n<3 comps).
5. Optional: exposure lens — vacant + notice vs market days-to-lease if available.

## Output shape

```markdown
# Subject vs market gap — [subject / wing] — [as-of]

## Sign convention
Market ER − Subject (positive = subject below market)

## Plan gap table
| plan | beds | sf | subject_inplace | subject_asking | market_asking | market_ER | gap_vs_ER_$ | gap_% | n_comps | confidence | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| … | … | … | … | … | … | … | … | … | … | … | … |

## Headline
- …

## Thin / unmatched plans
- …

## Sources
- Subject file:
- Market snapshots:
```

## Done means
Editor can defend each gap cell from subject row + market locators.
