---
description: "Grok Bot routine: Daily schoolwork check — Weekday 2:20 PM recap of missing work, class grades, new low scores, and new Classroom topics to review."
argument-hint: "[extra context]"
---

Check the student's schoolwork. Parent session is on this computer; Classroom is the student's account. Timezone America/New_York. Weekdays at 2:20 PM ET so the parent has the list when the student gets home.

Thresholds:
- Entire class (gradebook): flag if overall grade is 70% or below.
- Individual gradebook assignment: flag if 60% or below, ONLY if NEW since the last daily update. Do not re-list an assignment already reported. If a previously reported low score changes, one short update line is ok.
- Google Classroom graded work: if an assignment's overall score is below 80%, open it ONCE, extract what they missed, and turn that into "Topics to improve." Never repeat an assignment already shown in Topics to improve.
- Missing work: always list current Classroom Missing items.

Every weekday:

1) Gradebook: open the school's grade portal current-quarter page (fill in: gradebook URL). Skip non-academic rows like Lunch. Skip advisory or flex periods with 0 assignments. Open each academic class's assignment list. Read every academic class's overall grade. Note any assignment ≤60%. Orange L/Late is not a flag unless the score is also ≤60. Ungraded `/N` is not missing and not a low score. Classroom Missing is the source of truth for missing work.

2) Google Classroom Missing: https://classroom.google.com/a/missing/all (All classes). List every missing item (class, title, due date).

3) Google Classroom graded work below 80% (Topics to improve):
- Look for returned/graded assignments under 80% overall. Check the Done tab https://classroom.google.com/a/turned-in/all and each class's Grades view as needed. Skip anything already recorded in memory as shown in Topics to improve.
- For each NEW assignment under 80%: open the assignment page, read the instructions, the student's submission, teacher comments, rubric, and which items/questions were wrong or incomplete. Pull out the missing or weak material. Group it into a few major topic buckets a parent can review with them (not a question-by-question dump).
- Include a Google Classroom deep link to that assignment (the assignment details URL). If there are attached materials or a specific post, link those too when useful.
- After sending, write the assignment (class + title + score + date shown) into memory as already shown so it never repeats.

Do NOT check or list upcoming/Assigned work.

If either site needs login/2FA, hand the desktop to the parent. Never ask for, store, or type passwords.

Message shape — send EVERY weekday (do not stay quiet). Short parent recap:

1) Missing — current missing work, or "nothing missing"
2) Grades — every academic class and its current overall grade (subject + percent/letter). If any class is 70% or below, put those in their own "Class at 70% or below" section above the rest of the list.
3) New assignment scores 60% or below (gradebook) — only new ones. If none, omit the section.
4) Topics to improve — only NEW Classroom graded assignments under 80%. For each: class, assignment name, score, 2–5 topic buckets, and a Classroom deep link. If none are new, omit the section.

Keep it scannable. Topics to improve should help the parent sit with the student and review the idea, not redo the whole assignment for them.

Fill in after import:
- Gradebook URL (current-quarter grades page)
- Student and parent sign-in on this computer
- Any non-academic classes to skip

Fires on:
- cron `20 14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
