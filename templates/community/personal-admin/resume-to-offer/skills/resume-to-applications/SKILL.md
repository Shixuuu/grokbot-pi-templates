---
name: resume-to-applications
description: "Use this when the user uploads a resume (or wants the demo sample) and needs matching jobs found, fit-scored, tailored, applied to, tracked, and followed up — for any skillset."
---

# Resume to applications

End-to-end job campaign workflow for any skillset: upload a resume → analyze → find roles with fit scores → tailor materials → apply → track → follow up → interview prep. Optional weekly new-role scan.

Do **not** hardcode a profession. Infer titles and strengths from the resume and the user’s goals.

## Features included

1. **First-run demo path** — If no resume yet, offer the bundled sample resume + sample shortlist so they can walk the flow, then replace with their real resume.
2. **Application tracker** — Maintain `applications/TRACKER.md` (company, role, date, status, URL, fit, next action).
3. **Fit score before apply** — Score each role 1–5 with why / risks / missing keywords; skip or demote weak fits.
4. **Post-apply follow-up** — After submit, offer or create a ~7 day bump and ~14 day stale check.
5. **Weekly new-roles scan** — Re-scan against the saved profile; ping only net-new roles meeting the pay bar.
6. **Interview pack** — After submit (or on request), generate interview prep in the role folder (use Interview pack skill).
8. **Safety guardrails** — Word/PDF cover letters only; never invent personal facts; hand off passwords/SSO/captchas; ask once and remember; use stated EEO prefs or decline.

(Inbox/recruiter-email watch is intentionally out of scope for this template.)

## First-run / demo

1. Greet briefly. Ask for a resume upload **or** offer to run the demo with the sample resume.
2. Demo mode: use `SAMPLE_RESUME.md` + `SAMPLE_SHORTLIST.md`, show analysis and fit-scored shortlist, explain tracker + apply steps, then prompt to upload a real resume before any real submissions.
3. Real mode: save the master resume; gather preferences (titles, geo, min comp, sponsorship, tracks).

## Step 1 — Analyze the resume

Extract strengths, years, domains, tools, leadership/delivery signals, education/certs, gaps. Propose target role families. Short fit summary only.

## Step 2 — Find live roles + fit scores

Search career sites and ATS boards (Greenhouse, Ashby, Lever, Workday, SmartRecruiters, etc.). Prefer posted ranges that meet the user’s floor (mark caveats when floor is below bar but mid/max clear it).

For each role: title, company, location, salary evidence, apply URL, **fit 1–5**, **why**, **risks**, missing keywords.

Save `jobs-shortlist.md`. Use the count they asked for (default ≥20 when they want a large slate).

## Step 3 — Batch apply order

Propose 3–4 roles with fit ≥4 when possible. Confirm. Honestly reject weak fits.

## Step 4 — Tailored materials

Per role folder:

- `resume-master.docx` and/or tailored Word
- `resume-tailored.md` (truthful emphasis only — never invent employers, dates, or skills)
- `cover-letter.md` **and** `cover-letter.docx` or `.pdf` (never upload `.md` as the cover letter)
- `answers.md`
- Later: `interview-pack.md` when generated

## Step 5 — Submit

Browser apply. Upload resume + Word/PDF cover letter. Fill from known facts. Auth/captcha → form or desktop handoff. Report confirmation text. **Update TRACKER.md** immediately (status=Submitted).

## Step 6 — Outreach notes

Draft LinkedIn/recruiter notes with `[Name]` placeholders. Log outreach on the tracker.

## Step 7 — Hand materials over

Archive `applications/`; deliver via chat and/or the user’s computer. Say what portals received (master vs tailored).

## Tracker schema

`applications/TRACKER.md` table with Date, Company, Role, Fit, Status, URL, Next action, Notes.

Statuses: Shortlisted, Materials ready, Submitted, Follow-up due, Interviewing, Stale, Closed.

## Routines to offer

When the user wants recurring value, create Application follow-ups (~7 day bump / ~14 day stale) and Weekly new roles (net-new matches only). Write routine prompts as intents.

## Interview pack

When a role is Submitted (or user asks), produce `interview-pack.md` via the Interview pack skill.

## Guardrails

- Never invent address, work auth, demographics, employers, or metrics.
- Cover letters upload as Word/PDF only.
- Passwords, SSO, captchas: user form or desktop handoff.
- Ask personal/compliance questions once; remember for the campaign.
- Shared templates contain no private PII.

## Operating rules

- Acknowledge immediately; report results, not play-by-play.
- One auth handoff at a time.
- After each batch: offer next batch, follow-ups, interview packs, tracker review, or weekly routine — don’t dead-end.
