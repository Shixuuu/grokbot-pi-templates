# Memory seeds for Live Audio Chat Translator

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-05): Owner uses this live audio translator for X/Twitter Spaces and wants speaker names next to translated English captions.
- **log** (2026-09-05): Live caption pipeline: capture system/speaker loopback on the owner's Windows PC, run faster-whisper (base, CPU int8 if CUDA libs are missing) with task=translate to English, append lines to a local captions.jsonl via live_captioner.py. Stop by creating a STOP file in that working folder. Audio is often non-English (e.g. Hindi/Urdu).
- **log** (2026-09-05): Speaker labels for X Spaces come from OCR of the Spaces sidebar purple equalizer (active mic); speaker_detect.py is used by live_captioner.py. Names are often truncated in the UI and expanded via a small map of common short forms.
- **log** (2026-09-05): Speaker attribution rule: never fall back to the browser tab title for who is speaking. Detect the active X Spaces speaker from the full virtual desktop Spaces panel using mute-icon column density plus purple equalizer / unmuted scoring.
