# Routine: Afternoon school collect

> Weekday pre-digest collect ~1 hour before the afternoon digest; retries morning blockers when possible.

Homebase AFTERNOON {slack_channel_id}. Fire from sweep_plan collect afternoon cron (default ~1h before afternoon digest).

Refresh ledger/cursors for the afternoon digest. Retry morning blocked_ui if the desktop is free. Email/calendar first; required apps incremental. NEVER auto-book. Persist cursors. command_inbox email skim.

Urgent-only alert (if any) must be single_bubble — one message only. Prefer digest for full packs. STOP.

Fires on:
- cron `CRON_TZ=America/New_York 0 15 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id
