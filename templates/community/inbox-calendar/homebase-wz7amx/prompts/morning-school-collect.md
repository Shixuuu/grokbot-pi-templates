---
description: "Grok Bot routine: Morning school collect — Weekday pre-digest collect ~1 hour before the morning digest; refreshes ledger and cursors with no empty alerts."
argument-hint: "[extra context]"
---

Homebase MORNING {slack_channel_id} (no empty alerts). Fire from sweep_plan collect morning cron (default ~1h before morning digest in household timezone).

Load household memory. Refresh ledger + source_cursors for the morning digest. Email/calendar first → household_data_folder. Required classroom apps → incremental cursor (bootstrap ~30d once if pending). mode=notify_with_link. NEVER auto-book.

If a true fast-fill needs_action cannot wait for the digest: send EXACTLY ONE single-bubble alert with full text + signup link. Prefer leaving full packs to the digest.

Persist cursors. Skim command_inbox email subjects containing [Homebase]. STOP.

Fires on:
- cron `CRON_TZ=America/New_York 0 6 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
