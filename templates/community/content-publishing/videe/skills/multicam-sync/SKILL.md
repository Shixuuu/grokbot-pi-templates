---
name: multicam-sync
description: "Use when lining up ISO cameras, multitrack audio, backups or remote-guest recordings with ffmpeg and checking for clock drift before an edit."
---

# Multicam sync (Path B)

Line up ISO camera files, multitrack audio, camera backups and remote-guest recordings on one timeline with ffmpeg, and check for clock drift. Dedicated multicam apps and Resolve do their own sync.

## Steps
1. Inventory every source with ffprobe: duration, frame rate, audio streams, start timecode.
2. Files from one switcher recording usually start together; check anyway. Anything recorded elsewhere (camera backup, a guest's local file) needs syncing.
3. Pick the reference: the multitrack audio or the clearest mic ISO.
4. Find offsets by audio cross-correlation: decode a mono 8 kHz window (for example 300 s) of the reference and each file with ffmpeg, cross-correlate (FFT), and take the peak lag. Positive offset means the file starts later; place it at +offset. A peak far above the median correlation means high confidence. A bundled helper script (if available) does this; otherwise write the few lines of numpy.
5. Drift: repeat with a window near the end. If start and end offsets differ by more than a frame, correct with a tiny speed change (`atempo` for audio, `setpts` for video) or sync in sections.
6. Low confidence: check by ear at a clap, laugh or hard consonant.
7. Write `EDIT/sync.json` (file, offset, drift, confidence). Next: `transcript-and-chapters`, then `camera-direction`.

## Done when
Every source has an offset and lip sync holds at the start and the end.
