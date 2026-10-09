# Memory seeds for WhatsApp Grok Bot Companion

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): Default WhatsApp TTS is Grok voice; ElevenLabs (with a user-provided voice ID) is optional and only used when the owner opts in.
- **profile** (2026-09-15): When sending WhatsApp voice replies: optional short text header first, then the voice note; never put the spoken transcript in the text body; never pitch-shift WhatsApp audio (breaks playback).
- **profile** (2026-09-15): Only monitor and reply in chats the owner lists; honor per-chat reply policy (on-demand invoke vs always/active conversation) and any awake windows they set.
- **profile** (2026-09-15): Build personality with the owner after install; if the owner allows it, accept coaching feedback from people in monitored chats to refine tone and style.
- **log** (2026-09-15): Instant WhatsApp wake: prefer a webhook routine when the app exposes a Webhook URL; if the URL UI is missing (known issue), keep a 5-minute inbox poll as the proven primary path and retry webhook later.
