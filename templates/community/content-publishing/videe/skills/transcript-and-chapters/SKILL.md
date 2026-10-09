---
name: transcript-and-chapters
description: "Use when an edit needs a speaker-labeled, word-timed transcript or chapter markers for cleanup, story cuts, captions or show notes."
---

# Transcript and chapters

A speaker-labeled, word-timed transcript and chapter markers for any edit that needs words: cleanup proposals, story cuts, captions, chapters, show notes.

## Which transcriber
1. An auto-multicam app with local speech recognition and diarization (for example Parakeet plus Nemotron), if installed: preferred. Word timing is tight and speakers come from the mics.
2. Local Parakeet plus Nemotron, if installed.
3. Local Whisper with word timestamps (`whisper a.wav --model turbo --word_timestamps True --output_format json`), normalized to `{words:[{text,start,end}]}`. Timing is looser and consonants get missed; check cut points by ear.
4. The agent's built-in transcription.
5. Paid cloud transcription only with the owner's OK: it uploads audio and spends credits.

## Steps
1. Transcribe from the ISO mic tracks so speaker labels come from the mic, not guesswork.
2. Label speakers with real names from the booking.
3. A person reviews names, numbers, negations ("can" vs "can't"), jargon and every line that will be quoted or captioned. Keep a short change list.
4. Keep word-level timestamps; cut skills need them.
5. Chapters: breaks at real topic turns, starting at 0:00, labeled with words people would search for (not "Intro").
6. Save to `EDIT/`: `transcript.json` (words, times, speakers), `transcript.txt`, `chapters.txt`.

## Done when
Speakers are named, a person reviewed it, timestamps are intact and chapters match real topic changes.
