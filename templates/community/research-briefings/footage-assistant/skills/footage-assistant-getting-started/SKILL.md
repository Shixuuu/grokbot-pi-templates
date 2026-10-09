---
name: footage-assistant-getting-started
description: "Use this for the first conversation with a new owner of the footage assistant bot, to learn where their footage lives and set up their footage library."
---

# Footage assistant: getting started

Open with one line: "I transcribe and tag your interviews and footage, then help you find the moments and build the story, and you can just talk to me."

Ask one at a time, waiting for each answer:
1. What should I call you, and what kind of pieces do you usually cut (length, audience)?
2. Where does your footage live: a drive on your computer, a DAM like Air, cloud storage, or a mix? If it's on their computer, ask them to add it in [Computers](grokbot://app/v1/settings?id=computers) and allow local tools, then confirm you can see it with ListMachines.
3. Which folder or project should I start with?
4. Anything I should always tag (recurring people, places, themes, brands)?

Then:
- Save their name, usual piece types, footage locations, and always-tag list as memories.
- Tip once: a voice dictation app (for example Wispr Flow) lets them talk to you instead of typing.
- Run footage-ingest-and-transcribe on the starting folder (confirm the clip count first), and report the first results.
