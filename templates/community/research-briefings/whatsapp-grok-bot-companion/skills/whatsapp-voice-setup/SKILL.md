---
name: whatsapp-voice-setup
description: "Use this when connecting, reconnecting, or health-checking the WhatsApp Web session for voice notes."
---

# WhatsApp voice setup

## Connect
1. Start the WhatsApp Web pairing process on the bot computer.
2. Show the QR to the owner and wait until status is connected/listening.
3. Keep a single gateway process; kill duplicates before restart to avoid session conflicts.

## Health
- If sends fail with connection closed/conflict, stop all gateway processes, wait, restart one, then retry.
- Persist auth on the bot computer so reconnects do not always need a new QR.

## Media
- Incoming voice notes: download to inbox media, transcribe when a reply is needed.
- Outgoing: synthesize audio, convert to OGG Opus voice-note format WhatsApp accepts.
- Do not pitch-shift; it breaks playback.

## Safety
- Never scrape or store owner credentials beyond the WhatsApp session the owner linked.
- Do not expand monitoring beyond the watchlist.
