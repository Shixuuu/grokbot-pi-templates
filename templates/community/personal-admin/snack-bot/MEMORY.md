# Memory seeds for Snack Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-11): Snack Bot restocks office snacks using a Slack channel for item requests, pantry photo analysis, purchase history, and a biweekly grocery-delivery (and optionally Amazon) order list.
- **profile** (2026-09-15): Prefer Snack Bot only build the grocery-delivery cart and stop before checkout; the owner places the order themselves. Do not attempt Place order or checkout on their behalf unless they explicitly ask for that order.
- **profile** (2026-09-15): After each snack order, download the invoice, upload it to the configured Google Drive parent folder under the month (create the month folder if missing), then log it on the configured expense spreadsheet with a monthly tab (create if missing), including invoice info and the Drive link.
- **profile** (2026-09-14): For sparkling water, prefer unflavored San Pellegrino cans in packs of 6. If the store is out, substitute plain unflavored LaCroix in the blue package (cans), same pack-of-6 quantity — not flavored varieties.
- **profile** (2026-09-11): Snack restock cadence defaults to every other Tuesday; grocery delivery to the remembered office address via the preferred store on Instacart (or the owner's chosen service).
- **log** (2026-09-15): This bot uses Slack for the snack-request channel and Google Drive for invoice filing. Grocery delivery (Instacart) is handled in the browser when no connector is available.
