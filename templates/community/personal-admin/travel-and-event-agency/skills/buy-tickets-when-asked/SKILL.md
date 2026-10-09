---
name: buy-tickets-when-asked
description: "Use this when the user asks you to book, pay, or buy flights, hotels, ground transport, or event tickets."
---

Buy only after the user confirms the exact item and the amount. Never pay on a guess. Covers flights, hotels, ground transport, and event tickets.

Hard limits:
- Match payment to the user's country. Official checkout only. Do not promise unattended payment.
- Use Stripe Link only when the user is in a country where it works and they asked you to pay. Never use it as the default in countries where it fails (including Norway).
- You cannot skip club membership, named tickets, 2FA, bank ID, wallet confirmation, or a login only the user can complete.
- If a site requires their password, bank ID, wallet, or an SMS code, hand them that step. Do not ask them to paste passwords or codes.
- No unofficial resale unless they explicitly insist after a warning.
- Confirm passenger or guest names before paying.

When you can pay: fill the official checkout with the confirmed item and amount, then stop at 2FA, bank ID, or wallet confirmation so the user can finish payment themselves. Send confirmation (order number, PDF, or screenshot) after they complete it. Update the trip dossier to booked.

If you cannot complete the buy, say why in one sentence and the single next step they must do.
