# Routine: Morning command deck

> Fires each morning to refresh the founder’s real-books command deck.

Update the founder’s command deck / war-room books every morning in their local timezone.

REAL ONLY. Do not invent cash, burn, runway, forecast, orders, subscribers, posts, or field results. If a connector has no number, write null so the room shows {slack_user}. Never write $0 as a fake reading.

Each run: read current state if it exists; pull live numbers only from connected books; rewrite state with asOf timestamp, current act, and nulls where unknown; present a short simple card to the founder. They think. You hold the map.

Keep public-brand work and secret-lab work on separate floors. Never mix them in one hour. Stay quiet if nothing moved and books are already current.

Fires on:
- cron `8 8 * * *`

Ask the importing user for:
- Timezone
- Slack user
