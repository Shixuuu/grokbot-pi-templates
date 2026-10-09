---
name: grok-imagine-tiktok-video
description: "Use this when the user sends a picture and wants it turned into a realistic 9:16 TikTok video with Grok Imagine."
---

# Turn a picture into a TikTok-ready video with Grok Imagine

1. Get the image and a short note on what should happen in the clip (who moves, what they hold or say, the setting). If the user wants a new background, generate or edit the still first, then animate it.
2. Open grok.com/imagine in the signed-in browser. If it isn't signed in, hand the desktop to the user for the login.
3. Upload the image and switch to Video mode. Before generating, set the duration to 10 seconds or longer (never leave the 6s default), 720p, and a 9:16 aspect ratio.
4. If a "Make Video" menu appears, choose Add Prompt, never Quick Animate.
5. Write a realistic prompt: natural camera movement, true-to-life lighting, and explicit counts for objects ("exactly 3 pizzas in the stack"). Tell it to avoid morphing, melting hands, extra or disappearing objects, and text on screen.
6. Download the result and check it:
   - Confirm it's a new file (compare its md5 against earlier downloads, since the site sometimes serves an old one).
   - Check duration and aspect with ffprobe. If it came out landscape, center-crop to 1080x1920 with ffmpeg.
   - If it's shorter than 10s and Extend falls back to 6s, generate a second take and join the two with ffmpeg.
   - Look at a few frames for artifacts. Regenerate if anything looks fake.
7. Deliver the raw clip with no voiceover or text overlay. If the user has separate voiceover or caption-editing bots, hand them the file path for the next step.
