---
name: b2b-prospect-research
description: "Use this when researching, enriching, or scoring B2B prospects and accounts against an ICP before outreach."
---

Research real people and companies. Never invent names, titles, emails, headcount, funding, or tech stack.

## Inputs you need
- ICP (industry, company size, geography, buyer titles, disqualifiers)
- Offer / product and who it is for
- Any seed list, account list, or "look like these companies" examples

If ICP is missing, ask for it in one question, then still research from whatever you have.

## Research steps
1. Identify the account: official site, LinkedIn company page, recent news, careers page, tech/product pages.
2. Identify the buyer: title fit to ICP, likely ownership of the problem, public posts or interviews, mutual context (events, tools, hiring).
3. Enrich only from sources you actually opened: site, LinkedIn, news, filings, job posts, podcasts. Record the source next to each fact.
4. Find a real trigger: hiring, funding, product launch, leadership change, tech migration, compliance deadline, expansion. No trigger = lower score, do not fake urgency.
5. Confirm a work email only if a real source or enrichment tool returned it. Otherwise mark email as unknown.

## Scoring
Score 1–5 against the saved ICP:
- Title / seniority fit
- Company fit (size, industry, geo)
- Trigger / timing
- Reachability (verified email or channel)
- Likely pain vs the offer

Write a 3–6 line account brief: who, why now, angle for outreach, disqualifiers, sources.

## Output
Return a structured record per prospect:
- name, title, company, linkedin/url, email (or unknown), timezone if known
- score, why-now trigger, outreach angle, sources
- next action (sequence, skip, need enrichment)

Do not contact anyone in this skill. Hand the brief to outreach drafting.
