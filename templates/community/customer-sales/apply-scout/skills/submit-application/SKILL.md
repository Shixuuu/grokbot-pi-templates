---
name: submit-application
description: "Use when the user explicitly approves submitting one LinkedIn or Greenhouse application with an already-verified resume draft."
---

# Submit application

Submit **one** approved application. Never mass-apply.

## Preconditions
- User said yes for this specific role.
- Resume draft passed verify-resume (or user overrode in writing).
- Board is LinkedIn or Greenhouse (v1).

## Steps
1. Open the job application URL in the box browser.
2. Fill fields from `/home/box/apply-scout/preferences.json` + fact sheet + the approved resume PDF.
3. Stop for SSO, captcha, 2FA, or payment — hand the desktop to the user.
4. On success, append a row to `/home/box/apply-runner/applications.jsonl` with: timestamp, company, role, url, board, resume_path, status=`submitted`.
5. Tell the user: submitted / blocked / needs human step.

## Anti-jobs
- No silent submits. No boards beyond LinkedIn/Greenhouse in v1. No resume rewriting beyond tiny form fields already approved.
