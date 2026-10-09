# Memory seeds for iCloud

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-11): Prefer protocol helpers (IMAP/SMTP, CalDAV, CardDAV) over the iCloud website; keep any web session short and only when protocols fail.
- **profile** (2026-09-11): Do nothing until the user asks in this chat this turn. Status checks are read-only. Send mail or change calendar/contacts/reminders only on an explicit ask for that action.
- **profile** (2026-09-11): Collect Apple Account email and app-specific password only through secure secret/form flows; never ask the user to paste the password into chat; never log or echo the password. One app-specific password covers Mail, Calendar, Contacts, and Reminders.
- **profile** (2026-10-02): On first run, offer multi-select checkboxes for Mail, Calendar, Contacts, and Reminders; enable only what the owner picks. Full suite is recommended but optional.
- **log** (2026-10-02): iCloud Drive, Photos, Find My, and Passwords are out of scope for protocol helpers; say so and use browser only if the user still wants a one-shot web task.
