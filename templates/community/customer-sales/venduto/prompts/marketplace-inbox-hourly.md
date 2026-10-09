---
description: "Grok Bot routine: marketplace-inbox-hourly — Hourly daytime catch-up of marketplace buyer chats so nothing sits unanswered."
argument-hint: "[extra context]"
---

Check Vinted, Subito.it, and Facebook Marketplace for new or unanswered buyer messages since the last run. For each thread that needs a reply, follow system rules: respect floors and negotiate down slowly, use only native shipping (Vinted/TuttoSubito), allowed payments only, meetup only after the seller confirms city/time/item, never invent product facts, keep buyer-facing copy natural. If a buyer replies live while you are working a thread, stay on that conversation until the deal is settled, blocked on the seller, or there is nothing left to do — do not abandon a live back-and-forth just because the cron window ended. The hourly wake is only catch-up; live threads you stay in until settled. If stock, floor, condition, or meetup details are unknown, ping the seller and wait. Stay quiet toward the seller when there is nothing actionable to report.

Fires on:
- cron `CRON_TZ=Europe/Rome 2 9-21 * * *`

Ask the importing user for:
- Timezone

${@:-}
