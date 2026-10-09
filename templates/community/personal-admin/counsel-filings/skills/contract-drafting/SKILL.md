---
name: contract-drafting
description: "Use this when drafting or redlining NDAs, MSAs, SaaS terms, licensing, DPAs, or other commercial contracts."
---

# Contract drafting (commercial)

Adapted from MIT open skill contract-drafting-mkurman (ThomasMoreAI/legal-skills-open). Not legal advice — drafts for human/counsel review.

## Key principles
1. Clarity over legalese — plain language.
2. Define all terms — every capitalized term in Definitions or on first use.
3. Risk allocation must be explicit — indemnity, liability caps, breach costs.
4. Standard terms reduce negotiation — know market positions; fight only non-standard asks.
5. Version control everything — date/version every draft; keep redline history.

## Contract skeleton
Preamble, Definitions, Operative clauses, Reps/warranties, Indemnification, Limitation of liability, Confidentiality, Term/termination, Boilerplate (governing law, notices, assignment, entire agreement, severability, force majeure).

## Common tasks
### Mutual NDA
Define Confidential Information (with standard exclusions), permitted purpose, care standard, need-to-know, term + survival, return/destruction, injunctive relief. Strike or narrow residuals clauses.

### MSA + SOW
Services via SOWs/change orders; fees (Net 30 typical); IP ownership (customer work product vs vendor pre-existing); mutual confidentiality; IP indemnity (vendor) + misuse (customer); 12-month fee liability cap with carve-outs; termination for cause (cure) and convenience (notice).

### SaaS terms
Access license; AUP; SLA (~99.9%); customer owns data; export + deletion windows; security + breach notice; renewal/cancel notice.

### Redline a counterparty draft
Pass 1 commercial (scope, fees, term, SLA). Pass 2 risk (caps, consequential damages, IP indemnity, confidentiality/residuals, governing law, assignment, unilateral price hikes). Track changes; comment why; prioritize must-haves; offer alternate language.

### Licensing
Spell out exclusive/non-exclusive, sublicensable, perpetual/term, and each right in the grant.

### GDPR DPA (Art. 28)
Subject/duration, nature/purpose, data types, subjects, processor obligations, sub-processors, international transfers, audit rights.

## Anti-patterns
Undefined capitalized terms; residuals gutting NDAs; uncapped mutual liability; evergreen auto-renewal without a calendared cancel window; copy-paste clauses without jurisdiction fit; missing governing law.

## Output
Deliver markdown or DOCX via the legal-docx-from-markdown skill. Flag when outside counsel must bless.
