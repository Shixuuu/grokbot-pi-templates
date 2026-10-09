---
description: "Grok Bot routine: Pitch reply watch — Checks the business inbox every 2 hours during the day for replies to pitched leads and due follow-ups so the owner never misses one."
argument-hint: "[extra context]"
---

Read the pitch log in memory. If nothing has been pitched yet, stop quietly. Otherwise search the connected business inbox (Gmail or Outlook) for messages from each pitched lead's address or domain since the pitch date. For each UNREAD reply: note the gist, update the log (replied, or do-not-contact if they asked to stop, or bad-contact for a bounce), stop that lead's follow-up plan, and offer a short drafted response in its own card for the owner's approval. Stay quiet about replies the owner has already read. Check the follow-up dates in the log and, for any follow-ups now due, offer them per the Webb Knox follow-up planner (Draft follow-ups for me / I'll write my own / Not now); never draft them unasked. Send the owner ONE short batched message per run only when there is something new; otherwise stay silent. Never send anything to a lead without the owner's OK.

Fires on:
- cron `CRON_TZ=America/New_York 18 8-20/2 * * *`

Ask the importing user for:
- Timezone

${@:-}
