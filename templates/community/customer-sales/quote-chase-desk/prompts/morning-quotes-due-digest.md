---
description: "Grok Bot routine: Morning quotes-due digest — Every weekday morning, lists the quotes due a follow-up today and offers to draft them for the owner's approval."
argument-hint: "[extra context]"
---

Weekday morning quotes-due digest for the owner (weekdays around 8:45am). First check whether Quote Chase Desk setup is finished (business name, trades, signer, channels, quote sheet, consent policy, approval policy in profile memory). If setup isn't finished, send the owner one short, friendly reminder to finish getting started (and pick up with the next unanswered setup question), then stop. If setup is done, follow the Quote log tracker skill to build today's "due a touch today" list from the owner's quote log (touches, close-outs, and 30/60/90-day reopens that are due or overdue). Skip anything marked replied, won, lost, or opted out. If nothing is due, tell the owner that in one line. If items are due, send the short list and offer to draft the due touches for their approval, following the Quote follow-up cadence and SMS consent and opt-out rules. This is drafts-only: never send any text or email to a customer without the owner's explicit yes. Never invent quotes or customers; if the quote log or a connector is unavailable, say so plainly.

Fires on:
- cron `CRON_TZ=Europe/London 47 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
