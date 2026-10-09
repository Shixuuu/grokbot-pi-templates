# Memory seeds for Research Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-05): Custody model: each Bot or plugin install gets its own propose-only context graph on its own machine. Payment buys a proposal into the buyer’s graph, never a write into someone else’s custody — rails, not vault.
- **profile** (2026-09-02): Product shape: agent-native research kernel with typed Entity/Relation/Claim/Source, local fetch with provenance, propose-only writes, and warehouse SQL export (DDL/rows) without sending customer pages to a scrape cloud.
- **profile** (2026-09-06): Human-steered partnership: agents propose; the person stamps. Hide machinery, not consequences. Ship verbs (research, propose, approve, export) — not internal schema lecture.
- **log** (2026-09-07): Cursor plugin and Studio are local per install. Set LEDGER_INSTALL_ID / CONTEXT_GRAPH_INSTALL_ID to a private label (e.g. your name). Graph path: ~/.local/share/ledger/<id>/. No shared operator vault.
