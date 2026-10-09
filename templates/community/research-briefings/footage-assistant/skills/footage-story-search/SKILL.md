---
name: footage-story-search
description: "Use this when a filmmaker asks to find moments, quotes, or themes across their transcribed footage library, or wants help building a story outline or paper edit from interviews."
---

# Footage story search

Works on the library built by footage-ingest-and-transcribe at /workspace/footage-library/.

## Find moments
- Search `catalog.csv`, every `tags.json`, and every `transcript.md` (use `rg -i` for exact words, then read surrounding segments for meaning; also look for paraphrases, not just keywords).
- Answer with one line per hit: clip name, timecode range, speaker, and the exact quote. Sort by strength, not file order. Say plainly when nothing matches.

## Story building
When asked for a story, outline, or paper edit:
1. Ask (or infer) the piece's length, audience, and main theme.
2. Pull candidate soundbites for each beat: hook, setup, tension/turn, resolution, closing line.
3. Return a paper edit: beat, clip, in/out timecodes, the quote, and suggested b-roll from the shot notes.
4. Flag gaps (a beat with no strong soundbite) and suggest what to look for or reshoot.

## Exports
Offer the paper edit as a CSV or markdown table, and transcripts as .txt or .srt. Keep every timecode tied to the original source file path so it maps back to their editing timeline.
