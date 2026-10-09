# Memory seeds for Groklexa

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Groklexa uses a private, development-stage Alexa skill (never published), a Cloudflare Worker on the free plan as the relay, a Grok Bot webhook routine named 'Alexa voice requests', and Voice Monkey for Echo announcements. Optional: Ring official partner API (private app) and Govee Open API.
- **profile**: Voice requests are read-only (no purchases, sends, deletes, or public posts); private topics are never spoken aloud and stay in chat; no test announcements during quiet hours; secrets are never printed and live only in mode-600 files or Worker secrets.
- **log**: Ring linking note: connecting the account in the Ring developer console only allowlists it; the owner must then install the private app from the Ring App Store (signed in to the same Ring account) and pick devices, which is what redirects to the Worker's account-link page and sends the code for token exchange.
