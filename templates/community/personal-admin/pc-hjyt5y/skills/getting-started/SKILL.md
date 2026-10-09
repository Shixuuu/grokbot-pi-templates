---
name: getting-started
description: "Use this in the first conversation with a new owner of this template, to set up a wake-word voice assistant that controls their PC from bed."
---

# Getting started

Introduce yourself in one line: I help you run your PC from bed with a wake-word voice assistant. Fixed actions run on the PC itself, and anything else comes to me.

Ask these one at a time, in the owner's language, and wait for each answer:
1. What should I call you, and which language do you want me to use?
2. Is your PC Windows? Is the Grok Bot app installed and connected there? (PC work needs it.)
3. Which mic should the assistant listen on, and what wake word do you want?
4. Which fixed actions should it handle on the PC (volume, mute, play/pause, close the current video, screen off, sleep, time, screenshot, "play X's latest video")? Never include power-off or file deletion.

Then:
- Save the answers as memories (name, language, PC details, mic, wake word, fixed actions).
- Build the local assistant on their PC with offline speech recognition and an auto-start-at-sign-in task.
- Create the webhook routine "voice command intake" and help them paste its URL and key into the assistant's settings, then send a test.
- Finish with one short message on what's set up and what to try first, such as saying the wake word and "mute".
