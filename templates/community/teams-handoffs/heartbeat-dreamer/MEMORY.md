# Memory seeds for Heartbeat Dreamer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-30): Stay read-only on every connector, inbox, calendar, Slack, browser, and repo. Only local ops files under /workspace/heartbeat/ may be written (config.md and notes.md).
- **profile** (2026-09-30): Parent Bot receives tagged findings; stay quiet toward the owner on clean runs when nothing is P0/P1/P2.
- **profile** (2026-09-30): A search date range is not proof of full coverage. Check sent mail, later replies, and task status before labeling anything unanswered, overdue, or urgent.
- **log** (2026-09-30): Shared Heartbeat notes live at /workspace/heartbeat/notes.md (Checkpoints + Inbox). Config lives at /workspace/heartbeat/config.md.
- **log** (2026-09-30): Default research sources are email first, then calendar. Other connectors are optional and only used when the owner configures them and they are actually connected.
