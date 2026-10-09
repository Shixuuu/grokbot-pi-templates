---
name: company-talent-map
description: "Use this when asked to map the people who currently work at a named company (a census of the current team by function, seniority, tenure, and location), delivered as talent_map.csv plus a self-contained talent_map.html overview."
---

# Company talent map

A census of the people who **currently work at** a company and how the team is organized. This is not a candidate search. Optimize for coverage and accurate classification.

## Inputs
- **Company.** Add the website or HQ city if the name is ambiguous.
- **Functions to map.** Optional. If left blank, map every function, grouped as Engineering, Product, Design, Data, Sales, Marketing, Customer Success & Support, Operations, People/HR, Finance, Legal, Executive/G&A, Other. Add a company-specific bucket if one function dominates (for example, "Media & Client Services" at an agency), and document that choice in the HTML.
- **Optional flag.** An attribute to flag when visible, such as "previously at a competitor". Leave the column empty if none is given.
- **Byline.** The operator's name, business, and profile URL. It goes at the top of both files.

## Ground rules
- Profiles are self-reported. Make a best guess, include plausible matches, and mark uncertainty rather than hiding people.
- Never fabricate. Every row comes from a profile or page you actually found. Leave unknown fields blank.
- Match depth to company size. Aim for near-complete coverage at a small company. At a large one, cover every function broadly and go deep on the requested functions and senior leadership.

## Phase 1: company intelligence
Before searching for people, list every name an employee might show on their profile: legal name, former names, rebrands, abbreviations, and common misspellings. Add subsidiaries and acquired brands, and verify each acquisition rather than assuming it. Record major offices and remote hubs, and note any name collisions with unrelated companies. Check the company website and careers page, LinkedIn company page, Crunchbase, Wikipedia, and acquisition press.

## Phase 2: systematic people search
Sweep a matrix of **name variant × function × seniority term × location**, varying one dimension at a time, and keep a coverage log. Seniority terms: VP, Director, Head of, Lead, Manager, Senior.
- LinkedIn people search filtered to the current company, once per name variant.
- X-ray: `site:linkedin.com/in "NAME VARIANT" "TITLE OR FUNCTION" "CITY"`.
- Team and leadership pages, blog authors, press quotes, event and webinar speaker pages.
- If LinkedIn blocks direct fetches, use search-engine copies of profiles and cross-check them against The Org, RocketReach, and the company site.
Stop when full passes mostly return people you already have.

## Phase 3: vet, deduplicate, classify
Include a person only when:
- their role looks current (no end date, profile not obviously stale),
- their company label matches the company or a Phase 1 alias, and
- they read as a direct employee. Exclude consultants, agency or vendor staff, advisors, board members, and investors.

If someone is uncertain but plausible, include them with Confidence set to Low and explain why in the evidence column. Deduplicate on profile URL first, then on name plus similar title.

Classify each person:
- **Function:** the nearest bucket.
- **Seniority:** C-level/Founder, VP, Head/Director, Manager/Lead, Senior IC, IC, or Unknown.
- **Tenure:** the start of their current role, written as `Mon YYYY–Present` or `since YYYY`. Leave it blank if you didn't find it. Never guess.
- **Location:** "City, Country", or "Remote (Country)".
- **Confidence:** High, Medium, or Low.

## Deliverable 1: talent_map.csv
- Line 1, as a single cell: the byline.
- Line 2, this exact header: `Name,Current title,Function / department,Seniority level,Tenure,Location,Current company label shown on profile,Profile URL,Evidence they currently work there,Optional flag + evidence,Confidence`
- One row per person. Quote any field that contains a comma.
- A full `https://www.linkedin.com/in/...` Profile URL is required whenever one exists.
- Evidence is the concrete signal, not a restatement of the title.

## Deliverable 2: talent_map.html
One self-contained file with inline CSS. Generate it from the final CSV with a script so the numbers always match. In this order:
1. The byline, hyperlinked, at the top.
2. Company snapshot: aliases, subsidiaries and acquisitions, offices.
3. Headcount by function.
4. Headcount by location.
5. Seniority distribution.
6. Key people grouped by function, with title, tenure, and location. **Every name links to its Profile URL**, or to the source page if no profile exists.
7. Coverage summary: total people, well-covered areas, gaps, share of Low-confidence rows, and how many rows have Tenure filled versus blank.

## Final checks
- HTML counts match the CSV.
- No duplicate profile URLs, and no invented people or URLs.
- The byline is on both files.
- Unknown values, including Tenure, are left blank.
- Every Key people name is hyperlinked.
