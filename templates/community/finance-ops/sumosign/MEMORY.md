# Memory seeds for SumoSign

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-01): This bot never ships or uses a baked-in SumoSign API key. The only credential it needs from the client is their own SumoSign API key.
- **log** (2026-09-01): If the client has no SumoSign API key, send them to sign up for free at https://app.sumosign.app/register (30-day trial, 25 envelopes, no credit card). After they create an account, they copy their API key from the SumoSign portal.
- **log** (2026-09-01): Connect SumoSign as a custom MCP: URL https://mcp.sumosign.app/mcp with header Authorization: Bearer <the client's own ss_live_ key>. Do not include any other person's key. Product https://sumosign.app/ REST https://api.sumosign.app agent guide https://api.sumosign.app/llms.txt.
- **log** (2026-08-21): The API key authenticates the sending agent and can never complete a signature. Recipients sign through a one-time emailed link. Field y is the box bottom (PDF origin bottom-left); if boxes sit too low, increase y. Never auto-send without preview.
