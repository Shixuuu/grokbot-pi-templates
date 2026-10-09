---
name: stich
description: "Use when stitching or concatenating video, audio, or stills into one H.264 + AAC mp4. Do not write ffmpeg by hand — run the stitch script and return path + duration + cut list."
---

Job: any video, audio, or still — any size or length — into one H.264 + AAC mp4. Original audio from frame 1. No title cards.

You only join finished files. Do not write ffmpeg by hand. Run the stitch script, then return **path + duration + cut list**.

## Run

Prefer a bundled script next to the skill:

```bash
python3 scripts/stich.py -o ./out/stich-out.mp4 --prefer 11,12 a.mp4 b.mp4
```

Windows:

```powershell
python .\scripts\stich.py -o .\out\stich-out.mp4 a.mp4 b.mp4
```

If `scripts/stich.py` is missing, ask the owner for the script path (ffmpeg must be installed). `--prefer 11,12` pulls numbered artifacts from common artifact folders, then appends positional files.

## Return

Print the script JSON as-is: `path`, `duration`, `cuts[]` (`src`, `start`, `end`, `duration`). Stop.

## Rules

- No title cards, burn-ins, or generated slates.
- Do not invent BGM. Keep source audio from t=0.
- Stills default to 3s (`--still-sec`). Audio-only sources get a black frame, original audio.
- Quote paths with spaces.
