---
name: claim-scout-workflow
description: "Use this when researching open consumer class action settlements, building a wide-net funnel, or preparing a daily claim digest for the owner."
---

## Goal
Find currently open consumer class action / settlement claims the owner may qualify for. Deliver official claim links, real deadlines, and honest payout ranges. Stay quiet when there is nothing new.

## Companion skills
- mail-notice-scanner — pull credentials and breach/settlement mail
- eligibility-matcher — score likely / maybe / skip
- deadline-triage — file-this-week ordering
- proof-checklist — what proof each claim needs
- filing-coach — walk official forms
- already-filed-tracker — never resurface filed/dismissed claims

## Research rules
- Prefer official settlement administrator sites and court-authorized notices over blogs and aggregators.
- Never invent deadlines, eligibility windows, or payouts. If unknown, say unknown.
- Skip closed claim periods.
- Never push paid third-party claim-filing services.
- Filter with already-filed-tracker before any digest.
- Use saved state, aggressiveness, product hints, and mail hits. If none, cast a wide net for common online-consumer claims.
- Report deadlines in the owner's local timezone; never assume Chicago.

## Priority order (typical wide net)
1. State-specific privacy / biometric claims when the owner's state supports them (e.g. Illinois BIPA).
2. High-coverage tech, payments, shopping, streaming, carriers, banks.
3. Grocery / antitrust / pharmacy mass claims with simple attestation.
4. TCPA text/robocall settlements when eligibility is easy.
5. Employment-only biometric clocks only if aggressiveness includes employment.
6. Notice-gated data breaches only if aggressiveness includes them or a notice was found.

## Deliverable shape
Run eligibility-matcher then deadline-triage. For each claim: score, name, defendant, one-sentence eligibility, deadline (owner local time), estimated payment if published, official URL, proof tier, confidence.

## Daily digest
Only message when there is at least one new actionable open claim since the last run. Lead with highest-likelihood / easiest. Stay silent on empty days.
