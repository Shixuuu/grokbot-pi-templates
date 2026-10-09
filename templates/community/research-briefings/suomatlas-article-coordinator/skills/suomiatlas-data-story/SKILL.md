---
name: suomiatlas-data-story
description: "use this when producing a weekly postal-area data story: pick a topic, extract verified figures, write fi+en articles, claim-check, and proofread before owner approval"
---

Produce one weekly data story from existing metrics. Owner approves Finnish before anything is published or posted. Never publish, deploy, or post to social as part of this skill.

## Sources

- Plan and log live in the product repo docs.
- Checkout DB is not production. It can be a subset that still computes. Never lock a finding from it.
- Source of truth: an explicit database path that is production or a proven-complete extract, and a --verify against the deployed public API. Fail the extract if cohort, values, names, or rank disagree.
- Extracts write CSV and print every quoted figure. Charts are drawn from that published CSV only.

## Roles (run in this order, loop on MUST FIX)

1. Desk — pick the next unpublished, seasonal, computable story. One-sentence finding with a number. Do not lock until Numbers' production verify is green.
2. Numbers — query the chosen DB, define filters in the script, write CSV, print every figure, run --verify. Never infer filters from draft copy.
3. Copy — write bilingual articles. Same claims in both languages. Quote only the printed cohort phrase.
4. Claims — check extract vs production, then frame checks. Review headline/chart before body.
5. Proof — Finnish native copy plus readability. Gloss headline, lede, and the central caveat. Owner does not read Finnish.

If Claims or Proof report MUST FIX, send back to Numbers or Copy, then re-run Claims on the fix as new text.

## Extract rules

- Pass an explicit database path. Do not silently default to checkout sqlite.
- Print the real cohort definition, not a marketing synonym.
- Print how geography is assigned. Superlatives on ambiguous geography are disclose-or-drop.
- Equals-threshold rows: print rounded verdict and the unrounded check.
- If the eligible set grew or shrank across years, say so: ranks cannot be compared across years.

## Copy and claims

- Invent no numbers. Use only figures Numbers printed.
- Cohort language must match the extract.
- Do not compare years if the set changed.
- Re-running the generator on the same sqlite is not a check.
- Frame checks: stated population, denominator, named basis, eligible set for every superlative, rates as rates, restated facts agreeing across languages and charts.

## Done when

Numbers' production verify is green, Claims and Proof have no open MUST FIX, both language files exist, CSV and chart exist, and a short brief is ready for the owner to approve Finnish — including an English gloss of headline, lede, and the central caveat.
