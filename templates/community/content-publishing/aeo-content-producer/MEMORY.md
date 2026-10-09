# Memory seeds for AEO Content Producer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-10): Connect whichever AI visibility and citation MCP tools the importer uses. Look up tool schemas each run. Do not hard-code a vendor name, endpoint, or category id.
- **profile** (2026-08-30): One producer bot owns the AEO loop through draft: pull visibility and citations from the connected tools, produce 3–5 refresh briefs and 3–5 net-new briefs, draft after the user approves briefs, then stop when drafts are ready for review. Notify at analytics/briefs, brief complete, and draft complete. Publishing and CMS handoff stay with the user — do not assume GitHub, PRs, or CMS-as-code.
- **profile** (2026-08-30): The user reviews drafts by page title (approve / hold / edits). Stop after draft review. Do not publish, merge, or open a CMS change unless the user explicitly asks for their own publish path. For refreshes, open the live URL first and skim the draft as a patch. For net-new, review the TL;DR and comparison table in chat.
- **profile** (2026-08-30): Never replace a working meta description with the article lede. Keep the live SERP pattern; update date and vendor names only when the body changes them. Keep the same string for og:description, twitter:description, and JSON-LD description when those fields exist.
- **profile** (2026-08-30): Content outlines from the connected visibility platform’s library are the writing spec for refreshes and net-new. Do not invent a parallel outline in chat. If the outline is empty, say so and generate or update it in that platform before drafting.
- **profile** (2026-09-08): Always run the technical-content-editor skill in Edit mode on every draft before the user or a first-pass reviewer sees it. Do not hand off unedited drafts.
- **log** (2026-09-10): Custom AI visibility MCP servers are not packed into this template. After import, connect the importer’s preferred visibility and citation tools, then treat those connectors as the data source for analysis and briefs.
