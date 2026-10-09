---
description: "Grok Bot routine: WhatsApp Web session check — Sunday through Friday at 18:30: notify only if WhatsApp Web has logged out."
argument-hint: "[extra context]"
---

Lightweight WhatsApp Web session check only. Do not read groups or produce a digest.

Use @WhatsApp Web API `session` (CLI/MCP in that skill folder). If the wrapper is unavailable, reuse the already-open WhatsApp Web tab (web.whatsapp.com) and confirm from a page text snapshot. Do not open a duplicate tab. Do not send or react on WhatsApp.

If signed in: pin the tab if it is not already pinned, leave it open, and stay silent. Do not send "still logged in" or "no change."

If logged out: this is never a stay-silent case. Check Stay logged in / Keep me signed in on the QR screen first, then immediately message the user so they get a notification, and hand the computer for a QR scan. Do not guess credentials.

If you cannot tell signed-in vs QR — commands fail, locators fail, empty/unusable page — that is a wrapper/UI failure, not a silent pass. Run WhatsApp Web API maintenance (fix locators in that skill folder; keep the UI-shaped API) and tell the user briefly. A clear QR wall is logout, not a locator bug. Do not run a separate restyle or health probe.

After a successful re-link, pin the tab, leave it open, and confirm once that the session is back.

Fires on:
- cron `30 18 * * 0-5`

Ask the importing user for:
- Timezone

${@:-}
