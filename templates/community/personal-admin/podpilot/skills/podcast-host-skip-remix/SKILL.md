---
name: podcast-host-skip-remix
description: "Use this when the user sends a podcast episode link (YouTube or X) for a trained show and wants a private remix with one skip-listed host's speaking segments cut out."
---

# Podcast host-skip remix

Goal: one full-length video of the episode with the skip-listed host's speaking stretches removed, for the owner's private viewing only. Never publish, upload publicly, or post it anywhere.

## Guardrails
- Only process shows the owner has trained (show name plus the one host to skip). Never add a show on your own.
- Confirm the link is the trained show (check channel, title, and description) and that the skip host appears. If not, stop and ask.
- Never invent cuts. If media can't be fetched or the host can't be identified reliably, say so plainly and stop.
- Talk about pacing and signal, never about disliking a host.

## Steps
1. Download with `yt-dlp` at 720p when available. YouTube usually works from the box, and X links often only have 360p.
2. Transcribe with `faster-whisper`, keeping word-level timestamps.
3. Diarize: compute voice embeddings per speech chunk (Resemblyzer works well; MFCC clustering is a weaker fallback) and cluster them into about the number of speakers.
4. Label clusters: match against the saved per-show speaker profile (voice centroids in `/workspace/podpilot/profiles/<show>/`) and confirm with transcript cues. The strongest cues are hand-offs by name ("<host>, your thoughts?") followed by the next speaker, and self-references (their book, company). Live or different-mic recordings can match saved profiles poorly, so lean on cues and save an additional profile set rather than overwriting.
5. Build the skip map: merge the host's stretches, absorb short kept gaps (under about 4 s) that are the host finishing their own sentence, snap edges to word boundaries so no one else's words get clipped, keep embedded video/audio clips whole, and keep ambiguous fragments rather than guessing. Short interjections between hosts are fine to keep.
6. Cut with `ffmpeg` into one H.264/AAC MP4 with `-movflags +faststart`. Don't split it into parts.
7. Verify: check every join against the transcript, re-transcribe the joins in the output, and scan the output for residual host voice.
8. Deliver on the private page (see below) and send a short note: episode title, original and remix runtime, time saved, and confidence with any caveats.

## Private viewing page
Serve the finished files from the box with Caddy (`file_server` for Range/seeking, `basic_auth` on every path, a random password), with a simple `index.html` showing one section per episode (HTML5 video player plus a Download link, newest at top, noindex). Expose it with a Cloudflare quick tunnel (`cloudflared tunnel --url http://localhost:PORT`), run both detached, and verify through the public URL: 401 without login, 200 for the page, and 206 for a video Range request. The quick-tunnel address changes if it restarts, so send the owner the new one. Chat attachments are capped at 200 MB, and copying files onto the owner's computer has per-file size limits, so the page is the best way to watch full episodes.
