---
name: podcast-setup
description: "use this when a new owner is creating their personal daily podcast for the first time, or rebuilding it from scratch"
---

Run this as your first conversation with your new owner.

# Podcast Setup interview

Ask one question at a time. Offer a default with every question (a widget with options plus custom text is ideal). Target: under five minutes.

## 1. The show
- "What should we call your show?" (default: "<First name>'s Daily")
- "One host or two?" Two-host shows can trade segments or banter.
- Host names (default: Eve, and Rex for a second host). These are on-air names only.

## 2. Segments (loop)
Ask: "What would you like the first segment to be?" Then for each segment, collect these seven things, inferring what you can and only confirming:
1. **What** it is, in their words.
2. **Kind** (infer, then confirm): News topic, Schedule watch, Ongoing story, Changes watch, Reflection, Your inputs, Fixed bit (see the Podcast Produce skill for what each does).
3. **Sources**: "anywhere reputable" is fine; take named outlets, feeds or accounts if offered. For Your inputs, find the connector or URL (RSS, a folder, bookmarks).
4. **Who voices it** (two-host shows).
5. **Tone**: calm briefing, upbeat, dry, conversational, banter.
6. **Nothing new?** Skip silently (default) or always run.
7. **Location** if it's weather or local (city or zip only).
Confirm each segment in one plain line without a widget; use a widget only when you're unsure of the kind or host. Then: "What would you like the next segment to be?" until they say done. Read the lineup back in order and let them reorder. The intro and the sign-off are automatic.

## 3. Voices
- Say: "Grok voices are ready to go. If you already use ElevenLabs, you can bring your voices from there." Only go into ElevenLabs if they want it; each host may use a different provider.
- If they choose ElevenLabs: recommend installing the ElevenLabs connector (search the plugin catalog for ElevenLabs, install it with their okay, authenticate it if it needs auth). Use it to search their voice library so they pick by name and accent instead of pasting voice ids, or to design a new voice from a description if they want one. Still collect `ELEVENLABS_API_KEY` with the masked secret card, because daily audio is rendered on this computer through the ElevenLabs API so the episode file stays local.
- Ask for the key for each chosen provider **before** rendering any samples (samples need it). Right before the key card, give a one-line how-to with a link: Grok keys come from the xAI console (https://console.x.ai, API Keys); ElevenLabs keys come from the ElevenLabs dashboard (https://elevenlabs.io, profile, API Keys). Mention that usage is billed to their own account.
- Default a first host to the xAI voice `eve` and a second host to `rex`. Render one 10-second sample per host (wrap as MP4, since chat won't take bare audio) and offer "hear other voices" rather than always presenting several. xAI voices verified working: eve, ara, una (female-leaning), rex, sal, leo (male-leaning).
- Request a key only for providers actually chosen: one masked secret request per provider (`XAI_API_KEY`, `ELEVENLABS_API_KEY`). Never ask for keys in chat.
- If they ask how long the show will be: the lineup drives length. Offer to drop or merge segments; never promise to cut stories to hit a time.

## 4. Delivery
Offer, default first:
- **Here in chat**: the episode arrives each morning as a short video with a title card. No setup.
- **Email**: through their own Gmail or Outlook connector (connect it if missing).
- **Their cloud drive**: through their own connector. Large MP3s may exceed a connector's upload limit; test with the first episode and fall back to chat if it fails.

## 5. Schedule
- Timezone (default: the app's) and a time ("Ready by 6:30 AM?"). Create a daily routine about 30 to 45 minutes before the ready time, whose prompt is: produce today's episode using the Podcast Produce skill and deliver it.

## 6. Save and prove it
- Write `/workspace/podcast/show.json` (shape below), create `continuity-log.md` and `trackers/`, and write the two helper scripts from the Podcast Produce skill to `/workspace/podcast/scripts/` if they're missing. Check that `ffmpeg` is installed (install it if not).
- Produce a test episode right away so they hear it before the first morning. Ask one question afterward: "Anything you'd change?"

## show.json shape
```json
{
  "show": {"name": "", "timezone": "America/New_York", "ready_by": "06:30"},
  "hosts": [{"name": "Eve", "provider": "xai", "voice": "eve", "role": "host"}],
  "segments": [{
    "id": "ai-news", "title": "AI news", "kind": "news",
    "sources": ["anywhere reputable"], "host": "Eve", "tone": "calm briefing",
    "when_empty": "skip", "location": null, "notes": ""
  }],
  "delivery": {"type": "chat", "target": null},
  "created": "YYYY-MM-DD"
}
```
