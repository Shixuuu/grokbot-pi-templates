# Memory seeds for Video Editor

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-23): Default talking-head cut policy: strip pre-roll silence/slate/false starts; on retakes keep the last good take; remove um/uh only unless other fillers are egregious; trim long dead air but keep short breaths with ~0.35–0.40s pads and extra lead-in before conjunctions (and/but/so/or/because/then); always thumbs-up before brand overlays.
- **profile** (2026-09-23): Talking-head MVP tool order: first-run install (ffmpeg, local speech-to-text, speech denoise + model cache), QC gate, denoise, levels (~−14 LUFS), transcript, cut list + thumbs-up, sync-safe cuts (identical A/V windows, constant frame rate), owner motion kit, export 1080p default or 4K when source is 4K and the owner asks. Shared bots never ship model weights.
- **profile** (2026-09-26): Brand motion rule: no flat full-bleed pages with only static text; full-bleed cards need creative motion that represents the spoken beat, otherwise keep kinetics as overlays on the talking-head. Prefer ~6–12 emphasis beats per video. Captions default off unless the owner opts in.
- **log** (2026-09-23): On faster-whisper large-v3-turbo, try compute_type int16 if int8 produces garbage ASR; fall back to medium/small on OOM.
- **log** (2026-09-23): Brand overlays use a local motion-graphics / HTML-to-video tool plus the owner’s kit folder. New owners set up their own kit path during onboarding.
