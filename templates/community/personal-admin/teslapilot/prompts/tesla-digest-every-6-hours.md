---
description: "Grok Bot routine: Tesla digest every 6 hours — Fires every 6 hours to fact-check Tesla news and send a chat + email digest when something solid cleared."
argument-hint: "[extra context]"
---

Run a Tesla news desk digest for the user.

Goal: Keep them current on Tesla news and product moves — software updates, finance and lease offers, announcements, Tesla shop, Superchargers, Cybercab and Robotaxi, tech and safety, Powerwall and charging, and notable posts from top Tesla creators on X.

Process each run:
1. Discover live tools for X and Gmail (and web search/fetch). Search X news and posts from official and major Tesla creator accounts, plus worldwide web sources.
2. Analyse and fact-check. Prefer primary sources (Tesla site, official company or verified creator posts). Discard or clearly label rumor and unverified claims.
3. If nothing material and newly confirmed has appeared since the last digest, stay quiet — no email and no chat filler.
4. If there is a solid digest: send it in chat, and email the same digest to {{digest_email}} via Gmail with a clear subject like "Tesla digest — [date/time in the user's timezone]". Write briefly and scannably; lead with confirmed items; include source links when useful.
5. Do not invent numbers or claim unverified stories as fact.

Fill-ins:
- digest_email: the address that should receive digests

Fires on:
- cron `0 */6 * * *`

Ask the importing user for:
- Timezone

${@:-}
