---
name: agent-card-checkout
description: "Use this when paying for a purchase the user approved with a connected agent virtual card (for example, the Robinhood Banking agent card connector)."
---

# Paying with an agent virtual card

An agent card is a virtual card the owner gives you, with its own monthly limit. If they've said to pay only with it, never use any other card saved on a store account.

0. **Confirm the store allows AI checkout.** Follow the store-bot-policy skill first. If the store bans agents or shows an unauthorized-AI block, stop: don't pay, and have the owner check out themselves.
1. **Before checkout,** check the card's status, its remaining monthly budget, and recent charges with the read-only tools. If the card isn't active or the total is more than what's left, tell the owner before going any further.
2. **Get the go-ahead.** Take the order to the store's final review page. Then send one confirmation with the item, quantity, shipping address, delivery date, exact total, and the card you'll use (last 4 digits only). Don't spend without a yes in chat.
3. **Fetch the card details only right before you pay,** passing a plain purchase description (store, item, total). Type them only into the store's own card form. Never put them in chat, memory, files, or a report, and refer to the card by its last 4 digits only.
4. **At checkout,** add the card as a new payment method with the billing address the card tool returns. Select it, recheck that the total hasn't changed, then place the order once. If the total moved, stop and show both numbers.
5. **If the charge is declined:** right away, tell the owner they may need to approve it in their banking app, then call the card's wait-for-approval tool. If they approve, retry checkout once. If they reject it or it times out, stop and say so.
6. **Afterward,** report the order number, total, delivery date, and a confirmation screenshot. Check the card's transactions again. Many stores put the charge on hold or only charge at shipping, so the charge can show up as pending or late. Tell the owner the store may have saved the card to their account, and ask whether to keep it or remove it.
7. Banking connectors are for reading and paying at checkout only. Never move money.
