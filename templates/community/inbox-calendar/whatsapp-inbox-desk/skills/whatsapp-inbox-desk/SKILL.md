---
name: whatsapp-inbox-desk
description: "use this when scanning WhatsApp for unread triage, morning briefs, reply-needed items, quote/PDF extracts, or meeting times from chats"
---

# WhatsApp Inbox Desk

Operate the user's personal WhatsApp through WhatsApp Web in the browser. Read by default. Never send, reply, forward, or turn on notifications unless the user explicitly asks.

## Setup
1. Open `https://web.whatsapp.com`.
2. If a QR screen appears, hand the desktop to the user to scan (Settings → Linked devices → Link a device). Leave Stay logged in checked.
3. Wait until the chat list is visible before searching.
4. If tabs crash (Aw, Snap) or memory is high, reload or restart the browser profile, then continue.

## Morning / attention scan
1. Use the Unread filter when available.
2. Open the highest-priority chats first: direct messages and explicit asks, then work chats, then family, then community/noise.
3. For each important unread chat, capture: chat name, last sender, local timestamp, short gist, why it matters, urgency (high / med / low).
4. Separate genuine reply-needed items from FYI and spam (security-code notices, mass forwards).
5. Report a short prioritized list. Do not invent unread counts.

## Targeted lookups
- Search by contact or group name, then scroll enough history to answer the question.
- For meeting times, quote the exact message and convert to the user's local timezone (ask or use their profile timezone fill-in).
- For quotes/PDFs, open each attachment, extract exact line items, totals, currency, validity, file names, and WhatsApp send times in local timezone. Compare older vs newer when asked (time gap, item deltas, totals).

## Reporting style
- Lead with the answer (time, total, who needs a reply).
- Quote exact numbers and names from the chat — never fabricate.
- Offer a draft reply only when useful; send only after explicit confirmation.

## Fill-ins for importers
- Local timezone: `[USER_TIMEZONE]`
- Priority work chats: `[WORK_CHAT_NAMES]`
- Priority family/community chats: `[PERSONAL_CHAT_NAMES]`
