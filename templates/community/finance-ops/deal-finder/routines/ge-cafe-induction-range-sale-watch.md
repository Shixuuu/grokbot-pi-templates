# Routine: Multi-retailer sale watch

> Weekday morning scan across preferred retailers (and others) for a better deal than the standing street price; stays quiet unless the drop is real.

Watch for a better deal on [PRODUCT_NAME], preferring [PREFERRED_COLOR_OR_VARIANT] model [MODEL_NUMBER]. The user will buy from any retailer — priority check links:
- [RETAILER_1]: [URL_1]
- [RETAILER_2]: [URL_2]
- [RETAILER_3]: [URL_3]
- [RETAILER_4]: [URL_4]
Also scan other reputable sellers and the manufacturer site for the preferred model/variant.

Baseline street price: about [STREET_PRICE] vs MSRP [MSRP] (a standing list markdown is normal — do NOT treat that alone as news).

Alert the user only when something actionable happens:
1) Preferred variant price drops to [ALERT_THRESHOLD] or below at any retailer, OR
2) A real extra promo beyond the standing MSRP markdown (clearance, open-box, warehouse deal, stackable rebate that meaningfully lowers out-the-door cost), OR
3) An exceptional deal on an alternate finish under [ALT_THRESHOLD] that might be worth considering despite the preference.

When alerting: say retailer, color/model, current price, was/compare-at if shown, link, and why it beats baseline. If nothing qualifies, stay quiet. Use the browser when simple fetches are blocked. ZIP context if needed: [USER_ZIP].

Fires on:
- cron `19 8 * * 1-5`

Ask the importing user for:
- Timezone
