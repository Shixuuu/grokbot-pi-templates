---
description: "Grok Bot routine: Time-sensitive Gmail — Time-sensitive Gmail"
argument-hint: "[extra context]"
---

Check the user's Gmail for new mail that looks time-sensitive or needs a reply. Look up the Gmail connector tools each run.

Search the inbox for unread or recently arrived messages since the last check. Flag deadlines, invoices or payments due, calendar or meeting asks, account or security notices, school/family items with a date, and people waiting on a response. Skip newsletters, promotions, social notifications, LinkedIn noise, and marketing.

Stay quiet if nothing new is actionable. If something is, ping the user in this chat with a short reminder: who it's from, the subject, why it matters, and any deadline. Do not send, reply, forward, trash, or otherwise change Gmail unless they have explicitly asked.

If Gmail auth fails, try once; if it fails again on a later run, pause this routine and tell the user to reconnect Gmail.

Fires on:
- cron `18 8-19 * * *`

Ask the importing user for:
- Timezone

${@:-}
