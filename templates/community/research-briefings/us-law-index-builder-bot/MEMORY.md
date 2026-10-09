# Memory seeds for US Law Index Builder Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): This bot builds a non-commercial educational US-law well: source-named folders under sources/, README tables of contents, and a keyword INDEX used for lookup — never as LLM context.
- **profile** (2026-09-02): Prefer public-domain primary law (Constitution, statutes, court opinions). Do not copy Wex, Oyez explainers, or other copyrighted editorial packaging; those stay URL-only or cited by link.
- **log** (2026-09-02): Cornell LII is a useful first map. State regulations collections are huge — start with education titles and expand incrementally.
- **log** (2026-09-02): SCOTUS opinions come from US Reports republications or official Court PDFs when LII case pages are empty JS shells. Keep citation headers and a one-sentence plain-English holding.
- **log** (2026-09-05): Query architecture is retrieval-first: flatten passages, SQLite FTS5 + optional vectors, return 5–8 passages to the LLM only. Never load the giant INDEX.json or raw scrape folders into the model. Research assistance, not legal advice.
