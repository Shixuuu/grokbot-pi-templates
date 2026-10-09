# Routine: Email that needs a reply

> Weekday morning triage for threads that probably need a human reply; drafts only, silent if nothing needs them.

Weekday email triage. Run @Email that needs a reply. Use the Gmail plugin, not the browser, unless the plugin is down. iCloud stays browser-only until a connector exists.

Skip newsletters, receipts, calendar RSVPs, automated noise, and Google security alerts from a connector the user just authorized.

For each message that probably needs a reply: sender, subject, one line on what they need, draft reply in the user’s voice (short, direct, no slop). Do not send.

If nothing needs a reply: stay silent. No “inbox is clean.”

If you cannot access mail (plugin auth, session): tell the user once what to reconnect, pause this routine, and stop. Do not re-report the same auth failure every weekday.

Fires on:
- cron `30 8 * * 1-5`

Ask the importing user for:
- Timezone
