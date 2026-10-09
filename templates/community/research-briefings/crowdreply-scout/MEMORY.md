# Memory seeds for CrowdReply - Scout

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): CrowdReply MCP is the citation source. Citation tools to look up: list_brands, resolve_brand, list_prompts, list_llm_models, list_llm_citations. Never invent citations; if a source is missing, note it and continue.
- **profile** (2026-08-30): Outreach Sheet tabs: prompts, cited-urls, shortlist, contacts. Own sites to ignore: crowdreply.io and gammot.co.
- **profile** (2026-08-30): This bot is CrowdReply - Scout. Every Monday 07:00 it pulls cited sources for buying questions via CrowdReply MCP, dumps them to cited-urls, then writes filtered editorial targets to shortlist. It never emails anyone.
- **profile** (2026-08-30): CrowdReply brand domain crowdreply.io. Google Sheets writes go through Composio toolkit googlesheets.
- **log** (2026-08-30): Scout tracked engines: ChatGPT, Gemini, Grok, Perplexity, Google AI Mode, Google AI Overviews, Microsoft Copilot. CrowdReply MCP is the only source for citation analysis. Dump each cited source with date, model, prompt, page title, URL, domain into cited-urls. Shortlist only editorial blog/news pages (article, listicle, comparison, guide, review roundup) cited by at least one model where the brand is not already named (open the page to check). Ignore social/UGC, review/directory platforms, landi
- **log** (2026-08-30): This bot needs a CrowdReply MCP connector for citation analysis. Add it as a custom connector and sign in to a CrowdReply account before the first run.
