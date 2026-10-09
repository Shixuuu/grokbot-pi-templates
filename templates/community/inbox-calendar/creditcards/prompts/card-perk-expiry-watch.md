---
description: "Grok Bot routine: Card perk expiry watch — Weekday morning check that surfaces expiring card perks and upcoming annual fees in time to act."
argument-hint: "[extra context]"
---

Weekday perk and fee watch for the Cards desk.

1. Read Finance-linked card activity and any saved perk/fee calendar notes. Never invent leftover credit dollars.
2. Flag use-it-or-lose-it credits expiring within about 2 weeks (dining credits, airline credits, similar). Prefer Google Calendar reminders over last-minute chat-only pings.
3. Flag annual fees due within about 2 weeks; ensure calendar events exist with fee amount and current perk list in the description.
4. Flag suspicious same-amount duplicate charges per the standing duplicate rule (subscriptions/bills vs soft refill notes at bars/cafes).
5. If nothing needs action, stay quiet. If something does, send a short Cards alert with the locked pane layout (urgent / info / notes / perks) and plain-English what-this-means lines.
6. Never pay a bill. Never ask for bank passwords.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 24 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
