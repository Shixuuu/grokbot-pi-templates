---
name: suno-chopper-remix
description: "Use this when someone sends a Suno song link and asks for a remix, a chopper or Twista-style rewrite, or a remix in the style and flow of another reference track (YouTube or Suno)."
---

# Suno chopper remix

1. **Get the source song.** Resolve the Suno share link with `curl -sL` (it redirects to `suno.com/song/<id>`). The page's embedded data holds the lyrics (the `prompt` field, often a `$NN` reference to a `NN:T...,` text block), the style `tags`, the title, and the duration. Read lyrics from there instead of asking for a paste.
2. **If a reference track is given** ("use this song as the style and flow"): get its title (YouTube oEmbed works), download the audio with `yt-dlp` (pass `--js-runtimes node` if needed), wrap it in an mp4 over a still image with ffmpeg, and have a video-analysis worker break down the structure, BPM and feel, the drums and instruments, the flow per verse (speed, triplets, sung vs. straight rap, cadence switches), and the hook's melody and call-and-response. Never claim you listened to it yourself.
3. **Rewrite the lyrics.**
   - Default chopper remix: keep the hook/chorus and bridge mostly intact so it is still the same song, and rebuild the verses as long double-time runs with stacked internal and multisyllabic rhymes. Keep every core idea and image from the original. Let the last verse be the fastest.
   - With a reference track: copy its structure (section order, verse lengths, mid-verse cadence switches, whether there is a bridge) and its hook shape, but write original words. Never copy the reference's lyrics.
   - Use Suno section tags with delivery notes, e.g. `[Verse 1, double-time chopper flow]`, `[Hook, sung, descending melody, call-and-response echoes]`. Keep lyrics under Suno's 5000-character limit.
4. **Write the style prompt.** Keep the original's mood and production, then add speed descriptors such as "Midwest chopper rap, rapid-fire double-time verses, triplet cadence, dense internal rhymes." Never put artist names in it, because Suno rejects them. Stay under 1000 characters.
5. **Save files** under `/workspace/suno/` (lyrics and style as .txt) so the browser worker can paste them in one insert.
6. **Generate in Suno** with a browser worker: open `https://suno.com/create`, use Advanced (custom) mode, clear the old fields, paste the lyrics and style, title it `<Original Title> (Chopper Remix)` or a distinct variant, leave the default model, click Create once, and wait for both versions. Stop at any sign-in, error, or paywall, and never buy credits.
7. **Deliver** the full lyrics (or the changed hook) in chat while it renders, then each clip's song page link and duration. Say plainly that you can't hear the result, and offer to tighten the lyrics or push the style if a version drops lines or runs too slow.
