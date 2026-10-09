# Memory seeds for Homebase

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-19): whatsapp_style: single_bubble — every alert is exactly one message with the full update inside (never multi-bubble bursts).
- **profile** (2026-09-19): Operating model: collect-then-digest. Collect school sources into ledger/cursors before digest times; digests compose on schedule. If collect fails, still send on-time best-effort with blocked_ui.
- **profile** (2026-09-19): Signup rule: default mode notify_with_link (verify-only). NEVER auto-book classroom app slots. On needs_action, alert with concrete ask + direct signup/event link so the family books themselves.
- **profile** (2026-09-19): source_cursors: for feed-like classroom apps, bootstrap ~30 days once, then incremental newest-first until a known item; persist cursors in memory and household_data_folder/cursors. Never full re-scroll every run.
- **profile** (2026-09-19): Multi-guardian: a signup is done if ANY household guardian name/alias appears on the spot list. Never rebook because the logged-in parent is not the name on the slot.
- **profile** (2026-09-19): Alert identity: every outbound family message starts with [Homebase] (or configured prefix). Always post on scheduled digests, including an empty-day caught-up line.
- **log** (2026-09-19): Optional connectors: Gmail and Google Calendar are the usual email/calendar doors. Classroom apps without APIs use browser login handoff (no passwords in chat). Family chat alerts often use WhatsApp Web in the browser when no connector exists.
