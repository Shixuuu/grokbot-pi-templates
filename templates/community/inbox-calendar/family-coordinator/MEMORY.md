# Memory seeds for Family Coordinator

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): Use the parent's default Gmail and Google Calendar accounts (not a work or outreach account). Monitor the inbox for family communications and add events onto a Google Calendar named Family.
- **profile** (2026-08-29): Family email monitoring should prioritize messages about the kids (school, activities, appointments, family plans) and tag each item by which child it is about — never treat all family mail as generic.
- **profile** (2026-08-29): Family emails get Gmail labels Family plus nested per-child labels (both child labels when the mail is about both). Calendar events on Family should name who they are for in the title.
- **profile** (2026-08-29): Family calendar event titles should be prefixed with the kid's name when the event is for one kid (e.g. "Alex: soccer"). If an event is for both kids, do not prefix a single name.
- **profile** (2026-08-29): After each Family inbox watch run, send the parent a summary if there is anything to report, including a list of action items when they need to do something. Stay quiet when nothing new happened.
- **profile** (2026-08-29): Every Family calendar event description should include notes: a summary of the source email, related context, and a Gmail link to the thread when possible (https://mail.google.com/mail/u/0/#all/THREAD_ID). Birthdays can note the birth date without an email link.
- **profile** (2026-08-29): Family calendar event notes must be plain text with real newlines, not HTML. Google Calendar shows tags like <br> and <p> as literal text. Put the Gmail URL on its own line so Calendar auto-linkifies it. Do not use <a>, <p>, <br>, or <b> in descriptions.
- **profile** (2026-08-29): Family calendar events must use a real start and end time when the source email includes one. Use all-day only when the email gives a date with no time (school days, deadlines, birthdays, undated activity weekends).
- **profile** (2026-08-29): Never add the same Family calendar event twice. Before creating an event, search/list Family for a matching title, date, and kid. If it already exists, skip or update the existing event (for example to add a time) instead of creating a duplicate.
- **profile** (2026-08-29): Shared school-calendar days that apply to both kids should not have a single-kid title prefix. Grade-specific school mail should be labeled and titled for that kid.
- **profile** (2026-08-29): After processing a family email, only archive it if the parent does not need to do anything. If it needs their attention (reply, confirm, pay, RSVP, form, decision), apply Family plus kid labels but leave it in the inbox.
- **profile** (2026-08-29): Building and neighborhood emails for where the family lives are family communications for both kids unless clearly about one. Label Family plus both child labels; add community events with no kid prefix.
- **profile** (2026-08-29): Map each recurring activity sender to the right kid (e.g. one soccer club for Kid A only, another class program for Kid B only). Skip marketing/promo mail from those senders; only surface class or schedule mail that changes times, assignments, or cancellations.
- **profile** (2026-09-06): Gmail labels are nested under Family with per-child sublabels. Use only the existing Family and kid labels — do not create new ones. Always apply Family; also apply the matching kid label(s).
- **profile** (2026-09-09): Ignore senders the parent has opted out of (camp marketing, early enrollment, tours). Do not add those events to Family calendar or leave those threads as action items; archive them.
- **log** (2026-08-29): Family inbox check runs at 8am, 1pm, and 6pm every day in the parent's local timezone.
- **log** (2026-09-04): File family email attachments and school docs into a Family Google Drive folder with nested per-child folders (or Family root if about both).
- **log** (2026-09-15): This bot uses Gmail, Google Calendar, and Google Drive connectors for inbox watch, Family calendar events, and filing school docs.
