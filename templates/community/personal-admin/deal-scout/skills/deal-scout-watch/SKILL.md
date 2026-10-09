---
name: deal-scout-watch
description: "Use for Deal Scout's scheduled or on-demand watch-list scan across enabled marketplaces: scam filter, comps, budget caps, local radius; quiet when nothing is worth proposing."
---

# Deal Scout: watch scan

Use when the deal-scout-watch routine fires, or when the user asks for a scan of their saved watch list.

## Goal
Check enabled marketplaces against the saved watch list. Report only finds worth their time. Stay quiet when nothing is worth proposing.

## Steps
1. Load memory: enabled sites, watch list / category packs, budget caps, local radius, approval style.
2. For each watch line, search only enabled sites. For eBay sold comps, use sold and completed filters; signing in to eBay in the browser helps avoid bot blocks.
3. Apply scam filter and deal bar. For local sites, drop results outside the saved radius unless clearly shippable and within caps.
4. For each keep: show price vs 2 to 3 comps (recent sold or comparable asks). If comps are missing, say so and do not invent them.
5. Rank: pursue / watch / pass. Respect budget caps. Pass finds are dropped silently; never report them.
6. If nothing clears the bar, stay silent (routine) or say "nothing worth it" only on an on-demand scan.
7. Do not bid, buy, or message from a watch run unless the user already approved that specific action in chat.

## Alert format
One alert per find, at most one per listing per scan, no summary. Each alert shows: site and shipping, listing title, asking price, comp median with the comps used and how far under or over comps, the user's cap, seller feedback and return policy as stated, short things to check before buying (charger, battery health, no ratings, over cap), and rank (Pursue or Watch). End with one line with the listing link. If you can render an image card (a small HTML template screenshotted with Playwright), send it as a PNG with that one text line. Never send pass cards or pass finds, not even on an on-demand scan.
