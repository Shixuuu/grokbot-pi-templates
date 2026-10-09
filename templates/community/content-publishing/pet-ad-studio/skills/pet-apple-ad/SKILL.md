---
name: pet-apple-ad
description: "Use this when someone wants a short Apple-style parody ad starring their own pet, generated with Grok (xAI) image and video models from their pet photos."
---

# Pet Apple-style ad (Grok video)

Makes a ~20-25s, 16:9, 1920x1080, 24fps Apple-keynote-parody ad starring the owner's pet, where each of the pet's quirks becomes a deadpan "product feature."

## Inputs to gather
- Pet name, species, and 4-6 quirks/habits (funniest ones win).
- At least 2 clear photos (front face, full body; more angles = better consistency).
- Music choice (see Music options).
- Optional reference ads (Instagram/TikTok/YouTube links or files).
- An xAI API key saved as the secret XAI_API_KEY (request it with a secure secret request; never ask for it in chat, never print it). If new processes can't see it after saving, the box needs "Update Grok Bot's Computer" to pick it up.

## Music options
Offer these as a choice widget:
1. Paste a YouTube (or other video) link: download audio with `yt-dlp -x --audio-format wav <url>` (install yt-dlp and ffmpeg if missing). Ask which part to use if the song is long (e.g. "start at 0:45"); otherwise pick the most energetic ~20-25s section with a clean start. Remind them that copyrighted songs may be muted or flagged if posted publicly.
2. Upload an audio or video file of their own; extract audio with ffmpeg.
3. Upbeat jazz-swing original (snappy drums, walking bass, playful), composed fresh with Python.
4. Soft Apple-keynote piano original (calm chords, gentle build), composed fresh.
5. Bright electronic-pop original (punchy, modern launch-video feel), composed fresh.
Originals are synthesized on the box so they're free to use anywhere.

## Reference analysis (if links given)
Download with yt-dlp, extract 1 fps frames + contact sheet, watch with a video subagent. Note shot list, text style, music, whether there is a voiceover (these ads usually have none: on-screen text over music).

## Script (share for approval before generating)
Default structure, hard cuts, static camera:
1. Extreme close-up of eyes, no text.
2. Full body sitting tall on white seamless: "Meet <Name>."
3. Backlit ear close-up, no text.
4. Portrait: "Precision hearing." / "Selective listening."
5-9. One shot per quirk, black headline + grey sub-line with an ironic twist (e.g. "Built-in navigation." / "Every route ends at dinner."; "Advanced haptic feedback." / "For when dinner is 30 seconds late."; "Outdoor ready." / "In theory.").
10. Lineup of three pets in outfits labeled "<Name> Mini / Pro / Pro Max"; labels pop in one per beat under each pet.
11. White card typing on "One more thing…"
12. Reveal feature (e.g. "Night vision." / "Detects a treat bag from three rooms away.").
13. Hero: backlit pet on grey gradient, big name wordmark + two-line tagline.
14. End card: "Designed to do absolutely nothing." / "Except <eat/sleep>."

## Generation (xAI API; verify current details at docs.x.ai)
- Start frames: POST https://api.x.ai/v1/images/edits, model grok-imagine-image-2.0, owner photos as base64 source images; prompt for the pet in a seamless white high-key studio in the shot's pose. Pet must match: coat color/pattern, eye color, ears, build.
- Clips: POST https://api.x.ai/v1/videos/generations, model grok-imagine-video-1.5, image = start frame, aspect_ratio 16:9, resolution 720p, duration 3-8s. Poll GET /v1/videos/{request_id} until status done; download video.url. Track usage.cost_in_usd_ticks (1e10 ticks = $1); a full ad is roughly $5-8, each revision $1-5. Tell the owner the cost.
- Max 2 attempts per shot. Add "do not change pose" when motion drifts.

## Lessons from real feedback
- Actions must read instantly. Prefer simple, grounded poses: e.g. clinging = pet lying ON THE FLOOR hugging an ankle; "afraid of outdoors" = two beats (sitting staring out an open door, hard cut to hiding under a sofa), never ambiguous walking/running that looks like fleeing.
- Keep "One more thing…" and follow it with a reveal feature.
- Music: play the chosen section ONCE straight through; never loop or splice it (viewers notice restarts). Cut the ad to the music's length, land the hero shot on the song's big moment (e.g. vocal entrance or drop) and end card on its ending.
- If the track has baked-in sound effects (meows etc.), split stems (demucs) and drop the offending stem until the vocal section.
- No mismatched sound effects; if unsure, leave sound effects out. Cat/dog vocal sounds are usually unwanted.
- Place text where it never overlaps the pet; white text only over dark frames.

## Assembly
ffmpeg + Python: trim clips, hard cuts on beats (detect beats with librosa), text via PIL/drawtext in Inter or similar (black headline, grey sub-line, quick fade), mix music + subtle sound effects, export H.264 MP4. Verify by extracting frames from every shot and viewing them; make a contact sheet. Keep each version as a new file (v1, v2, ...).

## Delivery
Send the MP4 plus the contact sheet, note weak shots and cost, and ask what to change. Warn that third-party music may need rights before public posting.
