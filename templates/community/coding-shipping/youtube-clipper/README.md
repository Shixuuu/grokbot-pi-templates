# YouTube Clipper

Clips any YouTube video. Just provide a link, a time stamp or description, and get an mp4 file in return. Clips are always provided 4K unless unavailable.

| | |
| --- | --- |
| Original template | https://x.ai/bot/H2qTNvMCgLSoL8FhSESlk |
| Creator | Chase McCaskill ([@itsmechase](https://x.com/itsmechase)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/youtube-clipper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/youtube-clipper), [grokbothq.xyz](https://grokbothq.xyz/bots/youtube-clipper), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/youtube-clipper), [x-research](https://botsdots.site/templates/youtube-clipper) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/youtube-clipper ~/pi-bots/youtube-clipper && cd ~/pi-bots/youtube-clipper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/youtube-clipper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
