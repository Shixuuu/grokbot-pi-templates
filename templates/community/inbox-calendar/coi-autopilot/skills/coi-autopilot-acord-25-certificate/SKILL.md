---
name: coi-autopilot-acord-25-certificate
description: "Use this when the user wants an ACORD 25 Certificate of Liability Insurance built from a dec page, binder, policy, or saved insured snapshot, wants a COI reissued for a new holder, or a holder or contract asks for additional insured, waiver of subrogation, primary & noncontributory, per-project aggregate, or notice of cancellation."
---

# ACORD 25: Certificate of Liability Insurance

Box names follow public descriptions of the 2016/03 edition. **The user's licensed blank controls**: detect the edition from its footer and adapt. Never reproduce the printed text. Fill only their own blank (coi-autopilot-pdf-fill). Follow coi-autopilot-core-rules.

## Inputs
- Required: policy, dec, binder, or endorsement schedule for each line; holder name and address.
- **Quotes, proposals, indications, specimens are NOT evidence.** You may use insurer name and limits (Medium, CHECK "limits per quote; confirm bound terms"). NEVER copy a quote number or quote period into POLICY NUMBER / EFF / EXP; leave blank; STOP: "No binder/dec in file. Quote period ≠ bound policy period. Upload the binder or carrier confirmation." A policy number stated in carrier correspondence may be used at Medium with citation.
- Optional: holder request or contract clause, project/location, saved profile, saved holder.

## Procedure
1. Producer block from the saved agency profile, or from a prior ACORD the USER issued (Medium, CHECK). Never from a carrier dec, quote, or binder. Nothing → gap list.
2. Extract insured and every line. Named insured + mailing address = dec as amended by the latest named-insured/mailing-address endorsement. Full policy: read the forms schedule; show a GL deductible on a CGL descriptor line only as printed; check designated premises/project/operations limitations. Holder's job/location outside them → STOP "GL is limited to designated premises/operations per <form #>". Insurer letters A–F in line order (GL, Auto, Umbrella, WC, Other), reusing a letter for the same insurer.
3. Holder request table (core rules) line by line. ADDL INSD / SUBR WVD only when that line's endorsement is in the documents.
4. Mistakes list + date checks: today vs expiration, project dates vs expiration, certificate date ≥ effective date.
5. Description of Operations from supported facts only; overflow → ACORD 101 (user's blank).
6. Output field table, filled PDF, gap list.

## Box map (source → rules)
- **DATE:** today; ≥ each effective date; after an expiration → that line expired → STOP.
- **PRODUCER, CONTACT NAME, PHONE/FAX, E-MAIL:** agency profile or user's own prior ACORD (Medium + CHECK). Never from the web.
- **INSURER A–F:** full legal company name as on the dec (not group/trade name). **NAIC #:** from documents only; never guess; blank → FIX.
- **INSURED:** exact named insured (+ DBA) as amended by endorsement; mailing address, never a premises address. Unexplained mismatch across lines → STOP; explained by endorsement → amended name, cite, CHECK. No mailing address → FIX.
- **CERTIFICATE / REVISION NUMBER:** agency's own, optional.
- **Grid, each row:** INSR LTR maps to a filled insurer row; ADDL INSD X only with an AI endorsement on that line; SUBR WVD X only with a waiver on that line (GL, Auto, WC separate); POLICY NUMBER exactly as on dec/binder; POLICY EFF/EXP from dec/binder (never quote period).
- **CGL:** COMMERCIAL GENERAL LIABILITY X; CLAIMS-MADE/OCCUR per coverage form (claims-made → retro date in Description if known); descriptor lines only if the policy shows them; GEN'L AGGREGATE APPLIES PER POLICY / PRO-JECT / LOC as dec or endorsement states (PRO-JECT only with the endorsement); limits: EACH OCCURRENCE, DAMAGE TO RENTED PREMISES, MED EXP (or "Excluded"), PERSONAL & ADV INJURY, GENERAL AGGREGATE, PRODUCTS-COMP/OP AGG, extra line (e.g. Employee Benefits) only if on the policy.
- **AUTO:** ANY / OWNED / SCHEDULED / HIRED / NON-OWNED per covered-auto symbols (1 any, 2 owned, 7 scheduled, 8 hired, 9 non-owned); symbol not shown → FIX. CSL each accident, or BI per person / per accident + PD per accident.
- **UMBRELLA/EXCESS:** which one, OCCUR/CLAIMS-MADE, DED/RETENTION, EACH OCCURRENCE / AGGREGATE. Confirm the scheduled underlying includes the lines the holder relies on.
- **WC & EL:** proprietor/officer excluded Y/N as the policy shows (if Y, describe); PER STATUTE / OTHER; E.L. each accident / disease-each employee / disease-policy limit.
- **OTHER row:** e.g. professional, inland marine, pollution, from that line's dec.
- **DESCRIPTION OF OPERATIONS:** project/location reference + supported endorsement statements; no coverage-granting language.
- **CERTIFICATE HOLDER:** exact legal name and mailing address; compare with saved holder → mismatch = FIX.
- **CANCELLATION:** preprinted, never altered; X-day notice needs an endorsement.
- **AUTHORIZED REPRESENTATIVE:** left for the licensed user; you never sign.

## Holder-request quick rules
- **AI:** blanket "where required by written contract" satisfies only if the contract condition is met (CHECK). Ongoing and completed operations are separate needs.
- **Waiver:** per line; one line's waiver doesn't cover the others.
- **P&NC:** only with endorsement wording; never add it to the Description otherwise.
- **Per-project aggregate:** needs the designated construction project(s) aggregate endorsement.
- **Notice of cancellation:** the standard block promises notice only "in accordance with the policy provisions"; a set number of days needs an endorsement.
