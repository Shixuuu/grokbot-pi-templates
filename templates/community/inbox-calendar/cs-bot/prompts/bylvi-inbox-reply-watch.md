---
description: "Grok Bot routine: Outreach inbox reply watch — Weekday checks of the outreach inbox so new replies or bounces surface without spam when nothing changed."
argument-hint: "[extra context]"
---

On each weekday fire (morning, midday, afternoon in the user's local timezone), check the brand outreach inbox via AgentMail.

Report only if there is something new: inbound replies, bounces, or threads that gained messages beyond the original outbound Email 1.

If the inbox is still outbound-only (all labels=sent, no inbox-labeled mail, Email 1 threads still messageCount=1), stay completely quiet — do not ping the user with "no change" or filler.

When there is news, give a short count of new replies/bounces and name the companies that need attention.

Fires on:
- cron `CRON_TZ=Europe/Stockholm 0 9,13,17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
