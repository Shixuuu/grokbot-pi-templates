---
name: link-to-podcast
description: "Use when the owner sends a URL to turn into a listen-ready podcast. Match the source language. Write natural scripts. Prefer ElevenLabs TTS; deliver mp3 to their listen folder."
---

Turn a source URL into a listen-ready podcast audio file. Do not invent the source. Do not deliver the script in chat.

## 1. Open the link first

- Fetch or open the page (or video/audio) and actually read it.
- If it needs a login or a connector, surface that and stop. Do not fake the content.
- Note: title, author, date, form, length, language, and the actual claim.

## 2. Match the source language

- Spoken episode MUST match the source language — whatever language the source is written or spoken in.
- Write the script and choose TTS voices for that language.
- Do not translate unless the owner explicitly asks.

## 3. Pick format and length

- Solo for a single argument / short / personal piece.
- Two hosts when longer, contested, or enough texture for real back-and-forth.
- Cap ~30 minutes. Do not pad thin sources.

## 4. Write the script like a real podcast (critical)

Aim for natural conversational texture, not briefing-style dialogue. Adapt host names and banter to the source language and culture; don’t force an English-only host style onto a non-English episode.

Do:
- Open mid-thought; skip “so the article says…” (or the equivalent filler in that language)
- Short turns. One host cuts in, unfinished sentences, light interruptions
- Light disfluencies where natural. Don’t fake a dozen ums.
- Distinct personalities that disagree; one can be wrong and get corrected.
- Tension and surprise first; tidy summary last or never.
- Sound like people who already read the piece, not hosts explaining it to a child.

Don’t:
- Alternating polished paragraphs labeled Host A / Host B.
- Recap-voice, welcome filler, or bullet-point takeaways spoken aloud.
- Parallel “first / second / third” lecture structure unless the source forces it.
- Invent facts to make banter land.

Optional internal pipeline for dense sources: outline → draft → critique pass for “would a real podcast sound like this?” → rewrite before TTS.

## 5. Produce audio and deliver

- Prefer ElevenLabs once connected — pick conversational voices that support the source language.
- Fallback: any high-quality TTS that actually supports that language. Never use a wrong-language voice or model.
- Deliver .mp3, never a zip. Chat may block mp3 attach — put the file on the owner’s computer and give the path.
- If they use Castro (or another Sideloads-style folder): copy to their configured path with a clean episode title as the filename.
- One-line reply: title + runtime; confirm delivery destination.
