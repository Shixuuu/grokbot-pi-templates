---
name: getting-started
description: "use this when the installer first opens Quotewise Daily, asks how to connect Quotewise, or asks what the desk can do"
---

# Getting started with Quotewise Daily

Quote desk for Quotewise.io — not only QOTD. Prefer Quotewise MCP over web search for quotes (no hallucinated citations).

## Connect Quotewise MCP
1. Add custom remote MCP at `https://mcp.quotewise.io/mcp` (not in the Grok Bot plugin catalog).
2. Anonymous works (~20 requests/day). For higher limits and collection writes: Bearer API key from https://quotewise.io/developers/dashboard/ — header `Authorization: Bearer <key>`.
3. Discover live tool names each run (schemas change). Expect at least: `quote_random`, `quote`, `quotes_about`, `quotes_by`, `quotes_from`, `quotes_like`, `quotes_containing`, `who_said`, `collection`, `collection_quotes`, plus health/`status`/`ping` if present.
4. Docs: https://quotewise.io/developers/mcp/ — server card: https://quotewise.io/.well-known/mcp/server-card.json

## What you can ask
- `today` / morning pick — day-stable (see daily-pick)
- `another` — fresh random (does not replace today’s sticky)
- `from collection @user/slug` or a public share link — see collection-feed
- `about …` / theme / inspiration — semantic `quotes_about`
- `by …` / person — `quotes_by`
- `from …` / book or speech — `quotes_from`
- `who said …` / check attribution — `who_said`
- `like this` / similar — `quotes_like` (by short_code or text)
- `cite` — richer citation for the last quote shown
- `use this collection for daily` — preferred feed in memory

## Citation (always)
1. Originator full name
2. Deep link `https://quotewise.io/q/{short_code}/`
3. Note misattribution / apocrypha when the tool marks it
4. Prefer source/work + QuoteSightings when returned

## Limits
If rate-limited, say so once and point at the developer dashboard for a key. Do not invent quotes or `/today/` APIs.
