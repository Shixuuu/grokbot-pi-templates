---
name: coi-autopilot-acord-140-property
description: "Use this when a commercial submission includes property (building, business personal property, business income/extra expense, spoilage, equipment breakdown, sinkhole or mine subsidence selections) and needs an ACORD 140 (Property Section, attached to ACORD 125), when the user asks for \"a 140\", or when intake notes, an SOV, a prior property dec, or an inspection report must become per-premises, per-building property rows."
---

# ACORD 140: Property Section (attach to ACORD 125)

Based on public descriptions of the 2014/12 edition (two premises per page, up to six subjects per premises). **The user's licensed blank controls**: map by meaning, name the edition. Never reproduce printed text or state notices. The 140 never stands alone: build or confirm the 125 with it (coi-autopilot-acord-125-126-127-application). Every box and its logical key: coi-autopilot-acord-140-field-map. Follow coi-autopilot-core-rules.

## Inputs (any)
- Intake notes, questionnaire answers, call summary.
- A statement of values, including the user's own SOV workbook (coi-autopilot-sov-statement-of-values: one SOV row = one premises/building; TIV columns = subject rows).
- A prior ACORD 140: reuse facts at Medium ("prior ACORD 140 dated <date>"), CHECK anything that ages (update years, alarm certificate expiration, values, protection class). Never carry the prior policy number or dates as the new term.
- A prior property dec or inspection report (as printed).
Sources disagree → use the more specific/recent one, cite it, CHECK the difference. Never pick silently.

## Procedure
1. One premises block per **LOC # / BLD #** from the 125; address must match the 125 exactly. The mailing address isn't a premises unless property is there.
2. Only stated facts, each cited. **One row per subject of insurance** (Building, BPP, BI/EE, personal property of others, tenant improvements…). Never merge the account into one row.
3. Amount, coinsurance %, valuation (RC/ACV/agreed/functional), causes of loss (basic/broad/special, theft), inflation guard, deductible + type, blanket #: **only as stated**. No "typical" 80% coinsurance, no default special form, no default deductible. Blank → gap list.
4. Percentage deductibles (wind/hail, named storm, earthquake): record the % and type "%". Printed dollar figure → copy it. Computed → show % × that building's limit, Medium. Printed vs math differ → printed wins, CHECK.
5. Construction, protection, building details (construction class, year built, stories, basements, area, roof type, wiring/plumbing/heating/roof update years, protection class, hydrant/station distance, fire district, sprinkler %, alarms): only as stated. **Never guess protection class, construction class, or year built from an address or web search.** Candidate construction class from a plain description = Low + CHECK.
6. State selections (e.g. Florida sinkhole accept/reject, mine subsidence): only from an explicit client selection; never pre-checked; unanswered → client question list.
7. Additional interests: name, address, loan #, location/building, interest type exactly as given; one box per interest.
8. Cross-checks → CHECK: 125 vs 140 premises (count, address, area, owner/tenant; tenant with a Building limit or owner with no Building row); building limit vs area (implausible $/sq ft is a question, never "corrected"); BI limit vs 125 revenue; SOV total vs sum of 140 amounts; year built vs update years.
9. Application guardrails apply: no default "N", no placeholder text, no computed dates, producer block only from profile or user's own prior ACORD.
10. Output field table, filled PDF (coi-autopilot-pdf-fill), gap list, **Client follow-up questions** ("What year was the roof last replaced?", "Is the building sprinklered? About what percent?").

## Box summary
- **Header:** carried from 125 (must match); NAIC never guessed; policy # only for renewal/change, never a quote #.
- **Blanket summary:** blanket #, amount, type, only if blanketed.
- **Premises:** premises #, street address (physical), building #, description.
- **Subject rows:** subject (one vocabulary: building/bldg/real property; BPP/contents/personal property/stock; BI/BI-EE/rents/rental value/time element/extra expense), amount (never invented or rounded up to a loan), coins %, valuation, causes of loss, inflation guard, ded + type ($, %, BI waiting days), blanket #, forms/conditions actually named.
- **Additional information:** BI/EE details, period of indemnity or ALS as stated, value reporting.
- **Additional coverages:** spoilage (explicit answers only); sinkhole / mine subsidence accept/reject + limit (never pre-checked; client signs where required); historical designation, open sides.
- **Construction:** type (frame, joisted masonry, non-combustible, masonry non-combustible, modified fire resistive, fire resistive); hydrant ft / station mi / fire district / code / prot class; stories, basements, year built, total area (vs 125 area → CHECK).
- **Improvements:** wiring, roofing, plumbing, heating + year (≥ year built). **Details:** code grade, tax code, roof type, other occupancies, wind class. **Heating** questions. **Exposures** R/L/F/R + distance.
- **Burglar alarm** and **fire protection** (sprinkler, standpipe, % sprinklered, alarm, central station) as stated.
- **Additional interest:** ACORD 45 attached, interest type, rank, name/address, certificate required, loan #, loc/bld, item.
- **Remarks:** renovations with years, explanations; no placeholder text. **Signatures/license #/NPN:** left for humans.

## Common 140 gaps (client question list)
Construction class, year built, stories, area, roof type and year · wiring/plumbing/heating years · hydrant/station distance, fire district, sprinkler %, alarms · coinsurance, valuation, causes of loss, deductibles (incl. wind/named storm %) · BI limit/period, rental income, extra expense · state sinkhole / mine subsidence selection · mortgagee/loss payee exact name, address, loan #.
