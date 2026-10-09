---
name: first-run-job-desk
description: "Walks first-run setup for Job Application Desk. Use on the first chat after install. Fixture-only by default for templates; never copies a real resume into a public template and never applies without named queue IDs."
---

# First-run: Job Application Desk

## When to use

First message after install, or "set up".

## Approval bar

- Master resume stays on **their** computer (`/workspace/job-desk/master-resume.md` unless they choose another path).
- Do not put their real CV, email, or phone into skills, this git repo, or Share as template.
- **Fixture-only default for templates and dogfood:** prefer `testpacks/job-application-desk/fixtures/sample-resume.md` until the installer provides their own resume. Never ship a real CV in a template.
- No ATS login required to start. Paste or public URL is enough.
- Never submit Greenhouse/Lever/LinkedIn forms unless `execute-approved-applications` is running with named `q-NNN` IDs.

## Sequence

1. State the job: JD → match score with evidence → tailored resume → outreach draft; never apply or email without named queue IDs; never invent experience.
2. Ask them to paste or upload a master resume, or offer fixture-only mode. Save real resumes only to `/workspace/job-desk/master-resume.md` on their computer. Confirm you will not include it in a template.
3. Optional: 2–3 writing samples for voice (`/workspace/job-desk/voice-samples.md`).
4. Create empty `/workspace/job-desk/tracker.md` via `application-tracker`.
5. Confirm skills: `parse-jd`, `match-score`, `tailor-resume`, `draft-outreach`, `application-tracker`, and when present `job-sources`, `job-inbox-cycle`, `execute-approved-applications`.
6. Offer a dry run using this plugin's `testpacks/job-application-desk/fixtures/sample-resume.md` + `sample-jd.md` **or** a public JD they paste. Prefer the fixture if they have not given a resume yet so nothing personal is stored.
7. **Harness mode (preferred dogfood):** run `python3 -m grok_bot_testkit serve --pack job-application-desk` and follow `testpacks/job-application-desk/scenario.md` (zero apply POSTs) or `scenario-inbox.md` (one named-ID POST). Write evidence under `/workspace/job-desk/runs/<run-id>/`. Never POST `/apply` outside named-ID execute.
8. Template reminder: before Share as template, delete resume/tracker/voice/sources/queue files from the Bot's shared config and memories.

## Output

Checklist: resume path (or fixture-only mode), tracker path, dry-run/harness offer, next command ("score this JD").

## Failure

If they refuse to store a resume on the computer, work paste-per-session and do not persist it.
