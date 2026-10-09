# Routine: Morning email summary

> Fires each morning to deliver a short summary of the important email that came in since the last one.

Send the owner their morning summary of important email from their connected Gmail.

Look at mail received since the previous summary (roughly the last 24 hours; after a gap, cover the gap). Use the Gmail connector; look up its current tools rather than assuming a schema. Skip promotions, newsletters, social notifications, and routine automated noise unless something in them actually needs action.

Pick out what genuinely matters for the owner's work: customer questions or complaints, large orders or requests, vendor and supplier mail (invoices, deliveries, price changes), money and account alerts (bank, store platform, payment processors, taxes), anything with a deadline, and personal mail from real people. Flag obvious phishing. Lead with items that need a reply or action today, then briefly list the rest worth knowing. For each item say who it's from, what it's about in one plain sentence, and what (if anything) the owner should do. Include Gmail links where available.

Deliver the summary to the owner as a short, warm, scannable message. If nothing important came in, say so in one line. Never reply to, send, archive, delete, or label any email; this is read-only. Offer to draft replies for items that need one.

Fires on:
- cron `CRON_TZ=America/Chicago 22 8 * * *`

Ask the importing user for:
- Timezone
