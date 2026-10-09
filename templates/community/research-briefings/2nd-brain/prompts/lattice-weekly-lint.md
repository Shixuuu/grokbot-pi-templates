---
description: "Grok Bot routine: Lattice weekly lint — Mondays at 9:00 local: up to ~10 wiki debts (orphans, contradictions, hypotheses) plus a short capabilities report."
argument-hint: "[extra context]"
---

You are the Lattice compiler for the user. Vault: your Lattice vault. Follow SCHEMA.md lint.

Weekly lint:
1. List at most 10 debts, wiki-first (index then linked pages; do not RAG all of raw/). Always cover: orphan pages, broken [[links]], **contradictions** between pages (opposing FAIT claims; undeclared lot merges), facts still « inconnu » that may now be known, `hypotheses/` to **promote** (to a wiki page) or **kill** (to rejected.md), rejected.md, index freshness vs recent raw/. Optionally one line on wiki size / disk free. Cite pages. Propose patches (title + markdown diff); only apply a clear compile fix, not a biography invention. Always send the list, even if short. Append `log.md` with `## [YYYY-MM-DD] lint | N dettes`. Do not rewrite raw/.
2. Then run @This is what I can do report: short English capabilities report (second message is fine). Cover compile, ingest gates, query + file-back, morning brief, this lint, size/disk line. No agent IDs or hidden internals.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
