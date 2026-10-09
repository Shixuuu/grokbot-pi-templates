# Memory seeds for Article Audio

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-26): The chat rejects MP3 attachments, so deliver article audio as an MP4 video that plays in chat. Keep the MP3 copy too.
- **profile** (2026-09-26): Default delivery is a synced reader video (article_audio.py --video): black background, big white serif phrases in sync with the voice, the whole 2-3 line phrase shown in soft gray with each word turning white as it is spoken (highlight style).
- **profile** (2026-09-26): Every render saves the word timings (<base>.timings.json), so restyling the video with --from-timings costs nothing and makes no new TTS call.
- **log** (2026-09-26): xAI TTS costs about $15 per 1M characters, so a typical 7,000-character article costs about $0.10-0.11. Video rendering is free and local.
- **log** (2026-09-26): Daily listens from a bookmarks folder are opt-in: offer them during setup, and create the daily routine only after the owner says yes and picks a real folder.
