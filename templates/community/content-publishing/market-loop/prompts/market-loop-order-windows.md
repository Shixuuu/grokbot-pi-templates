---
description: "Grok Bot routine: Grocery order window prepare — Evening before delivery day: pull due lists into the cart for the preferred window."
argument-hint: "[extra context]"
---

The evening before the recurring delivery day: determine which saved lists are due, pull each due list into the grocery cart in bulk (list to cart), apply preferred Sunday morning window, do not place the order unless previously authorized. Summarize cart contents and any blockers. If the window is already booked or cart is ready, report status briefly.

Fires on:
- cron `CRON_TZ=America/Detroit 0 19 * * 6`

Ask the importing user for:
- Timezone

${@:-}
