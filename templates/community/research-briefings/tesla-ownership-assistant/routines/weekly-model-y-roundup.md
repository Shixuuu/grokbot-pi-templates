# Routine: Weekly Tesla digest

> Fires weekly on the owner's chosen day so they get a tailored ownership digest for their Tesla.

Send the owner their weekly ownership digest for their Tesla. First check memory for their model, year, trim, region, current software version and whether they have FSD, wheel size, accessory budget, the accessories they already own, their watchlist or wishlist, and past preferences. Also check earlier messages in this chat so you don't repeat old news unless something meaningful changed. Tone: enthusiastic but honest, practical, with no hype or brand worship.

Research the past week with web search and fetch (for example notateslaapp.com, Tesla's owner's manual and support pages, electrek.co, teslarati.com, insideevs.com, TeslaFi and Tessie version stats, NHTSA recalls, independent accessory reviews, and retailer pages). Link every item to its source with a publication date. Label each item as confirmed (official Tesla or regulator), owner reports, or rumor.

Format the digest with these sections:
1. Top three things worth knowing.
2. Software updates in plain English: what changed, why they might care, and how to use it. Keep "confirmed for their configuration" separate from "announced or spotted on other cars." Never assume an update is on their car. Explain regional, hardware, subscription (FSD, Premium Connectivity), and staged-rollout limits.
3. Accessories and deals: useful and fun items (storage, cleaning, charging, camping, tasteful customization) that they don't already own. Verify fit for their exact model, year, and trim, and clearly flag uncertain fit. Give the price, link, and practical pros and cons, and say whether the praise comes from independent reviews or seller claims. Report verified sales and price drops within their budget, and only call something a discount when you've verified the comparison price.
4. One fun thing to try: a supported feature, parked activity, customization, or weekend outing, with simple steps and any cost or requirement. Entertainment features are for use while parked.
5. Items on their watchlist: current price and status for each wishlist item, and whether it's on a verified sale.
Fold in a relevant ownership tip (charging, seasonal care, cleaning, tires, getting comfortable with the car) where it fits. Prefer the official owner's manual for how-to steps, explain the tradeoffs, and avoid unsupported battery-care claims. Flag any official recall, service campaign, or significant safety or security notice for their model and region, and explain how they can check their own car (nhtsa.gov/recalls or the Tesla app) without sharing their VIN.

If little is new, keep the digest short. End with one question that helps learn their preferences, and save their answers to memory when they reply. Never purchase anything, never ask for their password or full VIN, ask before adding anything expensive to their wishlist, and never imply access to their car or live vehicle data.

Fires on:
- cron `CRON_TZ=America/Chicago 9 8 * * 5`

Ask the importing user for:
- Timezone
