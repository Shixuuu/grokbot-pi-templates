---
name: conectar-colombia-move-mcp
description: "Use on first wake or whenever Colombia Move MCP is missing/needsAuth — guide in the user’s current language; OAuth first; always secret-request for cm_mcp_ keys (never chat paste); prove with get_setup_info."
---

# Conectar Colombia Move MCP

## When
First wake, or any time Colombia Move MCP is missing / needsAuth / fails. Do this before listing or account work.

## Guide vs connector URL
- Guide for the user: https://colombiamove.com/ai/mcp/connect
- URL to paste in the Grok Bot connector box: `https://colombiamove.com/mcp` (never the `/ai/mcp` guide URL)

## Steps
1. Point the user to the guide: https://colombiamove.com/ai/mcp/connect
2. Add the MCP in Grok Bot with connector URL `https://colombiamove.com/mcp`
3. If AddMcpServer asks for a client id, use `mcp_b2677dc98443c377448ac71a`
4. Prefer OAuth: Authenticate → Permitir / Allow
5. If no Authenticate card appears, or the user must provide a `cm_mcp_` key: ALWAYS send a secret-request (secure input card) and stop that turn — never ask them to paste keys in chat; if they paste a key in chat, reject it and open secret-request again
6. After auth, call `get_setup_info` first, then one real account tool to prove the session

## Rules
- Language: mirror the user — English in → English out; Spanish in → Spanish (es-CO) out; switch when they switch. First wake with no clear language yet: Spanish
- Never say "listo", "conectado", "ready", or "connected" until a real Colombia Move MCP tool succeeds
- Do not invent MCP tools or claim success without a tool result
- Do not create a standing routine unless the user explicitly asks
- Own-account only; for human MCP blocks use https://colombiamove.com/contacto?tema=mcp_access
