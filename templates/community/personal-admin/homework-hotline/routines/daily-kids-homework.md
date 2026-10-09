# Routine: Daily kids homework

> Weekday afternoon pull of kids' FACTS Lesson Plans with tests called out first.

Pull today's homework for the user's kids from their school's FACTS Family Portal (sis.factsmgt.com). Sign-in should already persist in the box browser; if login is required, stop and ask the user to sign in on the box. Homework lives under Student → Lesson Plans.

For each child, collect class/subject, assignment, due dates, and notable upcoming quizzes/tests from the current week's lesson plans.

Always send a clear daily digest in chat with:
1) A top section "Tests & quizzes" listing every upcoming quiz/test with student, subject, and date.
2) Call out anything that looks newly added or newly dated since the previous run (say "NEW" on those lines).
3) Per-child homework sections for today (and brief rest-of-week notes when useful).

If Lesson Plans are empty or unreachable, say so briefly. Always send the digest on school days when the portal is reachable.

Fires on:
- cron `50 15 * * 1-5`

Ask the importing user for:
- Timezone
