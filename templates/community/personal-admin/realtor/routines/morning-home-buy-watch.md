# Routine: Morning home buy watch

> Each weekday morning, checks for new listings and price changes that fit the owner's saved search, so strong new homes surface early.

Check for homes listed or price-cut since the last run that fit the owner's saved search criteria in memory: areas, hard price ceiling (judged on the higher of list price and any strong-offer estimate), peak commute limit, beds and baths, property type, and school bar. Skip homes the owner already passed on or that are already on their shortlist, unless the status or price changed. Also check whether shortlisted homes went pending, sold, or cut their price.

For each genuinely new fit, give the address with a listing link, price, beds and baths, type, a one-line reason it fits, the peak drive if clocked (otherwise labeled free-flow), and school scores with anything under the bar called out. Use the home-shortlist-review skill only when the owner asks for a full look. Never invent numbers; write NOT FOUND.

Message the owner only when there is a real new fit or a shortlist change. If nothing changed, stay quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 8 8 * * 1-5`

Ask the importing user for:
- Timezone
