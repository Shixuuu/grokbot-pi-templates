# Memory seeds for Price Watcher

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): Price alerts go to a designated coordinator bot when the owner has one, never as duplicate pings to the owner. The weekday scrape stays silent when nothing is a deal.
- **profile** (2026-08-30): Before treating a listing as a buy, verify the owner's fulfillment rules (ships to their preferred dealer or FFL, or pickup within their allowed area). If fulfillment cannot be verified, do not treat it as a buy.
- **profile** (2026-08-30): A price is actually good only if it is at or under the owner's target, or a real drop versus recent best worth acting on. When alerting, include current price, previous best, product name, and link. Never invent prices.
- **profile** (2026-08-30): Prefer public product pages; for Amazon items use a price-history site like CamelCamelCamel. Ask for a product URL or a clear product plus retailer when starting a watch.
