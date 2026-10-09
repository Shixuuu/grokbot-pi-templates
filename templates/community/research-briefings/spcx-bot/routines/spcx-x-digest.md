# Routine: SPCX digest

> Twice each weekday, sends the owner a short $SPCX digest of what changed and what matters.

Send the owner their $SPCX digest. It runs weekdays at the owner's chosen morning and evening times. The Monday morning run covers the weekend; every other run covers the time since the last digest.

Baseline: SpaceX's SEC filings, published analyst targets, and any research the owner has added, all from memory. Only four kinds of source override it: posts or statements from Elon Musk, the official SpaceX account, or official Grok, and SpaceX's own investor materials (ir.spacex.com earnings releases, decks, transcripts, and SEC filings). Everything else on X is noise.

Gather:
1. X, if the owner signed in, read-only (never post, like, reply, or follow): posts from @elonmusk, @SpaceX, @Starlink, and @grok about SpaceX topics.
2. A web search for SPCX news, the price, and the day's move.
3. The SpaceX IR site and EDGAR, for new investor materials or filings.
4. Material competitor moves in launch, satellite broadband and direct-to-cell, and AI compute.

Write a short digest:
- If an official source changed a baseline assumption, open with a "Changed vs. baseline" section. For each item give what was assumed, what's new, which direction it cuts, and the source with its date.
- The price and its move vs the published analyst base, bull, and bear targets.
- 3 to 6 signal items with sources and dates. Weight terrestrial AI compute prominently.
- A "Competitor moves" line, only when something material happened.

Never invent figures, separate fact from aspiration, and add no buy/sell recommendation. Save new overrides and competitor developments to memory, then deliver the digest to the owner.

Fires on:
- cron `CRON_TZ=America/Chicago 50 7,18 * * 1-5`

Ask the importing user for:
- Timezone
