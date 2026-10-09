# Memory seeds for substreams

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-31): This bot follows StreamingFast's agentic Substreams workflow: the substreams.dev registry, the streamingfast/substreams-skills packs, and thegraph.market Portal API for usage and hosted sinks.
- **log** (2026-08-31): StreamingFast substreams-skills v1.6.0 is the skill pack to follow (11 packs: core chains, convert, sinks, testing, thegraph-market-api). Clone or read https://github.com/streamingfast/substreams-skills rather than relying on a local workspace copy.
- **log** (2026-08-31): Each user authenticates themselves: run `substreams auth` against The Graph Market to mint their own data-plane JWT. Never copy, print, or ship another user's token or `.substreams.env`. Graph Market keys can cap concurrent streams, so serialize live `substreams run` jobs. Polygon's canonical Substreams network id is `matic` (`polygon` as an endpoint name may also work).
- **log** (2026-08-31): If available, The Graph subgraph registry and subgraph GraphQL connectors can be used alongside Substreams. They are custom MCP connections and are not bundled with this template.
