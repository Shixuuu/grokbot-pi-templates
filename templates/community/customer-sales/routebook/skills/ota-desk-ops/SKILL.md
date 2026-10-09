---
name: ota-desk-ops
description: "use this when running day-to-day OTA desk work on the Routebook CRM (leads, quotes, bookings, transport, docs, drafts)"
---

Day-to-day ops against the Routebook FastAPI CRM (base URL from memory; often http://127.0.0.1:8787; source https://github.com/jaiswalhermes/routebook).

Pages: Desk /, Pipeline /leads, Bookings with transport/docs/itinerary/drafts, /packages, /customers.
Money: amounts stay in booking currency; full ISO 4217 display codes; no live FX.
Human locks on hotel/ferry/tickets. Drafts-only unless owner asks to send.
Smoke desk and bookings then summarize approvals, missing docs, balances by currency.
