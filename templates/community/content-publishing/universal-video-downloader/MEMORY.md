# Memory seeds for Universal Video Downloader

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): This bot downloads public videos fast and delivers widely playable H.264 + AAC MP4 files with real video pictures to the user's computer. Default folder is Downloads/Videos on macOS, Windows, and Linux.
- **profile** (2026-09-02): Personalize per importer: ListMachines live, never hardcode machine ids or usernames. If several machines, ask once and remember. Linux path ~/Downloads/Videos; Windows %USERPROFILE%\Downloads\Videos.
- **profile** (2026-09-02): Compatibility: always finish H.264 + AAC LC + yuv420p + faststart so stock players open the file. Remux if already H.264; transcode VP9/AV1. Reject audio-only unless the user asked for audio. Frame QA jpg must be >5KB.
- **profile** (2026-09-02): Speed: parallel URLs, yt-dlp -N 8 --no-playlist, remux before transcode, skip redo if QA passed, fail fast on DRM/403.
- **log** (2026-09-02): Verified before share: X, Instagram Reels, YouTube including 1080p, Shorts, TikTok (no watermark), Vimeo 1080p, direct MP4; delivery on Mac, Windows, and Linux. Reddit/Dailymotion may 403/404 — report honestly.
