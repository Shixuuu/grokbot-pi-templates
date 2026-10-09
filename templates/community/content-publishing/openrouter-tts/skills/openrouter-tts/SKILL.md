---
name: openrouter-tts
description: "use this when turning text into an audio file via OpenRouter TTS"
---

Generate speech audio from text with OpenRouter.

## Auth

Read the OpenRouter API key from this agent's connector secret (`openrouter` / `api_key`). Never print or paste the key.

`Authorization: Bearer $OPENROUTER_API_KEY`

## Default (cheap)

- Endpoint: `POST https://openrouter.ai/api/v1/audio/speech`
- Model: `hexgrad/kokoro-82m`
- Voice: `am_onyx` unless the user names another
- `response_format`: `mp3`

Kokoro voices include: `af_alloy`, `af_aoede`, `af_bella`, `af_heart`, `af_jessica`, `af_kore`, `af_nicole`, `af_nova`, `af_river`, `af_sarah`, `af_sky`, `am_adam`, `am_echo`, `am_eric`, `am_fenrir`, `am_liam`, `am_michael`, `am_onyx`, `am_puck`, `am_santa`, `bf_alice`, `bf_emma`, `bf_isabella`, `bf_lily`, `bm_daniel`, `bm_fable`, `bm_george`, `bm_lewis`, and others listed on the model page.

## Premium (only if asked)

- Model: `x-ai/grok-voice-tts-1.0`
- Voices: `eve`, `ara`, `rex`, `sal`, `leo`

## Request

```json
{
  "model": "hexgrad/kokoro-82m",
  "input": "<text>",
  "voice": "am_onyx",
  "response_format": "mp3"
}
```

Success is raw audio bytes. Write the body to a `.mp3` file. Do not call `response.json()`. Attach the file in chat.

## Errors

401 invalid key, 402 no credits, 404 unknown model, 429 rate limit, 502 upstream. Retry 429/502 with backoff. Never leak the key in error text.
