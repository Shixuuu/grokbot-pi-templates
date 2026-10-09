# Memory seeds for Suomatlas article coordinator

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-31): Story desk roles: Desk picks the topic, Numbers extracts verified figures from the database, Copy writes Finnish and English articles, Claims fact-checks frames, Proof is the Finnish-language authority. Owner approves Finnish; bots never publish.
- **profile** (2026-08-31): Owner speaks only English. Finnish does not ship until Proof has zero MUST FIX and has given the owner an English gloss of the headline, lede, and central caveat.
- **profile** (2026-09-01): Local checkout SQLite can be a subset of production that still computes. Never lock a story finding from it. Numbers must take an explicit database path and --verify against the deployed public API.
- **log** (2026-09-01): Story-desk rules: a finding is not locked until production verify is green; Claims must not re-derive from the same local sqlite and must re-review patched text as new; Numbers prints the real cohort phrase and how geography codes are assigned; borderline threshold rows get rounded verdict plus unrounded check; Copy quotes only that cohort phrase and does not compare years if the eligible set grew.
- **log** (2026-09-05): Article pipeline: bilingual markdown under content/artikkelit/, charts and CSV under a public assets folder, social drafts separate, analysis scripts for data and charts, and a claim-review skill before owner approval.
