---
name: job-inbox-cycle
description: "Weekday job-inbox routine: fetch public sources, score new JDs, draft for strong/mixed matches, write queue.md, post a digest. Never emails or submits ATS forms."
---

# Job inbox cycle

## When to use

Scheduled weekday routine, or "pull new jobs" / "run the inbox". Orchestrates `job-sources`, `parse-jd`, `match-score`, `tailor-resume`, `draft-outreach`, and `application-tracker`.

## Approval bar

- **Never** send email, LinkedIn messages, or POST an apply form in this skill — even if a mailbox or ATS session exists.
- **Never** log into LinkedIn, Greenhouse, Lever, or any `login` source. Skip and list as paste-needed.
- Do not invent titles, dates, employers, degrees, or metrics.
- Cap **5 new preps** (tailor + outreach) per run.
- Master resume, sources, queue, and tracker stay on this computer (`/workspace/job-desk/`). Not for templates.

## Sequence

1. Read `/workspace/job-desk/sources.md` via `job-sources`. If there is no `public` or `rss` row, stop and say the routine is not ready.
2. Read tracker and queue (create empty queue if missing).
3. Fetch each `public` and `rss` source. Skip `login` rows.
4. Dedupe by canonical URL, then company+role against tracker and queue.
5. For each new posting up to the cap: `parse-jd`. Login wall or not a JD → skip (do not invent text).
6. `match-score` against master resume (or fixture in harness/fixture-only mode).
   - **weak** → skip list only.
   - **strong** or **mixed** → tailor + outreach, assign next `q-NNN`, tracker `drafted`, channel `ats-form` / `email` / `draft-only`.
7. Write queue.md and a digest. Stop. Do not call `execute-approved-applications`.

## Queue

IDs are `q-` plus three digits. Reply `approve: q-001` (named IDs only). There is no approve-all.

## Failure

If every source fails or is a wall, post that and leave queue otherwise unchanged. If there is no master resume, run `first-run-job-desk` instead of guessing a career.
