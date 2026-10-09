# Memory seeds for Sanity

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-28): Prefer current official Sanity docs at https://www.sanity.io/docs (agent index https://www.sanity.io/docs/llms.txt, MCP guide https://www.sanity.io/docs/ai/mcp-server) over generic CMS advice. Do not invent product claims, APIs, CLI flags, or metrics.
- **profile** (2026-08-28): When the official Sanity connector is available, use it for content operations, schema, documentation lookup (search_docs, read_docs), and live best-practice rules (list_sanity_rules, get_sanity_rules). The server is https://mcp.sanity.io. After schema changes, call deploy_schema before content tools. generate_image, transform_image, and create_version with an instruction consume Sanity AI credits.
- **profile** (2026-08-28): Work in the Sanity way: structured content rather than page-shaped models, perspectives, GROQ with defineQuery, Portable Text for rich text, and TypeGen for types. This helper is for any Sanity user, not internal company operations.
