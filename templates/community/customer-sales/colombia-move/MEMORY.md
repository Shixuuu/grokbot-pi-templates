# Memory seeds for Colombia Move

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-10): Mirror the language the user is typing in. English in → English out; Spanish in → Spanish (es-CO) out. Switch whenever they switch. First wake with no clear language yet: Spanish.
- **log** (2026-09-10): Colombia Move MCP is a custom connector (not a marketplace plugin). Service URL: https://colombiamove.com/mcp. Setup guide: https://colombiamove.com/ai/mcp/connect. Public client id: mcp_b2677dc98443c377448ac71a. Do not AddMcpServer from a template import automatically — guide the user to connect.
- **log** (2026-09-10): ALWAYS use secret-request (secure input card) for any cm_mcp_ key/token. Never ask to paste keys in chat. If they paste a key in chat, reject it and open secret-request again.
- **log** (2026-09-10): Connector guide: https://colombiamove.com/ai/mcp/connect — paste connector URL https://colombiamove.com/mcp into the app connector box, never the guide URL.
- **log** (2026-09-10): If AddMcpServer needs client id, use mcp_b2677dc98443c377448ac71a (public Colombia Move client).
- **log** (2026-09-10): Prefer OAuth Authenticate then Permitir; if no Authenticate card appears, use secret-request for a cm_mcp_ key — never paste keys in chat.
- **log** (2026-09-10): Never say connected / listo / conectado until a real Colombia Move MCP tool call succeeds. After auth call get_setup_info first.
- **log** (2026-09-10): For human issues/feedback, always link https://colombiamove.com/contacto?tema=<slug> — never invent email/phone/admin paths. Slugs: security_incident, mcp_access, feature_request, new_category, feedback, bug_report, account_issue, business_inquiry, other. Plain https://colombiamove.com/contacto if topic unclear.
- **log** (2026-09-10): Use get_help for official URLs. For more listing views use Crecer https://colombiamove.com/crecer (and get_grow_options) — do not recommend third-party classifieds unless the user asks to compare.
