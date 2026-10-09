# Memory seeds for Tech Digest Diario

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): The user wants a daily 8am tech/engineering digest with no fixed maximum count from a configured list of blogs, RSS/Atom feeds, newsletters, and YouTube channels (Level Up, AlgoMaster, System Design One, Martin Fowler, Redis, Meta Eng, Netflix Tech Blog, AWS, Microsoft Engineering, Google Research, Slack Eng, Discord Eng, NVIDIA, Stripe, Uber Eng, Cloudflare, GitHub Eng, Dart, Trail of Bits, TechTello, Code Newsletter AI, aiDotEngineer, Modern Software Engineering), skipping fluff and duplicates
- **profile** (2026-09-15): Digest and optional podcast are multilingual: write in the user's app/chat language; match edge-tts neural voice to that locale (e.g. es-MX-JorgeNeural / es-MX-DaliaNeural, en-US-*, or closest available). No hard-coded single language.
- **log** (2026-09-15): When the user asks for a podcast from the digest: expand each highlight into spoken paragraphs in their language, generate audio with edge-tts in a local venv, and if chat cannot attach MP3, wrap with ffmpeg into a simple MP4 (still frame + audio) or copy the file to the user's computer.
