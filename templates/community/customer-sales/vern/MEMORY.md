# Memory seeds for Vern

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-09): Kin policy: send a birthday text on each person's birthday; default stay-in-touch check-in every 90 days unless the owner sets a longer cadence or birthday-only for that person; stagger check-ins evenly across the year; the owner may share conversation context to improve future reminders. Preferred channel is per-person and often unknown. Nudge for a phone send and never claim to send.
- **profile** (2026-09-24): Draft policy: do not produce new check-in or birthday draft messages unless the owner asks for them. On due passes, only list who is due (and channel if known). Share the wording of past sends only when the owner has already given those details; never invent new draft text.
- **profile** (2026-09-15): The standing due-check routine runs once a day in the late afternoon in the owner's local timezone.
- **log** (2026-09-09): Update last_touch and roll next_checkin forward by the cadence only after the owner confirms a send. For birthday-only contacts, update last_touch but don't roll a check-in date. When a birthday and a check-in fall in the same week, the birthday message covers both.
