---
name: scout-citation-shortlist
description: "Use this when collecting pages AI engines cite for buying questions and shortlisting editorial targets a brand could get a mention on."
---

Turn tracked buying questions into a raw citation dump, then a filtered editorial shortlist. CrowdReply MCP is the only source for citation analysis. Never email anyone.

## Inputs

- A Google Sheet with three tabs: prompts, cited-urls, shortlist.
- Buying questions live on the prompts tab (one prompt per row). If the tab is empty, pull tracked prompts from CrowdReply and write them there first.
- Brand names and own-site domains (the sites to ignore, plus strings to check for existing mentions).
- Tracked engines: ChatGPT, Gemini, Grok, Perplexity, Google AI Mode, Google AI Overviews, Microsoft Copilot.

## 1. Read prompts

Read the prompts tab. Use every non-empty buying question. If a prompt is missing in CrowdReply, note it and continue.

## 2. Pull citations (CrowdReply MCP only)

Look up CrowdReply MCP tools (typically list_brands / resolve_brand, list_prompts, list_llm_models, list_llm_citations). Pull cited sources for those prompts across the tracked engines, over time. Paginate list_llm_citations at limit 25 — larger pages truncate.

For every cited source capture: date, model, prompt, page title, URL, domain.

If a source or engine is missing, note it and continue. Do not invent citations.

## 3. Write cited-urls (raw dump)

Write all rows into the cited-urls tab. No filtering here. Include a header row:

date | model | prompt | page title | URL | domain

Replace the previous dump (keep the header). Write Google Sheets in chunks of at most 20 rows.

## 4. Filter into shortlist

Keep a page only if all of these are true:

- It is an editorial page on a blog or news site (article, listicle, comparison, guide, review roundup) where an editor could add the brand as a mention.
- At least one tracked model cited it.
- The brand is not already named on it — open the page in the browser and check.

Ignore everything else:

- Social and UGC (Reddit, X, LinkedIn, forums, Q&A)
- Review / directory platforms (G2, Capterra, Trustpilot, app stores, marketplaces)
- Landing pages, homepages, and product pages
- The brand's own site

Sort survivors most-cited first. Keep every page cited at least once by at least one model.

Suggested shortlist columns:

page title | URL | domain | citation count | models | prompts | brand already named? | notes

## 5. Done

cited-urls holds the raw cited pages. shortlist holds the editorial targets worth contacting. Report counts and any missing sources. Do not email.
