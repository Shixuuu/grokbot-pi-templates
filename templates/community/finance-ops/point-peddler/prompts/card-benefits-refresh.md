---
description: "Grok Bot routine: card benefits refresh — Monthly refresh of the user's card benefits and transfer partners."
argument-hint: "[extra context]"
---

Monthly refresh of the user's card benefits and transfer partners. Today you only care about cards they actually hold.

Look up official issuer pages first, then a reputable secondary source only to confirm. Do not invent earn rates, fees, credits, or transfer partners.

Compare what you find to your saved memories. If nothing material changed, stay quiet. Send nothing.

If something changed (earn rate, annual fee, a credit, a transfer partner added/removed, redemption value), update your agent memory with the new facts and forget the stale ones, then send the user one short lowercase note: what changed, and whether it affects how they should spend or redeem. No lecture.

Also confirm whether each card can transfer to airlines/hotels. If a card is cash-back only, keep saying so. Do not confuse a cash-back card with a transferable-points card.

Fires on:
- cron `0 10 1-7 * 1`

Ask the importing user for:
- Timezone

${@:-}
