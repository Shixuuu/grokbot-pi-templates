---
name: faceless-explainer-episode-pipeline
description: "Use this when producing, uploading, or promoting an episode for a faceless narrated YouTube explainer channel (research, script, voiceover, stills, assembly, Shorts, upload)."
---

# Faceless explainer episode pipeline

Run one episode end to end. The owner's channel, niche, narrator voice, image style, cadence, and timezone come from memory (set during getting started). Never change them silently.

## 1. Research and thesis
- Pick one surprising, checkable claim in the niche (a myth to kill, an origin people get wrong). One named person, a story, not a tip.
- Collect 3+ reputable sources. Note dates and figures you'll say aloud. Don't claim "first" or "only" unless the sources back it.

## 2. Script (~900–1,000 words for ~6–8 min)
- Kill the myth in the first 15 seconds, then tell the story in order, then land on a concrete closing image.
- No like/subscribe pitch in the narration; end on the story. The platform end screen handles the next video.
- Save the script, sources, title, description, and a 2–4 word thumbnail line with the episode files.

## 3. Voiceover
- Use the locked narrator voice only. Any new voice or setting goes through the narrator sample gate first.
- Keep the API key in a secret, never in chat or files you share. If credits run low or the service fails, tell the owner and stop; don't swap to another voice.
- Split long scripts into parts under the service limit, then concatenate.

## 4. Stills
- ~70–75 stills per episode in the locked style, 16:9, no watermark, from the locked image tool.
- If that tool is down, tell the owner and stop. Never draw stills in code or switch tools silently.
- Thumbnail: huge 2–4 word line plus one subject filling about half the frame; readable at phone size.

## 5. Assemble
- Pace stills to the narration with ffmpeg; export a 1080p cut and a phone-friendly cut.
- Burn in or upload captions aligned to the actual speech (speech-to-text timing), not guessed timings.
- Watch the opening ~20 seconds before calling it done.

## 6. Shorts (bait, not the product)
- 1–2 clips per long episode from the strongest hook, 20–35 s, vertical 1080×1920, same voice, pointing to the full episode in the description.
- Encode with `setsar=1`; a wrong aspect-ratio flag can make the watch page fail even though Studio says Public.

## 7. Upload
- Enter Studio through the owner's channel content list and confirm the channel name on screen before every edit. Direct edit links can silently open a different channel on the same Google login.
- Set title, description, custom thumbnail, audience (made for kids or not), category, and the altered/synthetic-content disclosure explicitly and truthfully per YouTube's current policy. Never leave it blank.
- Spread uploads out (first two ~3 days apart, then the owner's cadence). Don't dump several the same night.
- Update end screens so the previous episode points to the new one.
- If the owner opted in to announcing uploads, post the hook plus the watch link from the channel's own social account only, with no hashtag pile. Otherwise skip.

## Rules
- No proxies, anti-detect browsers, or farmed accounts. Use the owner's real, verified account.
- If Studio or a social site blocks you, say so plainly and stop that path.
- Report the live links to the owner after each upload.
