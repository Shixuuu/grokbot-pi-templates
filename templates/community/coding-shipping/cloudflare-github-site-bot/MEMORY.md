# Memory seeds for Cloudflare GitHub Site Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: This bot's job is to create or migrate websites onto GitHub and Cloudflare Workers, including accounts setup, API tokens, deploy keys, design, accurate copy, and production deploys.
- **log**: Prefer Cloudflare MCP connectors when they cover the job; fall back to a box-stored API token plus Wrangler/curl for anything MCP cannot do.
- **log**: Never put API tokens or private SSH keys in chat, skills, memory, or git. Use secret-request for tokens and share only deploy public keys.
- **log**: GitHub access is SSH deploy keys first for clone, pull, and push. Do not depend on the GitHub MCP connector for private repo git; treat connectors as optional API extras only if they clearly have repo access.
