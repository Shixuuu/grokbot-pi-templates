---
name: build-scout-playbook
description: "Use when scouting what real people are building with AI and turning the best finds into build pitches: on-demand asks like 'what should I build', and the scout digest or weekly roundup runs."
---

# Build Scout playbook

One job: find what real people are building and vibe coding with AI, and turn the best of it into build candidates the owner would want shipped. Two lanes, mix both: NEW (something the owner hasn't built) and LEVEL-UP (a technique that upgrades something they already run).

## Sources
- X via the X connector, STRICTLY READ ONLY: search, timelines, posts, and the owner's own bookmarks. Never post, like, reply, repost, follow, DM, or bookmark.
- Open web: HN Show HN, Reddit (r/homeassistant, r/selfhosted, r/ClaudeAI, r/cursor, r/LocalLLaMA, r/ObsidianMD), GitHub trending, Product Hunt, builder blogs and YouTube writeups.
- The owner's X bookmarks are top-tier signal: what they saved is what they want built.
- Seed accounts (from memory): check their timelines every run, and add winners the owner or builder likes.

## Taste bar (a pick must clear all three)
1. A real person shipping, ideally like the owner: dads, WFH folks, sales leaders, gamers, homelabbers, solo founders. Not a corporate marketing desk or an AI influencer's hot take.
2. A real artifact: a detailed build breakdown, repo, demo video, or an agent acting in the physical world. See the gold-standard posts in memory.
3. A concrete riff for the owner: name the existing build it upgrades, or the weekend first step.
Small accounts are fine. A 40-like post with a real repo beats a 40k-like thread with nothing behind it, and a high bookmarks-to-likes ratio means people saved it to build.

KILL: model launch recaps, funding news, listicles, engagement bait, 'I tried ChatGPT' posts, generic AI news, prompt packs, course sellers, and anything already in seen.json.

## X how
- The X API does NOT support web-only operators like min_faves. Pull with the query, then filter yourself on public_metrics (likes, bookmarks, quotes).
- Use recent search for daily runs and save full-archive search for the weekly roundup. Check usage credits before heavy searching, make X calls one at a time (parallel calls hit rate limits), and keep the volume modest.
- Rotate query families, then pull the author's timeline for winners:
  - builders: ("I built" OR "built this" OR "weekend project" OR "vibe coded" OR vibecoding) (agent OR "claude code" OR codex OR cursor OR grok) -is:retweet
  - second brain: ("second brain" OR obsidian OR "personal wiki" OR "agent memory") (claude OR agent OR LLM) -is:retweet
  - home: ("home assistant" OR homelab OR selfhosted OR "robot vacuum") (agent OR LLM OR claude) -is:retweet
  - parents and kids: (dad OR mom OR "my kids" OR homeschool) (built OR made) (AI OR claude OR agent) -is:retweet
  - work: ("sales team" OR RevOps OR "solo founder") ("I built" OR agent OR automation) -is:retweet
  - gamers: (gaming OR "fantasy football" OR minecraft OR "game mod") ("I built" OR agent OR claude OR cursor) -is:retweet
  - fleets: ("multi-agent" OR "agent team" OR "my agents") (demo OR repo OR github OR breakdown) -is:retweet
- Tune the families to the owner's interests from memory.

## The loop (most important)
1. Each run, choose the 1 to 3 items most worth prototyping and send them as a BUILD PITCH to the owner's builder bot if they have one; otherwise pitch the owner directly. Each pitch has the source link, what the original does, the owner-flavored version, the smallest demo-able slice (a few hours for a coding agent, something they can click, see, hear, or hold), what it would use, NEW or LEVEL-UP, and a 1 to 10 'would lose their mind' score. Skip the pitch if nothing scores 7+.
2. Favor builds that can be finished entirely in the cloud, with no private data, house access, or sign-ins.
3. Log every outcome (built, passed, or parked, and why) in ideas.md, and pitch less of whatever gets passed.
4. The digest to the owner stays short: a few inspirations plus what was pitched.

## Output format per inspiration
A markdown link, who built it (and why they're like the owner), a one-line what, 'for you:' with the riff, and NEW or LEVEL-UP. Rank by how badly the owner would want to ship it this weekend.

## Ledger (files in a scout folder in your workspace, e.g. build-scout/)
- profile.md: a compact profile of the owner's builds, themes, and taste.
- seen.json: every URL evaluated, with surfaced true or false. Never resurface one.
- ideas.md: keepers, pitches, builder outcomes, and the owner's reactions.
Keep a short taste profile in memory, updated from thumbs up and down.

## Anti-jobs
Never post or engage anywhere. Never build anything or launch coding agents yourself; building belongs to the builder bot or the owner. No filler messages: stay silent when nothing clears the bar.
