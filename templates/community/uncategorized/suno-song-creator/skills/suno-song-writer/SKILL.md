---
name: suno-song-writer
description: "Use when asked for song ideas or to write a song for Suno: divergent idea lists, then lyrics, a style prompt, and a title as three separate plain-text messages, following the Suno formatting and creative rules."
---

# Suno song writer

## Random music ideas (Expansion-style ideation)
Goal: help the user see beyond their musical defaults. Diverge first, converge later.
- Before generating, check what they've recently made or rejected (memory, conversation) so you don't repeat their defaults. Only ask if there's truly nothing to go on; otherwise just generate.
- Quantity first: about 10-15 ideas per batch, numbered so they can pick by number. Let the list be a bit messy; weak ideas often spark good ones.
- Mix across the batch:
  - Safe-but-strong: squarely in their taste, ready to write now.
  - Bold: a known style pushed somewhere attention-grabbing (odd tempo, unusual vocal, extreme dynamics).
  - Genre collisions: two styles they like fused in an unexpected way.
  - Unexpected angle on a theme: reverse the obvious perspective, an allegory, a narrator you wouldn't expect, a tiny everyday moment blown up big.
  - At least 2-3 genuine wild cards outside their usual taste or that challenge their assumptions.
  - Vary instrumental vs vocal, mood, energy, and rap vs sung.
- Each idea: a working title-ish headline, genre/style + mood in a few words, the theme or story angle in one line, and one line on why it could work (hook, structure trick, or emotional payoff).
- Don't rank or pick the "best" unless asked; present them as options for the user's judgement. If they ask for the best right away, still give options, then a short pick.
- If the user keeps choosing the same style, gently surface a format change (structure, perspective, instrumental, duet, spoken word) rather than just a new topic.
- If they give rough constraints (mood, genre, occasion), honour them but still stretch within them.
- Once they pick, write it with the rules below.

## Output format (song)
Deliver every song as exactly 3 separate messages, in this order, each containing only its part as plain text with NO ``` code fences or extra commentary:
1. Lyrics only
2. Style prompt only
3. Title only
Any short intro or comment goes in its own message before the lyrics, never inside these three.

## Where to make the song (explain when asked)
When a user asks what Suno is, where to create the song, or where to put the output, explain briefly and give the official links:
- Web: [Suno](https://suno.com/)
- Android: [Suno on Google Play](https://play.google.com/store/apps/details?id=com.suno.android)
- iPhone/iPad: [Suno on the App Store](https://apps.apple.com/app/id6480136315)
How to use the output: in Suno's create screen, choose the option to write your own lyrics, then paste message 1 into the lyrics field, message 2 into the style field, and message 3 as the title. Don't invent detailed menu paths beyond that.

## Clean display lyrics (on request only)
The Suno lyrics are intentionally misspelled for pronunciation, so a correctly spelled version is sometimes needed for sharing.
- Never post it by default or unprompted; the user usually iterates on a song first, and extra versions clutter the chat. Don't offer it after every song either.
- Post it only when the user signals the song is finished or wants to share it (e.g. "done", "final", "that's the one", "display lyrics", "for sharing", "clean version").
- If the signal is ambiguous ("done" could mean done iterating or done for now), it's fine to ask once in a short line whether they want the display lyrics.
- Format: one plain-text message, no code fences, with every respelling reverted to normal spelling (teer back to tear, winnd back to wind, and so on), [section] tags and [tempo] lines removed, blank lines kept between sections, and the same words and line breaks otherwise. Keep "A.I." as written.
- Learn the user's habits over time (e.g. whether they tend to keep iterating or finish after a draft) and save that to memory, but still wait for their signal.

## Spelling modifications
- AI is written "A.I."

## General song creation rules
- Base music preferences on the user's liked songs / taste profile (if available), randomly picking styles that fit.
- Always create a relevant title reflecting the content. It may be poetic, allegoric or direct, but the title must NOT appear literally in the lyrics.
- Themes like men's struggles: keep subtle with a few clear phrases, no explicit directives.
- Non-hip-hop songs: profanity is probably not wanted by default, but it's fine when the user asks for it or prefers that style. Rap songs: profanity/NSFW allowed when it makes sense and fits, without overloading.
- Rap songs get extra verses (e.g. 4-5) because lyrics are delivered quickly.
- Never mention age in the song.
- Use a slow buildup to a crescendo when applicable.
- Instrumental styles (e.g. lo-fi chill): no lyrics.
- Uncensored aggressive rap: raw, intense, lyrically dense, strategic profanity.
- Style prompts: describe generically, never name artists, plain language describing the song's flow, under 1000 characters.
- Lyrical approach may change as needed, but keep verse-chorus-bridge format unless told otherwise.
- Use poetic language when requested.
- Unless told otherwise, end the style prompt with "Raw vocals."
- Lyrics max 5000 characters.
- Treat song instructions as rough guidance: follow the intention, don't reuse the user's wording verbatim unless asked.

## Structure and formatting
- Lyrics as plain text in their own message, with an extra blank line between sections for easy pasting into Suno.
- Each section gets a tag `[Section: style modifiers]`, e.g. `[Verse 1: Emotive female vocals, soft guitar]`.
- `[Instrumental break: description]` where it makes sense.
- Optionally start with `[Tempo: X-Y bpm]`.
- No style descriptions in parentheses inside lyrics (Suno ignores them). Ad-lib asides like (Yeah) are fine.
- Non-rap songs: shorter verses to avoid crowding; add more verses if needed.
- If emulating a specific song's structure doesn't work, rethink the composition.
- Rap default: fast, angry, dense style with 5 verses, pre-chorus, chorus, bridge, final chorus when appropriate.

### Pronunciation by respelling
Suno does NOT understand IPA or bracketed phonetic notes. When a word is a homophone or could be mispronounced, misspell it so Suno reads it the intended way. Never add brackets or phonetic notation.
Tested spellings (use these):
- tear (from the eye): teer
- tear (to rip): tare
- wind (moving air): winnd
- wind (to wind up, like a toy): wined
- bow (hair bow, ribbon): boh
- live (verb, rhymes with give): liv
- live (adjective, live music, rhymes with five): lyve
- read (past tense): red
- read (present tense): reed
- bass (low sound/music): bayss
- bass (the fish): bas
- close (to shut): cloze
- lead (to guide): leed
- lead (the metal): led
Warnings from testing: "wynd" was read as the wind-up sense; "lyve" for the verb sounded wrong; "bass-fish" and plain "bass" were read like "base". For other ambiguous words, pick the simplest respelling that only reads one way, and prefer short spellings over hyphens or compounds. Leave the unambiguous sense spelled normally.

## Aggressive uncensored rap structure
- Intro: brief distorted whispers or ominous echoes; fragmented phrases, profanity, repeating motifs for a tense, chaotic mood.
- Verse 1: long and intricate (about 40-60 lines); multisyllabic and internal rhymes, wordplay, interjected asides like (Yeah), (What?); rising aggression via rapid pacing, critiques, personal turmoil. Flexible length.
- Chorus: intense, repeatable, chant-like echoes, often listing varied groups; repeat 1-2 times with small variations; simple and memorable.
- Verse 2: even more complex and extended (about 50-70 lines, adjustable); twisted humour, heavier profanity for impact, quick delivery shifts, deeper conflict/defiance stories, dark imagery and boasts; sub-sections allowed.
- Second chorus: amplified (screams, fuller production), subtly altered list for progression, optionally extended.
- Outro: fading echoes or repeated challenges (e.g. "You wanna face the chaos"), may cut off abruptly.
- Optional Intro 2: shadowy bridge or eerie buildup to pivot tone.
- Optional Verse 3: shorter erratic "shift" verse (20-40 lines), heightened chaos, resurgence or raw twists.
- Overall: stay under 5000 characters by trimming while keeping rhyme density; adapt verse count, lengths and optional sections to the topic.
