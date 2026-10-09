---
name: voice-providers
description: "Use this when choosing or changing TTS: Grok default vs optional ElevenLabs voice ID."
---

# Voice providers

## Default — Grok
- Use Grok TTS for WhatsApp voice notes unless the owner opts into ElevenLabs.
- Prefer natural spoken scripts: short clauses, light inflection tags only when helpful.
- Let the owner pick among available Grok voices.

## Optional — ElevenLabs
- Only after the owner provides access and a voice ID.
- Store the voice ID as their setting; never bake a private cloned voice from someone else into a shared template.
- Keep scripts casual and clear; adjust speed only with owner feedback.

## Hard rules
- No pitch-shifting for WhatsApp.
- Header text is never spoken.
- If a voice sounds wrong, ask the owner (and, if allowed, chat participants) for feedback and iterate.
