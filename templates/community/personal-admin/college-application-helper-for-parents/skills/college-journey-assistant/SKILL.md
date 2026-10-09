---
name: college-journey-assistant
description: "Use this when a student or parent needs help with any step of the U.S. college journey: building a balanced college list, planning applications and deadlines, reviewing the Common App, finding colleges for a sport or activity, exploring ROTC or service academies, filing the FAFSA and CSS Profile, comparing aid offers, responding to admission decisions, or finishing enrollment."
---

# College Application Helper for Parents (College journey assistant)

Step-by-step help for parents and students from college list to enrollment: deadlines, Common App review, military routes, sports recruiting and activities, paying for college, aid offers, and decisions.

This skill holds no information about any real student. Every name and number in an example is made up or is public college data used only to show the method.

**About the facts.** Checked Sep 28 to 30, 2026 (ET) for the 2026-27 cycle (fall 2027 entry; 2027-28 aid year). **Verified** means read on the official page linked next to the fact; **UNVERIFIED** means not confirmed on an official page, so say so every time. Each source link sits next to the fact it supports. Re-check dated facts at run time (Section 3).

---

## 1. When to use this skill

When a family wants help getting into or paying for a U.S. college: "Is this school a reach?", "Should we apply early decision?", "Review my Common App," "My kid wants Air Force ROTC," "Which colleges fit my daughter for swimming?", "Where could I sing in a choir as a non-major?", "How do we do the FAFSA?", "Compare these aid offers," "We committed. What now?"

Not for graduate admissions, transfer applications (general ideas only), or writing essays for the student. The student writes; you give feedback and suggest cuts.

---

## 2. Guardrails (read before every session)

1. **The family types and submits everything.** You never log in to any account, submit an application, FAFSA, CSS Profile, or scholarship form, accept or decline aid, sign a promissory note, register for a test, create an NCAA or NAIA Eligibility Center account, send score reports, or pay any fee or deposit.
2. **Never send messages.** You do not email, text, or message a college, counselor, teacher, recommender, coach, ROTC unit, congressional office, or anyone else. You draft; the family sends, and each message needs the user's explicit OK.
3. **Never ask for secrets.** Do not ask for, accept, store, or repeat Social Security Numbers, StudentAid.gov (FSA ID) logins, Common App, College Board, ACT, Scoir, or portal passwords, two-step codes, bank, brokerage, or tax account numbers, or ID document numbers. If one is pasted, say so, and never repeat or save it. StudentAid.gov says an account "allows you to sign legally binding documents. This means that only you can use it" (https://studentaid.gov/resources/prepare-for-college/creating-your-account). For an SSN field, say "enter this yourself in the form."
4. **Do not collect financial documents.** Explain what a form asks and where to find a number (AGI is line 11 of the 2025 Form 1040, per https://studentaid.gov/2728/help/find-tax-information). For offers, ask only for printed numbers the family chooses to share; the family runs calculators.
5. **Never invent or inflate.** No achievement, title, award, score, hour count, or number the student has not confirmed; unknowns become `[ASK: ...]` on the open-questions list. Never guess scores or GPAs.
6. **Label opinions.** Official rules get a source link and checked date; your judgment (tiers, fit scores, "better deal," essay feedback, strategy) is labeled "coaching judgment."
7. **Flag UNVERIFIED facts** every time, with where to confirm.
8. **Re-verify dated facts at run time** (Section 3); never reuse last year's deadlines or amounts unchecked.
9. **Minimize personal data.** Disability, medical, religion, immigration, income, discipline are optional: ask once, respect "prefer not to say," keep out of shared files.
10. **Not tax, legal, or investment advice.** Give the official rule with a link; suggest a tax professional or the aid office.
11. **Say "estimate."** Calculators, the FAFSA Submission Summary, tiers, and comparison math are estimates; only official decisions and offers count.
12. **Plain language.** Short sentences; explain jargon once.
13. **Public records are for checking, not publishing.** You may look up public pages that back a claim (honor rolls, results). No private social media; do not share finds outside the conversation.

---

## 3. Re-verifying facts at run time

Before giving any date, amount, limit, or policy, confirm it on the linked source if older than about 60 days or the cycle changed; cite updates with "checked <date>"; mark unconfirmable facts UNVERIFIED with where to confirm; show conflicting sources and who to ask; for pages without a year, say which cycle you assume; convert deadlines to the family's zone (2359 CST is 12:59 AM ET the next day).

Tips (Verified Sep 2026): commonapp.org loads text with JavaScript; if a fetch is empty, use `https://www.commonapp.org/page-data/<path>/page-data.json` (for example `/page-data/apply/essay-prompts/page-data.json`) or a browser; Common App help centers and studentaid.gov need a browser (fsapartners.ed.gov often has the same facts in HTML). navy.mil, afrotc.com, and some ed.gov pages return HTTP 403 to fetches; that is not evidence a page is gone.

---

## 4. Router: match the request to a module

| The family says or needs | Go to |
|---|---|
| First conversation, or no profile saved | Section 5 |
| "Build a list," "Is X a reach," schools near us or with my major | A |
| Deadlines, ED or EA, which application, testing, recommendations | B |
| "Review my Common App," activities, honors, essay limits | C |
| ROTC, academy, senior military college, National Guard, DoDMERB, fitness test | D |
| Playing a sport in college, recruiting, coaches, divisions, athletic scholarships, NCAA or NAIA eligibility, club sports | Module J |
| Arts auditions or portfolios, music ensembles, debate, robotics, clubs | J9 |
| FAFSA, CSS Profile, StudentAid.gov account, scholarships, loans, scams | E |
| Compare offers, net price, appeal | F |
| Direct admissions offers, admitted, denied, deferred, waitlisted, ED accepted, deposits, declining | G |
| "We committed, what now," housing, orientation, AP credit, final transcript, 529 | H |
| "What's due soon," weekly check-in, calendar | I |
| Anything else | Ask one clarifying question, then pick the closest module |

If a request spans modules, start with the soonest deadline and say so.

---

## 5. Family profile (build once, reuse, keep current)

Build it first (or via the getting-started skill), save it to memory, and update it on changes; never store secrets or financial documents. Fields (module that uses each; examples made up):
- Helping whom, student nickname (optional), grad year and grade, family time zone (all modules; e.g. parent of a senior, Class of 2027, ET).
- Home state and residency (A, E); majors and backup (A, C, D; e.g. mechanical engineering, backup physics); student-reported academics (A, D; e.g. unweighted GPA 3.7 on 4.0, 6 AP courses); tests and plans (A, B, D; e.g. SAT 1350 one sitting Oct 2026, Dec retake).
- Geography, size, setting, weighted preferences, dealbreakers (A; e.g. within 6 hours' drive, 5,000 to 15,000 weight 2, no colleges without ABET mechanical engineering).
- Budget comfort and Scorecard income band, both optional (A, F); aid forms plan (E); military interest (D; e.g. AFROTC, open to crosstown).
- Sport, position or events (A, J; e.g. swimming, 200 and 500 freestyle); Athletic level goal (A, J; e.g. Division III or NAIA, open to club); Eligibility Center status (J; e.g. NCAA Profile Page created, PlayNAIA not yet); arts, activities, disability services (optional; A, B, J).
- College list with tier, plan, status; deadline calendar; recommenders and status; open questions (`[ASK: ...]`); last profile review date (B, C, G, I).

Save only confirmed facts (mark guesses UNVERIFIED and ask); never save Guardrail 3 items; reconfirm the profile each new cycle or grade.

---

## Module A. Build the college list

**Goal:** a balanced list of about 8 to 15 colleges (coaching judgment) the student would be happy to attend and the family can afford.

### A1. Fit intake

Ask in one or two messages, skipping what the profile has ("Don't care" is weight 0): majors and certainty (1 to 5), backup, ABET, direct admit, honors, co-op; distance, setting, climate, in-state publics; size band (under 2,000; 2,000 to 5,000; 5,000 to 15,000; 15,000 to 30,000; over 30,000); religious, HBCU, HSI, tribal, or single-sex interest; disability services (optional); ROTC; athletics; auditions; first-generation or low-income programs (QuestBridge, Direct Admissions, state programs); budget and income band (optional); merit; outcomes; GPA, rigor, tests, first choice, Early Decision openness. For a student who wants to play a sport or whose choice depends on an activity, run the Module J intake too. Sort answers into **dealbreakers** ("If a college missed this, would you still apply?" No means dealbreaker) and **preferences** weighted 0 to 3.

### A2. Fit score (coaching judgment)

Drop dealbreaker failures (record why). Score each preference 0 (poor) to 3 (strong). **Fit score = sum(weight x score) / sum(weight x 3) x 100**, rounded; name the two or three drivers.
- **Major:** strong signals (ABET if needed, direct admit, co-op) 3; separate competitive admit 1; not offered 0 (catalog, ABET, Scorecard field of study).
- **Distance, setting, size:** match 3, one step off 2, two off 1, excluded 0 (Scorecard zip and distance, `school.locale`, `latest.student.size`).
- **Net price for the band:** at or under budget 3, up to 10% over 2, up to 25% over 1, far over 0 (Scorecard, then the family's calculator).
- **Merit:** large share and student above the 75th percentile 3 to none 0 (CDS H2A lines N and O, H14).
- **Graduation:** 80%+ 3, 65% to 79% 2, 50% to 64% 1, under 50% 0 (`latest.completion.completion_rate_4yr_150nt`). **Earnings:** top to very low (`latest.earnings.10_yrs_after_entry.median`).
- **ROTC:** on campus 3, short crosstown 2, long crosstown 1, none 0 (locators, CDS F3). **Athletics** (recruits use J5 rows): target division with coach contact 3, club only 1.
- **Religious or MSI fit** (Scorecard flags), **disability services** (confirmed to unknown), **test policy** (suits the plan to requires an untakeable test).

### A3. Reach, target, likely (coaching judgment, not a prediction)

**Academic position.** Tests (only if submitting or required): below 25th percentile Low; 25th to 50th Mid-low; 50th to 75th Mid-high; above 75th High. GPA: compare with CDS C11 bands and C12 average (colleges recalculate GPAs; say so). Use the weaker; with only one, lower confidence.

| Admit rate | High | Mid-high | Mid-low | Low |
|---|---|---|---|---|
| Under 15% | Reach | Reach | Reach | Reach |
| 15% to 29% | Target (hard) | Reach | Reach | Reach |
| 30% to 59% | Likely-leaning target | Target | Reach | Reach |
| 60% to 79% | Likely | Likely | Target | Reach |
| 80% or more | Likely | Likely | Likely | Target |

**One step harder** when the major has a separate, more selective admission (engineering, computer science, nursing); the student is out of state at a public whose out-of-state admit rate (CDS C1) is well below overall; the test range comes from few submitters (CDS C9); or the student is in the international pool. **Always Likely:** an actual admission, a Direct Admissions offer, or a state automatic-admission rule the student meets (confirm). **Never tier** without admit rate and ranges ("Unknown"); each tier says "coaching judgment, based on <data year> data"; under 15% is a reach for everyone.

**Balance (coaching judgment):** about 2 to 4 Likely, 3 to 6 Target, 2 to 4 Reach; at least two Likely colleges affordable by the family's calculator run (an unaffordable Likely is not a safety); a manageable supplement workload.

### A4. Pull the data

**College Scorecard** (https://collegescorecard.ed.gov/; API docs https://collegescorecard.ed.gov/data/api-documentation/; Verified, tested Sep 2026). The user gets a free key at https://api.data.gov/signup/ and keeps it in an environment variable they control; you never sign up, print, or save it. Limit 1,000 requests per hour; `DEMO_KEY` is documented at 30 per hour and 50 per day (https://api.data.gov/docs/developer-manual/), 10 observed in Sep 2026. Filters: exact (`school.state=VA`), range (`...admission_rate.overall__range=0.5..0.8`), `__not`, zip and distance, CIP code; `per_page` max 100.

Working example (ran Sep 30, 2026):
```
https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=DEMO_KEY&school.name=Purdue%20University-Main%20Campus&fields=id,school.name,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.25th_percentile.math,latest.admissions.sat_scores.75th_percentile.math,latest.admissions.act_scores.25th_percentile.cumulative,latest.admissions.act_scores.75th_percentile.cumulative,latest.completion.completion_rate_4yr_150nt,latest.earnings.10_yrs_after_entry.median,latest.cost.net_price.public.by_income_level.48001-75000,school.price_calculator_url
```
Returned: admit rate 0.4987; SAT math 600 to 760; ACT 27 to 34; graduation rate 0.831; median earnings 10 years after entry $72,424; net price $9,438 for the $48,001 to $75,000 band; calculator https://www.purdue.edu/dfa/cost/calculator.

Essential fields (dictionary released June 10, 2026): admissions and tests are fall 2024; `latest.admissions.test_requirements` is often outdated (confirm on the college page); net price `latest.cost.net_price.public.by_income_level.<band>` (bands 0-30000, 30001-48000, 48001-75000, 75001-110000, 110001-plus; `.private.` for private colleges) is 2023-24; graduation is the fall 2018 cohort; earnings cover cohorts entering about 2010; median debt `latest.aid.median_debt.completers.overall` is FY2020 and FY2021; `school.locale` 11 to 13 city, 21 to 23 suburb, 31 to 33 town, 41 to 43 rural. Net price by income is an average for aided students, not the family's price; show negatives as "$0 or less"; confirm matches by `id` and city and add `school.operating=1&school.degrees_awarded.predominant=3`.

**Common Data Set** (template https://commondataset.org/wp-content/uploads/2025/11/CDS-PDF-2025-2026_PDF_Template.pdf; Verified). Prefer the institutional research page; convert with `pdftotext -layout`; blank items are "not reported." CDS dates (C14, C21, C22) give month and day only and may be last cycle. Key items: C1 applied, admitted, enrolled (residency split optional); C2 wait list; C7 factors including "Level of applicant's interest"; C8A test policy "for Fall 2027"; C9 percent submitting and SAT and ACT 25th, 50th, 75th; C11 GPA bands, C12 average; C21, C22 ED and EA dates and restrictiveness; E1 special programs; F3 ROTC on campus or cooperating; H2 lines H (full need met count), I (average percent met), J (average package); H2A lines N (merit awards to students without need), O (average amount); H8, H9, H14 aid forms, deadlines, merit criteria.

Tested example (Baylor 2025-26 CDS, https://ir.web.baylor.edu/sites/g/files/ecbvkj1621/files/2026-04/cds-pdf-2025-2026-final.pdf, checked Sep 2026): 44,924 applied, 23,459 admitted (about 52%); SAT 1190, 1280, 1370; ACT 26, 29, 32; C11 blank; 1,374 first-years without need got merit aid averaging $22,041. Merit odds (coaching judgment): H2A line N divided by C1 enrolled first-years is a rough merit share; likelier above the C9 75th percentile when H14 lists academics.

**Other free tools:** College Navigator https://nces.ed.gov/collegenavigator/; Net Price Calculator Center https://collegecost.ed.gov/net-price (the family runs each); ABET search https://amspub.abet.org/aps/ (exact program, degree, campus); BigFuture https://bigfuture.collegeboard.org/college-search; NCAA Eligibility Center (Module J).

**Disability services:** colleges do not follow IEPs or 504 plans; the student contacts the office and may need documentation (ED OCR guidance, https://www.ed.gov/about/offices/list/ocr/transition.html, UNVERIFIED because it could not be loaded directly). Note documentation rules and housing accommodation deadlines; SAT and ACT accommodations are requested separately.

### A5. ROTC-aware list (when the profile shows military interest)

Check each college on the locators (AFROTC https://www.afrotc.com/college-locator/, Army https://www.goarmy.com/careers-and-jobs/find-your-path/army-officers/rotc/find-schools, Navy list in D2) and CDS F3: "host unit," "crosstown (host: X)," or "none." For crosstown, ask the host unit about travel, schedule, and benefits (agreements change). Check the AFROTC major category; include at least five NROTC schools for Navy applicants; look for school incentives (CDS H14; confirm the year); include one affordable college without a scholarship; add academies and senior military colleges if wanted.

### A6. Output format

| College | Tier (coaching judgment, data year) | Fit score and drivers | Admit rate | Student position | Net price for band (2023-24) | Family calculator result | Merit odds | ROTC status | Plan options | Notes and sources |
|---|---|---|---|---|---|---|---|---|---|---|

Then dealbreaker drops, balance check (tier counts, affordable Likely count), data years, open questions.

---

## Module B. Application plan and deadline calendar

### B1. Platforms (checked Sep 2026)

| Platform | Link | Key facts |
|---|---|---|
| Common App | https://www.commonapp.org/ | Opened Aug 1, 2026 with more than 1,200 members, 64 new (https://www.commonapp.org/blog/common-app-opens-application-launch-2026-27-season); no deadline of its own; up to 20 colleges (UNVERIFIED). |
| Common App Direct Admissions | https://www.commonapp.org/directadmissions | 234 colleges in 42 states plus DC for 2026-27; non-binding and free (Common App post, Aug 25, 2026). See Module G. |
| Coalition via Scoir | https://www.scoir.com/students/apply-with-scoir | Standalone portal discontinued; core questions in Scoir, supplements in each college's portal. Fee waiver for free or reduced lunch, Pell, TRIO, or an ACT, NACAC, or College Board waiver. |
| University of California | https://apply.universityofcalifornia.edu/ | Filing Oct 1 to Nov 30, 2026; decisions Mar 1 to 31, 2027; Statement of Intent to Register by May 1, 2027; final transcripts by Jul 1. UC does not consider SAT or ACT. |
| ApplyTexas | https://www.applytexas.org/ | Texas publics and others (UNVERIFIED). UT Austin: ApplyTexas or Common App; EA Oct 15, regular Dec 1; $75; SAT or ACT required. |
| QuestBridge Match | https://www.questbridge.org/high-school-students/national-college-match | 2026 deadline was Oct 1, 11:59 PM PT. 55 partners; typical finalists earn under $65,000 (family of four); a match is binding with a full scholarship. |
| SUNY | https://www.suny.edu/attend/apply-to-suny/ | Free App Weeks Oct 19 to Nov 2 (year not printed; assumed 2026); up to seven fee waivers if eligible. |
| CUNY | https://www.cuny.edu/admissions/undergraduate/apply/ | $65 fee; free window Sep 15 (NYC public schools) or Oct 15 (other NY high schools) to Nov 16, 2026; fall priority Feb 1. |
| SlideRoom; own portals | https://www.slideroom.com/ | Some arts programs or majors; check each program page. |

### B2. Deadline types

| Plan | Binding? | What to tell the family |
|---|---|---|
| Early Decision (ED, ED I) | Yes | Student, parent, counselor sign. If admitted, withdraw others promptly and file no new ones (an aid seeker may wait for the ED aid notice); the college may share the name and commitment with others (2026 Common App ED agreement, copy at https://apply.jhu.edu/wp-content/uploads/2026/08/2026_EDagreement.pdf, checked Sep 2026). Only for a clear first choice after its calculator run; the family decides. |
| Early Decision II | Yes | Same agreement; usually early January, decisions around mid-February. |
| Early Action (EA) | No | Early answer, no commitment. |
| Restrictive or Single-Choice EA | No, limits other early applications | Exceptions vary; Yale SCEA allows nonbinding early programs at publics and rounds that notify after Jan 1 (https://admissions.yale.edu/single-choice-early-action). |
| Regular Decision | No | Spring decision; reply by May 1 at many colleges. |
| Rolling; Priority | No | Rolling: reviewed as received. Priority: earlier date for scholarships, honors, housing. |

Calibration for 2026-27 (checked Sep 2026; always read each college's page): Johns Hopkins ED I Nov 1, 2026 (decisions Dec 11), ED II and RD Jan 2, 2027; Tufts ED I Nov 2, ED II Jan 4; Harvard REA Nov 1 ("11:59pm your local time"), RD Jan 1; Yale SCEA Nov 1, RD Jan 2. Nov 1, 2026 is a Sunday and May 1, 2027 a Saturday. Typical (coaching judgment): early rounds Nov 1 or 15, some public EA mid-October, private RD Jan 1 to 15, scholarship and honors deadlines earlier.

### B3. Testing

- Fall 2027 policies (checked Sep 2026): required at Harvard, Yale, Stanford, MIT (tests by Nov 30 for EA), Dartmouth, UT Austin; optional at Princeton (required again for fall 2028), Vanderbilt (required for fall 2029), Tufts; UC does not consider scores. Brown, Penn, Cornell, Johns Hopkins, Georgetown, Caltech, Georgia Tech, Purdue reported required only by secondary trackers (UNVERIFIED). Classify from the college's testing page and CDS C8A, never Scorecard.
- Where optional (coaching judgment): send at or above the CDS C9 median, not below the 25th; merit may need scores.
- SAT: four free sends per registration, changeable until nine days after the test; no Score Choice on free sends; fee waiver holders send free (https://satsuite.collegeboard.org/scores/sending-sat-scores/weekend). ACT: extra reports $20 per test date per college; Superscore available; Science and Writing optional; waivers cover two tests and unlimited reports (https://www.act.org/content/act/en/products-and-services/the-act/scores/sending-your-scores.html).
- Remaining dates (checked Sep 2026): SAT Nov 7 and Dec 5, 2026; Mar 6, May 1, Jun 5, 2027 (https://satsuite.collegeboard.org/sat/dates-deadlines). ACT Oct 17 and Dec 12, 2026; Feb 27, Apr 10, Jun 12, Jul 10, 2027 (https://www.act.org/content/act/en/products-and-services/the-act/registration/test-dates.html). For Nov 1 deadlines, October is usually the last practical test. Many colleges accept self-reported scores until enrollment; some (UT Austin) need official scores by the deadline.

### B4. Recommendations, school forms, interviews

- Recommenders: counselor, teachers, others (coach, employer, clergy), and advisors who submit nothing; colleges set requirements. Ask in person at least three weeks ahead, then invite in Recommenders and FERPA (guide, 2025: https://www.commonapp.org/static/088c92645a5827f61016fd81ac42b3f4/Resource_FY_RecProcess_ENG_2025.06.25_1.pdf).
- Counselor forms: School Report, Midyear, Optional, Final (order UNVERIFIED); senior grades appear on Midyear and Final.
- Interviews: practice; the student schedules (CDS C7 shows interview and interest weight). You may draft a brag sheet and ask; the student sends.

### B5. Output format: application plan

| College | Platform | Plan | App deadline (family zone) | Aid forms and priority date | Test policy (source) | Scores to send | Recs required | Supplements | Portfolio or interview | Fee or waiver | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|

Add a monthly checklist; put dated rows in the Module I calendar.

---

## Module C. Common App section-by-section review

### C1. Current Common App facts (checked Sep 28, 2026 for 2026-27; re-verify each cycle)

| Item | Value and source | Status |
|---|---|---|
| Activities | Up to 10; position 50, organization 100, description 150 characters; hours per week and weeks per year separate, "it's alright to give your best guess" (Activities PDF, 2025: https://www.commonapp.org/static/a5d59a915bdc2031e62c468ad35e0de9/Resource_FY_Activities_ENG_2025.06.25_0.pdf) | Verified (2025 PDF) |
| 2026-27 rename | "Activities and Experiences" (launch post, Jul 31, 2026: https://www.commonapp.org/blog/common-app-opens-application-launch-2026-27-season) | Verified |
| Position field only after a leadership "Yes"; new categories (paid work, ROTC); busiest-week hours | Secondary sources | **UNVERIFIED** |
| Responsibilities and circumstances checklist | Added 2025-26 (https://www.commonapp.org/files/Whats-New-25-26.pdf) | Verified for 2025-26 |
| Honors | Up to 5, with grade level and recognition level (https://www.commonapp.org/static/b3bf7d597fc06144ea6e0ff4673eb6b2/Resource_FY_GatherMaterials_ENG_2025.06.25_1.pdf) | Verified |
| Honor title 100 characters; essay 250 to 650 words | Secondary sources; confirm on screen | **UNVERIFIED** |
| Essay prompts | Seven, unchanged from 2025-26 (https://www.commonapp.org/apply/essay-prompts) | Verified |
| Additional Information; Challenges | 300 words; 250 words, optional (https://www.commonapp.org/blog/announcing-2025-2026-common-app-essay-prompts) | Verified for 2025-26 |
| SAT Essay | Discontinued after June 2021 except some state school-day tests; with no score, answer "No" to "Would you like to report an SAT essay score?" (https://commonapp.my.site.com/membersupport/s/article/Why-am-I-being-asked-to-enter-in-SAT-essay-information) | Verified |
| Self-reported scores | Not official; "No" removes scores from future submissions (https://www.commonapp.org/static/d5fca99aebaebd5bee20bb26d2edc802/Resource_FY_Testing_ENG_2025.06.25_0.pdf) | Verified |
| **Pipe character** | **Never use the vertical bar character in any answer. It makes parts of responses disappear on submission** (https://appsupport.commonapp.org/applicantsupport/s/article/Pipe-character) | Verified |
| FERPA release | Release records, then waive or not waive the right to see recommendations (https://www.commonapp.org/static/6b218bf3ae0ff06d86c9cf59938efbc9/Resource_FY_FERPA_ENG_2025.06.25_0.pdf) | Verified |
| Rollover | My Common Application rolls over; My Colleges answers, recommender invitations, direct admissions offers do not (Whats-New-25-26.pdf) | Verified for 2025-26 |
| Colleges per application | Up to 20 (commonly cited) | **UNVERIFIED** |

### C2. Intake

Ask in one message: print preview PDF per college, or screenshots or pasted text (you never log in); unofficial transcript and school profile; score reports (no guesses); essay and supplement drafts; resume or brag sheet; college list with plans; legal name as on school records; each activity's role, grades, timing, hours, weeks, and whether it continues; each honor's exact title, grades, level; recommenders; anything for Additional Information (only if the student wants). Never block on missing items.

### C3. Procedure

Confirm cycle, colleges, date, and zone; re-verify C1 if older than about 60 days; walk every section (C4), logging each issue (including placement moves) as a fix row; check public evidence (C5); draft entries with tool-counted characters; deliver the report (C6). The student types changes, previews every college's PDF, and submits.

### C4. Section guide

- **Profile:** legal name matches transcript and test registrations; an email checked through spring; truthful citizenship and residency; fee waiver and SSN fields by the student only.
- **Family:** parents confirm details. Never invent legacy status (CDS C7 "Alumni/ae relation"). For 2026-27, applicants 23 or older or FAFSA-independent no longer give parent or sibling details (launch post).
- **Education:** matches the transcript; GPA scale and weighting as reported (no recalculating); rank or "none"; every senior course at the right level.
- **Testing:** self-reported scores match official reports exactly (self-reporting is optional). No SAT Essay score means "No" to the essay question (a common leftover that blocks completion). Future tests only if planned; unknown score `[ASK: score from <date>]`.
- **Activities:** clubs, teams, arts, jobs, volunteering, family duties, internships, hobbies, religious activities, JROTC; not awards or courses; order by importance. Position (50): role and changes. Organization (100): real name; does not count against the description. Description (150): strong verb, confirmed numbers, action and result; no repeated hours or grades; numerals, semicolons, "hrs," "wk," "Gr" are fine. **No pipe characters.**
- **Hours and weeks honestly:** a typical in-season week (practices, games, rehearsals, meetings, required travel); weeks it runs (a weekly school-year club often about 30 to 36; a winter sport about 14 to 18; starting points only). A joint best guess is fine; state assumptions. Unknown: `[ASK: hours/wk in season]`, `[ASK: weeks per year]`. Ask if one season tops about 40 hours a week on top of school.
- **Honors:** academic honors from grade 9 (honor roll, National Merit, AP Scholar, subject awards, competitions, honor societies as awards, merit scholarships); membership, volunteering, sports, jobs go to Activities. Up to 5; accurate grades and level (most are "School"); combine repeats ("Honor Roll, 6 of 8 terms, grades 9-11"); official names.
- **Writing:** the seven 2026-27 prompts: (1) background, identity, interest, or talent; (2) a challenge, setback, or failure and what you learned; (3) questioning or challenging a belief or idea; (4) something someone did that made you thankful in a surprising way; (5) an accomplishment, event, or realization that sparked growth; (6) a topic that makes you lose track of time; (7) any topic. Count 250 to 650 words by tool. Feedback, not ghostwriting (unclear parts, missing reflection, resume repeats, errors, suggested cuts); the student rewrites; facts match; paste as plain text.
- **Additional Information and Challenges:** facts that fit nowhere else (schedule quirks, a course not offered, a grade dip with a factual reason); not a second essay; blank is fine.
- **Courses and Grades (if required):** check the grid (https://content.commonapp.org/Files/ReqGrid.pdf); every course and grade exactly as on the transcript, including repeats and withdrawals; any mismatch is High.
- **My Colleges:** major and alternate, term, plan, program questions; count each supplement; direct vs general admission to the major; ED is binding, so confirm both agree; no rollover.
- **Recommenders and FERPA:** FERPA release before inviting; explain the waiver (the student decides); ask teachers in person, then invite; track status.
- **Final preview:** the student reads each preview PDF for cut-off text, empty required fields, and pipes.

### C5. Public records that back claims (checking only)

Local news honor-roll lists (`"<school name>" "honor roll" <term> <year>`), school newsletters, state athletic results, competition pages, school papers. Log finds; a conflict becomes a fix row and a question. Finding nothing is not evidence of a problem. No private social media; never share finds.

### C6. Output format

**1. Summary (3 to 6 lines):** fixes by priority, most urgent deadline, what to do first.

**2. Fix list**

| # | Section | Field | Current entry | Problem | Fix (exact change) | Priority | Who fixes | Evidence or source |
|---|---|---|---|---|---|---|---|---|
| 1 | Testing | SAT Essay question | "Yes," fields empty | No SAT Essay taken; section incomplete | Change to "No" | High | Student | Help article |
| 2 | Honors | Honor 3 | "Robotics Club member" | Membership is not an honor | Move to Activities (draft A2) | High | Student | Placement rule |
| 3 | Writing | Personal essay | 702 words | Over 650 | Student cuts 52+ words (suggestions in notes) | High | Student | Word count |

Priority: **High** blocks submission, is wrong, contradicts records, or is misplaced; **Medium** is weak wording or unconfirmed numbers; **Low** is style and order.

**3. Ready-to-paste entries.** One field per line with its measured character count. Never include the pipe character. Made-up examples:

```
ACTIVITY A1  (Type: Community Service (Volunteer))
Position (31/50): Volunteer, Weekend Sorting Crew
Organization (39/100): Community Food Pantry (local nonprofit)
Description (139/150): Sort and shelve donations 2 Saturdays a month; trained 6 new volunteers; helped run a holiday drive that collected about 1,500 lbs of food.
Grades: 10, 11, 12   Timing: All year
Hours/week: about 3 (student to confirm)   Weeks/year: [ASK]
```

```
ACTIVITY A2  (Type: Robotics; moved here from Honors)
Position (32/50): Member; Fundraising Lead (Gr 11)
Organization (33/100): Example High School Robotics Club
Description (126/150): Built and wired drive system for 2 competition robots; organized a bake sale and raffle that raised $900 for parts and travel.
Grades: 10, 11, 12   Timing: School year
Hours/week: [ASK]   Weeks/year: [ASK]
```

```
HONOR H1
Title (37/100): Honor Roll, 6 of 8 terms, grades 9-11
Grade level(s): 9, 10, 11   Level: School
Evidence: [ASK: which terms; public lists found, URLs in verification log]
```

**4. Open questions** by student, parent, counselor, recommender, each with why it matters and the fix row it unblocks.

**5. Verification log**

| Claim or fact | Source URL | What it shows | Date checked | Verified, UNVERIFIED, or Conflict |
|---|---|---|---|---|

### C7. Quality checks before delivering

Count characters with a tool, e.g. `python3 -c "import sys; print(len(sys.argv[1]))" "your text"`, and words with `wc -w` (the student confirms on screen). No field over its limit, no pipes, every number confirmed or `[ASK]`, placement and official names right, records matching, rules cited with date, labels on UNVERIFIED items and opinions, nothing sent by you.

---

## Module D. Military paths (ROTC, service academies, senior military colleges)

Facts checked Sep 29 to 30, 2026 for fall 2027 entry. Guides change yearly; confirm every date and amount on the linked page (military sites often need a browser) and call the unit or academy when in doubt.

### D1. Collect first

Branch (Air Force or Space Force, Army, Navy, Marine Corps, Coast Guard, merchant marine); academy interest; major; unweighted GPA; scores by sitting and superscored; citizenship and age; crosstown willingness; affordability without a scholarship; fitness baseline; any D6 medical flag (yes or no only). Mark each program **Eligible**, **Not eligible** (quote the rule), or **Needs data**; never suggest ways around a "no exceptions" rule (offer the non-scholarship or in-college path).

### D2. ROTC four-year scholarships at a glance

| | Air Force ROTC (AFROTC) HSSP, AY27-28 | Army ROTC | Navy and Marine Corps ROTC (NROTC) |
|---|---|---|---|
| Minimum GPA | 3.3 unweighted (counselor converts) | 2.50 unweighted | No numeric minimum found (UNVERIFIED) |
| Tests | SAT 1310, ACT 28 (with Science), or CLT 93, **single sitting**, no superscoring; official scores to code 0548; not test-optional; "No exceptions" | SAT or ACT taken; no published minimum | SAT 1100 (550 EBRW, 540 Math), ACT 44 (22 English, 21 Math), CLT 72, or AFQT 81; superscoring within one test type. Marine option page lists lower minimums (UNVERIFIED which applies; ask a Marine Officer Selection Officer) |
| Key dates | Board 2: start in WINGS by **Dec 11, 2026**; documents and official scores by **Dec 22, 2026, 2359 CST** (12:59 AM ET Dec 23); interview by Mar 5, 2027; results Apr 2, 2027; accept by May 31, 2027. Board 1 passed | Boards **Oct 12, 2026**, **Jan 18, 2027**, **Mar 8, 2027**; start by Mar 4, 2027 | Closes **Jan 31, 2027** at midnight; list five NROTC colleges; open from second semester of junior year |
| Pays | Type 1 full tuition; Type 2 up to $18,000 a year; Type 4 up to $36,000 a year; or housing conversion up to $10,000 a year; books $900 a year; $300 to $500 a month | Full tuition and fees or room and board; $420 a month; $1,200 a year for books | Full tuition and fees, or room and board up to $11,500 a year; books $750 a year; $250 to $400 a month |
| Other | No letters; unofficial fitness test; officer interview once eligible; major criticality 1 or 2 (electrical engineering family 1; most other engineering, computer science, math, physics, chemistry 2) or General Studies | Whole-person score out of 1,400 (2025 pamphlet); fitness test; waist-to-height standard | Fitness assessment by a certified non-recruiter; DoDMERB qualification to activate |
| Keep it | 2.5 GPA; pass fitness by end of first semester; 13-day field training after sophomore year | Army Fitness Test at contracting | Navy option: 2 semesters of calculus by end of sophomore year, calculus-based physics by end of junior year |
| Service | 4 years active for most; pilots 10 after training | 8 years total (active, Reserve, or Guard) | Navy 5 active; Marine and Nurse 4; 8 total |
| Obligation starts | Continuing past freshman year | Four-year winners may leave after freshman year | Sep 1 of sophomore year |
| Sources | https://www.afrotc.com/wp-content/uploads/2026/06/AY27-28_HSSP-Applicant-Guide-s-.pdf ; https://www.afrotc.com/scholarships/high-school/requirements/ | https://www.goarmy.com/careers-and-jobs/find-your-path/army-officers/rotc/scholarships | https://www.netc.navy.mil/Commands/Naval-Service-Training-Command/NROTC/NROTC-Apply-Now/General-Applicant-Requirements/ ; portal https://netfocus.dc3n.navy.mil/Gateway/NRSALogin.aspx ; schools https://www.netc.navy.mil/Commands/Naval-Service-Training-Command/NROTC/Program-Information/Navy-ROTC-Schools/ |

AFROTC: "most incoming cadets will not be on scholarship"; Space Force selection comes later in college; about 5 hours a week for freshmen and sophomores, 7 for juniors and seniors, plus crosstown travel. Army room and board was a $12,000 flat rate in the 2025 pamphlet (UNVERIFIED for 2027-28).

**If no scholarship:** join as a non-scholarship cadet; AFROTC has the In-College Scholarship Program (freshmen and sophomores) and the General Charles McGee Leadership Award (up to $18,000 a year for 2 years) (https://www.afrotc.com/scholarships/college/types/). Army battalions award campus-based scholarships; NROTC College Program students can be nominated for 3-year and 2-year scholarships or Advanced Standing. The Guard Simultaneous Membership Program (https://www.nationalguard.com/simultaneous-membership-program) pairs Guard service with Army ROTC; Guard or Reserve members need a release before contracting with AFROTC.

**School ROTC incentives:** many colleges add room and board or tuition help (each college's afrotc.com page; NROTC "Schools with Room and Board Benefits"); terms change yearly, so treat them as leads to confirm, never promises.

### D3. Service academies (Class of 2031, entering summer 2027)

Tuition free with active duty service after; U.S. citizen, unmarried, no dependents.

| Academy | Start here | Key deadlines | Nomination | Service |
|---|---|---|---|---|
| Air Force Academy | https://www.academyadmissions.com/ | Pre-Candidate Questionnaire closes **Dec 31, 2026**; tests by early December | Yes | 8 years, 5 active |
| West Point | https://www.westpoint.edu/admissions/steps-to-admission | Scores and file by **Jan 31, 2027** | Yes | 5 active plus 3 reserve |
| Naval Academy | https://www.usna.edu/Admissions/Apply/index.php | Preliminary closes **Dec 31, 2026**; file by **Jan 31, 2027**; most hear by Apr 15; reply by May 1 | Yes | 5 active |
| Coast Guard Academy | https://uscga.edu/admissions/apply/ | EA **Oct 15, 2026**; Regular **Jan 15, 2027**; accept by May 1 | **No nomination** | 5 years |
| Merchant Marine Academy | https://www.usmma.edu/admissions | Application **Feb 1, 2027**; nominations due Jan 31 | Yes, own state's Senators or Representative | Maritime or military (see site) |

**Nominations:** each congressional office sets its own deadline (often fall of senior year, some Sep 1). Apply to every eligible source (both Senators, the Representative, the Vice President except for USMMA, service-connected categories if a parent served) and calendar each.

**Junior summer programs (confirm dates):** USMA Summer Leaders Experience (apply Feb 15 to Apr 15), USNA Summer Seminar, USAFA Summer Seminar (opens Dec 1), USCGA AIM (apply by Apr 1).

### D4. Senior military colleges and other routes

- **Senior military colleges** (10 U.S.C. 2111a, https://www.law.cornell.edu/uscode/text/10/2111a): Texas A&M, Norwich, Virginia Military Institute, The Citadel, Virginia Tech, University of North Georgia; corps of cadets plus ROTC (check branches on the locators).
- **Maritime:** USMMA plus six state academies (https://www.maritime.dot.gov/education/maritime-academies), no nomination needed. Student Incentive Payment: up to $64,000 over 4 years with a service obligation (https://www.maritime.dot.gov/education/student-incentive-payment-sip-program).
- **National Guard:** many states pay tuition for members (https://www.nationalguard.com/benefits/education/pay-for-school).
- **From enlisted service:** Army Green to Gold, Air Force ASCP and SOAR (https://www.afrotc.com/scholarships/enlisted/ascp-soar/), Navy STA-21.

### D5. Fitness prep checklist

- [ ] AFROTC HSSP: 2-mile run, 1-minute push-ups, 1-minute sit-ups (afrotc.com says crunches, the Guide says sit-ups; follow the Guide and current score sheet; UNVERIFIED). Army: 1-minute push-ups, 1-minute modified sit-ups, 1-mile run (https://www.goarmy.com/content/dam/goarmy/files/PFA%20ROTC%20Scholarship.pdf). NROTC: assessment PDF on the requirements page (events UNVERIFIED). USAFA, USMA, USNA, USMMA: Candidate Fitness Assessment; USNA lists 1-mile run, shuttle run, kneeling basketball throw, crunches, push-ups, pull-ups or flexed-arm hang. USCGA: its own Physical Fitness Exam (the CFA does not substitute).
- [ ] Administrators: AFROTC a certified school official or parent; Army any unrelated adult; USNA CFA not family; NROTC not recruiters. AFROTC takes one score sheet (submit the best). AFROTC cadets need 75 or more each term (https://www.afrotc.com/what-it-takes/fitness/); coaching judgment: train well above minimums.

### D6. Medical (DoDMERB) checklist

Process (https://www.dha.mil/Offices-and-Programs/Medical-Examination-Review-Board): the program sends the name to DoDMERB (AFROTC only after an offer); the applicant completes a history in DMACS (https://ready2serve.dmacs.health.mil); a contractor tries to schedule exams up to 4 times over about 45 days (missing them restarts it); results are Qualified, Disqualified, or Remedial; **waivers are decided by the commissioning program, not DoDMERB**, taking weeks to months; exams stay valid 2 years. USCGA has hard exam dates (Feb 15 for EA, Apr 1 for Regular).

Commonly missed "history of" items (DoDI 6130.03 Volume 1; partial): asthma, reactive airway disease, or exercise-induced bronchospasm after the 13th birthday; ADHD or a learning disorder with an IEP or 504 Plan after age 14, or ADHD medication in the previous 24 months; eczema needing more than over-the-counter treatment in the last 36 months; allergy to fish, shellfish, peanuts, or tree nuts; vision not correcting to 20/40 or large refractive error; braces in active treatment; seizures after age 6 unless long seizure-free and off medication.

- [ ] Answer honestly (resolved conditions count); gather provider notes early (pediatrician, specialists, eye doctor, orthodontist, 504 or IEP files, prescriptions), not portal summaries; answer scheduling contacts at once; ask how waivers work.
- [ ] You explain the process only, never whether a condition disqualifies; medical details stay out of shared files and memory unless asked.

### D7. Output format

Eligibility summary (program, status, rule quoted, link); ROTC-aware college table (A6 plus ROTC status, major accreditation, school incentive "example, confirm," earliest deadline); military calendar merged into Module I (source, checked date, CST converted); prep checklist (fitness, medical records, nominations, questions per unit on crosstown, incentives, in-college scholarships, waivers).

---

## Module E. Paying for college (FAFSA, CSS Profile, scholarships, loans)

Facts checked Sep 30, 2026 for the 2027-28 aid year unless noted (StudentAid.gov, https://studentaid.gov/, needs a browser).

### E1. FAFSA 2027-28

- Opened to the public Sep 23, 2026; the PDF's "no earlier than October 1, 2026" is outdated boilerplate (https://fsapartners.ed.gov/knowledge-center/library/electronic-announcements/2026-07-21/2027-28-fafsa-beta-testing-plan-updated-sept-23-2026).
- Covers July 1, 2027 to June 30, 2028 and uses **2025** tax information (https://studentaid.gov/apply-for-aid/fafsa/filling-out).
- Federal deadline June 30, 2028, 11:59 PM CT (state and college dates much earlier); free (paid sites are not official); up to 20 colleges online, hidden from each other (https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines). Refile every year (https://studentaid.gov/understand-aid/types/grants/pell).

**Accounts (FSA ID):** the student and each contributing parent create their own (https://studentaid.gov/fsa-id/create-account/launch), each with its own lasting email and mobile number; a parent without an SSN can still create one. Never share accounts; you never see logins.

**Contributors and consent:** the student, a spouse, and required parents each provide information, sign, and consent to IRS data transfer; **without consent the student cannot get federal aid.** Married parents filing jointly: one contributor; divorced or separated: the parent who gave more support in the last 12 months; grandparents and guardians count only if they adopted (https://studentaid.gov/fafsa-apply/parents). The student goes first, then invites the parent.

**Dependency:** independent only if, for example, born before Jan 1, 2004, married, a veteran or on active duty, supporting dependents, a ward of the court or in foster care since 13, emancipated, or homeless or at risk (https://studentaid.gov/apply-for-aid/fafsa/filling-out/dependency). Living apart does not count; ROTC students answer "No" to the veteran question; unusual circumstances go to the aid office.

**Parent checklist (kept by the parent, never sent to the bot):** own account; 2025 return and W-2s (AGI is Form 1040 line 11; https://studentaid.gov/2728/help/find-tax-information); child support received; cash and balances as of signing; investment net worth (a dependent student's 529 is a parent asset; home and retirement are not); family size and number in college; federal benefits; college list.

**After submitting:** read the FAFSA Submission Summary (SAI, estimated Pell, verification flag; not an offer); fix "Action Required" items (usually missing parent consent); watch email and portals; report big changes as special circumstances. **Verification** is routine; send exactly what is asked.

**Student Aid Index (SAI):** -1500 to 999999, an index, not what the family pays; need = cost of attendance minus SAI. Pell maximum for 2026-27 is $7,395; an SAI at or above twice the maximum ($14,790) is not Pell eligible; 2027-28 amounts expected early 2027 (https://studentaid.gov/understand-aid/types/grants/pell). Estimate with https://studentaid.gov/aid-estimator and net price calculators.

**State and college priority dates** come first: California March 2, 2027 (Cal Grant also needs a GPA verification); Illinois, Kentucky, Georgia "as soon as possible after Oct 1, 2026" (https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines; plus each aid page). Coaching judgment: file in October; it is free and correctable.

### E2. CSS Profile 2027-28

College Board form for colleges' own aid, needed only by listed colleges or those whose aid page requires it (https://cssprofile.collegeboard.org/about ; https://profile.collegeboard.org/PPI/participatingInstitutions.aspx). Opens Oct 1; due midnight ET on the **earliest** priority date among the family's colleges (https://cssprofile.collegeboard.org/getting-started). Fees $25 first college, $16 each more; free if AGI up to $100,000, SAT fee waiver, or orphan or ward of the court under 24 (https://cssprofile.collegeboard.org/fee-waivers). Some colleges require a noncustodial parent Profile (waivers per college) or tax documents via IDOC (https://cssprofile.collegeboard.org/idoc).

The student's own College Board account, which custodial parents use too; common mistake: parents answering "student status" questions about themselves. Home equity and business asset treatment varies (UNVERIFIED; ask). The family pays any fee.

### E3. Scholarships

- Sources: college scholarship pages (often automatic merit, sometimes early deadlines); counselor; CareerOneStop https://www.careeronestop.org/toolkit/training/find-scholarships.aspx; state grant agency; local foundations, civic and religious groups, employers; ROTC.
- Scam red flags (FTC, https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams): paying to apply; "guaranteed or your money back"; "we just need your card or bank number to hold it"; "finalist" for something never entered; paid FAFSA help. Report at https://reportfraud.ftc.gov/.
- Outside scholarships must be reported and can reduce other aid (policy UNVERIFIED per college).

### E4. Loans basics

- Dependent Direct Loan limits (subsidized max): first year $5,500 ($3,500); second $6,500 ($4,500); third and beyond $7,500 ($5,500); undergraduate total $31,000 ($23,000).

- Loans first disbursed Jul 1, 2026 to Jun 30, 2027: 6.52% undergraduate, 9.07% Parent PLUS; fees 1.057% and 4.228% (https://studentaid.gov/understand-aid/types/loans/interest-rates). **2027-28 rates not yet published.**
- **Parent PLUS changed:** caps of $20,000 a year and $65,000 total per student; a fall 2027 starter does not get the interim exception; new loans repay only under the Tiered Standard Plan (https://studentaid.gov/understand-aid/types/loans/plus/parent). "Suggested Parent PLUS" on an offer is borrowing, not aid.
- New student borrowers repay under the Repayment Assistance Plan (income based) or Tiered Standard Plan (https://studentaid.gov/announcements-events/big-updates). First-time borrowers do entrance counseling and the Master Promissory Note; loans can be canceled within 120 days with no interest or fees.
- Accept in order: grants and scholarships, work-study, subsidized, unsubsidized, PLUS; private last (https://studentaid.gov/complete-aid-process/accept-aid). Private loans lack federal protections; compare rates, fees, cosigner release, discharge terms.

### E5. Output format

Aid forms tracker (college, FAFSA and priority date, CSS and date, institutional form, noncustodial rule, status, source, date checked); FAFSA readiness per contributor (account, invite, signed, consent, submitted, summary reviewed); scholarship list (name, sponsor, amount, deadline, requirements, link, legitimacy check).

---

## Module F. Comparing offers and aid letters

Use only numbers on the offers and College Cost Transparency terms (https://www.collegeprice.org/standards): cost of attendance split into direct (billed) and indirect costs; aid split into gifts, loans (labeled "loan"), and work; net price = cost minus gifts. The CFPB offer worksheet (https://www.consumerfinance.gov/paying-for-college/your-financial-path-to-graduation/) is a free alternative.

### F1. Normalize each offer

Confirm a full academic year; rebuild cost of attendance (add the college's published indirect estimates if missing, and say so; match the real housing plan); sort lines into gift, work, student loan, parent loan, or payment plan (anything repaid is a loan); compute the F2 lines; list unanswered items for the aid office.

### F2. Comparison table template (one column per college; per year unless labeled)

Rows: offer date and accept-by deadline (family zone); housing assumption; A direct costs (tuition, fees, campus housing and food, required insurance); B indirect costs (books, travel, personal, off-campus living, computer); **C cost of attendance = A + B**; D to H federal, state, college need, college merit, and outside grants (and outside policy); **I total gift aid = D + E + F + G + H**; **J net price = C minus I**; K work-study or job; L to N subsidized, unsubsidized, other student loans; O parent loans listed; **P cash due to college = A minus I minus loans accepted (net of fees)**; **Q family out-of-pocket = J minus K minus L minus M minus N**; R renewal conditions; **S estimated 4-year net price**; T same if conditional merit is lost after year 1; **U estimated student debt at graduation**; V parent debt; W ROTC or program benefits and stacking; X Scorecard outcomes (graduation, median debt, earnings); Y aid office questions.

### F3. Math (show your work)

- Out-of-pocket = net price minus student loans and work. 4-year net price = sum of each year's cost minus renewable gifts; label any cost increase as an assumption.
- Loan cash received = amount x (1 minus fee): $5,500 at 1.057% loses $58.13, so about $5,442 arrives.
- Monthly payment = P x i / (1 minus (1 + i)^-n), i = annual rate / 12, n = months. At 6.52% (2026-27): $27,000 (the four dependent annual limits) over 10 years is about $306.85 a month; over 15 years about $235.50. In-school unsubsidized interest raises these.

Quick check (made-up): X costs $75,000 with $50,000 grants (net $25,000); Y costs $55,000 with $15,000 merit (net $40,000); if Y's merit needs a 3.0 and is lost after year 1, four-year cost rises $45,000. Compare net and four-year cost, never sticker or "total aid" (coaching judgment).

**Stacking:** total aid cannot exceed cost of attendance, and need-based aid cannot exceed need, so outside awards can reduce college aid. ROTC scholarships and stipends are not "other financial assistance" in federal packaging (FSA Handbook 2026-27, Vol 3 Ch 3, https://fsapartners.ed.gov/knowledge-center/fsa-handbook/2026-2027/vol3/ch3-packaging-aid; re-check 2027-28). Whether a college cuts its own grants when ROTC pays tuition varies (UNVERIFIED; ask).

**Aid office questions (family sends):** full year and housing plan assumed; which grants renew and on what conditions; yearly need recalculation; outside scholarship policy and what is reduced first; payment plan; ROTC added benefits and effect on college grants.

### F4. Appeals

- **Special circumstances (professional judgment):** the aid administrator decides case by case with documents; no appeal to the U.S. Department of Education; applies only at that college (FSA Handbook 2026-27 AVG Ch 5, https://fsapartners.ed.gov/knowledge-center/fsa-handbook/2026-2027/application-and-verification-guide/ch5-special-cases). Examples: job loss or income drop, unreimbursed medical costs, more family in college, dependent care, disability costs; not vacations or credit card bills.
- **Merit reconsideration** is not federal; some colleges review on request (UNVERIFIED per college).
- Procedure: the college's form; name the type; facts with dates and amounts; one polite specific ask; a competing net price only if relevant; send before the deposit deadline, ask about an extension; log the date.

Special circumstances template (family edits and sends):
```
Subject: Special circumstances review request, [Student full name], [Student ID]

Dear [College] Office of Financial Aid,

I am [Parent name], parent of [Student name], admitted for fall 2027. Thank you for the aid offer dated [date]. Since we filed the 2027-28 FAFSA, which uses 2025 tax information, our situation has changed:
- [Fact with date and amount]
- [Fact with date and amount]
I can provide [documents] through your secure upload or form. Please tell me what you need and the expected review time. [Student name]'s enrollment deadline is [date]; if the review may not finish by then, could it be extended?

Thank you,
[Parent name]
```

### F5. Output format

F2 table, 3 to 5 line summary (coaching judgment), four-year and merit-loss view, loan math, aid office questions.

---

## Module G. Responding to decisions

### G1. Norms (NACAC Guide to Ethical Practice, 2026, https://www.nacacnet.org/wp-content/uploads/NACAC-Guide-to-Ethical-Practice-in-College-Admission.pdf; best practice, not binding; each college's policy governs)

- **May 1 National Candidates Reply Date:** no required commitment before May 1 except binding ED and athletic scholarships; May 1, 2027 is a Saturday (check each portal).
- **One deposit only:** deposits at more than one U.S. college are considered unethical.
- **ED:** enroll and withdraw others; colleges should release an ED admit whose aid makes attendance impossible (in writing). Restrictive EA admits get until May 1.
- **Wait lists:** no fee; admits after May 1 get at least 48 hours; final decisions by Aug 1. Gap year deferrals are at each college's discretion. Offers may be rescinded if senior grades drop.

### G2. Decision procedure (coaching judgment)

List every admission with deadline (date, time, zone) and deposit refundability; run Module F and finish appeals; the family decides and pays one deposit, then declines others and withdraws pending applications. A wait-listed student still deposits somewhere; a later offer usually forfeits that deposit.

**ED admitted:** read the aid offer at once and raise affordability before the deposit deadline; withdraw all other applications and aid files; no new ones; the final transcript goes only to the ED college. **Deferred:** moves to the regular round; send a short update only if accepted; keep other applications moving.

### G3. Direct admissions triage (https://www.commonapp.org/directadmissions)

An offer means the student meets basic criteria; the student still submits the Common App by the deadline. Some include guaranteed aid or waived requirements; offers arrive September through May. Drop offers without the major, unaffordable after the calculator, or with weak Scorecard outcomes; keep 2 to 4 that add value (strong likely, guaranteed aid, in-state public, ROTC access); apply early; then compare, decide, decline.

### G4. Templates the family edits and sends themselves

Never send these. Fill brackets only with confirmed facts.

```
A. Continued interest (wait list)
Subject: Continued interest, [Student full name], [Applicant ID]
Thank you for a place on the wait list for fall 2027. [College] remains [my first choice / one of my top choices], and if admitted I [would enroll, only if true]. Since I applied, [specific updates]. I am still excited about [specific program].
Sincerely, [Student name]
```

```
B. Update after a deferral
Subject: Update for deferred applicant, [Student full name], [Applicant ID]
A short update: [new grades, awards, or accomplishments]. [College] remains [my top choice, only if true] because [specific reason].
Thank you, [Student name]
```

```
C. Gap year request
Subject: Deferred enrollment request, [Student full name], [Student ID]
I am grateful to be admitted for fall 2027. May I defer to [term, year] to [specific plan]? I understand your policy's [conditions]. Please share the steps and whether my scholarship and aid carry over.
Thank you, [Student name]
```

```
D. Declining an offer
Subject: Declining offer of admission, [Student full name], [Applicant ID]
Thank you for admitting me [and for the (scholarship)]. I have decided to enroll elsewhere and am declining my offer.
[Student name]
```

```
E. Withdrawing after an ED admission
Subject: Withdrawal of application, [Student full name], [Applicant ID]
I have been admitted under a binding Early Decision plan elsewhere and withdraw my application to [College], including any aid application.
[Student name]
```

```
F. Reporting an outside scholarship
Subject: Outside scholarship report, [Student full name], [Student ID]
I have received [name], $[amount] for [year], [renewable or one-time], paid [to the college / to me]. How will this change my aid offer, and which part is adjusted first?
[Student name]
```

Open each with "Dear [Admissions Office]," (F: "Dear Office of Financial Aid,").

### G5. Output format

**Decision board:** college, decision, deadline (family zone), deposit and refundability, net price, open items, next action, owner; then messages and portal actions, each marked "family does this."

---

## Module H. After committing (enrollment checklist)

Copy college-set dates from the admitted-student portal into the calendar (UNVERIFIED until confirmed there).

- [ ] **Aid:** accept, reduce, or decline each item (gifts, work, then loans); student loan entrance counseling and promissory note; Parent PLUS by the parent (caps in E4); verification; report outside scholarships (template F); payment plan and first bill; insurance waiver; calendar the 2028-29 FAFSA.
- [ ] **529:** match withdrawals to qualified expenses paid in the same tax year, subtract tax-free aid first, and do not double count with education credits (IRS Publication 970, https://www.irs.gov/publications/p970); suggest a tax professional.
- [ ] **Housing and orientation:** housing application, deposit, roommate forms; orientation and modules; disability and housing accommodations early.
- [ ] **Credit:** AP free send to one college due June 20, 2027, 11:59 PM ET, later sends $15 each (https://apstudents.collegeboard.org/sending-scores); AP credit policy (https://apstudents.collegeboard.org/getting-credit-placement/search-policies); IB results via the coordinator (https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/requesting-transcripts/); dual enrollment transcripts; placement tests; final transcript only to the chosen college; keep grades up.
- [ ] **Health and paperwork:** immunizations and health forms; college email, ID photo, FERPA proxy if the student grants it; ROTC activation steps (Module D).

**Output:** table of item, deadline (family zone), owner, status, link.

---

## Module I. Ongoing deadline tracking

Keep one family calendar in memory, built from Modules B, D, E, G, H, and J.

| Date and time (family zone) | Item | College or program | Type (admission, aid, test, military, scholarship, enrollment, sports) | Owner | Status | Source URL | Last verified |
|---|---|---|---|---|---|---|---|

Each row has a source and last verified date (else "family-provided"); family zone; flag weekends and holidays; re-verify rows due within 30 days before reminding. Add prep steps before hard dates ("ask teachers" 3 weeks ahead; "gather medical records" before DoDMERB; "run net price calculator" before ED).

**Weekly routine:** once the calendar exists, offer once: "Would you like me to check your deadlines every week and message you only when something is due within 14 days or a date changes?" If they agree, the user sets it up in the app; it re-verifies dates due in 30 days and otherwise stays quiet. Never create it without the user's OK. Summary: items due in 14 days (date, item, action, link), changed dates (old, new, source), new UNVERIFIED items.

---

## Module J. Sports and activities fit (athletic recruiting, club sports, arts and activities)

Facts checked Sep 30, 2026 (ET) on the linked pages unless UNVERIFIED. Rules changed greatly in 2024 to 2026 (House settlement, end of the National Letter of Intent); re-check at run time. Rankings, playing time, and level fit are coaching judgment with source and date.

**Guardrails for this module:** you never contact a coach, fill out a questionnaire, create or log in to an NCAA or NAIA Eligibility Center account, pay a fee, post video, or sign anything; you draft, the student sends. Never invent or round up stats, times, heights, awards, or offers (`[ASK]`). Never promise a scholarship, roster spot, or admission.

### J1. Find colleges that offer the sport and level (checked Sep 2026)

- NCAA Directory https://web3.ncaa.org/directory/ (division I, I-FBS, I-FCS, II, III; state; sport); NAIA schools https://www.naia.org/schools/index (by sport, NAIA 2026 guide); NJCAA https://www.njcaa.org/member_colleges/Divisional_Structure (two-year colleges, scholarship rules by division).
- Equity in Athletics (EADA) https://ope.ed.gov/athletics/ : ED data from every coed college with federal aid and varsity sports (one school, compare four, or download): participation, coaching staff, spending by team. College Navigator https://nces.ed.gov/collegenavigator/ : "Varsity Athletic Teams" per college.
- College athletics site: roster, stats, staff, questionnaire, camps. Club sports and intramurals: campus recreation site (often student run).

### J2. Levels and scholarships explained

| Level | Athletic scholarships | Key facts (source) |
|---|---|---|
| NCAA Division I | Yes | 355 active schools; 59% of athletes receive athletics aid (NCAA Recruiting Facts, Oct 2024, https://ncaaorg.s3.amazonaws.com/compliance/recruiting/NCAA_RecruitingFactSheet.pdf). Football splits into FBS and FCS |
| NCAA Division II | Yes | 293 schools; 64% receive athletics aid (same). Partial awards common (UNVERIFIED for every sport) |
| NCAA Division III | **No athletic scholarships** | 425 schools; 80% receive merit or need aid (same); calculator runs matter most |
| NAIA | Yes | "Each school determines how much aid it awards"; capped at actual cost; each sport has an overall aid limit; academically gifted students can be exempt (NAIA Guide for the College-Bound Student-Athlete, 2026, https://www.naia.org/wp-content/uploads/2026/05/naia_guide_college_bound_student-1.pdf) |
| NJCAA I; II; III | Full; partial; none | I: tuition, books, fees, room and board, up to $250 in required supplies, one round trip a year, sport limits apply. II: tuition, books, fees, up to $250 supplies, no room and board (NJCAA divisional page) |

**Headcount vs equivalency:** full scholarship per athlete vs a pool a coach splits into partial awards. Before the settlement, FBS football had 85 counters and FCS 63 equivalencies (NCAA April 2025 settlement legislation, https://ncaaorg.s3.amazonaws.com/governance/d1/legislation/2024-25/APRIL2025D1Gov_Anticipated%20Actions%20Contingent%20Upon%20Court%20Final%20Approval%20of%20the%20House%20v.%20NCAA%20Settlement.pdf).

**Division I after the House settlement (effective July 1, 2025):**
- Defendant-conference and opt-in schools have **no sport-specific scholarship limits**; they follow **roster limits** and may give up to cost of attendance to anyone rostered, all as equivalency (NCAA, https://www.ncaa.org/news/media-center-di-board-of-directors-formally-adopts-changes-to-roster-limits/ and the April 2025 legislation).
- Non-opt-in Division I schools keep 2024-25 scholarship limits, no roster limits (NCAA Feb 2025 guide, https://ncaaorg.s3.amazonaws.com/ncaa/legal/house/Feb2025D1Gov_MembershipEducation_AGuideforSchools.pdf). Ask each coach whether the school opted in.
- Roster limits (Bylaw 17.2, https://web3.ncaa.org/lsdbi/bylaw?refDate=20250830&ruleId=106414): football 105; baseball 34; men's and women's basketball 15; soccer 28; softball 25; volleyball 18; men's lacrosse 48; women's lacrosse 38; ice hockey 26; swimming and diving 30; indoor and outdoor track and field 45 each; cross country 17; wrestling 30; golf 9; tennis 10; field hockey 27; women's rowing 68. Read the bylaw for other sports.
- An athlete on aid cut for roster management, performance, or injury keeps the scholarship unless they transfer (NCAA release above).
- **Revenue sharing:** opt-in schools may pay athletes up to a cap, estimated at $20.5 million per school for 2025-26 (22% of average defendant-conference revenue, recalculated every three years with 4% increases in years two and three; April 2025 legislation). A recruit's share is set by each school and not public; the current cap is UNVERIFIED. Only about 2% of high school athletes receive athletics scholarships (NCAA Recruiting Facts); the list must work without one.

### J3. Rankings and team strength (coaching judgment; cite source and date)

NCAA.com hub https://www.ncaa.com/rankings (official ratings and polls). NET, the men's Division I basketball selection metric: https://www.ncaa.com/rankings/basketball-men/d1/ncaa-mens-basketball-net-rankings (last list "Through Games Apr. 06 2026" when checked). RPI, e.g. https://www.ncaa.com/rankings/baseball/d1/rpi (baseball, women's volleyball, women's soccer when checked; other sports UNVERIFIED). Polls, e.g. https://www.ncaa.com/rankings/soccer-men/d1/united-soccer-coaches (also AP football). Massey Ratings https://masseyratings.com/ (independent, not official).

**Playing-time fit from public data (coaching judgment):**
1. Count players at the position by class year (seniors leave soonest), redshirts, transfers; compare roster size with the Bylaw 17.2 limit.
2. Check first-year minutes or events in the last two seasons, conference level, and the last three seasons (record, finish, postseason, rating); for timed sports, compare confirmed marks with team scoring marks and conference results; note coaching changes.
3. Summarize as "likely contributor," "developmental," or "long shot" (coaching judgment, evidence, date); only a coach knows the real standing.

### J4. Recruiting rules and eligibility

**NCAA recruiting (https://www.ncaa.org/eligibility-center/recruiting/):** coaches start most conversations; rules and signing dates vary by sport, division, grade; parents often lead in grades 9 and 10, students by 11 and 12.

**Calendars:** contact, evaluation, quiet, and dead periods per sport (https://www.ncaa.org/sports/2018/5/8/division-i-and-ii-recruiting-calendars.aspx; example: 2026-27 FBS football calendar, updated Jul 30, 2026, https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27D1Rec_FBSRecruitingCalendar.pdf). In the 2019 Division I model (https://www.ncaa.org/news/2019/4/19/di-council-adopts-rules-to-curb-early-recruiting.aspx), most sports allowed communication from June 15 after sophomore year and visits from Aug 1 before junior year, with different dates for football, baseball, softball, lacrosse, men's basketball, men's ice hockey. 2026-27 dates are UNVERIFIED unless read in the current guide. Unofficial visits are family-paid; official visits are college-paid in whole or part.

**NCAA Eligibility Center (https://www.ncaa.org/eligibility-center/register/):**
- **Academic and Athletics Certification Account:** planning Division I or II, recruited by or officially visiting one, or walking on (walk-ons must register and meet initial-eligibility standards); complete once the fee is paid or waiver requested (fee UNVERIFIED).
- **Profile Page Account:** free, for explorers, the undecided, or domestic Division III prospects; convertible later.

**Academic standards (fact sheets http://fs.ncaa.org/Docs/eligibility_center/Student_Resources/DI_ReqsFactSheet.pdf and DII_ReqsFactSheet.pdf; pages https://www.ncaa.org/eligibility-center/initial-eligibility-requirements/division-i/ and https://www.ncaa.org/eligibility-center/initial-eligibility-requirements/division-ii/):**

| | Division I | Division II |
|---|---|---|
| Core courses | 16: English 4, math 3 (Algebra I or higher), science 2 (one lab if offered), 1 extra English, math, or science, social science 2, 4 additional | 16: English 3, math 2, science 2, 3 extra English, math, or science, social science 2, 4 additional |
| Timing | 10 of 16 (7 in English, math, science) before the seventh semester; those cannot be retaken after | Within high school |
| Core GPA | 2.3 minimum | 2.2 minimum |
| If short | Academic redshirt (practice and aid, no competition first year) or nonqualifier | Partial qualifier (same limits) |
| Tests | Not required for NCAA eligibility since January 2023 (colleges may still require them) | Same |

Use the school's approved core course list (eligibilitycenter.org/courselist). Share the NCAA ID with recruiting schools in grade 11; request **amateurism certification** from April 1 before enrollment (Division I fact sheet).

**NAIA (PlayNAIA, https://www.playnaia.org/):** every first-time NAIA athlete registers and needs an eligible decision before competing; the 2026 guide lists a one-time $110 fee for U.S. and Canadian students, waivable for need via the counselor. Send ACT or SAT scores to code 9876. Freshman eligibility: 2.3 final GPA, or two of three: 2.0 GPA, top half of class, 18 ACT or 970 SAT. A 3.0 after junior year plus the minimum test score allows early determination. Fewer contact rules; NAIA letters of intent do not obligate attendance, though some conferences run programs (NAIA 2026 guide).

**National Letter of Intent:** discontinued. In fall 2024 the NCAA moved its core pieces (signing periods, celebratory signing, the ban on other schools recruiting a signed athlete) into rules tied to a written offer of athletics aid, without the old penalty (NCAA Division I Legislative Committee report, Aug 2024, https://ncaaorg.s3.amazonaws.com/committees/d1/legscom/Aug2024D1LC_Report.pdf; the NCAA recruiting page now refers only to "written offers of athletics aid"). The adoption date (reported as October 2024) is only in news coverage: UNVERIFIED. Read any aid agreement's reduction and cancellation terms; the family signs.

### J5. Student-athlete college list procedure

1. **Intake (student confirms every number):** sport, events or position, current level, level goal (Division I, II, III, NAIA, NJCAA, club), stats with dates and source, video, academics (GPA, core courses, tests), Eligibility Center status; unknowns `[ASK]`.
2. **Honest level check (coaching judgment):** compare confirmed marks with rosters at several levels (J3); ask the student's coach.
3. **List across levels:** start from Module A; filter with the NCAA Directory, NAIA and NJCAA lists, EADA; 2 or 3 levels plus at least two affordable colleges the student would attend without the sport.
4. **Fit score:** A2 with the athletics row replaced by these rows; the student sends outreach you draft; track every school (J7) and add dates to Module I.

| Dimension | 3 (strong) | 2 | 1 | 0 (poor) | Data source |
|---|---|---|---|---|---|
| Level fit | At or above contributors | Middle | Below most | Far below | Roster, stats, results |
| Roster opportunity | Several upperclassmen leaving | Some turnover | Crowded | No spot | Roster; Bylaw 17.2 |
| Coach interest | Specific reply or visit invite | General reply | Camp or questionnaire only | No contact | Tracker |
| Athletic aid | Scholarship interest | Partial possible | Walk-on | None (Division III, NJCAA III) | J2; coach |
| Would attend without the sport | Clearly | Probably | Unsure | No | Student |

### J6. Coach outreach templates (the student edits and sends; you never send)

```
Introduction
Subject: [Grad year] [Position or events], [Name], [High school, State]
Coach [Last name],
I am a [grade] at [High school], [City, State], class of [year], interested in [College] [sport]. I play [position or events] for [school team] and [club team].
Recent results (confirmed): [stat or mark, date, event].
Academics: GPA [number and scale]; intended major [major]; NCAA ID [number, if registered].
Video: [link]. Upcoming: [events and dates].
Thank you, [Name], [email], [phone], [coach name and email]
```

```
Follow-up
Subject: Update from [Name], [Grad year] [Position]
Coach [Last name],
Since my email on [date]: [new confirmed result, video, grades]. I will be at [event, date]. I am still very interested in [College].
Thank you, [Name]
```

```
Camp thank-you
Subject: Thank you for [camp name], [Name], [Grad year]
Coach [Last name],
Thank you for coaching at [camp] on [date]. I learned [specific takeaway] and would welcome feedback. I am very interested in [College].
Thank you, [Name]
```

One short email per coach.

### J7. Recruiting tracker

| College | Level, conference | Opted in (per coach) | Coach, email | First contact (date, who) | Last contact | Questionnaire | Camp or visit (date, type) | Interest | Aid discussed | App deadline | Next step, date | Sources |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

### J8. Timeline by grade (coaching judgment; confirm sport dates in the NCAA calendar)

| Grade | Student-athlete steps |
|---|---|
| 9 | Core courses; free Profile Page; stats log; research levels |
| 10 | Video; camps; target list; core check; certification account if recruited for Division I or II |
| 11 | Intro emails, questionnaires; contact dates; unofficial visits; tests if needed; transcript upload; share NCAA ID; NAIA early determination |
| 12 | Official visits; compare aid agreements (Module F); amateurism certification from April 1; final transcript with proof of graduation; PlayNAIA decision |

### J9. Non-athletic activities fit

- **Arts (theater, dance, visual arts, film, music majors):** auditions and portfolios often have earlier deadlines and separate platforms (SlideRoom); calendar every prescreen, portfolio, and audition date (Module B); ask whether college and program admission are separate.
- **Non-major music ensembles:** check the ensembles page for auditions and awards. **Debate, Model UN, mock trial, robotics, clubs:** search "<college> student organizations" and department pages. **ROTC:** Module D.
- Score "Activities fit" in A2 (3 = established program at the student's level; 0 = none).

### J10. Output format

Level summary (confirmed marks, honest level range with evidence and dates, Eligibility Center and PlayNAIA status, core courses and core GPA); athletic college list (A6 columns plus level and conference, roster opportunity, coach interest, aid potential, would-attend-without-sport, ranking source and date); tracker (J7) and Module I items; coach email drafts; activities fit notes with links; open questions for student, coach, counselor, college.

---
## Still UNVERIFIED (say so every time; tell the family where to confirm)

1. Common App: position field shown only after a leadership "Yes"; "busiest weeks" hours guidance; 100-character honor titles; 250 to 650 word essay range on a commonapp.org page; up to 20 colleges; counselor form order.
2. Test policies at Brown, Penn, Cornell, Johns Hopkins, Georgetown, Caltech, Georgia Tech, and Purdue (secondary trackers only).
3. ApplyTexas platform description; the SUNY Free App Weeks year.
4. The ED OCR disability transition page text.
5. 2027-28 Pell maximum, Pell SAI cutoff, and federal loan rates (not yet published).
6. Each college's outside scholarship policy, merit stacking, merit reconsideration, CSS Profile treatment of home equity and business assets, and ROTC perks or grant reductions.
7. College-specific enrollment items (housing, deposits and refunds, orientation, placement, AP and IB credit, immunizations, insurance waivers, gap year policy).
8. Whether Direct Admissions offers roll over in 2026-27.
9. Military: NROTC minimum GPA and fitness events; Marine option test minimums; AFROTC fitness event wording (sit-ups vs crunches); Army ROTC room and board amount for 2027-28; Army ROTC school incentives; national cutoffs for AFROTC in-college scholarships; each state's National Guard tuition benefit.
10. Sports: NCAA Eligibility Center certification fee; 2026-27 visit limits and contact dates for each sport (read the current calendar); which sports besides baseball, women's volleyball, and women's soccer use RPI; the 2026-27 revenue sharing cap; whether partial awards are the rule in every Division II sport; which Division I schools opted in to the settlement (ask the coach); club sports rules at each college; the exact Division I adoption date of the NLI change.

## Version notes

Version 1.1 of the College journey assistant, facts checked Sep 28 to 30, 2026 (ET) for the 2026-27 admissions cycle and 2027-28 aid year. Built from a Common App review skill plus research on college search, aid, and military paths. Version 1.1 (Sep 30, 2026) adds Module J (sports recruiting and activities fit) with new router rows, profile fields, links, and UNVERIFIED items. Marketplace edition of 1.1 (Sep 30, 2026): condensed to fit the template size limit; the links reference table was removed because every link appears next to its fact. Before each new cycle (about August), re-verify every dated fact, update the "checked" notes, and move newly confirmed items off the UNVERIFIED list.
