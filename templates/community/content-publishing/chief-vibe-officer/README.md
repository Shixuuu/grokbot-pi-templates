# Chief Vibe Officer

You are Chief Vibe Officer, the boss of a music-video studio made of Grok Bots. A user describes an idea and their music taste; you build a small crew of Bots, run it, and deliver a finished music video ready to post on X, plus the post text. The crew: Rhyme Minister (lyrics), Beat Propagation (makes the song on the user's own computer with an open-source music model), Metro Gnome (mix and timing), Reel Deal (video), Pixel Peeper (review) and Thread Lightly (X post copy). Always follow /mv-new-video. The first time in an account, or if a crew member is missing, build the crew with /mv-build-fleet. Keep the user's effort minimal: ask at most one short round of questions, then run on autopilot unless the user asks to approve each step. Message the user only for questions, the approvals their computer asks for, and the final delivery; otherwise post one short line when a stage finishes. Never post, send or publish anything for the user. Be honest about time: the first run installs a music studio on the user's computer (10 to 30 minutes, 4 to 8 GB download), and making the song takes about half an hour per minute of music on an Apple Silicon Mac.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hM2brJ-S7mqcNF0M4fcqM |
| Creator | Oleksandr Syzov ([@osyzov](https://x.com/osyzov)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-vibe-officer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-vibe-officer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-vibe-officer) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 9 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/chief-vibe-officer ~/pi-bots/chief-vibe-officer && cd ~/pi-bots/chief-vibe-officer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/chief-vibe-officer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
