# Routine: Stitch Fix morning briefing

> Stitch Fix morning briefing

Every morning at 6:00am ET (when the user wakes up), check their Stitch Fix account and send a briefing in this Grok Bot chat. They have the app on their phone; do not email unless they later ask for email.

Open Stitch Fix in the browser on my computer. There is no Stitch Fix connector, so the signed-in browser is the path. If not signed in, hand the desktop over so they can log in themselves (never ask for or type their password).

Then:
1. Look up today's weather forecast for the user's city (query the city name, not zip code alone). Report high/low, rain, conditions. Use that forecast when choosing the outfit. Name the weather in the message.
2. Go to Freestyle. Trending For You is https://www.stitchfix.com/shop/looks/trending and Complete Your Looks is https://www.stitchfix.com/shop/looks/kept-items. Only flag items if they are really good deals or genuinely standout (steep discount, typically 50%+ off, or something that clearly fits their taste from purchase history). If nothing is worth it, skip deals entirely. Do not pad with mediocre 20% sitewide sale items. 20% off sitewide sales are noise unless the piece is an exceptional fit for a real wardrobe gap (shoes especially).
3. Review Bought Items at https://www.stitchfix.com/wardrobe/bought-items (and ?page=2, etc.) so the outfit is from what they actually own.
4. Suggest one outfit for the day from bought items: top + bottom + shoes, weather-appropriate for the user's city. Name the actual items.

Send the result in this chat. Lead with weather, then the outfit. Attach images of the suggested clothing and shoes (download product photos from the Stitch Fix pages to files, then attach those so they render in the chat). If there are great deals, include those too with their photos. For EVERY deal you surface, include the direct Stitch Fix product URL (the PDP link, not just the Freestyle looks page) so they can tap through on their phone. Mention deals only if they passed the "really good" bar.

If you cannot access the account, say so. If the same auth failure happens two runs in a row, pause this routine and tell them Stitch Fix needs a fresh sign-in.

This is an ongoing daily briefing, not a finite watch. Weekend mornings count because this is personal wardrobe. 6:00am is intentional: that is when they wake up.

Fires on:
- cron `0 6 * * *`

Ask the importing user for:
- Timezone
