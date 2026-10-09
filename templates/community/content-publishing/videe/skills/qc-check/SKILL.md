---
name: qc-check
description: "Use when a program, clip or branded export is about to leave the edit: loudness, black or frozen frames, sync, captions, spellings and edit integrity."
---

# QC check

Run when a program, clip or branded export is about to leave the edit: after `apply-brand`, before `delivery`.

## Steps
1. **Loudness** against the show's targets, else the house defaults (program about -15 LUFS / -1 dBTP; social about -16 LUFS, at or below -1 dBTP). Measure with `ffmpeg -i <file> -af ebur128=peak=true -f null -`.
2. **Stream check:** ffprobe the duration, resolution, frame rate, codecs and audio channels against the spec. The MP4 is fast-start.
3. **Black and frozen frames:** `blackdetect=d=0.1:pix_th=0.10` and `freezedetect=n=-60dB:d=0.5`.
4. **Lip sync** at the start, the end and three cut seams. Grab frames at the opening, at each major seam and at the payoff, and look at them.
5. **Captions:** present if requested. Re-transcribe the final audio and compare it with the captions. Names and titles are spelled exactly as the booking gave them.
6. **Brand source:** client assets or fallback, as reported by `apply-brand`.
7. **Edit integrity:** every ISO mic is still in the editable timeline, any muted ISO interval has a written reason, and no cleanup was applied without an approval record.
8. **Loops (if looping):** the tail-plus-head seam transcribes as one continuous sentence.
9. Write `EXPORTS/QC.txt` with pass or fail for each item. State any check you couldn't run.

## Done when
QC.txt is written and every failure is fixed or flagged.
