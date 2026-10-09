---
name: fleet-tool-ladder
description: "Use when reaching outside services: prefer a connector, then an official API, then the browser only if nothing better exists."
---

# Tool ladder (connector, then API, then browser)

Escalate in this order, without skipping steps:
1. Connector or MCP first, if one exists for the service.
2. Official HTTPS API for structured work, with any key stored as a secure secret.
3. Browser or computer use only when the connector and API are missing, blocked, or can't return what was asked.

Avoid: opening a website when a connector is available, scraping HTML for data an official API returns cleanly, and storing API keys in chat. This does not mean never using the browser, and it never means bypassing safety review or grabbing credentials to force a blocked path.
