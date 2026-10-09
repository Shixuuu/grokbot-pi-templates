---
name: career-radar-method
description: "Use when running a job-search radar for a career changer: weekly official-source scan, comp math, fit scoring, verdicts, and an interactive HTML dashboard."
---

# Career radar method

A recruiter-grade job radar for one candidate making a career move. Research and drafts only. Never apply, email, message, upload, spend, or contact anyone without the candidate's explicit yes at the time of the action.

## Inputs (from the candidate's memory)
- Positioning thesis: what they are, and what they are not (role families to avoid).
- Comp bars: current recurring pay, hard floor, target, anchor; any published-salary screen.
- Geography: primary metro or state-remote with proof; relocation cities labeled RELOCATION OPTION.
- Off-limits data (e.g. current employer's confidential info).
- Company universe and role-family priorities.

## Search protocol
1. Official careers pages and employer-controlled ATS only (Greenhouse, Ashby, Lever, Workday). Public ATS JSON endpoints are fine for bulk listing.
2. Aggregators, LinkedIn, X, newsletters are discovery only. Never cite them as proof or dump them.
3. Open the actual requisition. Record title, req id, employer, division, exact locations, remote eligibility proof, office cadence, travel, posted date, responsibilities, mandatory vs preferred quals, comp language, benefits, official URL.
4. A dead official link is CLOSED. Never carry a role forward silently.
5. Diff against the prior run: NEW, CHANGED, STILL ACTIVE, CLOSING RISK, CLOSED, REPOSTED.
6. Unlabeled remote is not home-state-compatible without proof.
7. Dates in the candidate's timezone. Cite the official URL next to every material claim.

## Comp math (always show)
- Expected recurring TC = base + target bonus/commission + annualized equity.
- Never count health, retirement match, perks, relocation, or sign-on as recurring. Private-company equity is not cash.
- Never invent a component. Missing numbers are METRIC NEEDED or UNKNOWN.
- Classes: VERIFIED, ACHIEVABLE, CONDITIONAL, BELOW FLOOR, UNKNOWN.
- Show increase vs current pay and gap to floor.

## Fit score (100)
Functional match 0-25; core-domain evidence 0-15; founder/product evidence 0-15; seniority/leadership 0-10; industry adjacency 0-10; geography/work model 0-10; comp quality and certainty 0-10; option value 0-5.
Penalties: missing mandatory credential -20 to -40; primarily quota sales without evidence -15; formal PM tenure hard requirement -15; deep engineering -25 to -50; clearance/DoD -20 to -40; recurring likely below floor -10; home-state remote unverified -10.
Verdicts: 90+ APPLY NOW; 80-89 APPLY / WARM INTRO FIRST; 70-79 SELECTIVE REACH; 60-69 CULTIVATE; under 60 PASS. Score never overrides a mandatory qualification. Do not inflate for prestige.

## Weekly full report
1. Decision-first recap: best new, biggest closure, biggest comp issue, single highest-value action.
2. Changes since last run.
3. Live roles table with listing link, location, salary, TC math, score, verdict.
4. Evidence gaps the candidate must supply (METRIC NEEDED).
5. Closer: APPLY / CULTIVATE / BUILD EVIDENCE.

## Delivery: interactive HTML dashboard (primary)
Build a static, phone-friendly dashboard from a roles.json file:
- One card per role: company logo (favicon CDN with a monogram fallback), official company website, official listing link, title, verdict badge, salary, location/work model, benefits (or not published).
- Expandable detail: job description, responsibilities, mandatory vs preferred quals mapped to the candidate's evidence, why-fit, TC math, history status.
- Filters (verdict, geo, live vs closed, company, search) and sort (score, salary high, company).
- Sections: main board, pinned seats, dropped by salary screen, comp unverified, closed.
- Write a dated snapshot folder and a single-file phone copy. Attach the files in chat; never only cite a path.

## Deep dive / tailor on request
Re-fetch the official listing, give GO / NO-GO / CONDITIONAL first, full score with penalties, quals mapped HIT / STRETCH / GAP, risks, intro-path archetypes (no invented contacts), resume bullets with METRIC NEEDED placeholders, objection handlers, and kill criteria.
