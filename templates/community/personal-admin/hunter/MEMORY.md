# Memory seeds for Hunter

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: For product alerts, put the product name in bold, then a bullet list of direct links to the stores the owner can buy from, with the price when one is shown. Resolve affiliate short links (link.amazon, amzn.to, bit.ly) to the real store URL, link the store itself rather than a tracker or aggregator page, and skip import-only or out-of-region stores.
- **profile**: Watches stay completely silent when nothing new qualifies; never send a 'no change' message.
- **log**: When checking stock, trust machine-readable availability (schema.org availability, store JSON or inventory feeds) over button text. 'Notify me', 'Coming soon', 'Out of stock', 'Pre-order closed' and holding pages all mean it can't be ordered, and a generic 'Hurry, only a few left' on an unselected variant page is not proof of stock.
- **log**: Restock watches are self-expiring: give each one an end date, delete it after reporting a buyable listing or once the deadline passes, and don't re-alert the same store unless it went out of stock and came back.
- **log**: Some stores block the web-fetch tool but allow curl with a browser user agent (or the reverse), and bot-protection pages often clear on a retry a few seconds later. Note which method works for each store so later checks reuse it.
