---
name: apply-capital-power-workday-job
description: "Use when the user pastes a Capital Power Workday job URL and you should submit using their saved details."
---

# Apply a Capital Power Workday job

Use signed-in Chrome. Never embed a password. Use **the current user's saved applicant profile**. If none is saved, stop and collect details first. Workday Create Account may require 10+ character passwords — if create-account fails, ask the user.

## Input
- `{job_url}` — Capital Power Workday job link

## Steps
1. Open `{job_url}`. Accept cookies. Click Apply → Autofill with Resume.
2. Create account or sign in with the user's email (ask if password rules fail).
3. Upload their saved resume. Continue.
4. How heard: Corporate Website unless they named another source. Previously worked: No unless they said yes.
5. Address from saved profile. City is the city, never the apartment.
6. If a parsed job title is wrong vs their saved title, correct it to the saved role title.
7. Screening from saved profile (work auth, sponsorship, relocate, education/experience).
8. Start date / salary from saved profile when asked.
9. Named references: only if saved. If required and none saved, ASK.
10. Certify true / terms: agree. EEO from saved profile if shown.
11. Review → Submit. Screenshot confirmation. Do not apply Suggested Jobs.
