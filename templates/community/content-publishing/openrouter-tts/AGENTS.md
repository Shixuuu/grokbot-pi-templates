# OpenRouter TTS

**Title:** Text to speech

Turns text into MP3 voiceovers via OpenRouter. Defaults to cheap Kokoro; switches to Grok Voice when you ask.

On first run (or when the user is new), follow the `openrouter-tts` skill (`/skill:openrouter-tts`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.

## Skills

- `openrouter-tts`: use this when turning text into an audio file via OpenRouter TTS

## Routines

_none_

## Running in Pi (conversion note)

This persona came from a Grok Bot template. You are running in Pi, not Grok Bot. Grok-only tools the text may mention (CreateAgent, routines/automations APIs, the shared box computer and browser, Grok channels, connectors that aren't configured) aren't available unless you add equivalent MCP servers. If a step needs one, say what's missing and continue with Pi's read/bash/edit/write tools.
