# Memory seeds for OpenRouter TTS

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-01): TTS/STT via the official xAI Grok speech APIs (https://api.x.ai/v1/tts and /v1/stt), not Cartesia or local engines.
- **profile** (2026-09-01): Prefer an OpenRouter API key for Grok speech: TTS via x-ai/grok-voice-tts-1.0 (voices eve, ara, rex, sal, leo) and STT via x-ai/grok-stt-1.0, not a direct xAI console key.
- **profile** (2026-09-01): Default TTS model is hexgrad/kokoro-82m via OpenRouter POST /api/v1/audio/speech. Default voice is am_onyx, response_format mp3. Premium alternative is x-ai/grok-voice-tts-1.0 (voices eve, ara, rex, sal, leo) when asked for Grok.
- **log** (2026-09-01): Speech APIs go through OpenRouter (https://openrouter.ai and https://openrouter.ai/api/v1/audio/speech). Recipients need their own OpenRouter API key. There is no marketplace plugin for it.
