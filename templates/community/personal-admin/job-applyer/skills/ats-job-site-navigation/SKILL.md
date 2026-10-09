---
name: ats-job-site-navigation
description: "Use this when applying or inspecting company career pages on Greenhouse, Ashby, Lever, Workday, iCIMS, SuccessFactors, or similar ATS."
---

Reusable playbook for employer career sites. Keep candidate-specific answers (name, visa, EEO) in profile/memory — not in this skill.

## 0. Hard rules
1. Never submit until the user green-lights that exact company + role.
2. Never invent employment, dates, tools, metrics, or certs.
3. Never solve visual captchas yourself — hand the desktop to the user or stop and report.
4. Never create accounts with invented passwords — hand the box for password/SSO, or stop and ask.
5. Never bypass anti-bot via session-cookie scraping, fake tokens, or routing around safety checks.
6. Log outcomes (Submitted / Blocked / In progress) with ATS name, URL, and blocker text.

## 1. Classify ATS first
| Host pattern | ATS | Typical mode |
|---|---|---|
| boards.greenhouse.io, job-boards.greenhouse.io | Greenhouse | Often guest |
| jobs.ashbyhq.com | Ashby | Often guest; some Sign In |
| jobs.lever.co/.../apply | Lever | Usually guest on /apply |
| *.myworkdayjobs.com | Workday | Account / Sign In almost always |
| careers-*.icims.com | iCIMS | Account per employer |
| *.successfactors.* | SuccessFactors | Account / talent community |
| Phenom / Taleo / Oracle HCM | Enterprise | Usually account |

Guest checks: Greenhouse/Lever show name+resume fields with no Sign In wall; Ashby is JS — treat Sign In in UI as not guest. If login wall → Blocked-account.

Prefer noting guest-apply boards when the owner wants apply-without-account.

## 2. Pre-flight
Fetch JD; note location, pay, visa/export text. Prepare resume PDF with a generic filename. Have honest answers for auth, sponsorship, start date, LinkedIn, EEO if asked.

## 3. Fill (browser)
One focused session per application. Wait briefly after email on Greenhouse. Prefer local file upload; if blocked, use Enter manually / resume text when offered. Stop if a required field would force a false claim.

## 4. Platform gotchas
- Greenhouse: live reCAPTCHA + fingerprint; may send email security code — use newest inbox code; hand box if captcha fails.
- Ashby: spam filter can reject real candidates — one careful retry max, then Blocked-Ashby-spam; watch double-submit.
- Lever: prefer /apply; may use hCaptcha.
- Workday: stop at account wall; prepare packet; no solo account creation.
- iCIMS: per-employer login; hCaptcha common on bot-like sessions — hand box immediately.
- SuccessFactors: talent community / LinkedIn / captcha; watch US-person / export-control language.

## 5. Handoff
Hand the box for visual captcha, password/2FA/SSO, or payment. One short imperative instruction. After hand-back: screenshot first, resume from the visible step.

## 6. Confirm success
Submitted only with on-page success/confirmation URL or thank-you email naming the role. Else In progress/Blocked with exact error. Update tracker before telling the user.

## 7. Hygiene
Prefer sequential applies. Don't leave half-filled tabs unlogged. Finish one application (including captcha handoff) before the next account-walled ATS.
