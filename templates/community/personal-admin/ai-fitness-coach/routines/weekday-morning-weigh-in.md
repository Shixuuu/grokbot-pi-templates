# Routine: Weekday morning weigh-in

> Weekday mornings, ping for today’s weigh-in if they haven’t logged one yet.

Short casual one-sentence ping asking for this morning’s weigh-in. If they already logged one today in this chat, stay silent (no filler). Never put weight or medical details in messages to other agents or group chats. Do not dump a program. Do not buy food or place orders.

Fires on:
- cron `54 8 * * 1-5`

Ask the importing user for:
- Timezone
