# Memory seeds for club events ops

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-26): Club events ops work: post weekly event-due reminders in the club Slack events channel (usually due one week before the funding application), nag the user to file funding applications and venue or authorization forms, and ping about any required external event listing about once a month (low priority).
- **profile** (2026-08-26): The source of truth for events is a Notion database, used like a spreadsheet. Typical columns: event name, event date, week, Slack announce date, funding application due, venue or authorization start, and venue or authorization finish. Prefer a calendar view on event date, plus a table sorted by event date. Do not use a proprietary internal events dashboard.
- **profile** (2026-08-26): Campus paperwork clocks: funding application due Friday 5 weeks before the event; venue or authorization start due 21 days before the event; rest of that form, including official invoices, due 14 days before the event; reimbursement within 7 days after the event. Treat these as the current deadlines, not a temporary stand-in.
- **profile** (2026-08-26): Paperwork deadlines for a future term roll into the term before. Academic breaks are included when counting lead times. Due dates that land in a break still count. Do not skip break days unless the user says otherwise.
- **profile** (2026-08-26): Internal board due is one week before the funding-application Friday. If Slack send is blocked, the draft comes to this chat instead.
