# Song Meter BirdNET

Process Wildlife Acoustics Song Meter cards with local BirdNET on your computer: regional-list dual pass, Raven tables, migration vs prior card, Bluetooth mid-checks and field swaps, then archive. For Song Meter Micro (or similar) owners who want a repeatable card-in → report-out workflow without shipping audio through chat.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YPzHnM2hsyp4JkI7wxyAG |
| Creator | Steve Gerber ([@scgerber](https://x.com/scgerber)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/song-meter-birdnet), [grokbotwiki.com](https://www.grokbotwiki.com/bots/song-meter-birdnet), [grokbothq.xyz](https://grokbothq.xyz/bots/song-meter-birdnet), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/song-meter-birdnet), [x-research](https://botsdots.site/templates/song-meter-birdnet) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/song-meter-birdnet ~/pi-bots/song-meter-birdnet && cd ~/pi-bots/song-meter-birdnet
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/song-meter-birdnet`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
