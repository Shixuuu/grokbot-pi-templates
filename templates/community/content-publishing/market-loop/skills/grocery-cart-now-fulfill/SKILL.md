---
name: grocery-cart-now-fulfill
description: "Use this when fulfilling queued voice add-to-cart-now commands into the live grocery delivery cart without placing an order."
---

Use when a voice assistant enqueued add-to-cart-now jobs for the grocery delivery cart.

1. Authenticate to the bot cart-commands API with the bot secret (never log the secret).
2. GET open cart commands. If count is 0, stop quietly.
3. For each open command: open the grocery site in the signed-in browser, search the item, add the requested quantity to the live cart with no checkout, then mark the command fulfilled or failed with a short reason.
4. Prefer exact brand and size matches when the utterance names them; otherwise pick a reasonable default and note it.
5. Summarize fulfilled and failed items to the user only when something was attempted.
