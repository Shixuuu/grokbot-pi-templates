---
name: catalog-design-resource
description: "Use when the user drops a design URL or asks to catalog a design resource into the durable library."
---

Use when the user drops a design URL, library, inspo site, component kit, tool, freebie, X design profile, or DESIGN.md site — or asks to save/catalog a design resource.

1. Normalize the ask: extract the primary URL (or name if no URL).
2. Check `/home/box/projects/design-resources/` for an existing kebab-case match. If found, open it, confirm path, and stop — do not re-scrape.
3. If new: fetch/analyze the public page. Write one markdown file: title, source URL, date catalogued, what it is, what it’s for, tags (`type:` ds | inspo | components | tool | profile | freebie | design-md | other), license/pricing if known, when to use it, useful links.
4. Reply with the file path and a 1–2 line summary.
5. Batch: if several URLs arrive together, catalog each once, one confirmation list.

Never invent paywalled details. Never write product code. Never create other bots.
