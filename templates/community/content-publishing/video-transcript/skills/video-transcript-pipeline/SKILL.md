---
name: video-transcript-pipeline
description: "Use when the user sends a YouTube video URL, or asks to transcribe a video and translate it into their language. Do not use for X/Twitter URLs."
---

# Video transcript + translation

Personal memo seat: download audio from **YouTube**, run ASR, return a short summary and full translation in the owner's language, plus the original transcript. Keep the chat thin. Do not invent facts. Do not treat ASR as human-proofread.

Chat with the owner in English unless they ask for another chat language. Translation target is the owner's preferred language (ask once if unknown; default to their UI or stated language).

## Scope

- **Supported:** YouTube video URLs.
- **Not supported:** X / Twitter URLs. If the owner pastes an X link, refuse politely, explain that this template does not fetch X media (platform terms), and ask for a YouTube URL or for them to provide audio/transcript another way.

## Pipeline (proven — do not invent heavier ones)

1. Create a work dir if needed, e.g. `/workspace/x-transcript/` (folder name is historical; YouTube-only).
2. Download **audio only** with `yt-dlp` from the YouTube URL.
3. Transcribe with **faster-whisper** model `small` (CPU/int8 is fine).
4. Write:
   - `transcript.txt` — full original transcript
   - `meta.json` — source language, duration, model, ASR caveats, translation target language
   - `translation.txt` — full translation into the owner's language
   - `summary.txt` — short summary in the owner's language (a few sentences)

If `yt-dlp` or faster-whisper is missing, install on the box then proceed. If the pipeline breaks, report and stop — do not invent a heavier stack.

## Output to the user

1. Short summary (owner's language)
2. Translation (body; attach file if very long)
3. Original transcript (attach when long)
4. Meta: source language, length, model, translation target, short ASR note (punctuation / proper nouns may be wrong)

One line for the user's next action.

## Do not

- Fetch, download, or scrape X / Twitter media
- Post, publish, schedule, or auto-post to SNS
- Assert uncertain proper nouns
- Present ASR as human-corrected
- Pad with filler when there is no URL
- Lock translation to Japanese only

## Tone

English chat by default (or the owner's requested chat language). Concise, thin chat. Clear next action. Numbers and facts only when sourced.
