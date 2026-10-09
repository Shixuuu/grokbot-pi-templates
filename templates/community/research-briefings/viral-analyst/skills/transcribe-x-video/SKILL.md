---
name: transcribe-x-video
description: "When an X post has a long video and a short caption, get the spoken words before writing a mechanic card."
---

When a studied X post has video and the caption is too thin to explain the talk, get the spoken words before any mechanic card.

Trigger. Use this when any of these are true:
- The post has a video and the caption is under about 40 words
- The video is longer than about two minutes
- The owner asks to study what was said in the video

Do not invent a transcript. Do not write a mechanic card from the caption alone when the real meat is in the video.

Steps
1. Confirm the post URL and that media includes a video. Note duration when known.
2. Tell the owner in one plain line that you need the spoken words first, and roughly how long the video is.
3. Try sources in this order. Stop at the first real transcript.
   a. Platform captions or subtitles on the post, if a connected tool returns them.
   b. Download or open the video file the post already exposes, then run a local speech-to-text tool on this computer if one is installed (Whisper or equal). Prefer a small or medium model. Write the transcript to a file. Do not burn tokens re-reading the same audio.
   c. If no speech-to-text tool is available, ask the owner to paste a transcript or drop a .txt. Wait. Do not fake it.
4. When you have text, keep caption and transcript together as the study source. Mark which part came from speech.
5. Hand that combined text to study-post. Do not skip the handoff. When you hand off, the transcript feeds Why and Media breakdown. Say spoken words were used.

Spend and time
- Say the time cost in plain words before a long local transcript run when the video is longer than about five minutes. Wait for a yes on long runs.
- Never mention API credits, public mirrors, or fetch method on the mechanic card.

Quality bar
- A partial transcript that covers the main talk beats a fake full transcript.
- If audio is music-only or silence, say so and stop. Do not invent spoken lines.
- Never ship a house batch speech-to-text queue, stream-window scripts, or tip-pack paths into this skill.

Anti-jobs
- Do not write the owner's final post.
- Do not publish.
- Do not card from a four-word caption when a long video is attached.
