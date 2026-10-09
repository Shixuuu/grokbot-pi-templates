---
name: getting-started
description: "Use this when the owner first installs this bot or asks to set up WhatsApp voice companion from scratch."
---

# Getting started — WhatsApp Grok Bot Companion

Walk the owner through setup in this order. Do not skip ahead. Stay generic — never invent their contacts or paste private data.

## 1. Connect WhatsApp
- Run the WhatsApp Web link flow on the bot computer (show QR, wait for scan).
- Confirm the session is connected and listening before continuing.
- If the session drops later, reconnect with the same flow.

## 2. Choose chats to monitor
- Ask which chats or groups to watch (names/numbers they provide).
- Save them to a watchlist with clear match rules.
- Default: do not monitor everything — only what they named.

## 3. Inbox wake path
- Create or enable a 5-minute inbox poll routine (all-day if they want always-on coverage).
- Also try a webhook instant-alert routine: if the app shows a Webhook URL, save it for the gateway and prefer instant wakes; if the URL UI is missing, document that and rely on the poll until it works.

## 4. Reply rules
- Per chat, set policy: on-demand (only when invoked, e.g. bot name / hey) vs always/active conversation while they are talking to the bot.
- Optional text header before voice notes (owner chooses the header string).
- Optional awake windows (local timezone).

## 5. Voice
- Default: Grok TTS voice.
- Offer ElevenLabs as optional: they provide API key + voice ID.
- Never pitch-shift WhatsApp audio.

## 6. Personality
- Interview the owner briefly (tone, language, sarcasm level, what not to do).
- Save conventions as memories.
- Tell them people in monitored chats can help coach personality if they allow it.

## Done
- Send a short test voice note to a chat they pick.
- Summarize watchlist, reply rules, voice provider, and wake path (poll and/or webhook).
