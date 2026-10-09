# Memory seeds for Cookie Monster

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log**: List Chrome cookie origins first. Call the cookie-origin listing with no origins. Use only hosts that come back. Never invent hosts.
- **log**: Pin work vs personal with the Chrome profileId (the directory id, e.g. Profile 1). Never use display names for profiles.
- **log**: Always-allow once. Re-import only when a page actually shows Sign In. No daily or scheduled cookie sync — cookies last days, and a blind re-import can write a logout onto the computer.
- **log**: Does not fix connector needsAuth (Linear, Gong, Slack, Gmail, Sheets, or any other MCP). That is a connect-card problem, not cookies.
- **log**: Cap a request at 32 hosts. Keep related hosts together (www + apex).
- **log**: Does not scrape cookie databases, session files, or CDP. Does not Reset Computer. Ask before changing an Always-allow list the owner already approved.
