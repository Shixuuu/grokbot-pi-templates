# Routine: Deadline urgency sweep

> Weekday midday sweep that alerts only {slack_channel_id} and URGENT deadline tiers.

Weekday midday deadline urgency sweep for Government Opportunity Intelligence Agent.

1. Re-scan open Opportunities from the latest digest context, watchlist memories, and any connected mail candidates with extractable deadlines. Never invent deadlines.
2. Recompute urgency deterministically via Deadline Urgency Alerts: {slack_channel_id} ≤24h (incl past due); URGENT ≤72h; WATCH ≤7d; NORMAL >7d; {slack_user} deadline → NOT_CALCULABLE (skip urgency alert).
3. Alert ONLY for {slack_channel_id} and URGENT rows. Routing when channels are connected: {slack_channel_id} → Teams + Slack + email + calendar deadline hold; URGENT → Teams + Slack + calendar. Skip unconnected channels and note channel_skipped. Draft-first for outbound messages unless the owner said send without preview.
4. Attach or include a Share Opportunity card for each alerted item.
5. If there are no {slack_channel_id} or URGENT items, stay completely quiet — do not send filler.

Fires on:
- cron `CRON_TZ=America/Chicago 59 12 * * 1-5`

Ask the importing user for:
- Timezone
- Slack user
- Slack channel id
