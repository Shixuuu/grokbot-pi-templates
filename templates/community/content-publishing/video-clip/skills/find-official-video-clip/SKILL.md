---
name: find-official-video-clip
description: "Use this when the user wants a real-world video clip found and downloaded from an official source such as a broadcaster, royal house, or organization channel."
---

# Find an official video clip

## When
The user wants a real, existing clip found and downloaded from an official source (broadcaster, royal house, government, org). Not generated video, not a prompt.

## Do
1. Search for the official page first (the org or broadcaster's own site, e.g. `nrk.no`, `tv.nrk.no`, `kongehuset.no`, BBC, Tesla YouTube). Skip random reuploads unless no official copy exists.
2. If several famous versions exist (same person, different events), pick the iconic one, download that, and note the other in one line so the user can correct.
3. Download speech-only or joke-only when the source is a long program. Pad 2–3 seconds. Prefer mp4 H.264.
4. On broadcaster HLS, `yt-dlp --download-sections` often writes an empty file. Mux or cut with ffmpeg from the HLS instead. Check geo-block flags. Some official hosts (e.g. Vimeo player embeds) need the player URL when `yt-dlp` on the site wants login.
5. Verify with `ffprobe` (duration, size, codecs) and a visual check that it is the right speaker and event, not a news wrap without the speech.
6. Deliver the file, duration, date/venue in one sentence, plus the canonical URL. Mention resolution if it is archive SD.
7. If chat playback fails on large files, re-encode Constrained Baseline ~854x480 with no B-frames and split long videos into parts.

## Don't
- Interview the user about YouTube vs TikTok vs source. The query usually names it.
- Download a full 2-hour ceremony when they asked for the speech.
- Guess folklore vs a joke vs a memorial. Look it up.
- Build a music montage unless the user asked for one.
