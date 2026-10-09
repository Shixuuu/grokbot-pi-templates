---
name: lyric-music-video
description: "Use when making a lyric-synced music video (MP4) from lyrics: generate the track, align lyrics to the beat, render kinetic-type motion with Claude Code, self-QA, and deliver a draft."
---

# Lyric music video pipeline

Draft only. Never post, publish, upload to socials, or buy credits. The owner presses the button.

Job folder: `/workspace/music-video/<slug>/` with `lyrics.md`, `assets/`, `audio/`, `timing/`, `tools/`, `render/`, `NOTES.md`.

## 1. Track
- Use the music generator the owner approved (see memory). For a web app like Suno, sign in on the box browser through a handoff and use the owner's own plan. Never buy credits or upgrade.
- Add section tags ([Intro], [Hook], [Verse 1]...) to the lyrics without changing any words, and save the result as `suno/<slug>-lyrics.txt`. Drop obvious paste artifacts and note them.
- Describe the style in plain production words: genre, BPM, drums, bass, lead synth, vocal type, hook delivery. Never name real artists or songs. If the owner wants the sound closer to an existing song, describe that song's ingredients. Never clone a copyrighted master.
- Generate two takes. Save the style prompt for every round.
- Score each take with ASR alignment (lyric word and line match, plus how clearly the hook word comes through), BPM, loudness and peak (ffmpeg ebur128). Recommend one take, and let the owner pick by ear. Chat can't attach audio files, so wrap previews as an MP4 over a still image.

## 2. Assets
- Official visuals only, from the brand's official X accounts and sites, saved into `assets/` with `SOURCES.md` listing each file's source post URL and media URL. No invented logos. Leave out on-screen stats or benchmark charts unless the owner wants claims shown.

## 3. Timing
- Set up a venv with faster-whisper or stable-ts, demucs for vocal separation, and librosa. `tools/align.py` takes the audio and tagged lyrics, writes `timing/lines.json` (start and end per line, section, word times) and `timing/beats.json` (BPM, beats, downbeats), and flags lines it couldn't time reliably.
- Use several ASR passes and filter out hallucinated repeats. Known lyrics win over ASR text. Hooks the ASR can't anchor get spaced on the beat grid.

## 4. Render
- Claude Code on the owner's subscription: `unset ANTHROPIC_API_KEY; claude -p --model <top model> --effort xhigh` with the motion-ad skill at `~/.claude/skills/motion-ad/` (credit danny.md / @dannypostma, CC BY-NC 4.0) as the pipeline. Build the page from the timing config with its duration set to the audio length. Make it aspect-aware so 9:16 costs one extra render. Mux the audio afterwards with explicit `-map` (MP3s often carry cover art).
- Look: dark base, hard type, palette from the official assets. Hooks are full-screen call-and-response. Verses reveal word by word over b-roll that cuts on downbeats. End card carries a parody disclaimer when the song rewrites an existing one.
- Review stills on a contact sheet before the full render.

## 5. QA (two fix passes max)
- Video length matches the audio. Audio is present with no clipping. Check freezedetect and blackdetect. Pull frames just after line starts and confirm the on-screen line matches. Every asset is listed in SOURCES.md.
- Deliver `render/<slug>-vN.mp4` (and `-9x16`) plus `NOTES.md`: parody label, generator and settings, every song URL, style prompts, the chosen take and why, sources, QA results, and caveats.
- For in-chat playback, also send a 720p copy of about 11 MB (`-crf 27 -movflags +faststart`). The full-size file may not play in chat.
