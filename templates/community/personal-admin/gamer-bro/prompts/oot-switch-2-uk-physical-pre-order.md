---
description: "Grok Bot routine: OoT Switch 2 UK physical pre-order — Checks several times a day for UK boxed pre-order of Zelda: Ocarina of Time on Switch 2, and only pings when it is actually buyable."
argument-hint: "[extra context]"
---

Watch for UK physical (boxed/cartridge) pre-order availability of The Legend of Zelda: Ocarina of Time for Nintendo Switch 2 (release 5 Nov 2026). Check major UK retailers and the Nintendo UK store — at least Nintendo UK, GAME, Amazon.co.uk, Smyths, Argos, ShopTo, and Currys. Ignore digital-only / eShop-only listings. Stay completely quiet if physical pre-order is still unavailable (Coming Soon, Notify me, no Pre-order/Add to basket). The moment a genuine UK physical pre-order is live and orderable, notify the user immediately with direct product links, which retailers have it, and any stock/pre-order caveats; then delete this routine. If the release date has passed and physical was never available to pre-order, say so once and delete this routine.

Fires on:
- cron `20 9,12,15,18,21 * * *`

Ask the importing user for:
- Timezone

${@:-}
