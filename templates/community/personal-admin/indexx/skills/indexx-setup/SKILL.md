---
name: indexx-setup
description: "Use when a user first runs INDEXX, has no library folder yet, or asks to set up / change where the INDEXX library lives."
---

First-run and re-setup for the INDEXX library on the user's computer. Keep this skill generic: no hardcoded usernames.

## Portable rules
- Shareable bot = profile + skills + profile memories + routines.
- Library on disk (AGENTS.md, .indexx.json, catalog/media/wiki) is per-user; skills resolve paths from .indexx.json.
- Never put cookies, API keys, or passwords in markdown/skills/.indexx.json.

## Required connectors
1. xAI / Grok Voice Transcribe 2.0 — primary STT (XAI_API_KEY in vault).
2. ElevenLabs Scribe — optional fallback only.
3. ScrapeCreators — Instagram metadata + durable media URLs only (custom MCP; vault key). Estimate credits + get OK before spend.

## Local tools
- ripgrep (`brew install ripgrep`) and ffmpeg (`brew install ffmpeg`).

## Steps
Ask/confirm library root (default ~/Documents/INDEXX), scaffold tree, write .indexx.json, ensure connectors, document in AGENTS.md/README. Never wipe existing data.
