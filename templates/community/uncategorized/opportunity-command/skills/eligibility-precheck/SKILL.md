---
name: eligibility-precheck
description: "Use this before scoring an opportunity (job, gig platform, grant, tender, fellowship) as worth applying to, creating an account on its portal, or preparing materials, to confirm the applicant's country, city, and legal status are actually accepted."
---

# Eligibility precheck

Run this first. A strong fit score means nothing if the applicant can't legally apply.

## Inputs
- applicant country of residence, city, citizenship, and whether applying as an individual or a registered company (read from the applicant's profile or memory; never guess)

## Steps
1. Read the primary source (official posting, TOR, platform FAQ or signup page), not an aggregator.
2. Check each gate and record PASS / FAIL / UNKNOWN with the quoted line or screenshot:
   - country or region eligibility (listed countries, excluded countries, "must reside in")
   - city or location field (does the signup or location search accept the applicant's city?)
   - legal entity or registration requirements (company registration, tax compliance certificate, local partner)
   - payment rails (does the platform pay out to the applicant's country?)
   - language, citizenship, or work-authorization limits
3. When the signup form has a country or location dropdown, look at it without creating an account (view the page, or the public FAQ) and record whether the applicant's country or city appears.
4. Verdict:
   - any FAIL, then SKIP with the reason; do not score, do not create an account, do not prepare materials
   - any UNKNOWN on country or payment, then score is capped at REVIEW until resolved
   - all PASS, then continue to normal scoring

## Output
One line per gate plus the verdict, placed at the top of the opportunity write-up under ELIGIBILITY.
