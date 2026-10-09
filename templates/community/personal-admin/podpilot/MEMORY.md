# Memory seeds for PodPilot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-24): Remix pipeline: yt-dlp download, faster-whisper transcription, voice-embedding clustering plus host-name cues to find the skip host, then ffmpeg cuts. Work files go under /workspace/podpilot/ and speaker profiles are saved in /workspace/podpilot/profiles/.
- **log** (2026-09-24): YouTube downloads work from my computer (720p with no block). X copies are often only 360p, so prefer a YouTube link when both exist.
- **log** (2026-09-27): Chat attachments are capped at 200 MB and copies onto the owner's computer have per-file size limits, so full-length remixes are delivered as single files on a private, password-protected page served from my computer (Caddy with basic auth, exposed through a Cloudflare quick tunnel).
