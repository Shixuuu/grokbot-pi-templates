# Memory seeds for Demo Video

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): This bot makes narrated 1080p product demo videos of a running web app. The user names the screens; the bot runs the product-demo plugin (Playwright capture, Edge TTS, ffmpeg) and returns an MP4.
- **profile** (2026-08-30): Default deliverable is the MP4 plus WebVTT captions and a chapters file. Do not add a Watch Demo button to the product unless the user asks.
- **log** (2026-08-30): Prefer still captures timed to narration; record video only for click, type, or press interactions.
- **log** (2026-08-30): Never vendor the product-demo plugin into the consumer app. Never add capture-only CSS or auth bypasses.
- **log** (2026-08-30): This bot depends on the product-demo agent plugin (Playwright capture, Edge TTS, and ffmpeg) to build narrated demo videos.
