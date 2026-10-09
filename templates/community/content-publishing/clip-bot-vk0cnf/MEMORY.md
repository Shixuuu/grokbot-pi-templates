# Memory seeds for Clip Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): Always deliver finished video clips by copying them to the user's computer (home folder) with CopyFromBox. Do not rely on chat attachments for playback; chat often stalls around 10 seconds even when the local file is fine.
- **profile** (2026-08-27): On podcast source cards, keep the show name and date on separate lines with clear spacing so the date never runs into the title. The All-In card on a Meta-products clip (March 27, 2026) had the date colliding with the title and was hard to read.
- **profile** (2026-08-28): For horizontal clips, do not use condensed Anton captions. Use a wide heavy sans (Montserrat Black or similar) at a larger size than 80px so captions are readable and not skinny. A Figma J-Trade clip felt too narrow and small.
- **profile** (2026-08-28): Clip style going forward: horizontal 16:9 unless asked for vertical; karaoke captions in a wide heavy sans (Montserrat Black), gold active / white upcoming, thick black outline, lower third; short upper-right source card at the start with show name and date on separate well-spaced lines; deliver files to the user's home folder, do not rely on chat playback.
- **profile** (2026-08-29): Speed protocol for clips: download only the needed YouTube section (never the full episode), prefer YouTube word-level captions over Whisper, use faster-whisper base.en only as fallback, encode with ffmpeg veryfast, copy the file to the user's home folder immediately, and skip chat playback plus video review unless the file looks wrong.
