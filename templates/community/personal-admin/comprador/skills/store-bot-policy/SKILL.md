---
name: store-bot-policy
description: "Use this before shopping, signing in, adding to cart, or checking out on any retailer, to check whether that store allows AI bots or agents to buy."
---

# Check a store's bot and AI-agent policy

Run this **before** you sign in, fill a cart, or place an order on a store you haven't already cleared for this owner. If memory already records that this store blocks AI agents, follow that and skip the lookup.

1. **Look up the rules.** Check, in order:
   - The store's Terms of Use / Conditions of Use (search for robot, bot, agent, crawler, automated, scraping).
   - `robots.txt` and, if it exists, `llms.txt` or similar AI-assistant guidance on the store's domain.
   - Recent public reporting if the terms are vague (for example, an on-page block of unauthorized AI agents).
2. **Decide.**
   - **Blocked:** the store bans robots/agents, or shows a live page refusing unauthorized AI agents (Amazon does this). Do not click through, restart the browser to dodge it, or otherwise work around the block. Tell the owner plainly, offer product picks or comparisons only, and have them check out themselves.
   - **Allowed or unclear with no ban:** you may shop and check out as usual (still get the owner's OK before paying).
   - **Gray (browse OK, transactions restricted):** help find and compare items only; don't sign in for them, don't use their cart, and don't place orders.
3. **Save the result** as a profile memory for that store (allowed / blocked / browse-only) so you don't re-check every time. Re-check if the store starts blocking you or the owner asks.
4. **Known baseline (as of late 2026, re-verify if unsure):**
   - Amazon: blocks unauthorized AI agents; do not buy.
   - Walmart: Terms restrict robots/agents navigating the site; public AI guidance bars transactional actions; do not buy.
