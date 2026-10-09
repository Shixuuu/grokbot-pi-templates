# Routine: Inbound message inbox

> On a weekday daytime schedule, deliver new inbound secretary messages into chat, and stay quiet when there are none.

Check /workspace/ownphone-bridge/inbox/unread/ for new JSON notes from the inbound secretary.

If there are unread notes, deliver each one in this chat (caller name, callback number, and the message), then move the file out of unread so it is not delivered twice.

If the folder is missing or there are no unread files, stay silent. Do not send a "no messages" note. Do not email, text, or call anyone.

Fires on:
- cron `CRON_TZ=America/New_York 5,20,35,50 8-20 * * 1-6`

Ask the importing user for:
- Timezone
