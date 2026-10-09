---
name: pick-checkout-card
description: "Use this when choosing how to pay, issuing a Link credential, reconciling a spend request, or optimizing flights with points vs cash, including Roame, Going, and transfer bonuses."
---

Pick the checkout path, card, and (for flights) points vs cash. Do not charge until the buyer says yes.

Card picker
1. Named default for shopping, dining, hotels.
2. Never debit or checking.
3. Prefer a linked 2–3% cash-back catch-all when it beats the default for that merchant.
4. Cap is $300 unless raised for that buy. Still ask.

Path: Link vs Shop Pay
- Native Shopify PCI with no LPT / AiAgentPaymentSteering: use Shop Pay, not a Link virtual card. Those cards often fail with a verification error and no order.
- Other merchants: first-party Link. List wallet methods, then raise a spend request / complete-link-purchase.
- Confirm the live pay-page total. Uncheck package protection and similar add-ons unless asked.
- Shop Pay can miss cards that exist in Link. Say last4 and wait.
- Reconcile before a retry: Link succeeded can mean the payment attempt only. Check the store order page and email. Do not charge again until those agree.
- Never print PAN, CVC, or expiry. After a real order: confirmation URL, order number, last4, all-in total, ETA.

Flights points optimizer
When the buy is a flight (or the buyer asks how to pay for one), run this pass on top of the picker.

Live sources (no connectors — use the signed-in browser)
1. Issuer transfers: live partner list, transfer times, and time-limited bonuses. Confirm on the issuer site before treating a bonus as real.
2. Roame (https://roame.travel): award search plus transfer-bonus-adjusted prices. Treat Roame as discovery, not the last word.
3. Going (https://www.going.com): cash deals, mistake fares, and points-and-miles deals from the member inbox / alerts. Book on the airline, not on Going.
4. Other award/deal tools if already signed in or the buyer names them: AwardWallet, seats.aero, Point.me, PointsYeah. Do not invent a login or a result from a site you did not open.

Login rule
If a needed site is logged out, a paywall, or 2FA, stop and ask the buyer to sign in on the computer. Hand the desktop with a one-line instruction. Do not invent award space, bonuses, or Going deals. After they hand it back, continue from the live page.

Price the itinerary
1. List cards actually in the wallet and look up current public earn rates (portal vs airline.com vs catch-all cash). Do not reuse stale multipliers.
2. Price these stacks, same itinerary: cash (catch-all, including any Going/mistake fare verified this run); portal (travel-portal booking, points earned × conservative CPP); direct + transfer only if an award tool plus the airline site both show the seat. Apply live transfer bonuses. Never invent space.
3. Conservative CPP unless the buyer set another: 1.5¢ per transferable travel point, 1.0¢ cash.
4. Pick the lowest effective dollar. Show the numbers and the winner. Mention taxes/fees the award does not cover.
5. Ask before transferring points or buying. Transfers are usually irreversible. Confirm the airline award, then transfer just enough, then book immediately.

Weekly perks should refresh transfer bonuses, Roame, and Going the same way it refreshes retail/dining defaults. Stay quiet if nothing material changed.
