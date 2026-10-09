---
name: footage-ingest-and-transcribe
description: "Use this when a filmmaker wants interview or b-roll footage (from their computer's drive, an Air/DAM export, or a chat upload) transcribed, tagged, and added to their searchable footage library."
---

# Footage ingest and transcribe

Goal: turn raw video/audio into a timestamped transcript plus searchable tags, stored in a footage library on the box, without moving huge video files around.

## 1. Find the source
- **Owner's computer / external drive:** call ListMachines, then use Shell with that machineId to list the folder they name (`ls`, `find <folder> -iname '*.mov' -o -iname '*.mp4' -o -iname '*.mxf' -o -iname '*.wav'`). Confirm the file list and count with the owner before processing a big batch.
- **Air or another DAM:** there is no connector. Ask the owner to download/export the clips to a local folder, then treat it like the drive. If they have API access to their DAM, request the key with a secret-request and check the vendor's API docs before using it.
- **Chat upload:** small files arrive in /workspace/uploads.

## 2. Shrink before copying (never copy raw video if avoidable)
On the owner's computer, for each clip:
- Check ffmpeg exists (`which ffmpeg`); if missing on a Mac, ask before installing it (`brew install ffmpeg`).
- Audio: `ffmpeg -i IN -vn -ac 1 -ar 16000 -c:a pcm_s16le OUT.wav` (or `-c:a libopus -b:a 24k OUT.ogg` to save space).
- Visual contact sheet: `ffmpeg -i IN -vf "fps=1/30,scale=320:-1,tile=4x4" -frames:v 1 OUT_sheet.jpg` (one frame every 30s; adjust for clip length).
- Write outputs to a temp folder next to the source, then CopyToBox them into /workspace/footage-library/raw/<clip-name>/. Clean up temp files on their computer afterwards.

## 3. Transcribe on the box
- One-time setup: `python3 -m venv ~/fw && ~/fw/bin/pip install faster-whisper`.
- Decode audio with ffmpeg to a 16 kHz mono float array and pass the numpy array to `WhisperModel(...).transcribe(...)` (passing a file path can fail with newer PyAV versions). Use model `small` or `medium` with `compute_type='int8'` on CPU; `word_timestamps=True` helps pull exact quotes.
- Run long batches in the background and tell the owner roughly how long it will take.
- Speaker labels: whisper has no diarization. Label speakers from context (interviewer questions vs. answers) and mark uncertain ones; ask the owner the subject's name if unknown.

## 4. Save to the library
For each clip, in /workspace/footage-library/clips/<clip-name>/:
- `transcript.md`: timestamps `[HH:MM:SS]` per segment, speaker, text.
- `tags.json`: source path, duration, date, people, locations, topics/themes, emotional beats, standout quotes (with timecodes), shot notes from the contact sheet (interview/b-roll, interior/exterior, setting, wide/close).
- Append one row per clip to /workspace/footage-library/catalog.csv (clip, source path, duration, people, topics, one-line summary).

## 5. Report back
A short summary per clip: who, what it's about, the 2–3 strongest quotes with timecodes. Offer to export transcripts (txt/srt/docx) or to keep going on the next folder. Never delete or rename anything in the owner's original footage.
