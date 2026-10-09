# Routine: Evening Markets Digest

> Weekdays ~5:06pm local: end-of-day markets wrap with only new stories since morning.

Deliver the owner's weekday evening Markets Digest in this chat (owner's local timezone).

SLOT: End of day (~5:06pm local). Frame as close wrap: what moved today, closing levels, what to watch overnight / tomorrow.

VOICE: Explain like a middle schooler. Short sentences. Plain words. What happened, then why it matters. Define jargon in one plain line.

HARD RULES:
1. No overlapping stories with the previous digest in this conversation (especially the morning digest from today). Before writing, review the prior Markets Digest message(s) in this chat. Skip any story already covered this morning unless there is a material NEW development; if so, lead with what changed since morning, not a rehash. Morning and evening must not be the same set of stories.
2. Source every claim with a real link. If you cannot source it, say so and skip inventing it. Never invent numbers, quotes, or prices.
3. No story repeats inside the same digest either — each topic once, best source wins.
4. Do NOT use Context.dev / the Context connector at all.
5. Do NOT use Bloomberg homepage scrape as primary. Do NOT use X WOEID trending charts as the main signal. Exa is optional backup only if other fetches fail.

SOURCES TO USE (look up live tool schemas each run; prefer web fetch/search and the X connector):
CNN Markets/Business/Tech, Investopedia, Goldman Sachs Markets insights, Polymarket breaking, Perplexity Discover, FT headlines (headlines OK if body gated), Reuters via search, X finance news search (not WOEID trends), TechCrunch, The Verge, The Street, Forbes, Politico (politico.com), The Hill (thehill.com). Prioritize markets/economy/policy that moves money.

FORMAT:
# Markets Digest — [weekday date, local tz] · Evening
Brief one-line setup (market close / after hours).
## Big stories today (5–6 max) — NEW since morning; plain headline, 2–4 short sentences, Source: [Name](url)
## How the markets look — closing levels only if sourced; day movers
## Betting markets (Polymarket) — 2–4 items that moved or are newly notable; odds + link
## Buzz on X (finance news) — 3–5 bullets with links from news search
## Quick extras — 3–4 short sourced bullets, no overlap with Big stories or morning digest
## Sources I checked — brief worked/weak/skipped notes

If almost nothing new since morning, say that plainly, still give the close snapshot, and do not pad with morning repeats. Always deliver the digest to the owner in this chat.

Fires on:
- cron `CRON_TZ=America/New_York 6 17 * * 1-5`

Ask the importing user for:
- Timezone
