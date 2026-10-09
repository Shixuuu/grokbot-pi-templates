---
name: build-appeal-pack
description: "Use this when the owner pastes or attaches an insurance denial and wants an appeal pack. Requires a denial letter and config.md. Policy if they have it. Draft only: never send, never file, never call."
---

Turn an insurance denial into an appeal pack. Draft only.

Not a doctor, lawyer, copay finder, or hospital bill auditor. Do not hunt drug-assistance programs. Do not reprice hospital codes unless the denial letter itself is about coding and the owner pastes the EOB.

## Required

1. A denial letter, EOB, or portal screenshot the owner pasted or attached. If missing, reply `Need the denial letter.` Then stop. Do not invent a denial. Do not scrape patient portals. Do not log into insurer sites.
2. `/workspace/denial-desk/config.md`. If missing, interview once, save answers, reuse them:
   1. Default line of coverage if the letter is unclear: Health, auto, home, travel, or other.
   2. State of residence (for the state insurance department page).
   3. For health only: employer plan or a plan they bought themselves, if they know. If they do not know, write `Unknown`.
   4. Draft language: English, Spanish, or both.
   5. Also draft a state insurance department consumer complaint: yes or no. Default yes, as a separate DRAFT, never sent.
   If a denial is already attached, interview the missing config fields, then build the pack. Otherwise stop after saving config.
3. The policy, certificate, or Summary of Benefits if the owner pasted or attached it. If missing, write `Missing policy` and draft only from the denial. Do not guess coverage language.

Do not ask for SSN, member ID, MRN, bank, or login. If the owner pastes those, tell them to redact, do not store them in config.md, and do not repeat them in drafts. Use placeholders: `[MEMBER ID]`, `[CLAIM NUMBER]`, `[ADDRESS]`, `[DOB]`.

## Sequence

1. Read config.
2. Read the denial first. Quote the stated reason. Do not improve it.
3. Build a case card:
   - Insurer
   - Line of coverage
   - Claim or reference number as printed, or `Unknown`
   - Date on the letter
   - Stated reason, quoted
   - Internal vs external vs unclear
   - Deadline: use the date printed on the letter. If none is printed, write the federal floor and label it `Default`, not promised:
     - Health internal appeal: at least 180 days from the denial notice (DOL / ACA floor)
     - Health external review after a final internal denial: 4 months from that notice (healthcare.gov)
     - Auto, home, travel: use the letter, then the state DOI page. If still unknown, write `Unknown`. Do not invent a state deadline.
   - Link the `.gov` page used
4. List missing documents, numbered. Stop and list these before you overclaim.
5. Appeal theory, short, in plain English, from the letter plus the policy if present. Allowed theories, only when the documents support them:
   - The stated reason does not match the service or loss described
   - They asked for documents the owner already sent
   - They used a coding or network reason that the EOB contradicts
   - They skipped a required internal step
   - Experimental / not medically necessary / pre-existing / late filing, as a paperwork mismatch, not as a diagnosis
6. Write DRAFT 1: the appeal to the address or portal named in the letter. Placeholders for identity fields. Match the owner's language setting.
7. Write DRAFT 2 only if config says yes: state DOI consumer complaint, with the state's `.gov` complaint URL. Not filed.
8. Save a redacted copy to `/workspace/denial-desk/packs/YYYY-MM-DD.md` with identity fields already replaced by placeholders.

If two denials are in one chat, do one pack at a time. Finish the first, then ask for the second.

Official pages only, when a rule must be cited:

- https://www.healthcare.gov/appeal-insurance-company-decision/
- https://www.healthcare.gov/appeal-insurance-company-decision/external-review/
- https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/filing-a-claim-for-your-health-benefits
- the owner's state department of insurance `.gov` consumer-complaint page

Gmail only if connected AND the owner names a sender, claim number, or date to find.

If a fetch fails, say what failed and stop. Do not reuse an old pack as if it were current.

## Validate

- No SSN or MRN in output
- No "you will win"
- Every deadline has a source or says `Unknown`
- Placeholders used for identity
- Nothing sent

## Return

If there is no denial document, reply: `Need the denial letter.` Then stop.

Otherwise return only:

1. Case card
2. Deadline with source
3. Missing documents, numbered
4. Appeal theory, short
5. Attachments checklist
6. DRAFT 1 (appeal)
7. DRAFT 2, only if config says yes (state DOI consumer complaint, not filed)
8. Sources, URLs
9. Not done: nothing sent, nothing filed, no call placed, no medical advice, no promise they will win

## Approval

L1 Draft. Never send, never file, never call.

Never: send email, file an appeal, file a DOI complaint, call or chat the insurer, give medical advice or a diagnosis, give legal advice or say they will win, ask for or store SSN, MRN, full member ID, or bank details, log into insurer/hospital/pharmacy portals, hunt copay cards or manufacturer assistance, reprice a full hospital bill unless that is the denial in hand, use paid "appeal mill" or finder sites, invent a deadline, a coverage clause, or a dollar amount.

Ask first, and wait, before: sending a named draft, filing anything, calling the insurer.
