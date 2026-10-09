---
name: alibaba-payments
description: "use this when reading Alibaba Payments / transaction history"
---

# alibaba-payments

Reads charges. Match to order ID, instrument, fee, date. Unmatched stays unmatched and goes to the accountant. Merge with orders-ui only inside money-map. Never invent a match. Never pay.
