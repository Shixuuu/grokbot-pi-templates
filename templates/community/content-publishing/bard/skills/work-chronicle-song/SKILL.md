---
name: work-chronicle-song
description: "Use this when writing a song (ballad, chanty, or any music style) about what the user has actually been building, generating the track in a connected music tool, and making a music video of it."
---

# Work chronicle song

## Goal

Write one titled, singable work-chronicle song from **real** shipping and story beats, in the style the bot or user chose, and deliver it as a song or as a music video, whichever the user wants. Never invent work that did not happen.

## Song or video

Before writing, ask the user which they want:

- **Song only**: lyrics plus style line, and optionally a generated track.
- **Music video**: the song, the generated track, and a video set to it.

If they don't say, default to the song and offer the video at the end.

## Style

Use the bot's fixed style (e.g. a bard bot sings bardic folk), or ask the user to pick one when the bot lets the user choose. Match that style's structure, rhythm, rhyme habits, and vocabulary.

## Gather

1. Ask the user, or their coordinator and specialist teammates (story, design/art, research/competitors, ship notes, QA for proven-only), for **short plain-language beat lists**, not ticket dumps.
2. Prefer verified shipped or proven signals over plans. If a beat is only planned, leave it out or mark it as waiting.

## Language ban

Do **not** use issue numbers, PR numbers, milestone names, kanban status labels, or internal wave jargon. Translate into plain words the listener would understand, plus the product's own words when they are public-facing. Leave out secrets, private links, customer names, and money figures unless the user explicitly asks.

## Write

1. Title the song.
2. Write the lyrics with music-tool section tags on their own lines: `[Intro]`, `[Verse 1]`, `[Chorus]`, `[Verse 2]`, `[Bridge]`, `[Outro]`. Tags never get sung, so keep stage directions inside the brackets only.
3. Add one **style line** under the title: genre, mood, tempo feel, vocal type, and 2-4 instruments, about 200 characters max. Describe the sound; never name a real artist.
4. Keep it singable: roughly 3 verses plus a chorus, optional bridge.
5. Tone: warm and true to the style, not corporate.

## Make the track

For song-only, offer this after the lyrics; for a video, it is required, since the track is the soundtrack.

1. Check which music tool is actually reachable right now (for example Suno, Runway, or ElevenLabs music). Don't claim a tool you can't reach; if a connector needs sign-in, ask the user to connect it.
2. Quote the cost or credits first and wait for a yes. Never spend without it.
3. Pass the lyrics with their tags and the style line. Make 2 takes if the tool allows, share both, and let the user pick.
4. If no music tool is reachable, give the user the lyrics plus the style line ready to paste into one, and ask them to send back the finished audio file for the video.

## Music video

### Pick the model

Use the **best video generation model available to you at the time**, checked fresh each run: your own built-in video generation if you have it, otherwise a connected video tool (for example Runway), otherwise write sealed prompts the user runs in [Grok Imagine](https://grok.com/imagine). Prefer the model with the best character consistency, motion, and start-image support. Tell the user which model you picked and why in one sentence.

Quote the full cost before generating anything (per-second price times song length, plus regenerations), and wait for a yes.

### Prep

- Lock the performer's look first with a character reference sheet (front, back, one face close-up, plain grey background) and lock any recurring place with an empty location still.
- Write each segment's prompt with scene, characters (restated identifiers), action, how it ends, camera, lighting, and must-not-drift locks.
- Map the track, plan beat-aligned segments, assemble, mix the audio over, and check the result with song-video-assembly.
- Use a beat-cut montage approach only if the user wants a fast-cut edit instead of one continuous take.

### Extend, don't splice

Most models cap each clip (Imagine at 15 seconds). Do **not** build the video from separate clips cut or dissolved together; viewers see the joins. Build it as **one continuous take by extension**:

1. The picked track is the only soundtrack. Measure its real tempo and length; don't trust the style tag.
2. Plan ceil(song length / clip cap) segments as one camera journey. Each segment's prompt says what happens in that clip and how the camera and characters **move** into the next setting rather than jumping.
3. Generate segment 1 with the character reference images. For every later segment, pass the **exact last frame of the previous segment as the start image**, plus the same reference images and the same written character description.
4. After each segment, check the last frame for drift (face, outfit, prop, any staged transformation). If it drifted, regenerate that segment before continuing.
5. Join the segments end to end, trimming only the duplicated first frame of each continuation. No dissolves, no crossfades, no reordering. Lay the song over the whole thing; drop the clips' own audio unless the user wants native singing.
6. If no full song track exists, keep the model's native singing per segment if it has it, and still chain by last frame; never replace singing with text-to-speech.
7. Every prompt: no on-screen text or signs with lettering; if the song track carries the vocals, no one sings or lip-syncs.
8. Review the finished video yourself before delivering it, and deliver the file, not just the prompts, whenever you generated it.

## Share to X (optional)

After delivering, ask once whether the user wants to share it on X. If they say no or don't answer, drop it.

1. Write a short post: one hook line in the song's voice, two hashtags at most, nothing private, and no claim of anything that didn't ship.
2. Check what can actually post. Most X connectors cannot create posts, so check the tool list instead of guessing.
   - If a connected tool can post with media: show the post text plus file as a draft and post only after the user explicitly says to.
   - If the user is signed in to X in your browser: fill the composer with the file and text and stop before pressing Post.
   - Otherwise: hand over the file and the post text to copy, plus a link to [compose on X](https://x.com/compose/post).
3. Never post, reply, or DM on X without the user's explicit go for that exact post. A declined post is final.

## Out of scope

Do not write code, merge, run QA, purchase anything beyond an approved music or video generation, or file tickets.
