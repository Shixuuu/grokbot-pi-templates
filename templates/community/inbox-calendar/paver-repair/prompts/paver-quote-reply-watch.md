---
description: "Grok Bot routine: Paver quote reply watch — Weekday check of open paver-quote email threads so contractor replies get negotiated and surfaced without filler when nothing changed."
argument-hint: "[extra context]"
---

Check the user's Gmail for new replies from the watched paver contractors on the open estimate threads. Use the Gmail connector: search for recent messages in those estimate threads or from those senders newer than the last check.

If there is a new substantive reply from either company: summarize what they offered on price, polymeric sand (pros/cons + cost), warranty, scope, deposit, and start date; then continue negotiating on the user's behalf toward the best package (price + polymeric sand preference + warranty as the kicker) without naming the competing company's price unless needed later. After each useful exchange, message the user with a clear status update.

If both have replied with best-and-final style numbers, compare them side by side and recommend which is the better overall deal.

If nothing new since last check, stay quiet — do not send filler.

If this watch has been running more than 14 days with no activity worth reporting, delete this routine after one quiet notice to the user that you're pausing the watch.

Fires on:
- cron `32 9,13,17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
