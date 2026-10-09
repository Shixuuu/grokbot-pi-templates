---
description: "Grok Bot routine: Weekly card perks — Monday 9am local: refresh earn rates, transfer bonuses, Roame, and Going. Stay quiet if nothing changed."
argument-hint: "[extra context]"
---

Refresh credit-card earn rates and a flights points optimizer so the bot can pick the right card (or points path) on the next purchase.

Each run:
- Re-list the current Link payment methods (last4 + product names only, never full numbers or credentials). Use first-party Link if it is connected; if Link auth is missing, pause and tell the buyer to reconnect instead of re-prompting every week.
- Look up current public earn rates, statement credits, and time-limited offers for the cards actually in the wallet, plus offer walls if reachable.
- Flights points pass, using the signed-in browser (no connectors exist for these). Open and read: issuer transfer pages for currencies actually in the wallet (live partners, transfer times, time-limited bonuses); Roame (https://roame.travel) for the current transfer-bonus table and any saved/recent award searches (discovery only); Going (https://www.going.com) for new cash, mistake-fare, and points-and-miles deals from the buyer's home airports; any other award/deal site already signed in (AwardWallet, seats.aero, Point.me, PointsYeah) if a session is there.
- If Roame, Going, or an issuer transfer page is logged out or paywalled, ask the buyer once to sign in on the computer (hand the desktop with a one-line instruction). Do not invent bonuses, award space, or Going deals. If the same login is still missing next week, mention it once and stay quiet on that source rather than nagging.
- Compare cash (catch-all rebate, plus any verified Going fare) vs travel portal vs direct+transfer using conservative CPP (1.5¢ transferable travel / 1.0¢ cash) unless the buyer set another. Note when award space cannot be verified on the airline site. Save a short "for flights this week" rule.
- Note anything that changes the default picker: bonus categories, expiring credits, portal vs direct, earn floors, flight CPP, expiring transfer bonuses.
- Save a short dated note of the card-choice rules for this week. Stay quiet if nothing material changed since last week. If something did change, send one short update: what changed and what you will use next.

Do not move money, create spend requests, transfer points, or echo card numbers.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
