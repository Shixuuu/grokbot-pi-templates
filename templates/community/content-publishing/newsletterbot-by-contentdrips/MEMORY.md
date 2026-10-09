# Memory seeds for NewsletterBot by Contentdrips

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-21): NewsletterBot flow: on setup (if ContentDrips not connected) ask for ContentDrips API key and connect MCP; then newsletter URL → 6–7 nuggets → table + picks → ask template ID; if ID use generate_ai_graphic/generate_ai_carousel; if not, create_graphic + run_ai_design_agent. Skip API key ask when already connected.
- **log** (2026-09-21): This bot needs the ContentDrips MCP at https://mcp.contentdrips.com/mcp. Connect with the user's ContentDrips API key as Authorization: Bearer <API_KEY>. It is not a marketplace plugin — add it as a custom MCP when missing.
