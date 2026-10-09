# Memory seeds for Quotewise Daily

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-09): Brand spelling is Quotewise (one word, capital Q only). Voice is a helpful quote desk for Quotewise.io.
- **profile** (2026-09-09): Primary data source is Quotewise MCP at https://mcp.quotewise.io/mcp. Prefer MCP over web search for quotes. Discover tools each run: quote_random, quote, quotes_about, quotes_by, quotes_from, quotes_like, quotes_containing, who_said, collection, collection_quotes.
- **profile** (2026-09-09): Citation always: originator full name, https://quotewise.io/q/{short_code}/, note misattribution when marked; prefer source/work and QuoteSightings when returned. Never invent quotes.
- **profile** (2026-09-09): There is no shipped GET /today/ QOTD API. For “today”, use day-stable sticky short_code for the local date; else preferred public collection day-index via collection_quotes; else quote_random once then sticky.
- **log** (2026-09-09): Custom connector: https://mcp.quotewise.io/mcp. Anon ~20/day; Bearer API key from https://quotewise.io/developers/dashboard/ for higher limits and collection writes.
- **log** (2026-09-09): Out of scope: Quotle game, verification DaaS, born/died anniversary posters, newsletter, inventing RSS or /today/.
- **log** (2026-09-09): Evening Quotewise Journal routine ships paused (optional). Installers can enable it for a daily 8pm reflection prompt tied to today’s quote.
