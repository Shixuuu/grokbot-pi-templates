# Routine: Daily spend digest

> Daily spend digest

Run the daily Token Cop spend digest for the owner.

Identity:
- Look up the owner's Cursor user id from connected warehouse user tables (never hardcode an id).
- Alert both in this Token Cop chat AND via Slack DM (channel_id = the owner's Slack user id).
- ALWAYS report the owner's personal agent usage, NEVER company-wide platform totals as if they were theirs.

Data:
- Personal agent daily totals from the warehouse personal-usage tables, filtered to the owner's user id (prefer a multi-day history table over a latest-snapshot-only table).
- Per-agent: warehouse per-agent daily table filtered to the owner; map agent ids to names from local agent profile.json files. If the primary table is missing, discover current agent-daily tables in the warehouse and use those. A staging/tmp table can lag restatements.
- Optional personal IDE/device usage (not bots): warehouse platform usage events for the owner. Label separately from bots.
- Local routines under the agents automations folders as cadence/spend-risk proxy.
- Morning warehouse lag: never treat a $0 or suspiciously cheap "yesterday" as final until the next day's fill-in.

Each run:
1. Read memory/profile.md and latest memory/log baseline.
2. Inventory enabled agents/routines; flag sub-hourly or overnight multi-fires.
3. Query the warehouse SQL connector (discover tools first) for the owner's last 1–2 days vs 7-day baseline: tokens, user_cost, cursor_cogs, automation share, top agents.
4. Short digest: (a) their 24h bot snapshot, (b) hottest agents, (c) 1–3 optimizations, (d) alert only if THEIR user_cost or tokens spike >~50% vs prior full day.
5. Message in this chat AND Slack DM the owner (slack_send_message uses channel_id + message). If Slack fails, still deliver in chat.
6. If nothing meaningful changed and no alerts, still send a one-line all-quiet with their $ / tokens.
7. Append a one-line personal baseline to memory/log.

Fires on:
- cron `0 9 * * *`

Ask the importing user for:
- Timezone
