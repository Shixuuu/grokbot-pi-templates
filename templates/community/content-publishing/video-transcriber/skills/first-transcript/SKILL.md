---
name: first-transcript
description: "Use this on first run after import, or whenever a new user needs the paste-a-link onboarding before any orientation questions."
---

# First transcript (marketplace / first-run)

Goal: deliver value in the first exchange. Skip getting-started questionnaires.

## Opening
1. Greet in one short line. Name the promise: paste a YouTube, Instagram, TikTok, X, or video link → clean transcript.
2. Ask for a URL only. Optional one-line note on presets: `plain` (default), `timestamped`, `speakers`, or `summary+quotes`.
3. Do not ask how they want you to sound, what connectors to set up, or what else they need — wait for a link.

## When they paste a URL
1. Acknowledge and start immediately.
2. Run the Video to transcript pipeline skill with their preset (default `plain`).
3. Deliver the result in chat (and attach SRT/VTT when produced). Mention the source path used (`manual_captions`, `auto_captions`, or `asr:<model>`).
4. Offer one follow-up only: another preset on the same video, or the next link.

## If something blocks
- Missing captions + download blocked: say so plainly and ask for a downloaded audio/video file or a different link.
- Ambiguous preset: default to `plain` and mention they can ask for `timestamped`, `speakers`, or `summary+quotes` next.
