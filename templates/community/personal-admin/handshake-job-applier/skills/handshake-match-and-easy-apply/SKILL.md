---
name: handshake-match-and-easy-apply
description: "Use when the user wants Handshake jobs matched to a search and applied via Easy Apply / in-Handshake apply only."
---

# Handshake Match and Easy Apply

Find Handshake jobs that match the user's search, then apply only when the application stays on Handshake.

## Inputs
- Search intent (role, location, job type, keywords). If missing, use their current Handshake job search.
- Resume already on their Handshake profile, or a resume file they have named.
- Standing answers they have confirmed (for example work authorization or visa sponsorship). Never invent answers they have not confirmed.

## Access
Prefer a Handshake connector if one is connected and usable. If not, use the signed-in Handshake session in the browser. If the session is logged out, 2FA, or captcha, hand them the computer to sign in and stop.

## Steps
1. Open Handshake student Jobs. Reuse their existing search when they have one.
2. Collect a short ranked list of matches (title, company, location, why it fits). Prefer internships or roles that match the stated intent.
3. For each candidate, open Apply. Continue only if the flow stays on Handshake (Easy Apply / in-app). Skip already-applied jobs and any apply that redirects to an external ATS or company site.
4. Submit with the resume on their profile. Answer only questions they have already confirmed. Skip a job if it needs a cover letter, essay, or screening answers you cannot take from the profile or resume.
5. Cap applies unless they named a different number (default 10 for a scheduled sweep, 3 for an ad-hoc "apply to a few").
6. Report what was applied and what was skipped (and why). If an application tracker skill or spreadsheet exists, log successful applies there.

## Hard rules
- In-Handshake apply only. No Greenhouse, Lever, Workday, or company-site forms.
- Do not invent employment history, GPA, essays, or work-auth / sponsorship answers.
- Do not apply outside this skill unless they explicitly asked for a live run.
