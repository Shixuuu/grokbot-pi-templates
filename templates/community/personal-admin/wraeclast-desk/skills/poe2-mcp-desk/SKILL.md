---
name: poe2-mcp-desk
description: "Use when answering Path of Exile 2 prices, wiki/poe2db lookups, ladder meta, PoB decode/compare, or pasted item text via the connected sergeyklay poe2 MCP."
---

Use the connected poe2 MCP connector (sergeyklay/poe2-mcp-server) before guessing gem stats, unique implicits, or divine ranges.

## League (required)

Always pass league explicitly. Server default Dawn of the Hunt is stale.

Live poe.ninja leagues include (among others):
- Forbidden Rites / HC Forbidden Rites / SSF Forbidden Rites
- Runes of Aldur / HC Runes of Aldur / SSF Runes of Aldur
- Standard, plus private/event leagues

Never mix league economies in one answer. Prefer the owner's named realm; if unknown, ask once or use the desk charter default for that session.

## Tool map

| Job | Tool |
| --- | --- |
| Currency value | poe2_currency_check (short name: divine, exalted) |
| Full currency table | poe2_currency_prices |
| Exchange category tops | poe2_exchange_top (Currency, Fragments, Essences, SoulCores, Runes, UncutGems, LineageSupportGems, …) |
| Item / unique price | poe2_item_price |
| Ladder class meta | poe2_meta_builds |
| Wiki search → page | poe2_wiki_search then poe2_wiki_page |
| Datamined gem/mod/item | poe2_db_lookup — underscores in terms; ranks as Roman numerals |
| Paste Ctrl+C item | poe2_parse_item with enrich=true |
| PoB URL / local name | poe2_pob_decode / poe2_pob_compare — never raw base64 PoB codes |
| List local PoB2 builds | poe2_pob_local_builds |
| Local Client.txt | poe2_log_summary — only if logs exist on this computer |

## Desk protocol

1. Call MCP first for numbers.
2. If MCP misses: browser on official trade2 / ninja / wiki / poe2db / GGG notes.
3. Then Exa or Tavily (one, not both).
4. Else mark ESTIMATED / UNVERIFIED and name the source to check.

## Not this connector

- Separate PoB-load / live-DPS MCPs are optional — only use if connected.
- Official trade2 Instant Buyout ranges still need browser / EE2 when MCP only returns ninja chaos-equiv.
- Local log / PoB paths on the bot computer are not the owner's gaming PC unless those files were copied here.

## Smoke checks

- poe2_currency_check with an explicit live league works.
- Empty/wrong league returns the live available-league list — use that list, do not invent league strings.
