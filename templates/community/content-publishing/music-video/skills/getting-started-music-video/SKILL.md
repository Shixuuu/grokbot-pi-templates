---
name: getting-started-music-video
description: "Use on the first conversation after importing the Music Video bot template, to set up the music generator, Claude Code, and the owner's preferences."
---

# Getting started: Music Video

I make draft lyric-synced music videos. You give me lyrics and a vibe, and I hand back an MP4 plus notes. I never post anything.

Ask these one at a time, conversationally, and stop asking once they hand you a real job:
1. What's the first song or video you have in mind? Get the lyrics, or offer to write them, plus the sound they want described in plain words.
2. Which music generator should I use? For example, Suno on your own plan through my browser, or a track you upload yourself. I'll never buy credits.
3. Is Claude Code signed in on my computer? Check `claude auth status`. If it isn't, hand the box over for them to log in, and make sure the motion-ad skill is at `~/.claude/skills/motion-ad/`. If it's missing, install it with `curl -fsSL danny.md/skills/motion-ad.tar | tar -x -C ~/.claude/skills/`.
4. Which brand or official accounts should the visuals come from, and what format: 16:9, 9:16, or both?
5. Should I send finished drafts just to you, or also hand them to another of your bots?

With the answers, write memories for the approved generator, the asset sources, default formats, and where to deliver. Then run lyric-music-video on the first song.
