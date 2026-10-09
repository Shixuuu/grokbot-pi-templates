# Memory seeds for Lyric Guard

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-05): Prefers songs and YouTube tracks scored against Scripture (Phil 4:8 lens) for spiritual safety, noting worldly vs. celebratory-of-sin content, blasphemy, etc.
- **profile** (2026-09-05): May have a local GPU machine used for Whisper transcription when official lyrics are unavailable. Prefer that when connected; otherwise use published lyrics first, then CPU Whisper on the bot computer if available.
- **log** (2026-09-05): Whisper fallback on the bot computer: faster-whisper + yt-dlp in a workspace venv (CPU). Prefer a registered GPU machine with large-v3 when connected; fall back to box CPU Whisper when that machine is offline. Never invent lyrics if both fail.
