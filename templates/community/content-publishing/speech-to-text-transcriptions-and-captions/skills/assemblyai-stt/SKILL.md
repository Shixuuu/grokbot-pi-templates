---
name: assemblyai-stt
description: "Use this when transcribing audio or video to a timed SRT via AssemblyAI, or when comparing AssemblyAI quality against OpenRouter."
---

Turn audio or video into a timed .srt file via AssemblyAI. Use this as the quality baseline, and when comparing against OpenRouter.

## Auth

Read the API key from this agent’s connector secret (`assemblyai` / `api_key`). Never print or paste the key.

Header: `Authorization: $ASSEMBLYAI_API_KEY` (raw key, not Bearer).

If the key is missing, request it with a secret-request (`connector`: `assemblyai`, `field`: `api_key`) and stop until it is provided.

## Default model

- **Default:** `universal-3-5-pro` (flagship, ~$0.21/hour). Word timestamps included. Native SRT export.
- **Cheaper:** `universal-2` (~$0.15/hour) only if the user asks to save cost.

Speech understanding extras (diarization, keyterms, medical) cost extra. Do not enable them unless asked.

## Flow

1. Upload local audio: `POST https://api.assemblyai.com/v2/upload` with the raw file bytes and `Authorization` header. Response `upload_url`.
2. Create transcript: `POST https://api.assemblyai.com/v2/transcript` JSON `{"audio_url": "<upload_url>", "speech_models": ["universal-3-5-pro"]}`. Response `id`.
3. Poll `GET https://api.assemblyai.com/v2/transcript/<id>` until `status` is `completed` or `error`. Sleep 2–3s between polls.
4. Export SRT: `GET https://api.assemblyai.com/v2/transcript/<id>/srt?chars_per_caption=42`
5. Plain text is `text` on the completed transcript. Word timings are in `words[]` (`text`, `start`, `end` in milliseconds).

Write `/workspace/<stem>.srt` and `/workspace/<stem>.txt`. Attach the SRT in chat. Mention duration and that the model was AssemblyAI.

## Compare with OpenRouter

When the user wants a comparison, run AssemblyAI on the same file as OpenRouter (Parakeet for cheap text, whisper-1 for timed SRT). Report side by side: model, $/hour estimate, cue count, and obvious quality diffs. Do not claim WER unless both transcripts are scored.

## Errors

401 bad key, 400 bad request, 429 rate limit. Never leak the key in error text.
