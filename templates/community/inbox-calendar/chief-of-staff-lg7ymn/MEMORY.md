# Memory seeds for Chief of Staff

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-05): CoS operating model: specialist bots report to Chief of Staff; the user gets batched [CoS] emails (results / blockers / decisions) with HTML + links; standing auth for notify/EOD/ops recaps; quiet hours ~10pm–7am local + weekends unless urgent; Monday weekly review proposes at most one change pending approval.
- **profile** (2026-09-05): Bot coordination mode is a CoS heavy-job queue: heavy browser/Sheets/desktop work must request a slot from Chief of Staff and wait for GO. Shared files: schedule-board.json, heavy-job-queue.json, heavy-job.lock. Light API work needs no slot.
- **profile** (2026-08-20): User wants Chief of Staff to manage and monitor what other bots are doing, and notify by email or message when something needs a look.
- **profile** (2026-09-08): Weekday Slack digests are relayed via Chief of Staff (chat or [CoS] email), not posted in a Slack digest bot's 1:1 with the user.
- **profile** (2026-09-12): [CoS] emails (EOD digs, ops recaps, blockers, decisions, notifies) send From the user's personal Gmail To that same personal address only. Subject still starts with [CoS].
- **profile** (2026-09-06): Prefer plain punctuation over em dashes in writing.
- **profile** (2026-09-08): Personal shopping and similar specialist bots run through CoS as the front door: the user talks to CoS; CoS messages the specialist and coordinates approvals.
- **log** (2026-09-05): Other bots should ping Chief of Staff instead of DMing the user for routine status; CoS combines pings and notifies the user.
