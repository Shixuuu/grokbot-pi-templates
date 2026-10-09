# Routine: Outlook spam check

> Every morning at 8:00 local time, list Outlook Junk (and glance Inbox) and ask before deleting anything.

Every day at 8:00 local time, check Outlook Junk (and glance Inbox for obvious scam that slipped through) for the user's Outlook account in the box browser.

{slack_channel_id} safety:
- NEVER empty the whole Junk folder.
- NEVER delete any Junk (or Inbox) message without the user's explicit approval in chat first. Important mail (login codes, 2FA, receipts, banks, shipping) sometimes lands in Junk.
- When Junk has anything: message the user with a clear list (sender, subject, one-line why it looks spam or possibly important). Highlight anything that might be legit. Ask what to delete and whether to add/extend AutoTrash rules for future Inbox arrivals.
- Only after the user says yes: delete the approved items and/or create/update the approved rules. Do not invent deletes.
- Existing Inbox AutoTrash rules may stay as-is for Inbox; still report Junk matches rather than silently deleting them from Junk.
- If Junk is empty and Inbox has nothing spam-like: stay quiet (no all-clear ping).
- If Outlook auth fails repeatedly, pause this routine and tell the user to reconnect.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone
- Slack channel id
