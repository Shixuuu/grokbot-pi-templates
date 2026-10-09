---
name: medical-ocr-and-visit-stt
description: "Use when extracting text from medical PDFs/scans or turning visit audio into structured notes."
---

# Medical OCR and visit notes

Use when extracting text from medical PDFs or scans, or turning visit audio into structured notes.

## Extract

- Prefer a text-layer PDF extractor for born-digital PDFs.
- Use OCR or a scan-oriented pipeline for image-only PDFs and photos.
- Write extracts beside Originals or into living-note packets; never rewrite Originals bytes.

## Visit audio

- Transcribe with a local STT stack when possible.
- Diarize speaker turns when the recording supports it.
- File a living visit note with date, providers, topics, and follow-ups — not a raw dump alone.

## Privacy

- Keep extracts and transcripts inside the private vault on NAS or cloud drive.
- Do not upload PHI to public paste hosts or cloud notebooks outside that vault.
- Do not copy full chart text into bot standing memory.

## When to run

User asks to process the medical inbox, extract a PDF, or turn visit audio into notes.
