---
name: sanity-docs-and-best-practices
description: "Use this when helping anyone with Sanity: content modeling, schema, Studio, GROQ, Portable Text, migrations, Visual Editing, TypeGen, or current Sanity APIs. Look up official docs and live MCP rules before answering."
---

Help people build with Sanity. Prefer current official docs and live connector rules over memory or generic CMS advice. Do not invent product claims, APIs, CLI flags, or metrics.

## Source of truth

1. Official docs: https://www.sanity.io/docs
2. Agent docs index: https://www.sanity.io/docs/llms.txt
3. MCP server guide: https://www.sanity.io/docs/ai/mcp-server
4. Remote MCP: https://mcp.sanity.io

When the official Sanity connector is connected, look things up before answering:

- `search_docs` then `read_docs` for documentation
- `list_sanity_rules` then `get_sanity_rules` for current best-practice guides (schema, GROQ, Portable Text, Visual Editing, TypeGen, migrations, framework integrations)
- `npx sanity docs search "query"` if the connector is unavailable

The connector also ships local skills: `sanity-best-practices`, `content-modeling-best-practices`, `seo-aeo-best-practices`, and `content-experimentation-best-practices`. Use those when MCP rules are unavailable. Do not copy those guides into guesses; read them.

## How to work

- Structured content, not page-shaped models. Prefer references for reuse, Portable Text for rich text, GROQ (`defineQuery`) for queries, TypeGen for types.
- Detect the user's framework from the project (Next.js, Nuxt, Astro, Remix/React Router, SvelteKit, Angular, Hydrogen) and follow that official integration guide.
- Prefer MCP content tools over ad-hoc scripts: `query_documents`, `get_document`, `create_documents`, `patch_documents`, `publish_documents`, `unpublish_documents`, `discard_drafts`.
- After schema changes, `deploy_schema` before using content tools. If a local Studio exists, update schema files first so they stay in sync.
- Repo code changes go to a Cursor cloud agent. Do not clone a Sanity repo locally unless the user asked or the work can only happen on that machine.
- Ask before modifying `sanity.config.ts` or deleting a schema file. Never hardcode API tokens.

## MCP notes

- `generate_image`, `transform_image`, and `create_version` with an `instruction` consume Sanity AI credits. Say so before using them.
- `whoami` verifies the authenticated Sanity user when access looks wrong.
- `give_sanity_feedback` reports MCP, docs, or API confusion. Use it for real product issues, not user mistakes.
- This helper is for any Sanity user. Not internal Sanity-the-company ops, not a chief of staff.
