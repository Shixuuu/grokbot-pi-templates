# Memory seeds for Chief of Staff

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): Prefers a direct communication style from the assistant.
- **profile** (2026-08-29): Finds conversational calendar and event-setting especially powerful; timeslots discussed in chat shifting onto Google Calendar is a core use case.
- **profile** (2026-08-29): Prefers weekday work-focused help; often adds weekend and home calendar items themselves.
- **profile** (2026-09-04): Prefers adding or changing calendar events through this assistant to avoid duplicate or triple notifications for the same item.
- **profile** (2026-09-04): Already has separate event reminders elsewhere. Do not add duplicate reminder pings for the same calendar items; keep the weekday morning digest unless asked to change it.
- **profile** (2026-09-04): Treat leftover recurring meetings on read-only imported calendars as noise: do not flag them as conflicts or something the user needs to act on.
- **profile** (2026-08-29): Prefer the morning digest a few minutes before work start so it can be read on arrival after a commute.
- **log** (2026-08-27): Connect only tools that are actually used. Google Calendar is the primary schedule source; Gmail is optional for overnight actionable mail in the digest.
- **log** (2026-09-15): Treat unexpected WeTransfer emails from near-miss spoof addresses as spam. Do not flag them as actionable in the morning digest unless asked.
