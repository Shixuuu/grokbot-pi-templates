---
name: video-to-transcript-pipeline
description: "Use this when converting YouTube, Instagram, TikTok, X, or other video URLs into accurate transcripts or captions, including choosing an output preset."
---

Community-proven steps for powerful, low-bug transcription (as of 2026-09).

## 0. Output presets (ask once if unclear, then deliver)
Default to `plain` unless the user names another mode. Supported presets:
- `plain` — clean readable transcript only
- `timestamped` — transcript plus SRT and VTT files
- `speakers` — speaker-labeled transcript (run diarization); add SRT/VTT if timestamps are available
- `summary+quotes` — short summary (5–8 bullets) plus 3–7 verbatim quotes with timestamps when available, plus the full plain transcript

If they say “give me everything,” deliver `speakers` + `timestamped` + a brief `summary+quotes` block.

## 1. Caption-first (fast path)
1. Prefer existing platform captions before downloading media.
2. For YouTube: try `youtube_transcript_api` or `yt-dlp --write-subs --skip-download`.
3. Prefer **manual** captions over auto-generated when both exist.
4. Only fall back to ASR when captions are missing, empty, or clearly garbage.

## 2. Audio extract (ASR path)
1. Use `yt-dlp` bestaudio (supports YouTube, many Instagram/TikTok/X URLs).
2. Convert with ffmpeg to **16 kHz mono** WAV/FLAC — Whisper-family models expect this.
3. If cloud/datacenter IPs are blocked by the platform, treat captions as primary and use a residential proxy only when download is required.

## 3. Choose the ASR engine
| Need | Prefer |
| --- | --- |
| Local multilingual / default EN | `faster-whisper` + `large-v3-turbo` (EN) or `large-v3` (non-EN) |
| Word timestamps + speakers | WhisperX (batched faster-whisper + wav2vec2 align + pyannote) |
| Stronger open diarization | DiariZen (BUT-FIT wavlm-large-s80-md-v2) ± DiCoW; or `pip install diarize` for CPU/no-HF-token |
| High-throughput multilingual GPU | `nvidia/parakeet-tdt-0.6b-v3` (25 EU langs); `nvidia/canary-1b-v2` if ASR+translation |
| Joint long-form multi-speaker OSS | MOSS-Transcribe-Diarize; SoulX-Transcriber for Mandarin meeting E2E research |
| Managed messy/multilingual API | AssemblyAI Universal-3.5 Pro, Gladia Solaria, ElevenLabs Scribe v2, Speechmatics Melia |
| Hosted speaker labels (batch) | OpenAI `gpt-4o-transcribe-diarize` + `diarized_json`; Deepgram Nova-3 + `diarize_model=v2` |
| Streaming diarization | Deepgram Nova-3 or AssemblyAI (not OpenAI diarize) |
| Cheap clean English hosted | Whisper large-v3-turbo via Groq |

Do **not** use stock PyTorch Whisper in production when `faster-whisper` is available — same accuracy, much faster.

## 4. Anti-hallucination and quality knobs
1. `condition_on_previous_text=False` (critical for long-form).
2. Enable **VAD** (Silero preferred for speed/memory; WhisperX pyannote VAD when audio is noisy or multi-speaker) so silence is not transcribed as junk.
3. Set language explicitly when known; do not rely on auto-detect for short/noisy clips.
4. For diarization: set `min_speakers`/`max_speakers` (or min=max) **only when speaker count is known**; leave auto when unknown. Wrong forced counts hurt more than no hint.
5. Overlapping speech remains hard — note uncertainty rather than inventing clean turns.
6. Chunk long audio on silence / safe ≤~28–30s speech windows with light overlap; strip overlaps after merge.
7. OpenAI diarize: no prompting/Realtime; chunk long files (~1400s limit); optional `known_speaker_names`/`known_speaker_references`.

## 5. Deliverables
1. Always return the chosen preset promptly; attach SRT/VTT files when `timestamped` or `speakers` produced them.
2. Flag source path used: `manual_captions` | `auto_captions` | `asr:<model>`.
3. For `summary+quotes`, keep quotes verbatim — never invent lines that were not spoken.

## 6. Sanity checks before shipping
1. Empty or near-empty output → retry with VAD on, language set, or a larger model.
2. Repeated phrases / “Thank you for watching” loops → disable prev-text conditioning and tighten VAD.
3. One speaker eating 99% of labels → remove forced speaker counts and re-diarize.
4. Domain jargon errors in auto captions → prefer ASR large-v3 / turbo over YouTube auto caps.
