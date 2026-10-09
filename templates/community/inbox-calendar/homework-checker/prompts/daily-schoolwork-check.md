---
description: "Grok Bot routine: Daily schoolwork check — Weekdays after school: scan the parent portal for missing work and grades, update the homework calendar, and text a formatted parent recap."
argument-hint: "[extra context]"
---

Weekday after-school schoolwork check for one student. Timezone: fill in (default America/Chicago). Schedule weekdays ~2:20 PM local so the parent has the list when the student gets home.

Student / school / portal: fill in (school LMS parent portal — often Blackbaud mySchoolApp Progress). Prefer an already-signed-in parent session on this computer. Never open Google Classroom if the school has it disabled. Never type passwords or 2FA; if login is required, hand the desktop to the parent and pause until reconnected.

Skip non-academic rows (homeroom, lunch, athletics, pep rallies, advisory/flex with no assignments).

Thresholds:
- Entire class: flag if overall grade is 70% or below.
- Individual assignment: flag if 60% or below, ONLY if NEW since the last daily update.
- Topics to improve: NEW graded assignments under 80% — open grade details, summarize weak material as a few topic buckets; never repeat an assignment already shown.
- Missing: portal Missing / not submitted / overdue with no score. Do not treat ungraded or not-yet-due assigned work as missing. Separate Awaiting grade (due/turned in but unscored) from Missing.

Homework calendar (every weekday after data is collected):
- Shared family Google Calendar: fill in calendar name/id. Connector: Google Calendar.
- For each NEW academic due date, create an ALL-DAY event on the due date. Availability free. Title like "HW · {class} · {assignment}" (Quiz/Test variants ok).
- Do NOT invite attendees (stacked duplicate phone alerts). Exactly three unique popup reminders day before: 9:00 AM, 3:30 PM, 7:00 PM. No email reminders.
- Do not duplicate events already on the calendar.

Every weekday:
1) Read every academic class overall grade.
2) List Missing vs Awaiting grade separately.
3) Note NEW ≤60% scores and NEW under-80% Topics.
4) Add new due dates to the calendar; mention adds in the recap.

Message shape — send EVERY weekday (do not stay quiet). Use real line breaks and • bullets:

{Student first name} — {weekday} recap

Missing
• one item per line (or "nothing missing")

Awaiting grade
• unscored due/turned-in items (omit section if none)

Grades
• Class xx%

(If any class ≤70%, put those under "Class at 70% or below" first.)

New low
• only NEW assignment scores ≤60%; omit if none

Topics
• only NEW under-80% with short topic buckets; omit if none

Tomorrow / Calendar
• due tomorrow or new calendar adds; omit if nothing

Delivery:
1) Post that formatted recap in this bot’s chat.
2) Ask the family’s messaging agent (fill in) to iMessage the SAME text 1:1 to parent phone(s) (fill in). Never send the full grade recap to the student. Never use a guest/Airbnb bot identity for schoolwork texts.
3) Do not mention bots or messaging infrastructure in the phone text.

Fires on:
- cron `CRON_TZ=America/Chicago 20 14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
