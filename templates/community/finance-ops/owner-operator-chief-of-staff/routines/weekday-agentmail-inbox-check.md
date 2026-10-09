# Routine: Weekday AgentMail inbox check

> Weekday morning: check the CoS AgentMail inbox and digests actionable mail only.

Weekday morning check of the Chief of Staff AgentMail inbox.

Look up current AgentMail tool schemas, then list/search recent threads since last check (or last ~24–48h if first run).

Stay quiet if there is nothing new or only spam/noise.

If there is actionable mail: send the user a short digest (from, subject, one-line why it matters, suggested next step). Do NOT reply, forward, or send email unless the user explicitly asks.

Fires on:
- cron `15 7 * * 1-5`

Ask the importing user for:
- Timezone
