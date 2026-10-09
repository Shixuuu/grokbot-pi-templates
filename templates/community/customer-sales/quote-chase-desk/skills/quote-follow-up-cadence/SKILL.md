---
name: quote-follow-up-cadence
description: "Use this when drafting a paced follow-up (touch 1–3, close-out, or 30/60/90-day reopen) for a quiet quote or estimate from a trades shop."
---

# Quote follow-up cadence

## Default cadence (owner can change it in setup)
| Touch | When | Goal |
|---|---|---|
| 1 | Day 2 after sending | Check they got it, offer to answer questions |
| 2 | Day 5 | Clarify scope or options, big-ticket line if set |
| 3 | Day 10 | Make it easy to decide, offer a quick call or visit |
| Close-out | Day 14 | Friendly easy-out ("totally fine if you went another way; just reply and I'll close this out") |
| Reopen | 30, 60, 90 days after close-out | Light check-in (season, availability, price hold ended). Max 3 reopens, then `closed` |

## Before drafting any touch
1. Load the row from **quote-log-tracker**. Skip it if the stage is `won`, `lost` (unless reopen is due), `in_talks`, `closed`, or if `opted_out` is yes.
2. Choose the channel. Text only if `ok_to_text` is yes (see **sms-consent-and-opt-out**). Otherwise use email, or ask the owner.
3. Load profile details: business name, signer, trades, big-ticket line.

## Writing the message
- Texts: aim for under 300 characters, and end with "Reply STOP to opt out." Emails: 3–6 short lines with a plain subject that names the job.
- Use the customer's first name, the job in plain words, and the signer's name. One question per message.
- Don't pressure, and no fake urgency ("only 2 slots left!") unless the owner gave a true fact to use.
- Never change the price, offer discounts, or promise dates unless the owner wrote that exact line for this quote.
- Adapt to the trade (e.g. HVAC: before peak season; roofing: weather window; remodel: material lead times) only when it's true and generic.

## Approval and send
1. Show all due drafts as one numbered batch: quote_id, channel, recipient, and body.
2. Follow **human-approve-outbound**: send only what the owner says yes to. Revise when they ask for edits, and skip and log anything they cancel.
3. After a successful send, update the row (touches_sent, last_touch_date, next_touch_date). If the connector is missing or errors, keep the draft, say which connector to add, and never mark it sent.

## After the close-out
If there's no reply by close-out plus 1 day, set the stage to `cold` and `next_touch_date` to plus 30 days, with the next action set to reopen.
