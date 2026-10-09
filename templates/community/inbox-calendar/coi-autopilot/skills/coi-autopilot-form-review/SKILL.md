---
name: coi-autopilot-form-review
description: "Use this when the user uploads or pastes an ACORD 25, 27, 28, 125, 126, 127, or 140 that is already filled out (by them, a colleague, another agency, or a vendor) and wants it checked for errors, missing data, unsupported checkboxes, or mismatches against a policy, dec page, contract, or lender requirement."
---

# ACORD Form Review (25 / 27 / 28 / 125 / 126 / 127 / 140)

## Procedure
1. Identify the form number and edition from the footer. Extract every box. For AcroForm PDFs, read each field's stored value (see coi-autopilot-pdf-fill, Inspect). For flat or scanned PDFs, use text extraction/OCR and read by position.
2. Run the **internal checks** (per-box table below).
3. If the policy/dec, contract, or lender checklist was provided, run the **external checks** (compare box by box).
4. Run the Most-seen COI mistakes list (coi-autopilot-core-rules), including the user's own additions.
5. Output: a corrected field table (changed rows marked **←**, with old → new), a PDF re-fill on the user's own blank if they want one (ask tap-to-pick: Yes, re-fill / No; coi-autopilot-pdf-fill), and a gap list (STOP / FIX / CHECK).

## Box-by-box review map

### ACORD 25
| Section | Box | Internal check | External check (if docs provided) |
|---|---|---|---|
| Header | DATE | Valid date, not in the future, ≥ each policy effective date | — |
| Producer | Name/address/contact/phone/email | Complete | Matches the agency profile |
| Insurers | INSURER A–F | Legal company name, not group name. Each letter used in the grid is filled | Matches dec exactly |
| Insurers | NAIC # | Present, 5 digits, not duplicated across different insurers | Matches dec/carrier docs |
| Insured | Name/address | Legal entity, not an individual's name unless sole prop | Matches dec named insured |
| Grid | INSR LTR | Each row's letter maps to a filled insurer | — |
| Grid | ADDL INSD / SUBR WVD | Any X must have endorsement support. X with no endorsement named in the Description → CHECK | Endorsement on the policy for that line → else STOP |
| Grid | POLICY NUMBER | Present per row, format consistent | Matches dec |
| Grid | POLICY EFF / EXP | Eff < Exp; not expired today; ~1-year term unless explained | Matches dec. Covers the contract/project term |
| CGL | CLAIMS-MADE / OCCUR | Exactly one checked | Matches coverage form |
| CGL | GEN'L AGG APPLIES PER | Exactly one checked | PRO-JECT needs an endorsement |
| CGL | Limits | Gen agg ≥ each occurrence; products agg present; amounts in the right boxes | ≥ contract minimums |
| Auto | Symbol boxes | At least one checked. ANY AUTO not combined with narrower boxes without reason | Matches dec symbols |
| Auto | Limits | CSL or split, not both | ≥ contract |
| Umbrella | UMBRELLA/EXCESS, OCCUR/CM, DED/RETENTION, limits | One of each pair checked | Follows form over the required lines |
| WC | Owner exclusion Y/N | Answered. If Y, described in Description | Matches exclusion endorsement |
| WC | PER STATUTE / E.L. limits | All three E.L. limits present | ≥ contract |
| Description | Text | Present when the holder needs a project/location. No coverage-granting language ("holder is covered", "coverage extended") | Endorsement form #s referenced exist on the policy |
| Holder | Name/address | Complete legal name and full address | Matches the request/contract/saved holder |
| Cancellation | Text | Unaltered preprinted wording. Typed-in "30 days notice" etc. without an endorsement → STOP | — |
| Signature | AUTHORIZED REPRESENTATIVE | Present before issuing | — |

### ACORD 27 / 28
| Section | Box | Internal check | External check |
|---|---|---|---|
| Company | Name / NAIC | Present | Matches dec |
| Policy | Policy #, Eff/Exp, Loan # | Present, valid, not expired | Matches dec/lender |
| Property | Location/description, Building vs BPP (28) | Physical address | Matches lender collateral |
| Coverage | Perils Basic/Broad/Special | Exactly one | Matches causes-of-loss form |
| Coverage | Amount / Deductible | Present. Wind/named storm deductibles noted | ≥ lender requirement, ≤ max deductible |
| Coverage (28) | BI, blanket, terrorism, fungus, RC/agreed value/coinsurance, EB, ordinance or law, earth movement, flood, wind/hail, named storm | Each row answered Y/N/NA consistently with limits | Matches dec/forms |
| Additional Interest | Type box (Mortgagee / Loss Payee / LLP / AI / Contract of Sale / Other) | Exactly ONE intended type (several boxes checked → FIX). AI on a property evidence form for a liability request → FIX, route to ACORD 25 | Interest on the policy's mortgagee/loss-payee schedule for that location by name and type → else STOP: ENDORSEMENT REQUIRED + change request |
| Additional Interest | Name/address/loan # | Complete | Matches lender instructions |
| Company | Multi-insurer policy | Participation shares listed, or "Various insurers, see participation schedule" | Matches the participation schedule |
| Remarks | Text | No coverage-granting language. No premium/fees | — |

### ACORD 140
| Box group | Checks |
|---|---|
| Header | Matches 125 (named insured, carrier, eff date). No quote # in POLICY NUMBER |
| Premises | Every 140 premises/building matches a 125 location (address, LOC #/BLD #) |
| Subjects of insurance | One row per subject; amount, coinsurance, valuation, causes of loss, deductible + type present or on the gap list. % deductibles show the base |
| Construction / protection | Construction class, year built, stories, area, protection class present; update years ≥ year built; area consistent with 125 |
| State selections | Sinkhole / mine subsidence accept/reject answered by the client, not pre-checked |
| Additional interest | One interest type per entry; name/address/loan # complete |
| Remarks | No placeholder text ("N/A per intake", "not supplied") |

### ACORD 125 / 126 / 127
| Form | Box group | Checks |
|---|---|---|
| 125 | Applicant name/entity/FEIN | Legal name consistent across 125/126/127. Entity type checked. FEIN present |
| 125 | Policy info | Proposed dates present and logical |
| 125 | Premises | Every location has a full physical address and employee/area data |
| 125 | Nature of business / description | Specific enough to classify. Date business started present |
| 125 | General Information Y/N | All answered. Each "Yes" explained |
| 125 | Prior carrier / loss history | Required years covered. "None" box vs listed losses consistent |
| 125 | Signatures | Present before binding |
| 126 | Header | Matches 125 |
| 126 | Limits | Aggregate ≥ occurrence. One "applies per" choice |
| 126 | Schedule of hazards | Each hazard has a location that exists on 125. Premium basis and exposure present. Class description matches operations |
| 126 | Contractors | All six Y/N answered. % subbed and $ paid to subs consistent |
| 126 | General Information | All answered. "Yes" explained |
| 127 | Drivers | Every driver has DOB, license #, state, experience. Count consistent with vehicles/use |
| 127 | Vehicles | VIN 17 characters (no I/O/Q), year/make consistent, garaging address physical, radius stated, lienholder on financed units |
| 127 | Symbols / coverages | Symbol per coverage. Physical damage deductibles present |
