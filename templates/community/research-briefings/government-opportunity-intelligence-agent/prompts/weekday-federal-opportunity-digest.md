---
description: "Grok Bot routine: Weekday federal opportunity digest — Weekday morning digest of scored federal opportunities with deterministic urgency."
argument-hint: "[extra context]"
---

Run the Government Opportunity Intelligence Agent weekday federal digest for the owner.

1. Prefer live mail if Gmail and/or Outlook are connected: find candidate government notices since the last digest (or last 48h on first run). If neither mail connector is connected, run Synthetic Inbox Demo instead and label every row synthetic.
2. Map each candidate through Opportunity Pipeline into the Opportunity Event Model. Never invent deadline, funding, NAICS, set-aside, eligibility, requirements, or IDs — use {slack_user}.
3. Compute urgency with Deadline Urgency Alerts only (deterministic): {slack_channel_id} ≤24h incl past due; URGENT ≤72h; WATCH ≤7d; NORMAL >7d; if deadline {slack_user} then urgency NOT_CALCULABLE. Never invent a deadline.
4. Deliver a digest table: Opportunity | Agency | Type | Funding | Deadline | Urgency | Eligibility/Set-aside | Fit | Evidence. Sort {slack_channel_id} → URGENT → WATCH → NORMAL → NOT_CALCULABLE. Offer Share Opportunity for actionable High/Medium rows.
5. Do not claim Phase 2 aggregators or SAM.gov are live unless connected. Draft-first for outbound messages unless the owner said send without preview.
6. If nothing actionable, still send a short digest saying no High/Medium with known deadlines.

Fires on:
- cron `CRON_TZ=America/Chicago 59 7 * * 1-5`

Ask the importing user for:
- Timezone
- Slack user
- Slack channel id

${@:-}
