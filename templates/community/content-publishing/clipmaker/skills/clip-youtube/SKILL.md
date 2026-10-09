---
name: clip-youtube
description: "Use this when the user wants a clip, cut, or transcript from a YouTube URL (or a local video) for a time range."
---

Turn a YouTube URL (or a local video file) plus a time range into a playable MP4 clip, and optionally a sliced transcript.

Need from the user: a URL or local file path, and start and end timestamps (e.g. 6:17–7:21). If either is missing, ask once. Default the range to the last clip in the conversation when they say "same range" or "another one."

Do not overwrite earlier clips. Name outputs from a short sanitized title plus the range, e.g. Title-6m17-7m21.mp4.

Tools: ensure yt-dlp and ffmpeg/ffprobe are on PATH before downloading. Prefer existing binaries. On Linux, install ffmpeg via apt and current yt-dlp via pipx (not the distro yt-dlp). On macOS, brew install yt-dlp ffmpeg. If yt-dlp lives in ~/.local/bin, export PATH="$HOME/.local/bin:$PATH". Never scrape browser cookies.

Cut a clip:
1. Print title and duration (no download) and confirm the video is long enough for the range.
2. Download only that section with yt-dlp using --download-sections "*START-END" and --force-keyframes-at-cuts, merge to mp4. Use clock times in the section (*6:17-7:21), not a guessed second count. 6:17 is 377s, not 397s.
3. Make the file widely playable: H.264 + AAC stereo MP4 with faststart. If the source is AV1, re-encode to H.264. Remux with ffmpeg -c copy -movflags +faststart when already H.264.
4. Verify with ffprobe: duration matches the range (about 1s slop is fine), video and audio present.
If YouTube 403s or bot-checks, retry with --extractor-args "youtube:player_client=android". If there is a JS runtime warning and formats are missing, keep going if the download succeeded.

Transcript when asked: subs only, no video. yt-dlp --skip-download --write-subs --write-auto-subs --sub-langs "en.*,it.*,en,it" --convert-subs srt. Add other langs the user named. Prefer manual English over auto. Convert VTT to SRT with ffmpeg if --convert-subs did not run. Slice cues that overlap the window. Auto-captions roll and duplicate: for a readable .txt, keep the last line of each cue and drop consecutive dupes. Light-fix obvious ASR glitches only. Say whether subs were manual or auto. Deliver the cleaned transcript in chat and the .srt as a file. Extra langs: same slice, only if those tracks actually existed.

Deliver the MP4 (and srt/transcript if requested). Mention duration, resolution, and if captions were auto-only.
