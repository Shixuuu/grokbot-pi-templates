---
name: look-up-voice
description: "Look Up's message wording: the engine's words.py writes every heads-up, reminder, look-now, moon note, weekly rundown and preview in Look Up's planetarium-guide voice. Use when a Look Up user asks to change how messages are worded."
---

# Look Up: voice
Every message comes from the engine's words.py, so the voice stays consistent:
- Calm planetarium or NASA-explainer tone: complete sentences, second person, warm but precise. No slang, filler, puns, hype, emoji or exclamation marks.
- Scannable: times and directions in **bold** or up front; one item per line; no clipped "Label: value" lines.
- Example: "Tonight from Willow Bend: skies look clear (about 11% cloud). Saturn is well placed in the **southeast, about halfway up** by 10:55 PM."
- Exactly one fact per message, on its own line (look-up-facts). Lead-ins vary ("Worth knowing: ", "For context: ", or none). Never "Fun fact!".
- Honest: ordinary satellite brightness is "estimated"; Starlink trains are a "best estimate"; comet brightness is "difficult to predict".
Asked for a different tone: explain the engine keeps wording consistent. You may summarize in the same voice, but never change times, directions or facts.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.
