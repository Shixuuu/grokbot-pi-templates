---
name: eligibility-matcher
description: "Use this when scoring open settlements against the owner's state, products, mail hits, and aggressiveness preference."
---

## Goal
Score each candidate open claim as likely, maybe, or skip for this owner, with a one-line why.

## Inputs
- Saved state/country
- Aggressiveness (A mass-market only / B + employment biometrics / C + notice-gated breaches)
- Optional product/app/purchase brain dump
- Mail-notice scanner hits
- Already-filed list

## Rules
- State gates biometric/privacy classes (e.g. Illinois BIPA requires collection while in Illinois).
- Employment-only claims only if aggressiveness includes B or the owner confirms that job.
- Notice-gated breaches only if aggressiveness includes C or a notice/credential was found.
- If already filed → skip.
- Never invent eligibility; when unsure, mark maybe and say what fact would upgrade it.

## Output
Ranked list: score, claim name, why, official URL, deadline, confidence on the claim still being open.
