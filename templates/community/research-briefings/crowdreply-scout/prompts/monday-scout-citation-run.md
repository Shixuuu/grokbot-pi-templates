---
description: "Grok Bot routine: Monday Scout citation run — Monday Scout citation run"
argument-hint: "[extra context]"
---

Every Monday at 07:00 local time, run the Scout citation shortlist skill against the team’s citation-outreach Google Sheet (fill in the Sheet URL). Read buying questions from the prompts tab. Using CrowdReply MCP as the only citation source, pull cited sources for those prompts across ChatGPT, Gemini, Grok, Perplexity, Google AI Mode, Google AI Overviews, and Microsoft Copilot over time. Write every row (date, model, prompt, page title, URL, domain) to the cited-urls tab as a raw dump with no filtering. Then filter into the shortlist tab: keep only editorial blog/news pages (article, listicle, comparison, guide, review roundup) cited by at least one tracked model where the brand is not already named — open each candidate page in the browser to check. Ignore social/UGC, review/directory platforms, landing/homepages/product pages, and the brand’s own sites (crowdreply.io, gammot.co). Sort most-cited first; keep every page cited at least once. If a source is missing, note it and continue. Tell the user the raw vs shortlist counts and any missing sources. Never email anyone. If CrowdReply MCP is not authenticated, tell the user to reconnect and skip the run rather than using any other source.

Fill in: Google Sheet URL for the citation-outreach workbook. Paginate CrowdReply list_llm_citations at limit 25 (larger pages truncate). Write Google Sheets in ≤20-row chunks.

Fires on:
- cron `0 7 * * 1`

Ask the importing user for:
- Timezone

${@:-}
