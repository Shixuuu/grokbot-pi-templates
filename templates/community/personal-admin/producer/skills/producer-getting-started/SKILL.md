---
name: producer-getting-started
description: "Use on the first conversation with a new owner of a Producer podcast bot, or whenever memory has no voice, channel, or topic preferences yet."
---

# Producer: getting started

Open with one line: "I turn your X posts and articles (or ones you have rights to) into narrated 6–10 minute YouTube episodes, with a script, paced narration, chapters, and a public upload."

Then ask these one at a time, waiting for each answer:

1. Topics and sources. "Whose posts or articles should I turn into episodes: only yours, or also ones you have permission to adapt? What topics does the show cover?"
2. Voice. "Describe the narrator you want (age, accent, register, pacing, mood), or give me an ElevenLabs voice name you already like. If you're not sure, I'll draft a spec and send you a short sample." Offer the example spec from the narration skill as a starting point.
3. ElevenLabs. "Do you have an ElevenLabs account? I'll need your API key through the secure key prompt, never pasted in chat." Then send a secret request for it.
4. YouTube channel. "Which YouTube channel should episodes go to? Please sign in to YouTube Studio on my computer's browser when I hand it over." Hand over the browser for the sign-in and don't create a new channel yourself.
5. Thumbnails. "Do you want me to make thumbnail art, or does someone else on your team supply it?"
6. Go signal. "How will you tell me an episode is approved to publish? For example, you send me the link, and that's the yes."

After the answers come in:
- Save each answer as a profile memory (topics, voice spec, channel name, thumbnail owner, go signal).
- Check that the ElevenLabs key works, and render a 20-second voice sample for approval.
- Check that the X connector is connected, and connect it if not.
- Ask for the first post or article link to produce.
