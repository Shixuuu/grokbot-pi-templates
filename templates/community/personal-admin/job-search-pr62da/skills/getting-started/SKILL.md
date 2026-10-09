---
name: getting-started
description: "Use this on the first conversation with a new job-search owner to set up their resume, job filters, and default job-application answers."
---

# Getting started: job search + apply bot

Say in one line what you do: you search for roles that fit, send a short board of new matches, and apply only to the roles the owner picks, using their saved resume and default answers.

Ask one question at a time, using a question widget with real options plus allowCustom wherever choices make sense. After each answer, save it as an agent profile memory.

## 1. Resume or LinkedIn first
Ask them to do one of these: attach their resume PDF, paste the resume text, or share their LinkedIn profile URL.
- Save a resume file to `/workspace/job-board/profile/` and remember the path.
- If they paste text or share LinkedIn, read it and offer to build a clean resume PDF from it. Ask them to confirm it before you use it for applications.
- Read back their recent titles, employers, dates, years of experience, key skills, and certifications so they can confirm. Applications follow the resume and never invent experience.
- Use this to suggest target titles and fit categories in step 2.

## 2. Job filters and criteria
Ask one at a time and save each as one rule:
1. Target titles, with suggestions from the resume and close variants.
2. Seniority: the minimum level and the maximum stretch, such as no executive reaches.
3. Fit tiers for their field. Strong is the same work and industry as now. Good is the same work in adjacent industries. Stretch is only when there's realistic overlap. Ask which industries count for each tier.
4. Location: a base address or ZIP for real driving-mile commute math.
5. Work model rules. For example: remote always OK, any model within N driving miles, only hybrid or remote beyond that, and whether relocation is ever OK.
6. Pay floor: the minimum the top of the band must reach, and whether to drop postings with unlisted pay.
7. Exclusions: words in titles (for example "test" for in-lab roles), required active security clearance, specific companies, staffing agencies, contract or part-time roles.
8. Must-haves or nice-to-haves, such as company size, product type, visa sponsorship, or specific standards or tools.
9. Freshness: how old a posting can be, and whether to verify it's still live on the company's own careers site.
10. Search sources, such as LinkedIn, Indeed, company careers pages, and Greenhouse, Ashby, Lever, or Workday boards. Ask whether they have a list of target employers.
11. Already applied or interviewing: get the list so you can exclude those roles.

## 3. Delivery preferences
- Their email address for alerts, and whether to connect Gmail to send them.
- How often: email only when a new Strong fit appears each weekday, plus a Friday top-jobs summary with a numbered apply checklist.
- Format: one line naming the best bet, then a compact table with fit, role, company, location and work model, pay, and link. Drafts go in an attached file.
- Whether they want LinkedIn referral suggestions and outreach drafts. These are drafts only and never get sent.

## 4. Default application answers
Ask these as quick widgets, grouped two or three per message:
- Legal name and preferred name, phone, email, LinkedIn URL, and full mailing address
- Work authorization, whether they need sponsorship now or later, and citizenship or US person status (for export-control questions)
- Earliest start date or notice period
- How to set desired salary. Options: a fixed number, the bot picks per role (for example the upper-middle of the band with a floor), or leave it blank when optional.
- Whether it's OK to contact their current employer
- Security clearance: whether they hold one now, and whether they're willing to obtain one
- Maximum travel percentage, and willingness to relocate
- Default answer for "how did you hear about us"
- Opting in to "consider me for other openings"
- Standard attestations, such as certifying info is true and accepting the privacy policy (default Yes)
- Voluntary self-ID: gender, pronouns, race, Hispanic/Latino, veteran status, disability, sexual orientation, and age. Always offer "Decline to answer."
- Whether past employment at target companies should default to "never employed"
- Cover letters: always, only when the form asks, or never
- Whether it's OK to create applicant accounts, such as Workday, with their email

Save every answer as a profile memory. Rule: if a form asks a required question these answers don't cover, stop before submitting, ask the owner, and save their answer as a new default.

## 5. Start
1. Create the weekday board routine and the Friday summary routine with their filters, timezone, and email filled in.
2. Offer a first search now. If yes, run one and show the board with a numbered apply checklist.
