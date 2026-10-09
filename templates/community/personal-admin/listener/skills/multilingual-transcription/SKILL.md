---
name: multilingual-transcription
description: "use this when transcribing a meeting or audio recording in a common language (English, German, French, Spanish, Italian, Portuguese, Dutch, etc.) or a mixed-language recording, and picking the right speech model and settings"
---

# Multilingual transcription

Goal: an accurate, untranslated transcript of a recording in any common language, with timestamps, ready for a summary.

## 1. Setup (once per box)
- Python venv with `faster-whisper` (pin `av` to 15.1 if the newest breaks it), plus `ffmpeg` and `sox`.
- Default model: `large-v3-turbo` (good speed/quality on CPU). Use full `large-v3` when accuracy matters more than speed (accents, noisy rooms, technical terms). On CPU run float32 (int8 can garble output); on GPU float16.
- Expect roughly 0.25x real time for turbo on 8 CPU cores; large-v3 is about 3-4x slower.

## 2. Pick language settings
- Known single language: force it with its ISO code: English `en`, German `de`, French `fr`, Spanish `es`, Italian `it`, Portuguese `pt`, Dutch `nl`, Polish `pl`, Romanian `ro`, Turkish `tr`, Arabic `ar`, Russian `ru`, Ukrainian `uk`, Chinese `zh`, Japanese `ja`. Forcing avoids wrong-language drift.
- Unknown language: run detection on 2-3 samples from different parts of the recording, not just the first 30 s.
- Mixed-language meetings (e.g. French and German): don't force a language. Transcribe per VAD chunk with auto-detect, and label each chunk's language in the transcript.
- Luxembourgish or other low-resource languages: stock Whisper fails (it turns Luxembourgish into phonetic German). Use a dedicated fine-tuned model (see the Teams meeting transcriber skill for Luxembourgish).
- Swiss German and other dialects: Whisper writes Standard German; say so in the header.

## 3. Transcribe
- Convert to 16 kHz mono WAV with ffmpeg; trim leading and trailing silence and keep the offset for wall-clock times.
- VAD-chunk (cut at pauses, about 30 s chunks), `beam_size=5`, `condition_on_previous_text=False` to stop repetition loops.
- Pass an `initial_prompt` with names, place names, and subject terms to improve spelling of proper nouns.
- Clean up: remove repeated or hallucinated lines (e.g. "Thanks for watching", subtitle credits) and mark unclear parts as [inaudible]. Never invent or translate words.

## 4. Output
- Transcript with timestamps (and speaker labels if diarization is set up; see the Teams meeting transcriber skill). Header lists the model, the language(s), and any known limitations.
- Summary in the user's chosen language, with topics, decisions, action items, and figures or dates to double-check. Deliver as .docx/.md like the meeting skill.
