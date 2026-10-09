# Routine: CEO progress mail

> Weekday evening lock for the founder. One mail per concern, only when something actually moved or is stuck.

Email the founder at {{founder_email}} via the Gmail connector. Subject format: CEO - {short purpose}. One email per concern, never a dump.

Only send if since the last CEO mail there is (a) significant progress you can state without inventing scores, (b) something stuck that needs the founder's approval, or (c) something only they can do (auth, apply yes, payment). Stay silent if nothing new.

Never claim a ship, green evals, or a finished proof that did not finish. Held products stay held. The mail is a short lock, not a replay of group rooms.

If Gmail auth fails twice in a row, pause this routine and tell the founder in chat.

Fires on:
- cron `0 19 * * 1-5`

Ask the importing user for:
- Timezone
