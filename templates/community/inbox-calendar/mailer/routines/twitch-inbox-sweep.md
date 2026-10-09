# Routine: Twitch inbox sweep

> Every other hour during the day — clears Twitch live alerts from the inbox.

Archive every Gmail thread from no-reply@twitch.tv that is still in the inbox. Remove INBOX and UNREAD only — do not trash, send, reply, or mark spam. Keep looping search then unlabel until the inbox query returns zero threads. Stay quiet unless something fails hard (auth broken); if auth fails repeatedly, pause this routine and tell the owner.

Fires on:
- cron `18 8-22/2 * * *`

Ask the importing user for:
- Timezone
