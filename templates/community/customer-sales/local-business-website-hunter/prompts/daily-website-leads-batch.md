---
description: "Grok Bot routine: Daily website leads batch — Fires each morning to prepare a fresh batch of website leads with demos, quotes and messages for the owner to approve."
argument-hint: "[extra context]"
---

Build today's batch of new website leads (the count the owner chose, default 10) by running the website-lead-hunt skill, using the owner's saved location, niches, currency, price range, terms, PDF contact/payment details and sign-off. NEVER send anything to any lead; only the owner approves sends.

Save everything in today's dated batch folder (send/NN.txt, quotes-final/, demo source), append rows to the leads list with 'status: draft - not sent', and update the niche tracker.

Then present the full batch to the owner for approval. For each lead include the name, niche, socials and followers, no-website evidence, contacts, demo link, quote amount, PDF and message text. Do not check for replies.

Fires on:
- cron `CRON_TZ=Africa/Nairobi 17 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
