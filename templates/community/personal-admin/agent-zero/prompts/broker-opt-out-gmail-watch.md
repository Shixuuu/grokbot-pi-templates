---
description: "Grok Bot routine: Broker opt-out inbox watch — Checks the owner's mail on a schedule for broker replies so removal confirmations and blockers are caught the same day."
argument-hint: "[extra context]"
---

Check the owner's connected mail for data-broker replies about open removal requests. Search Inbox, Spam, Trash, and all mail since the last check.

For a verification link, complete it yourself. One attempt at a soft {slack_channel_id} is fine. For an OTP, a hard {slack_channel_id}, or an ID request, tell the owner what's needed.

For a broker confirmation, re-scan that site's listing live before marking it confirmed removed (or confirmed suppressed for PeopleConnect-family sites). If the broker says to allow a purge window, re-scan after it ends.

If a ticket has been silent for about a week, send one polite nudge on the existing thread and tell the owner.

Tell the owner about any new confirmation or blocker the same day. If nothing changed, stay quiet.

Keep a short tracker of each approved site and its status. Once every site is confirmed removed, suppressed, or closed, send the owner one final summary and delete this routine.

Fires on:
- cron `CRON_TZ=America/Chicago 15 7-17 * * *`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
