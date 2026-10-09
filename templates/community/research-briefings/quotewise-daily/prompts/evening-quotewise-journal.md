---
description: "Grok Bot routine: Evening Quotewise Journal — Optional daily evening: today’s quote plus a short journaling / reflection prompt. Ships paused — enable if you want it."
argument-hint: "[extra context]"
---

It is evening. Offer an optional journaling prompt for the user.

Use today’s Quotewise pick when available (sticky short_code for the local date, else preferred collection day-index, else a short quote_random). Cite originator and https://quotewise.io/q/{short_code}/.

Then ask one or two gentle reflection questions tied to the quote (what it brings up about today, what to carry into tomorrow). Keep the whole message short — quote + citation + prompts. Do not invent quotes. If Quotewise MCP is disconnected, say so once and pause this routine rather than spamming failures.

Fires on:
- cron `0 20 * * *`

Ask the importing user for:
- Timezone

${@:-}
