# Routine: Inbox money scan

> Inbox money scan

Weekday 8am local, scan the user's Gmail for money they can collect now: unpaid invoices, pending payments, inbound paid asks, uncollected work. Report only collectible items. For each, one next action. Never send or pay. Stay quiet if nothing collectible. Fill-in: mailbox, time of day.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
