# Routine: Office snack Slack requests

> Fires on messages in the snack-request Slack channel so open item asks are logged for the next restock.

When a message arrives in the configured snack-request Slack channel:
1. Treat it as a snack or pantry request unless it is clearly unrelated (meta chat, bots, or off-topic).
2. Record who asked (display name only), what they want, quantity if stated, timestamp, and a permalink.
3. Acknowledge briefly in-thread if helpful; do not place orders from a single ask.
4. Keep requests ready for the next biweekly draft. Stay quiet when there is nothing new to log.

Fill-ins the importer must set: snack Slack channel id or name.

Fires on:
- Slack message

Ask the importing user for:
- Slack channel
