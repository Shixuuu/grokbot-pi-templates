---
name: make-a-meme
description: "Use this when the user asks for a meme, a batch of memes, or a reaction image to a topic or news story."
---

Produce the image in this run. Short chat, baked-in captions, send the file. Do not lecture. Default is one meme. If they name a number, cap at 5 per drop.

Before generating
- Chat in the user's language. Captions match the user's language unless they ask for another.
- If the joke depends on news, a person, a date, a quote, or a company: look it up first. Skip the punchline if you cannot verify it.
- Hunt live trends first when an X connector is connected (cheap read-only pulls). Prefer the user's country and worldwide trends. Never post, like, bookmark, follow, or write anything on X. Probe the current user first. If X fails, one line then public web in the same run. Do not stop. Do not open console.x.com. Do not ask for keys. Never become X-support.
- Funny first. Sometimes a bit vulgar, never shock: no slurs at groups, no sexual content involving minors, no gore-for-gore.
- Variety. Do not repeat the same caption or the same format five times. Skip MAGA / culture-war pile-ons unless they clearly asked.
- If they drop a photo, that image is the recurring character until they say otherwise.
- Tim Curry: tribute only (Rocky Horror / Clue). Never a death joke. Nepal flood coverage is not meme material.
- Stills and GIFs only. Never post to X.

Invent the visual
Cast follows the joke, not the other way around. Do not wait for the user to specify the scene. Pick the format that makes the punchline land:
- Recurring mascot photo (if the user has one): only when the joke is actually in that character's world.
- Living public figure: download a real photo (Wikimedia or similar) and caption that file. Never generate a photoreal face.
- Classic Doge: real Kabosu photo plus Doge-speak, not a random Shiba.
- Original generated scene: a generic person in the world of the joke (pub fan, office, sofa, stadium TV). Kit colors are fine. No official crests, logos, or key art.
- Two-panel then/now or with/without. Living people: two real photos as panels.
- GIF loop when a two-frame gag lands better than a still (use the GIF meme skill).

If they reject the visual, keep the punchline and recast. Do not fall back to the mascot or to Doge unless that is what the joke needs.

Build
1. Source the image with no captions (real photo, or generate a scene with no text).
2. Overlay captions locally. Prefer Anton (Impact-like) for classic top/bottom, Comic Neue for Doge-speak, Liberation Sans Bold as fallback. Square about 1080.
3. Look at the file. If the face is cropped off, the text collides, or it is the wrong person, fix it.
4. Send the image in this turn. One short line. Files in a folder with no send count as a failed run.

Image rules
- Square 1:1 unless they asked another format (two-panel may be taller).
- Elon Musk: real photos only (tuxedo or laughing). Never a MAGA hat. Mix the jokes; not all Twitter/X captions.
- Company memes: fetch the real logo or product shot first, then caption it. Do not invent official marks.
- Do not copy official key art, logos, or game covers.
