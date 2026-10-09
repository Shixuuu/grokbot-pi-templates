---
name: launch-drop-checkout
description: "Use this when the user wants a limited or not-yet-released product tracked and bought, or brought to checkout, the moment it goes on sale (a product drop, a restock, a pre-order opening)."
---

# Launch-drop checkout

1. **Check the store's bot policy first.** Follow the store-bot-policy skill. If the store bans AI agents or blocks checkout, don't sign in or buy: tell the owner and offer a reminder only.
2. **Read the product page.** Get the exact item name, variant, price, per-order limit, and the sale-start time. Many Shopify stores expose `/products/<handle>.js` with the availability. Convert the start time to the user's timezone and tell them.
3. **Check whether the store will ship to the user.** Don't assume. Look at the store's shipping or FAQ page for international shipping (for example, a Global-e/DHL option) and ask which address they want to use.
4. **Settle how far to go.** Ask once: buy automatically, take it to checkout and ping them to confirm payment, or just remind them. Never press the final pay button without the user's go-ahead in chat. Never accept card numbers pasted or photographed in chat. If the user sends one, tell them to delete it and treat the card as exposed. If an agent virtual card is connected, follow the agent-card-checkout skill for payment.
5. **Get the sign-in done ahead of time.** Open the store's login page in the box browser and let the user sign in themselves (an in-chat form or handing them the screen). Never ask for a password in chat. Confirm the account name and the store's region/currency setting afterward. Sessions can expire before launch, so recheck right before.
6. **Do a read-only practice run a day or two before launch** without touching the cart. List the saved addresses by country and city only, and note which one is the default. If the wanted address isn't the default, either have the user make it the default or write it into the routine. Set the store's region/currency to match the destination and check that the product page shows the local price and no notice saying it can't ship overseas.
7. **Know the launch-night hurdles.** Popular drops put you through a captcha at checkout and then a waiting-room queue (several minutes, with a "don't refresh" warning). Items are NOT held while you're in the queue, so they can sell out before you reach payment. Card fields usually sit in protected iframes. Unless an agent card is connected, the user has to type the card on the shared screen. Plan for it:
   - Have the user standing by at launch time, ready to take the screen.
   - Add items, start checkout immediately, and hand the screen to the user for the captcha (and a re-login if the session dropped).
   - Wait in the queue without refreshing. Send short status updates with screenshots.
   - The moment the payment page appears, pay with the pre-approved agent card or hand the screen straight to the user. Confirm the total and address in the same message, and don't add extra confirmation steps, because every second counts.
   - Afterward, check the cart and the product's availability. An empty cart plus sold-out status with no confirmation email means it missed. Tell the user plainly and offer a restock watch.
8. **Schedule a one-shot routine** about 10 minutes before launch that pings the user, rechecks the session and region, and opens the product page. At launch it adds the allowed quantity (priority item first, the right variant selected) and runs the hurdles above. Then it deletes itself (or deletes itself silently if it runs after the launch date).
9. Put later changes from the user (items, address, quantity, approval level) into the routine right away.
