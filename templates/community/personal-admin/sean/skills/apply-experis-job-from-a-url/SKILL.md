---
name: apply-experis-job-from-a-url
description: "Use when the user pastes an Experis or ManpowerGroup candidate job-apply URL and you should submit using their saved details."
---

# Apply an Experis job from a URL

Use signed-in Chrome. Never embed a password. Use **the current user's saved applicant profile** (name, email, phone, resume). If none is saved, stop and collect their details first. Do not use another person's details.

## Input
- `{job_url}` — the Experis / ManpowerGroup candidate apply link

## Steps
1. Open `{job_url}`.
2. Cookie banner: Accept all / Allow all. Never Reject.
3. If Chrome asks for location: Allow this time.
4. Fill First Name, Last Name, Email, Phone from the saved profile.
5. Upload Resume: From your device, pick the saved resume file.
6. Skip optional cover letter.
7. Check promotional and SMS consent boxes only if the user taught that preference; otherwise leave default/ask.
8. Click APPLY. Wait for Submitting your details.
9. Done at `/en/candidate/jobapplysuccess` with a congratulations confirmation.
10. Screenshot. Do not click CREATE ACCOUNT.

Unknown required field or a code: ask the user. Do not guess.
