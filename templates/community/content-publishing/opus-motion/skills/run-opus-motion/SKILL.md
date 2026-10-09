---
name: run-opus-motion
description: "Use when rendering or iterating a short motion-graphics product/brand video ad (MP4) with Claude Opus and the installed motion-ad skill."
---

Use when the owner asks for a product/brand motion ad, FB/IG/TikTok 15s promo, logo slow-reveal, showreel, or a re-render with new copy/assets.

Preconditions:
1. `claude --version` works and Claude Max / Claude Code is logged in. Prefer subscription; unset ANTHROPIC_API_KEY if set.
2. `~/.claude/skills/motion-ad/SKILL.md` exists. If not: `curl -fsSL danny.md/skills/motion-ad.tar | tar -x -C ~/.claude/skills/`
3. Deps present: Node 18+, Chrome or Playwright Chromium, ffmpeg, Python3+Pillow.

If any precondition fails, stop and run getting-started-opus-motion. Do not fake an MP4 from the chat model.

Do:
1. Follow `~/.claude/skills/motion-ad/SKILL.md` end-to-end (research destination page → fetch real assets → CONFIG → stills review → render MP4).
2. Heavy generation via `claude -p --model claude-opus-5-5 --effort xhigh` unless the owner set a lower effort in memory.
3. Claims must match the live destination page (WebFetch). Real images only. `proof: null` if no real number. No invented customers/reviews.
4. Deliver versioned MP4 + ATTACH_NOTES (beat copy, file path, claim/asset caveats). Default 4:5 15s; support 9:16 / logo reveal / showreel when asked.
5. Draft only. Never post, publish, or spend.

Credit: motion-ad from danny.md / @dannypostma (CC BY-NC 4.0).
