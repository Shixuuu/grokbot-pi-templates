---
name: opportunity-scout
description: "Use this when reverse-searching the live job market from a resume and a target city, building a scored job CSV, or when the user runs /opportunity-scout."
---

# Opportunity Scout

Work backwards from a resume to the demand for it. Find live openings, verify each one, score them, write a CSV.

## Inputs

The resume path and target city may come as arguments. If either is missing, ask once, then proceed. Everything else defaults: full-time, posted within 30 days, remote and hybrid both acceptable, no relocation, no pay floor, about 25 rows.

## Step 1 — Read the resume, build the search

Do not search yet. Extract titles, seniority, function, industries, hard skills, certifications, and scale markers such as team size, budget owned, revenue touched and employer headcount.

Then build three artifacts:

- **Title ladder**, 10 to 16 titles: ones held, the same job under other naming conventions, one level up where scale markers already clear the bar, and roles where these skills are the core requirement but the title looks unrelated.
- **Target list**, 20 to 40 employers matching the industry, stage, size and tooling.
- **Location expansion**: the metro, the suburb names that appear in postings, alternate market names, and remote roles open to that state or timezone.

Show all three and wait for approval before searching. The ladder drives everything downstream.

## Step 2 — Sweep

Prefer the public ATS JSON boards when you can resolve a company slug. They are unauthenticated, complete, and current:

```
https://boards-api.greenhouse.io/v1/boards/{slug}/jobs?content=true
https://api.lever.co/v0/postings/{slug}?mode=json
https://api.ashbyhq.com/posting-api/job-board/{slug}
https://api.smartrecruiters.com/v1/companies/{slug}/postings
```

The slug is usually the company name lowercased with punctuation stripped. Probe the four in order and keep the first that returns jobs. Work through the target list this way.

For discovery beyond the target list, x-ray ATS domains with title and city inside the query. Then Indeed, Dice, Wellfound, Built In, hiring posts on X, and the current Hacker News "Who is hiring?" thread. Skip LinkedIn, Glassdoor, ZipRecruiter and SimplyHired.

## Step 3 — Verify

- Never construct, guess or pattern-match a posting URL. Include a link only if it was actually retrieved this session.
- Open the postings you intend to include. Drop anything closed, expired, or resolving to a board index.
- Never invent a compensation figure. Empty cells when nothing is published.
- Prefer the employer's ATS link over an aggregator's.
- Deduplicate on company plus normalized title plus city.

## Step 4 — Score out of 100

30 title and function fit, 20 must-have skills coverage, 15 seniority fit penalizing over- and under-qualification, 15 location and work model, 10 domain, 10 pay against the stated floor or market rate.

Force below 60 for an unmeetable blocker: clearance, license, a required degree, or a years minimum missed by more than two. Keep only 60 and above.

## Step 5 — Write the file

Write `/home/box/opportunity-scout/jobs-YYYY-MM-DD.csv`, RFC 4180, sorted by `match_score` descending.

Columns: match_score,title,company,city,work_model,comp_min,comp_max,comp_basis,seniority,why_fit,gap_risk,posted,source,verified,apply_url

Then in chat print only the top five with one sentence each, a coverage note, and attach the file. Do not paste the table.

## Ground rules

Accuracy beats volume. Twelve verified roles is a good result; forty padded with guesses is a failure.

Never filter for or against the user on age, gender, race, national origin, disability, religion or family status. Surface visa or clearance requirements only where a posting states them.

Never submit an application or contact an employer.
