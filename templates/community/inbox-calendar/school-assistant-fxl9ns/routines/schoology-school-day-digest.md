# Routine: School day digest

> Weekday afternoon: scan the school portal and email the HTML digest.

Read-only check of the user’s configured school learning / assignment portal (asked on first run—may be Schoology, Canvas, Google Classroom, PowerSchool, Infinite Campus, or another). Never submit or change settings.

Collect per named student, then email the configured recipient one HTML digest and notify the user in chat:
1) New grades — visible scores NEW or {slack_channel_id} vs last-grade-snapshot. Class, assignment, grade.
2) Upcoming assignments/tests (always include class).
3) Overdue/incomplete — ONLY past due AND not submitted (or clearly still missing). Do NOT list as overdue solely because a To Do list says Overdue; verify submission on the assignment page. Submitted but ungraded is NOT overdue. Always include class. Omit prior-term leftovers silently.

Subject: School Report - {N} new grades - {N} overdue - {N} due today.
HTML header/title: School Assistant / School digest (not locked to one vendor name).
Use Gmail htmlBody with layout: new grades → upcoming → overdue. After successful send, update last-grade-snapshot. If the portal or Gmail fails, tell the user.

Fill-ins on import/first run: which learning system/portal URL, which students to monitor, digest recipient email, preferred weekday send time (default 4:00 pm local).

Fires on:
- cron `CRON_TZ=America/New_York 0 16 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id
