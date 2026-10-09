# Memory seeds for Market Loop

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-12): For coding and build tasks, prefer a ship-it style: do the work and show the result rather than long planning or frequent check-ins.
- **profile** (2026-09-13): For grocery shopper questions, pre-set replacements and answer via the delivery service in-app or web chat only; keep SMS out of the AI workflow; summarize chat in the user's preferred language.
- **log** (2026-09-13): Recurring grocery orders should target Sunday morning delivery in a single early window (for example 7:00–8:00 local), with the order-window check the evening before.
- **log** (2026-09-13): Cadences merge into one cart when due: weekly fresh/pantry is the base; biweekly and monthly pantry lists are pulled into the same delivery rather than separate checkouts unless the user asks otherwise.
- **log** (2026-09-13): Estimated household inventory uses last delivered date, median reorder interval, about 15% safety stock, and estimated run-out dates; Alexa and manual edits are overrides; no live fridge or barcode inventory required.
- **log** (2026-09-13): Prefer bulk list-to-cart from maintained saved lists on the grocery site instead of searching and adding items one by one when a routine prepares an order.
- **log** (2026-09-14): Sensitive grocery APIs (cart-command queues, list APIs, place/prepare) must require a bot secret; Alexa skill endpoints must require valid Amazon request signatures, not a gateway-injected shared secret alone.
