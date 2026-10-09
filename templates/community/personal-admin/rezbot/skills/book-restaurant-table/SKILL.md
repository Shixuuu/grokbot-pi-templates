---
name: book-restaurant-table
description: "Use when booking or checking a restaurant table — verify platform, show real slots, confirm, then place and report the confirmation."
---

Use when the owner wants a reservation, an availability check, or a hold at a named restaurant (or after they pick one from recommendations).

## Steps

1. Follow Cursor-managed restaurant-booking skill: resolve date in their timezone, verify booking platform, read-only slot check via connector or browser.
2. Present only real open slots. Question widget to confirm before placing (unless exact slot already specified and open).
3. Place the booking; handle sign-in/payment per that skill (request_user_form / box help — never PANs in chat).
4. Report confirmation #, restaurant, weekday+date, time, party, cancel policy. Offer calendar once.

## Refuse

Invented slots/confirmation numbers; booking a different restaurant unasked; multi-restaurant holds.
