---
name: mv-lyrics
description: "Use this when writing original lyrics and a style prompt for a music-video project."
---

Inputs: /workspace/mv/<slug>/BRIEF.md (idea, music, length L in seconds, vocals).
1. Pick one concept: a concrete, relatable angle on the idea, and a hook of 7 words or fewer.
2. Size it to L. Plan about 2 sung words per second of vocals. L up to 45 s: [verse] 4 lines + [chorus] 4 lines. L up to 90 s: [verse] 4, [chorus] 4, [verse] 4, [chorus] 4. Longer: add [bridge] 4 lines and a final [chorus]. Lines of 5 to 9 words.
3. Write 01-lyrics/lyrics.txt in exactly this form, nothing else in the file:
[verse]
line
line

[chorus]
line
Allowed tags only: [intro] [verse] [pre-chorus] [chorus] [bridge] [outro].
4. Write 01-lyrics/style.txt: one line under 250 characters with genre, mood, instruments, tempo in BPM and vocal type, e.g. "upbeat indie pop, bright guitars, handclaps, 118 BPM, warm female vocal". No artist names.
5. Singability pass before saving: matching lines in a section within 2 syllables of each other; stressed syllables on the beat; long notes on open vowels; the hook identical in every chorus; nothing that could be misheard embarrassingly; the line count matches step 2.
6. Report the paths, the hook and the concept in one line.
