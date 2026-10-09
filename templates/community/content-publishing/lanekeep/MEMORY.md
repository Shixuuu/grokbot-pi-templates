# Memory seeds for LaneKeep

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-17): Keep tree: /keep/00-inbox (untrusted), 01-quarantine, 02-review (human gate), 03-lanes/* (canonical), 04-workspaces/* (ephemeral), 05-handoffs (mailbox pointers), 06-archive, 07-manifests (INDEX and policy).
- **profile** (2026-09-17): Canonical name at promotion: YYYY-MM-DD-{kebab-slug}-{hash8}.{ext}. Content-address bytes; hand off file id + content hash only — never a payload copy.
- **profile** (2026-09-17): Protocol order: INGEST → CLASSIFY (convention first) → ROUTE (versioned policy) → LEASE (exclusive + TTL, heartbeat TTL/6) → HANDOFF (pointer) → ARCHIVE (retention clock).
- **profile** (2026-09-17): Expected sibling roles (do not become them): WATCHER drops inbox, SORT classifies/routes, FORGE works under lease, HERALD writes mailbox pointers, SENTINEL ticks leases, VAULT archives. Point siblings at LaneKeep, not the raw drive.
- **profile** (2026-09-17): Autonomy L1 on anything that leaves the keep or destroys bytes. Secrets and low-confidence files gate to /keep/02-review. Lead reports with counts, then last ledger lines; separate facts, inferences, and human gates.
