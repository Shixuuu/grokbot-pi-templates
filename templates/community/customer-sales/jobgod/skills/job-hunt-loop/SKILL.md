---
name: job-hunt-loop
description: "use this when running the full job hunt loop for any field — scout and gate, Sheets CRM, digest, tailor on approval, four-part apply packets"
---

One bot owns scout → gate → Sheets CRM → digest → tailor-on-approval → apply packet. Never split into three public agents. Google Sheets is system of record; Drive is optional for file storage only. Owner always clicks Apply. Never auto-submit. Never invent pay, employers, dates, credentials, metrics, clearance, or experience years.

Owner prefs (field/titles, pay floor, location, employment types, ban list, resume) live in memory for that install — never hardcode a profession into this skill.

Gates (in order — fail closed)

1. Pay — quote must appear on the posting or compensation module. Job-board pay-filter badges lie; reject soft mins under the owner’s floor even if the max is high.
2. Location — match that install’s prefs. Multi-office / multi-site → flag seat or office confirmation.
3. Ban list — whatever the owner set (clearance, travel %, specific industries, etc.).
4. FIT — credible vs their resume. Drop zero-evidence must-haves. Stretch only if labeled with a one-line why. Never pad digests to hit a daily number.

Scout their titles and boards — do not reuse another install’s keyword packs or niche false-positive lists. Prefer verifying pay on the posting over trusting filter badges. Don’t drive the owner’s signed-in job-board session just to scout when a public/job-view path works.

“Find N jobs” is not a quota

- Up to N that clear all gates — never invent or soften gates to hit a count.
- Empty Sheets + existing board (markdown, prior CRM, Drive list) → migrate / seed CRM first, then scout for net-new. Deduping on URL / req ID.
- Thin night → say thin and list top reject reasons; do not invent rows.
- One writer per Pipeline append for a given pull (coordinate so two agents don’t double-append the same scout).

Sheets CRM

Suggested columns: Status | Company | Title | Pay verified | URL | Type | Location | Tailored file | Notes (or the fuller Pipeline set from getting-started).
Statuses: shortlisted | tailored | ready | applied | screening | interview | offer | rejected | ghosted | reject
Append only net-new clears (or seed migrations from an existing verified board). Empty Applied log + many ready rows = conversion problem, not a scout problem — nudge apply, don’t scout more.

Digest

Weekday cadence: up to N net-new. Each line: title, company, verified pay, link, fit/stretch one-liner. Zero clears → quiet digest with top reject reasons. Brief on a second straight thin day. Weekly still-open refresh. Nightly nudge of top ready rows beats more scouts.

Tailor (only after explicit approval on a row)

Before writing: check ResumeUsed / Tailored file path / tailored/ for an existing pack for that URL. If one exists, reuse it — do not re-queue or invent a second one-pager. Status can stay or move to ready when the pack already exists.

Pack shape (not jargon): keywords from that posting → one-page tailored resume from their master → cover/Easy Apply blurb ≤120 words → 5 interview talking points. Save under tailored/; Status→tailored + path + keyword notes. Pull language from the owner’s resume and target field — never paste another profession’s framing. Certs/licenses in progress stay “in progress.” Match the exact req / posting (watch sibling roles at the same employer). No keyword stuffing that invents tools or credentials.

Apply packet (only from a finished tailored pack)

Before writing: check Notes / packet path / apply-packets/ for an existing packet for that row. One packet per tailored row — do not rebuild checklists when Status is already ready. ready means apply tonight, not re-craft.

Four parts under apply-packets/:
1. Checklist — docs to upload, salary ask ≥ their floor and inside the posted band, work mode from the posting, ban-list flags, exact apply URL, sibling-req warning, multi-site seat gate when needed
2. Form / Easy Apply answer bank for that posting (CONFIRM blanks > invented contact info, salary history, or dates)
3. Paste-ready blurb (reuse the tailored ≤120w; don’t rewrite into fiction)
4. After owner confirms they applied → Status→applied + Applied log with date

Never click Apply. Never drive job boards or ATS sessions for the owner. If pay is hourly, state the rate that clears their floor.

Tone: warm, short, lead with the answer. Quiet when nothing changed if a routine says so.
