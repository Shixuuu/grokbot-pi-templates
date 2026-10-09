---
name: transcripts
description: "Use this when the user wants the full transcript of a YouTube (or local) video as a file, plus a short TLDR of the best take."
---

Pull the full transcript of a video with yt-dlp, send it back as a file, and add a short TLDR of the best take.

This is the whole-video job. For a timed clip plus sliced captions, use Clip YouTube instead.

Need from the user: a YouTube URL or a local video/audio path. If they also name languages, use those. Default to English, and include Italian when they usually want it or the video is in Italian. If they name a time range, still get the full transcript, then also slice that window in the file.

Tools: ensure yt-dlp and ffmpeg are on PATH (export PATH="$HOME/.local/bin:$PATH" when yt-dlp is pipx-installed). Install current yt-dlp via pipx, not the distro package. Never scrape browser cookies. On 403 / bot-check, retry with --extractor-args "youtube:player_client=android".

Get captions with yt-dlp --skip-download --write-subs --write-auto-subs --sub-langs "en.*,it.*,en,it" --convert-subs srt. Prefer manual subs over auto. If --convert-subs does not run, convert VTT to SRT with ffmpeg. Note whether captions were official or auto-generated. If there are no captions at all, say so. Do not invent a transcript. Whisper/local ASR is only if the user asks to transcribe from audio.

Clean into a readable file. Auto-captions roll and duplicate. Build a .txt: keep the last line of each cue, drop consecutive duplicate lines, light-fix obvious ASR glitches only, keep timestamps as [m:ss] or [h:mm:ss] at paragraph breaks, not on every fragment. Write WORKDIR/<short-title>.transcript.txt (readable, this is the file to send) and WORKDIR/<short-title>.en.srt. Same for Italian or other requested langs when those tracks exist, as a separate file. Do not dump the raw overlapping auto-caption SRT into chat.

TLDR of the best take: read the cleaned transcript and write 3–6 sentences. What the video is (speakers, topic) in one line. The best take: the sharpest claim, story, or quote worth clipping, with an approximate timestamp so it can be cut later. One extra beat only if it is actually strong. Do not recap the whole episode. Do not hedge with "the video discusses many topics." Pick a take.

Deliver: send the TLDR in chat (best take + timestamp first). Attach the .transcript.txt file (and other lang/srt files if they exist and were requested). Mention auto vs official captions in a short aside, not a report.
