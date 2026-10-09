---
name: school-digest-email
description: "Use this when building or sending the weekday school digest email. First ask which learning system they use; do not assume Schoology."
---

# School digest email (HTML)

## When
Build or send the combined multi-student school digest (weekday scheduled run or on-demand sample).

## First-run / setup
Ask which learning or assignment management system they use (Schoology, Canvas, Google Classroom, PowerSchool, Infinite Campus, or other) and the portal URL if needed. Do not assume Schoology.

## Email subject (required)
`School Report - {N} new grades - {N} overdue - {N} due today`
Same counts as At a glance, hyphen-separated. Do not hard-code a vendor name in the subject.

## HTML header / branding
- Small label: SCHOOL ASSISTANT (or the bot’s name)
- Title: School digest
- Subtitle: student names · date
Do not hard-code “Schoology digest” in the header; use the generic School digest title. Mention the specific portal only in body copy if helpful.

## Section order (per student)
1. **New grades** — scored items not in last-grade-snapshot (new/changed since previous digest). Class · assignment · grade.
2. **Upcoming** — assignments, tests, anything due soon (always include class).
3. **Overdue / not completed or submitted** — past due **and not submitted** (or clearly still missing). Always include class.

## Overdue criteria
- A portal To Do “Overdue” list alone is not enough.
- Open the assignment (or Google Assignments / similar embed) when unclear.
- Submitted (with timestamp) is not overdue, even if ungraded.
- Only list overdue when work is still owed.

## Grade snapshot
Compare before send; update after successful digest email.

## Other rules
- Read-only portal access; email the configured recipient via Gmail htmlBody.
- No prior-term leftover footnotes.
- Omit “Assigned date unavailable.”
- Always name class on every line.
- Layout: dark header, At a glance box, per-student sections, footer noting read-only check.
