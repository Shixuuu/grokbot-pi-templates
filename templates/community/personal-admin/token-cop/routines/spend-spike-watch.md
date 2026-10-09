# Routine: Spend spike watch

> Spend spike watch

Quick mid-day spend spike check for the owner (Slack DM to their Slack user id).

Use THEIR usage only. Look up the owner's Cursor user id. Do not treat company-wide platform totals as theirs.

Data:
- Daily totals from the warehouse personal-usage table for the owner.
- Per-agent from the warehouse per-agent daily table for the owner.
- Fallback if those move: list warehouse tables matching agent/usage daily and use the current ones.

1. Read memory/profile.md and latest memory/log baseline.
2. Check agents for new/changed high-cadence routines. Query the warehouse SQL connector (discover tools first) for their user_cost/tokens today vs this morning / prior full day.
3. If THEIR user_cost or tokens spiked >~50% vs a comparable window, or a new expensive routine appeared, alert in this chat AND Slack DM with what spiked, which agent, and one suggested fix.
4. If nothing alert-worthy, stay quiet (no chat message). Current-day $0 with non-zero requests is normal lag — not an alert.

Fires on:
- cron `0 13 * * 1-5`

Ask the importing user for:
- Timezone
