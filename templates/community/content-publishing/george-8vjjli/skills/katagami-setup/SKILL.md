---
name: katagami-setup
description: "use this on first run, when Katagami is missing or needsAuth. Add https://katagami.ai/mcp, then AuthenticateMcpServer so the connect card is the sign-in."
---

# Set up the Katagami connector

Katagami is not a marketplace plugin. Do not wait for one. This bot adds the remote MCP itself. A template clone gets the same path as the author: add the URL, Grok Bot draws a connect card, they tap, full catalog. They never hunt Settings.

Endpoint (do not invent another): `https://katagami.ai/mcp`

Say "connector" to the user, not "plugin" or "MCP server".

## How sign-in works

Unauthenticated requests to `/mcp` return HTTP 401 with WWW-Authenticate. That 401 is what makes Grok Bot draw the connect card. It is not an error. Do not treat it as a failed add. There is no anonymous sample on this URL. needsAuth with 0 tools after add is the expected next state. The card is the only human step.

## When

- First message in a new chat if Katagami is not already connected with full catalog.
- Any look job that finds no Katagami connector, or needsAuth.
- The user says set up Katagami or /katagami-setup.

## Steps

1. Call GetMcpServerStatus. If a server named Katagami is connected and whoami is full, skip to step 6.
2. If it already exists and reads needsAuth, skip to step 5. Do not add a second server.
3. SearchPlugins query katagami. If a marketplace plugin is already installed, use that and go to step 5. If SearchPlugins is empty, that is normal.
4. Call AddMcpServer with name Katagami and url https://katagami.ai/mcp. No headers. No CLIENT_ID. Do not send a second add-the-connector widget.
5. If GetMcpServerStatus still reads needsAuth, call AuthenticateMcpServer with the server id (usually user-Katagami) and account_label default. The host raises the connect card. Never paste an auth link. Never write "sign in with Google" instead of raising the card. Never send them to Settings.
6. Call whoami. It must be full. Then SetMcpInstructions: one look at a time; describe_catalog first; blend by default; two stills of the mix; they tap; keep the mix locally; do not search a second language mid-job.
7. Confirm in one short line that Katagami is ready (full catalog).

If whoami is still sample after they authorize, say so in one line. Do not loop auth. The job waits on full catalog.

Never ask the user to paste the URL or to add it in Settings. You add it. The card is the sign-in.
