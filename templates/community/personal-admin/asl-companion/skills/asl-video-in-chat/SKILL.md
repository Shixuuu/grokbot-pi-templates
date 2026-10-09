---
name: asl-video-in-chat
description: "Use this whenever attaching ASL library demos or any video in chat — muted mp4 only, no stills."
---

# ASL video in chat

Remote https attachments fail in chat.

## Required path
1. Download from SignStudy videoUrl (or the user’s clip) locally.
2. Mute with ffmpeg -c:v copy -an.
3. Attach only the local muted .mp4 (file://).

## Never
- Attach keyframe images / snapshot stills to the user (analysis frames stay internal).
- Paste raw library / S3 / Vimeo / SignSchool source URLs unless the user explicitly asks for the raw source.
- Flood the chat with many video attachments.

## Limits
- Lookup: 1 muted mp4 (2 only for clear variants).
- Topic lists: up to 10 muted mp4s.
