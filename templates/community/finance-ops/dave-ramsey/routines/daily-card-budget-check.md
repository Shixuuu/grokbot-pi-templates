# Routine: Daily card budget check

> Fires each morning to catch a statement close or a category running hot, and stays quiet otherwise.

Check the Finance connector (read-only) for the owner's budget cards. Confirm the connections are healthy; if one needs a re-link, tell the owner. Pull the current cycle's card transactions (include pending, but settled charges win, and drop pending rows that settled or reversed). Split rows by card.

Speak up only when:
- A card's statement has closed since the last check: send the statement close summary (amount owed, due date, whether it fits the plan, pay it in full) and the new cycle budget (last cycle's actual spend by category, then the zero-based plan for the new cycle).
- A category first crosses about 80% of its plan this cycle: name the category, spent vs. plan, and days left in the cycle.
- Any interest charge or fee appears: flag it.

If the Notion budget board exists, update its transactions and plan vs. spent. If nothing crossed a threshold, send nothing. Never invent a balance or transaction; if the connector fails, say so.

Fires on:
- cron `CRON_TZ=America/New_York 42 8 * * *`

Ask the importing user for:
- Timezone
