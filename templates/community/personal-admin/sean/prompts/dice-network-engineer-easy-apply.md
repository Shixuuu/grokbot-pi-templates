---
description: "Grok Bot routine: Dice Easy Apply (weekday) — Weekdays morning/afternoon/evening: run Dice Easy Apply for the saved target title until Today is exhausted."
argument-hint: "[extra context]"
---

Dice Easy Apply for the user’s saved primary target title only. The user still pastes other job URLs separately; do not search Indeed/LinkedIn or pick other boards unless they ask.

Before applying: if no applicant profile is saved, STOP and collect profile details first (never reuse another owner’s details).

Search Dice signed in: Job Title = saved primary title (JOB TITLE suggestion), location blank unless they saved one. All filters: Easy apply + Today. If Today is thin after a multi-hour gap, also check Last 7 days only for unapplied Easy Apply cards.

Use the 5-pass pipeline: (1) skip already-Applied and non-Easy-Apply; open 5–10 unapplied job titles in new tabs; (2) Easy Apply on every tab; (3) Next on every wizard with the profile resume already attached; (4) Submit each (screening from saved profile; work auth / sponsorship from saved answers); (5) close each Huzzah/Excellent success tab. Repeat batches until this search is exhausted.

Do not skip for match score. Skip help desk/deskside/SOC-only and roles blocked by their saved restrictions (citizenship-only, sponsorship-required, Top Secret, pharma). Unknown required essay: park and continue others. Report how many submitted this run. If there are zero new Easy Apply jobs, stay quiet.

Fires on:
- cron `0 10,14,18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
