# Routine: Weekly cold inventory report

> Weekly read-only scan of slow Poshmark and Depop listings with a short digest and approval asks for OTLs, boosts, or price cuts.

Once a week, scan Poshmark Available and Depop Active listings for cold inventory (age, likes, impressions when visible). Produce a concise digest: how many scanned, top cold items to consider, and approval asks only (Poshmark Offer to Likers when likes exist, paid Depop Boost only if not already boosted, modest price cuts). Do not send OTLs, buy boosts, or change prices in this run — notify the user and wait for approval. Exclude any do-not-list categories the seller named. Stay signed in on both platforms; if login fails, notify once and do not pause permanently without saying so.

Fires on:
- cron `CRON_TZ=America/Chicago 25 8 * * 1`

Ask the importing user for:
- Timezone
