---
name: mv-master-timing
description: "Use this when mastering a take and building timing.json and captions for a music-video project."
---

Inputs: /workspace/mv/<slug>/02-audio/take-S.flac, 01-lyrics/lyrics.txt, length L from BRIEF.md. Tools: ffmpeg and /workspace/mv/venv.
1. Measure with ffmpeg ebur128 and astats. Silence (don't cut) any click in the first 100 ms, so timing stays put.
2. Master: two-pass ffmpeg loudnorm to I=-14, TP=-1, LRA=11 at 48 kHz. If the take is longer than L + 2 s, cut at L with a 2 s fade-out; if the ending is abrupt, add a 1 s fade-out. Write 02-audio/master.wav (24-bit) and 02-audio/master.m4a (AAC 192 kbps).
3. Timing: run faster-whisper (small or medium model, word_timestamps=True, language from the lyrics) on master.wav. Align the transcript to lyrics.txt line by line with fuzzy matching; the lyrics text always wins for spelling. Get BPM and beat times with librosa.beat.beat_track.
4. Write 03-timing/timing.json:
{"duration": D, "bpm": B, "beats": [t...], "sections": [{"name": "verse 1", "start": t, "end": t}], "lines": [{"i": 0, "text": "...", "start": t, "end": t, "estimated": false, "words": [{"w": "...", "t": t}]}]}
Times in seconds with 3 decimals. Every lyric line present, in order, never overlapping. A line the singer skipped or the transcript missed gets times spread evenly between its neighbours and "estimated": true.
5. Write 03-timing/captions.srt from the lines.
6. Report: duration, LUFS before and after, BPM, lines matched versus estimated.
