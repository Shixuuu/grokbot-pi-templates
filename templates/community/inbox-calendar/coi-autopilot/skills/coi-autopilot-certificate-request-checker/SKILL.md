---
name: coi-autopilot-certificate-request-checker
description: "Use this when the user pastes a certificate holder's request email, a contract or subcontract insurance clause, a lease or vendor requirement, or a checklist and asks \"what do they need?\", \"can we meet this?\", or \"check this before I issue the COI\". Returns every requirement, maps each to the policy as MET / NOT MET / UNKNOWN, and lists the gaps and the endorsements needed."
---

# Certificate Request Checker

Front door for holder requests, contract insurance clauses, leases, vendor agreements, and lender letters. For issuing, use coi-autopilot-acord-25-certificate (or coi-autopilot-acord-27-28-evidence for lenders). Follow coi-autopilot-core-rules.

## Step 1: Pull out EXACTLY what is required (one row per atomic requirement)
Quote the request text for every row. Never paraphrase into something weaker (30 days stays 30 days; "ongoing AND completed" stays both).
- **Additional insured:** who (exact name/entities), which line(s), and which form: ongoing operations, completed operations (and for how long after completion), specific form numbers named (e.g. CG 20 10 / CG 20 37 "or equivalent"), vendors, lessor, managers.
- **Waiver of subrogation:** per line (GL, auto, WC and E.L., umbrella). Each line is a separate row.
- **Primary and non-contributory:** per line (GL, umbrella/excess).
- **Per-project (or per-location) aggregate.**
- **Limits by line:** GL each occurrence / general aggregate / products-completed ops aggregate / personal & advertising; auto CSL or split and symbol scope ("any auto", hired, non-owned); umbrella/excess each occurrence/aggregate and follow form; WC statutory and E.L. each accident / disease each employee / disease policy limit; professional, pollution, property, builders risk if listed.
- **Notice of cancellation:** number of days, to whom.
- **Specific wording:** anything that "must read exactly", holder name/address, project name, description text.
- Other: carrier rating minimums (CHECK: the bot doesn't look up ratings), deductible/SIR caps, occurrence vs claims-made, waiver/AI "on all policies".

## Step 2: Map each row against the policy documents the user provided
| Status | Use only when |
|---|---|
| **MET** | The policy, dec, or an endorsement in the upload shows it. Quote the policy line and cite the document/page/form number. Blanket "when required by written contract" endorsements count as MET with CHECK: "applies only if the written contract is signed (and, for waivers, before the loss)". |
| **NOT MET** | The provided documents show something different or short (e.g. aggregate "Per Policy", AI endorsement excludes completed work, umbrella $2M vs $5M required, no P&NC / waiver / notice endorsement in a complete forms schedule). State the dollar or wording gap. |
| **UNKNOWN** | The document that would show it wasn't provided (e.g. no WC policy), a forms schedule is missing, or a page is unreadable. Say which document to upload. Never guess. |

Never state or imply a requirement is met unless the policy document shows it. A prior certificate, the insured's word, or "we usually have that" is not evidence: UNKNOWN + CHECK. Umbrella counts toward an underlying limit only if the contract allows it and the umbrella schedules that line.

## Step 3: Output
1. **Requirements table:** # | Requirement | Request says (quote) | Policy shows (source) | Status | Gap / endorsement needed.
2. **Summary line:** "N of M met, K not met, U unknown."
3. **Gaps and endorsements needed**, most serious first. Endorsement families (form numbers vary by carrier; confirm with the carrier): additional insured (ongoing ops, completed ops, scheduled vs blanket), waiver of subrogation / transfer of rights (per line; WC is state-specific), primary and noncontributory, designated construction project(s) general aggregate, notice of cancellation to third parties, umbrella limit increase. Include a short ready-to-paste change request the user can send their carrier/wholesaler themselves.
4. **Description of operations:** if the holder's wording claims more than the policy supports, don't use it. Offer supported wording marked CHECK (facts plus endorsement numbers only), and say the requested wording can be used only after the missing endorsements are issued.
5. **Questions for the holder** (e.g. "Will you accept the carrier's own AI form as equivalent?").
6. Close with the verification line from coi-autopilot-core-rules. If the user then wants the certificate, carry every NOT MET / UNKNOWN row onto the ACORD 25 gap list; the boxes stay blank for anything not MET.

## Box map: requirement → ACORD 25 box
| Contract requirement | ACORD 25 box(es) affected |
|---|---|
| GL limits | CGL limits: EACH OCCURRENCE, GENERAL AGGREGATE, PRODUCTS-COMP/OP AGG, PERSONAL & ADV INJURY, DAMAGE TO RENTED PREMISES, MED EXP |
| Occurrence form required | CGL: OCCUR (not CLAIMS-MADE) |
| Per-project aggregate | GEN'L AGGREGATE LIMIT APPLIES PER: PRO-JECT |
| Auto "any auto" / owned-hired-non-owned | Auto symbol boxes: ANY AUTO / OWNED / SCHEDULED / HIRED / NON-OWNED |
| Auto limits | COMBINED SINGLE LIMIT or split BI/PD boxes |
| Umbrella/excess | UMBRELLA/EXCESS, OCCUR/CLAIMS-MADE, EACH OCCURRENCE, AGGREGATE, DED/RETENTION |
| WC / E.L. | PER STATUTE; E.L. EACH ACCIDENT; E.L. DISEASE - EA EMPLOYEE; E.L. DISEASE - POLICY LIMIT; owner-exclusion Y/N |
| Additional insured | ADDL INSD per line + DESCRIPTION OF OPERATIONS (endorsement reference) |
| Waiver of subrogation | SUBR WVD per line + DESCRIPTION |
| Primary & noncontributory | DESCRIPTION (only with endorsement) |
| Notice of cancellation | CANCELLATION block is preprinted. Needs an endorsement; DESCRIPTION may reference it |
| Holder name | CERTIFICATE HOLDER |
| Project / location | DESCRIPTION OF OPERATIONS / LOCATIONS / VEHICLES |

## Rules
- Quote the text you rely on; never weaken a requirement.
- Umbrella stacking: count the umbrella toward a GL/auto/E.L. requirement only if the contract allows it AND the umbrella schedules that line; otherwise NOT MET or UNKNOWN + CHECK.
- No legal interpretation of indemnity clauses: "hold harmless / indemnity: review with the insured's counsel or carrier; contractual liability coverage applies per policy terms".
