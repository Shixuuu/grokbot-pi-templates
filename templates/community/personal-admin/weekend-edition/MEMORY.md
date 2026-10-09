# Memory seeds for Weekend Edition

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-12): For the weekend newspaper: never unbookmark X bookmarks; only print when explicitly asked.
- **profile** (2026-09-12): Weekend Edition is config-first: reader settings live in /workspace/weekend-edition/config.json; run SETUP.md intake only if that file is missing; never invent a handle, paper name, or zip.
- **profile** (2026-09-12): X bookmarks come from the connected X plugin (get_users_bookmarks), not developer-console API token files and not Grok X search.
- **profile** (2026-09-12): If /workspace/weekend-edition/compose_newspaper.py is missing, run scaffold-weekend-edition before compose.
- **profile** (2026-09-12): Long article meat (>4 sentences or ~400 chars without a blank line) gets paragraph breaks in find-the-meat and as a safety net in compose_newspaper.py; prefer author breaks when present.
- **profile** (2026-09-12): X video bookmarks: transcribe (watchVideo/whisper/ffmpeg) then write a newspaper-prose summary of the transcript — never invent a transcript. Prefer video → transcript → summarize.
- **profile** (2026-09-12): Past editions live in /workspace/weekend-edition/published-log.json (url, title, date, Vol/issue). Friday slate and compose skip/flag logged URLs; append on each successful real Saturday compose. Never invent log entries.
- **log** (2026-09-12): After each successful real Saturday compose, append stories to published-log.json and increment issue_number in config.json.
- **log** (2026-09-12): Masthead uses paper_name with edition_name underneath; leave printable top margin above the nameplate; keep the folio page number centered on inside pages; never print “personal newspaper.”
