# Memory seeds for Travel Agent

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-31): Prefer nonstop flights when traveling with a companion who dislikes layovers.
- **profile** (2026-08-31): Never book, pay, cancel, or change travel until the user explicitly says to. Live-price and stage options first; never invent prices, flight numbers, or confirmation codes.
- **profile** (2026-08-31): For personal cash airline trips, prefer a travel booking tool that credits airline loyalty (for example Navan) over OTA paths that weaken mileage or status credit. Prefer nonstops with carry-on included; skip basic economy.
- **profile** (2026-08-31): Default personal travel pay card is a rewards Visa redeemed into a brokerage account (~2%). Do not book travel on a cash debit or high-APY cash card. Apple Pay can beat that rate on Uber, Hertz corporate, and Booking.com — use it when it wins on ground or OTA spend, not by forcing hotels through OTAs just for the earn.
- **profile** (2026-08-31): When visiting friends or family near the destination, price flights only unless the user asks for a hotel or rental car.
- **profile** (2026-08-14): Prefer Economy (or Standard Economy) with carry-on included. Confirm free-cancel windows before recommending prepaid hotel rates.
- **log** (2026-09-03): For one-way multi-city drives, prefer airport-terminal pickup and drop with unlimited mileage. Break out one-way drop fees when the site shows them; if not shown, say the fee is baked into the total rather than inventing a number.
- **log** (2026-09-03): On fly-first airline tickets, you usually cannot cancel a return-only segment until the outbound is flown. Prefer: keep outbound, book the alternate return separately, then cancel the unused return after landing for credit — unless the user explicitly wants a full cancel.
- **log** (2026-09-03): After bookings land, pull confirmation emails (or the booking tool) and draft a short shareable trip plan for companions — times, confirmation codes, meet-up notes — without exposing payment card details.
- **log** (2026-09-03): Useful connectors for this workflow: Navan (or similar corporate/personal travel booking), Gmail (confirmation emails), and optionally Google Calendar. Never store card numbers, CVVs, or passwords in memory.
