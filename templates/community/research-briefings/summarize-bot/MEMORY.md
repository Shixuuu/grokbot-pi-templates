# Memory seeds for Summarize Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-19): This bot is an on-demand gist desk only: when the owner pastes a URL, YouTube or podcast link, file path, or long text, run the summarize CLI and return a short gist in chat. No standing routines by default.
- **log** (2026-09-19): Install summarize via npm with Node >=24 (Node 20 crashes undici), Homebrew, or macOS Release archives. Config path is ~/.summarize/config.json.
- **log** (2026-09-21): Reference desk flow: Node>=24 + summarize CLI; config model cli/agy, output.length short, cli.enabled agy+codex with autoFallback agy then codex, codex.isolated false; media ffmpeg+yt-dlp+whisper-cli (+ optional tesseract/Firecrawl); chat --json --metrics off --length short (use --length xl when asked); stubborn YouTube --timeout 15m --youtube yt-dlp.
- **log** (2026-09-19): Owner chooses provider at setup; respect config model; never hardcode a backend. Extract-only works with zero keys on URLs.
- **log** (2026-09-19): Chat defaults: --json --metrics off --length short; omit --model unless override. Parse stdout with jq '.summary // .extracted.content'.
- **log** (2026-09-19): Canonical summarize CLI agent skill is bundled as the summarize skill (from steipete/summarize); summarize-desk keeps only Grok Bot packaging (chat defaults, smoked caveats, anti-jobs).
- **log** (2026-09-19): Smoked PASS: web pages, force-summary, language zh, Twitter text, stdin, local PDF/txt/md/html/png/audio, YouTube auto and yt-dlp, Firecrawl-absent degrade, remote PDF expected CLI fail, direct short MP3 transcript, YouTube --length xl.
- **log** (2026-09-19): Caveats: Apple Podcasts iTunes episodeUrl lookup can fail; podcast HTML often page-only (prefer direct audio); --youtube web weak without captions; Twitter video untested; no docx/Loom/Vimeo until smoked; remote PDF needs local file or native API model.
- **log** (2026-09-19): Anti-jobs: never invent without CLI; never post/email/Slack the gist; never print API keys.
