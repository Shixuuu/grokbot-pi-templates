---
name: coi-autopilot-acord-125-126-127-application
description: "Use this when the user pastes intake notes, a call summary, questionnaire answers, or a prior application and wants a commercial submission drafted on ACORD 125 (applicant info), 126 (general liability), and/or 127 (business auto), plus a client follow-up question list. When property is requested, pair it with coi-autopilot-acord-140-property."
---

# ACORD 125 / 126 / 127: Commercial application

Box names follow public descriptions of the 2016-era editions; numbering varies by edition and state. **The user's licensed blank controls**: map by meaning, name the edition you mapped. Never reproduce printed questions or fraud warnings. Follow coi-autopilot-core-rules.

## Procedure
1. Always build 125. Add 126 for GL, 127 for business auto, and 140 for property (build it even if not asked, and say so).
2. Only stated facts, each with its source line.
3. Class codes (ISO GL, NAICS, SIC), auto symbols, territories: candidate description only, Low, CHECK. No code number unless provided.
4. Y/N questions only from explicit answers. **Never default to "N"**; blank + follow-up list. "Yes" answers need an explanation. If the user answers Y/N items in chat, ask each as a tap-to-pick question (Yes / No / Not sure, type-your-own); "Not sure" stays blank on the follow-up list.
5. **Never type placeholder text** ("not supplied", "N/A per intake") into a box or remarks. Missing items go on the gap list only.
6. Check "no prior losses" only on an explicit client statement for the years required (commonly 3–5); otherwise FIX: loss history (recommend loss runs).
7. Never compute an expiration date; only if the notes state the date or term.
8. Cross-checks → CHECK: employee counts (125) vs contractor staff (126); sales/payroll vs premium basis; locations (125) vs hazards (126); drivers/vehicles (127) vs radius and garaging; prior carrier years vs loss years; occupied/building area vs GL exposure; 125 premises vs 140 premises rows.
9. Producer block: saved profile or user's own prior ACORD (Medium + CHECK); never a carrier/wholesaler block.
10. Output field table, filled PDFs, gap list, and **Client follow-up questions** (plain language, ready to paste into an email the user sends).

## ACORD 125
- **Header/Agency:** DATE; agency name/address, contact, phone, fax, email; code/subcode/customer ID.
- **Carrier:** carrier + NAIC if chosen (blank at quote is fine; NAIC never guessed); program, policy #, underwriter if known.
- **Status of transaction:** QUOTE / ISSUE / RENEW / BOUND / CHANGE / CANCEL (usually QUOTE).
- **Lines of business** checkboxes (premium blank at quote); **Attachments** checklist (check 140 whenever property is a line).
- **Policy information:** proposed EFF/EXP (from the client; EXP never computed); billing/payment/audit/deposit only if stated.
- **Applicant:** first named insured exact legal name + mailing address (flag legal name vs DBA; premises go in the premises rows; renewal → name as amended by endorsement); GL code/SIC/NAICS only if provided; FEIN/SSN if provided (mask; missing → FIX); phone, website; entity type (corp, JV, not-for-profit, S corp, individual, LLC members/managers, partnership, trust, other); additional named insureds.
- **Contacts:** accounting, inspection, claims.
- **Premises (each):** LOC/BLD #, street (not a PO box), city, county, state, ZIP; inside/outside city limits; owner/tenant; full/part-time employees; annual revenues; occupied / open-to-public / total building area; area leased to others; description of operations.
- **Nature of business:** category; date business started (never estimated); primary operations; retail/service %, off-premises install/repair %; other named insureds' operations.
- **Additional interest:** type, rank, name/address, reference/loan #, interest in item, item description.
- **General information Y/N:** subsidiaries/parent; safety program; flammables/chemicals; other insurance with carrier; prior declination/cancellation/non-renewal; abuse/discrimination/negligent hiring claims; fraud/arson convictions; fire code violations; bankruptcy/foreclosure; judgments/liens; trust; foreign operations/products; other ventures; drones (if on edition).
- **Prior carrier** by line (year, carrier, policy #, premium, dates): never invented; "new venture" if applicable.
- **Loss history:** "none" only on explicit statement; else per loss (date, line, description, claim date, paid, reserved, subrogation, open/closed).
- **Signatures, producer license #, NPN:** left for humans; never filled from memory.

## ACORD 126
- Header carried from 125 (must match).
- Coverage: CGL claims-made/occurrence; OCP; other.
- Limits (only if stated): general aggregate + applies per POLICY/PROJECT/LOCATION; products-completed ops aggregate; personal & advertising injury; each occurrence; damage to rented premises; medical expense; employee benefits. Deductibles (PD/BI, per claim/occurrence) if requested. Premiums blank at quote.
- **Other coverages/endorsements:** where to request blanket AI, waiver, P&NC, per-project aggregate that the client's contracts need.
- **Schedule of hazards** (row per class): loc/haz #, classification (candidate, CHECK), class code (blank unless provided), premium basis and exposure only as stated.
- Claims-made: retro date, entry date, tail questions. Employee benefits: deductible, employees, covered, retro date.
- **Contractors:** Y/N (plans/designs; blasting; excavation; subs with lower limits; subs without certificates; equipment leased out); $ paid to subs, % subcontracted, staff counts (cross-check 125), work subcontracted.
- **Products/completed ops:** products, gross sales, units, time in market, expected life, use, components; Y/N product questions.
- **General information Y/N:** medical, radioactive, hazmat, operations sold/acquired/discontinued, equipment loaned, watercraft, parking, recreation, lodging, pool, social events, structural alterations, demolition, joint ventures, leased employees, labor interchange, day care, crimes on premises, safety policy, promotional literature. Remarks explain "Yes" answers.

## ACORD 127
- Header carried from 125.
- **Drivers:** #, name, address, sex, marital status, DOB, experience, year licensed, license # and state, date hired, training, % use, vehicle #. DOB and license # sensitive: mask in chat. Overflow → ACORD 163 (user's blank).
- **General Y/N:** unscheduled vehicles, hazmat, hold harmless, family use, MVRs, drivers not under WC, vehicles leased out, modified equipment, filings, other states, employees' personal autos, maintenance, driver recruiting, vehicles inspected.
- **Vehicles:** #, year, make, model, body, VIN (17 chars, no I/O/Q, else FIX), GVW/GCW, class, size, cost new, state; garaging address (physical), radius, farthest terminal, use. Overflow → ACORD 129.
- **Per-vehicle coverages:** liability, MedPay/PIP, UM/UIM, comp or specified perils + deductible, collision + deductible, towing, rental, stated amount, loss payee (financed unit without lienholder → FIX).
- **Business auto coverages** by symbol and limit: symbols are candidates only (CHECK; 1 any, 2 owned, 7 scheduled, 8 hired, 9 non-owned).
- Hired/non-owned: cost of hire, employees, partners. **State UM/UIM selections/rejections** may need separate state forms → CHECK.
