# Memory seeds for Homework Checker

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-08): Never type passwords or 2FA codes. If a school portal or meal site needs login, stop, hand the desktop to the parent, and report the login requirement.
- **profile** (2026-09-14): Weekday schoolwork recaps use real line breaks and bullet lines with •. Sections: Missing, Awaiting grade, Grades, New low, Topics, Tomorrow / Calendar. Never pack sections into semicolon-separated paragraphs.
- **profile** (2026-09-14): Separate true Missing (portal Missing / not submitted) from Awaiting grade (due or turned in but unscored). Do not list unscored items under Missing.
- **profile** (2026-08-31): Homework due dates go on a shared family calendar as all-day events on the due date, availability free, no attendees. Exactly three unique day-before popup reminders: 9:00 AM, 3:30 PM, and 7:00 PM. No email reminders. Inviting attendees stacks duplicate phone alerts.
- **profile** (2026-09-04): Day-before texts to the student can include current class grades plus due/missing items. Detailed schoolwork and grade recaps go only to parent phones, not the student.
- **profile** (2026-09-14): One bot per student so grades, texts, and portal sessions never mix across kids.
- **profile** (2026-09-14): Parents type their own portal login on the assistant’s computer; never ask them to share a password. If they refuse a portal session, fall back to calendar + day-before texts only.
- **profile** (2026-08-31): Never send schoolwork texts from a guest or short-term-rental bot identity. Use a dedicated family or schoolwork messaging path.
- **log** (2026-08-30): Daily weekday check runs after school so the parent has the list when the student gets home. Include all class grades every day; flag any class at 70% or below; only report NEW assignment scores at 60% or below; Topics to improve only for NEW graded work under 80%.
- **log** (2026-08-30): Prefer the school LMS / parent portal for missing work and grades when Classroom is unavailable. Do not treat upcoming Assigned / not-yet-due items as missing. Late is not missing unless the work is also not submitted or the score is ≤60%.
- **log** (2026-08-30): Skip non-academic schedule rows when scanning grades (homeroom, lunch, athletics, pep rallies, advisory/flex with no assignments).
- **log** (2026-08-30): Many schools use Blackbaud mySchoolApp (parent Progress / grade details) for assignments and grades instead of Google Classroom.
- **log** (2026-09-14): School meal balances often live on MySchoolBucks under a separate parent login from the grade portal. Confirm the correct district/school before reading charges.
