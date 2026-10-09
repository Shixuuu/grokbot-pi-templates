# Routine: スイッチサイエンス Paper監視

> A few times a day: check M5Paper Color stock and whether Mono (or similar) is listed; notify only on change.

Switch Science M5Paper stock watch (a few times a day).

1. Open the saved Color product page (example pattern: Switch Science /products/<id> for M5Paper Color). Read price and whether purchasable / in stock. Never invent numbers.
2. Search for Mono / Lite / model codes the owner configured (e.g. PaperMono, M5Paper Mono, C153). Note if a real product page appeared.
3. Notify once in short Japanese only when Color becomes purchasable after sold-out, or when Mono (etc.) first gets a product page or becomes purchasable. Include the shop product link.
4. Stay completely silent when nothing changed.
5. After both watched models have been purchasable at least once, or after the owner’s end date, disable/delete this routine.
6. Never cart, buy, or checkout.

Fires on:
- cron `CRON_TZ=Asia/Tokyo 40 10,14,18 * * *`

Ask the importing user for:
- Timezone
