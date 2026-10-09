---
name: openrouter-stt
description: "Use this when transcribing audio or video into a timed SRT caption file via OpenRouter speech-to-text."
---

Turn audio or video into a timed .srt file via OpenRouter transcription.

## Auth

Read the OpenRouter API key from this agent’s connector secret (`openrouter` / `api_key`). Never print or paste the key.

`Authorization: Bearer $OPENROUTER_API_KEY`

If the key is missing, request it with a secret-request (`connector`: `openrouter`, `field`: `api_key`) and stop until it is provided.

## What actually works (verified 2026-09-01)

- **`nvidia/parakeet-tdt-0.6b-v3` is text-only on OpenRouter.** `response_format=verbose_json` returns 400: model does not support verbose_json. Cheap (~$0.09/hr) but **cannot make SRT**.
- **`openai/whisper-large-v3`** returns `verbose_json` segments and is very cheap, but segments are long paragraphs with dropped phrases. Not caption-usable without word-level reflow.
- **Timed SRT default:** `openai/whisper-1` with `timestamp_granularities: ["word","segment"]`, then pack words into ~42-char / ~5s cues. ~$0.36/hr, more than AssemblyAI Universal-3.5 Pro ($0.21/hr).
- **Quality baseline for captions:** AssemblyAI `universal-3-5-pro` (see AssemblyAI STT skill). Native SRT export, short cues. Prefer this when the user wants captions they can burn.

Do **not** use `openai/gpt-transcribe`, `openai/gpt-4o-transcribe`, or `openai/gpt-4o-mini-transcribe` for captions. They return text only, no timestamps.

## Endpoint

`POST https://openrouter.ai/api/v1/audio/transcriptions`

`response_format` must be `verbose_json`. Native `srt`/`vtt` is rejected (400). Build SRT yourself from `words` (preferred) or `segments`.

`verbose_json` timestamps only work on OpenAI, Groq, and Together. Other providers 400. Do not rely on `provider.order` / `only` — the STT endpoint ignores them.

## Prepare the file

1. Copy the user’s audio/video onto the box if needed.
2. If it is video, extract audio with ffmpeg: `ffmpeg -y -i input -vn -ac 1 -ar 16000 -c:a libmp3lame -b:a 64k /workspace/stt-audio.mp3`
3. Platform caps: multipart **25 MB**; ~**60s upstream processing timeout** — split long files into ~5–10 min compressed chunks. Offset timestamps when stitching.
4. No audio URLs. Send base64 JSON or multipart file only.

## Request (word-level SRT)

```json
{
  "model": "openai/whisper-1",
  "input_audio": { "data": "<raw base64, not a data URI>", "format": "mp3" },
  "language": "en",
  "response_format": "verbose_json",
  "timestamp_granularities": ["word", "segment"]
}
```

Multipart (`-F file=@clip.mp3`) is fine under 25 MB. Pass `language` only if the user named one.

## SRT from `words`

Pack `words` into cues of ~32–42 characters or ~4–7 seconds, or a pause >0.6s. Cue start = first word `start`, end = last word `end`.

```python
def srt_ts(sec: float) -> str:
    ms = int(round(float(sec) * 1000))
    h, ms = divmod(ms, 3_600_000)
    m, ms = divmod(ms, 60_000)
    s, ms = divmod(ms, 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"
```

If only `segments` exist, emit those but warn the user if cues are longer than ~7s.

Write `/workspace/<stem>.srt` and attach that file in chat. Mention model, duration, and `usage.cost` if present.

## Compare with AssemblyAI

When asked to compare, run AssemblyAI Universal-3.5 Pro on the same file (see AssemblyAI STT skill) and report cue count, cost, and wording diffs. Do not claim Parakeet produced the SRT.

## Errors

401 invalid key, 402 no credits, 400 `verbose_json` unsupported on that model/provider, 404 unknown model, 413 file too large, 429 rate limit, 502 upstream. Retry 429/502 with backoff. Never leak the key in error text.
