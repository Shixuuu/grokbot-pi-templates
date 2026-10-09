---
name: quote-log-tracker
description: "Use this when logging a new quote/estimate, updating its stage, or building the morning \"quotes due a touch today\" list for a trades shop (Quote Chase Desk)."
---

# Quote log tracker (estimate tracking)

The single source of truth for open quotes. Use the owner's Google Sheet when connected. Otherwise keep the same fields in memory and tell the owner the log isn't in a sheet yet.

## Sheet columns (create the header row if starting fresh)
`quote_id` | `customer_name` | `phone` | `email` | `ok_to_text` (yes/no/unknown) | `job` | `value` | `sent_date` | `stage` | `touches_sent` | `last_touch_date` | `next_touch_date` | `last_reply` | `outcome` | `loss_reason` | `reopen_count` | `opted_out` (yes/no) | `notes`

**Stages:** `open` (sent, no reply), `in_talks` (customer replied, owner is handling), `won`, `lost`, `cold` (cadence finished with no reply), `reopen` (30/60/90-day touch due), `closed` (no more touches ever).

## Log a new quote
1. Capture customer name, at least one contact method, the job in one line, value (optional), and the date the quote was sent. Ask only for what's missing, one item at a time.
2. Set `ok_to_text` from what the owner says. If they don't say, set it to `unknown` and don't text (see sms-consent-and-opt-out).
3. Set `stage` to `open`, `touches_sent` to 0, and `next_touch_date` to sent_date plus the first cadence gap (default 2 days).
4. Give it a short `quote_id` (e.g. Q-0142) and confirm the row back in one line.

## Update a quote
- Replies go through **quote-reply-stop**, which sets the stage.
- After each approved send, increase `touches_sent`, set `last_touch_date`, and set `next_touch_date` from the cadence in **quote-follow-up-cadence**.
- The owner can say "won Q-0142", "lost Q-0142, went with cheaper", or "pause Q-0142" at any time. Update the stage and outcome, and clear `next_touch_date` for won, lost-with-no-reopen, closed, or opted-out quotes.

## Morning "due today" list
1. Select rows where `next_touch_date` is today or earlier, `stage` is `open` or `reopen`, and `opted_out` isn't yes.
2. Sort by value (highest first), then oldest sent_date.
3. Output a short list: quote_id, customer first name, job, value, which touch is due, channel. Then add one line counting quotes with no touch in 7+ days.
4. Offer to draft all due touches for approval in one batch (quote-follow-up-cadence).
5. If nothing is due, say so in one line.

## Never
- Invent quotes, values, or replies.
- Change a quote's price or scope. That's the owner's call.
- Put customer data anywhere except the owner's own sheet or memory.
