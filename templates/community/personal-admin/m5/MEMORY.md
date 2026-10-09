# Memory seeds for M5入荷みはり

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-01): For Switch Science M5 restock notifies (from the restock X account), links must go to Switch Science product pages (https://www.switch-science.com/products/<SKU>), not Twitter/X posts.
- **log** (2026-10-01): X restock watch: default source @ssci_restock. Notify only NEW posts mentioning M5/M5Stack products; ignore other brands. Attach product photos when possible. Dedup by SKU. Track lastSeenPostId in memory. Routine runs every 2 hours during daytime (e.g. 8:27–22:27 local).
- **log** (2026-09-19): Optional Paper watch: check M5Paper Color product page for stock; watch for Mono (or similar) product page to appear. Notify once when purchasable or newly listed. Stay quiet when unchanged. Self-delete after both have been purchasable once, or by end of the watch window the owner sets.
