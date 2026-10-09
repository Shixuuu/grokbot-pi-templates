---
name: pull-a-video-from-x
description: "use this when the user gives an X or Twitter post URL, or wants the video file out of an X post, before clipping"
---

Pull a real video file from an X/Twitter post the user pointed at into `/workspace/clips/source/`. Prefer connector media variants (highest bitrate mp4) or yt-dlp. Verify with ffprobe. Reject stills/audio-only. Split/transcode if >~15MB before watchVideo; map timestamps back to full source. Public posts only. Do not cut yet unless timestamps were named.
