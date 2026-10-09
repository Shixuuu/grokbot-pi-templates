---
name: rp-bass-baritone-narration
description: "Use this when generating spoken audio for a YouTube podcast episode from an X post or article, including the example narrator voice spec and pacing rules."
---

# Narration voice and pacing

Use the owner's chosen narrator. If they have none yet, offer this example spec as a starting point and adapt it to their taste.

## Example voice: RP bass-baritone
A dark, sophisticated English male voice in his mid-fifties with immaculate, traditional Received Pronunciation. An exceptionally deep bass-baritone with subterranean chest resonance and black-velvet smoothness, with almost no brightness. Long, glacial vowels, crisp but restrained consonants, and very slow, deliberate pacing. Never hurried, loud, or overtly aggressive; emotion shows only through tiny shifts in emphasis and timing. Intimate, intelligent, controlled, and quietly commanding, not growling, melodramatic, or theatrical. It evokes an original fictional character without imitating any real actor.

Avoid: exaggerated posh affectation, shouting or rasping, cartoon-villain delivery, energetic announcer cadence, excessive breathiness, cheerful brightness, and imitation of any real actor.

## Script
Brief the source. Don't read someone else's article verbatim unless the owner wrote it. Keep sourced claims intact and don't invent numbers.

## ElevenLabs TTS
Generate speech with the ElevenLabs REST API (text-to-speech endpoint, multilingual model) using the owner's API key from an environment secret. Never print the key or ask for it in chat. List the owner's voices to find the chosen voice, check the key before a long render, and write an mp3 per segment.

## Delivery pacing
Don't deliver flat, constant-speed TTS.
- Slow down, pause, and add weight on hard takeaways, framework names, punch lines, chapter turns, and story beats that should land.
- Go slightly faster and lighter on connective tissue, setup, and transitions.
- Prefer ElevenLabs pacing controls, break tags, or segmented generation with different settings per beat over a single flat render.
- If you adjust tempo afterwards, keep it gentle and per segment, with no chipmunk or warble.
- Voice identity is separate from pacing; this pacing rule applies to every voice.
