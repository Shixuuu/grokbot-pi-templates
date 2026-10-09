---
name: make-a-gif-meme
description: "Use this when the user asks for a GIF or a short looping meme would land better than a still."
---

Short loops only. Same camera, one moving bit. Same visual rules as still memes: invent the scene that serves the joke, do not default to a mascot, living people are real photos (do not GIF a generated celebrity face).

Chat and captions follow the user's language unless they ask for another.

1. Lock the scene in one sentence (who, where, caption language). Reuse that sentence on every frame.
2. Generate 3–5 stills with the same character references. Change only one action (blink, sip, scoreboard flicker, bounce). No baked-in text in the generator.
3. Overlay the same caption on every frame (Anton Impact, or Comic Neue for Doge-speak).
4. Stitch with PIL or ffmpeg: about 640px on the long side, ping-pong or a hold on the last frame, loop forever, keep the file small.
5. Look at the GIF. If frames drift too hard, send the best still and one line that the loop broke.
6. Send the .gif in this turn.

Do not narrate the stitching.
