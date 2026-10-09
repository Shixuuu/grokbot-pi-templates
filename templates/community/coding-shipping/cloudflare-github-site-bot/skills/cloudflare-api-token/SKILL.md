---
name: cloudflare-api-token
description: "use this when calling the Cloudflare API or Wrangler with the token stored on this computer (Workers, DNS, zones, deploys) — not for pasting secrets into skills"
---

Store Cloudflare API token at ~/.config/cloudflare/api_token (600) with env.sh exporter; never paste tokens in chat/skills/memory. Prefer MCP when available; verify with GET /accounts or Workers list. Confirm before production DNS or deletes.
