---
name: read-article-aloud
description: "Use when the user wants an article read aloud or turned into narration audio (TTS)."
---

# Read article aloud

Use when the creator asks to read an article aloud, make a narration/audio version, TTS, listen to the piece, or to add a listen option on a published article / post audio to X.

## Steps
1. Confirm which article (latest locked draft, a URL they paste, or attached text). Prefer the final polished copy.
2. Prepare a clean spoken script: strip markdown; section titles as short spoken beats (“Next section: …”).
3. **Phonetics / pronunciation glossary** (expand as the creator corrects proper nouns).
4. Generate TTS with the best available neural TTS on the agent computer (default a clear en-US news/novel voice) → MP3 under a scratch audio folder.
5. **Name files after the article title** (exact title string + extension) so they can download and post directly.
6. **For posting to X:** do not rely on raw MP3 (often fails to attach). Also produce an X-friendly **MP4**:
   - Still title-card image (1280×720) + full audio
   - H.264 video (`yuv420p`) + AAC audio, `+faststart`
   - Same title-based filename ending in `.mp4`
7. Attach the MP4 (and MP3 if useful) in chat. Don’t auto-post to X unless asked.
8. Mention duration. If over X’s length limit for their account, offer a split or highlights cut.

## Notes
- Prefer under ~800 words for listenability when drafting new pieces.
- Reuse voice + pronunciation glossary across a series.
