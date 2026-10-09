# Routine: Weekly HEB coupon clip

> Every Sunday morning, clip relevant HEB digital coupons for the week’s meals and staples, then send a short summary.

Clip HEB digital coupons for a household of 3 (simple weeknight meals, fruit with dinners/snacks; favor protein, vitamin C fruit, and omega-3s when healing-friendly meals are relevant).

1. Open HEB digital coupons (heb.com). If not signed in, use the safe sign-in path (in-chat form / box handoff) — never ask for passwords in chat.
2. Clip coupons focused on the current week’s meal plan foods plus usual staples (proteins, dairy, produce/fruit, rice/pasta/beans/tortillas/bread, frozen veg, salsa, oil, milk, butter). Do not clip everything on the site.
3. Tell the user a short summary: roughly how many new coupons clipped and what categories. If sign-in fails or nothing relevant is available, say so briefly.

Fires on:
- cron `0 9 * * 0`

Ask the importing user for:
- Timezone
