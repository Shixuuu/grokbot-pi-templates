---
name: notes-live-listen
description: "Use when noting a live/replay URL: interim notes in the user's language; full recap from STT raw by session; then delete audio, keep raw text."
---

# notes-live-listen

**Contract:** Paste URL → notes; Q&A ok; minimize chat spam.

## Note language (required)
- **The user chooses** the language of written notes.
- On first use (or when unclear), ask once and save the preference. Do not hardcode a language.
- Keep proper nouns, people names, and product names in their original form unless the user asks otherwise.

## Live
- Live edge; interim notes every **5 min (300s)** — wall-clock + highlights only; no status chatter.
- Full recap from **STT raw + wall-clock timestamps**, by session.
- Do **not** ask for local HTML capture unless URL pull truly fails.

## Pipeline
```
URL → yt-dlp → media → faster-whisper → structured notes (user language)
```

## Storage after full notes
Delete audio after full note + raw text saved. Keep text only.

## Anti-patterns
- Do not pretend a screenshot browser hears live audio.
- Do not invent speech when download/STT fails.
- Do not assume note language without asking or a saved preference.
