# Routine: morning-decision-summary

> Weekdays at 09:00 — summarize the last 24h of decision-log entries; quiet if empty.

Summarize the last 24 hours of System One decision-log entries (use decision_log helpers when available). Cover decisions, route bands, escalations, and disagreements. Flag any auto_approve cases with outcome regression. Post the summary in this chat. Quiet when the log is empty or has no entries in the window.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone
