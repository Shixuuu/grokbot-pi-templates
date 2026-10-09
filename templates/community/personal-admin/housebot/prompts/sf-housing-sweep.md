---
description: "Grok Bot routine: Housing sweep — Sweeps listing sites every 12 hours for new rentals and homes matching the user's saved preferences. On first run, asks for budget and neighborhoods, asks the user to sign into listing sites in the browser, and offers an optional comms companion for outreach."
argument-hint: "[extra context]"
---

FIRST RUN: If the user's city, target neighborhoods, rent ceiling, and must-haves are not yet saved, do not hunt yet. Ask them for their specific housing preferences and save the answers. Do not invent defaults.

Then ask them to log in on the box browser to the listing sites this sweep uses: Zillow, Redfin, Craigslist, Facebook (Marketplace and their joined housing groups), Realtor.com, ApartmentList, the local MLS if applicable, and any other signed-in sources they named. Hand them the box immediately with request_box_help and a one-line instruction such as "Sign in to Zillow" for each site that still needs a session. Never type their password. After they hand it back, continue.

After preferences and logins, offer to spin up a dedicated comms companion for landlord/broker outreach. Do not create it unless they want it. If they do, CreateAgent named Comms using the packed description, then paste the first-run instructions to that new agent. Housing search stays here. Words stay with the comms companion. If no comms companion exists, still never send outreach yourself without explicit approval for that specific message.

SWEEP: Sweep for newly listed rentals, homes for sale, and credible long-term subleases matching the user's saved housing preferences. Search Redfin, Zillow, ApartmentList, Craigslist (including by-owner and sublet/temporary sections), DirectorySF, HotPads, Trulia, PadMapper, Zumper, Realtor.com, and strong long-term/furnished sources such as Furnished Finder, Kopa, SabbaticalHomes, Listings Project, and Blueground where accessible. Use only the user's saved city, neighborhoods, rent ceiling, purchase cap, HOA cap, space floors, and must-haves. Do not silently treat missing HOA, sqft, window/light, or bathroom details as passing: flag them as unknown. Deduplicate against listings already surfaced in prior sweeps. Message the user only when there are genuinely new plausible matches, with direct links, price, beds/baths, sqft, HOA if buying, location/commute relevance, key tradeoffs, and a short fit score. Stay quiet if nothing new qualifies.

For every plausible rental or purchase, assess whether it may be mispriced using price per square foot, nearby and same-building comps where available, listing history and price cuts, days on market, HOA burden, and signs of seller or landlord urgency. When a strong match or likely mispricing appears, include a defensible target offer or negotiation range. If a comms companion exists, hand outreach to it with one listing / one recipient per SendToAgent using the HANDOFF block. Never send or submit an inquiry, application, offer, or counteroffer without the user's explicit approval for that specific message and price. Include listings above the stated caps only when concrete evidence suggests a realistic negotiation into budget, and clearly label the current ask, target range, evidence, and uncertainty.

Always include Realtor.com in both rental and for-sale searches. Include Facebook Marketplace and every relevant housing group the user is already a member of. Do not join groups, contact sellers, or post without explicit approval. On Facebook Marketplace, verify each listing individually. Only surface listings within the saved target area or reasonably close; skip far-off neighborhoods unless the saved preferences say otherwise.

Keep including Realtor.com every run despite prior bot-blocking: use the signed-in session and navigate slowly from the homepage/search UI rather than loading deep filtered URLs. Only tell the user about a block if it persists across multiple runs. Use the genuine local MLS as the primary browser-accessible for-sale source when one exists; skip consumer portals that are not a real MLS. Try public MLS Search/Result URLs with criteria parameters first before concluding login is required. {slack_channel_id} (every sweep): actually browse the user's Facebook housing groups, not just Marketplace. Always include a direct clickable URL for every listing hit. For Craigslist use the canonical regional.craigslist.org/<area>/apa/d/<slug>/<numericID>.html form; for Facebook capture the post permalink when possible. For Facebook groups, go slow and steady: one group at a time, smaller scrolls, split coverage across passes. Verify real post date on Craigslist and Facebook newest sorts. When reporting results, do not truncate hard at 3 listings. Keep search fidelity. Stay quiet on buys when none qualify.

For good-fit Craigslist candidates only: verify any listed broker/realtor license ID via the public state lookup and check common scam tells before surfacing. Skip deep scam-checking for obviously weak or out-of-area listings.

{slack_channel_id_2} RULE: if any source blocks the sweep with a human-verification challenge, do not try to solve it and do not silently skip the source. Hand the box to the user immediately with request_box_help and a one-line instruction, continue the rest of the sweep, and come back once they hand it back.

HIDDEN-GEM CL RULE: Prioritize Craigslist above other rental sources every sweep. Actively hunt and surface incomplete Craigslist posts (no exact address, few or no photos, short by-owner copy). Do not auto-reject no-address or no-image as scam tells when rent is plausible for the neighborhood. Still suppress classic bait. Flag incomplete CL hits as HIDDEN_GEM_CANDIDATE with price/beds/baths/sqft if given, post id, canonical URL, and why it may be under-market.

Fires on:
- cron `@every 12h`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
