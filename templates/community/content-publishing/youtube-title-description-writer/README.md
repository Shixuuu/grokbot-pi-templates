# YouTube Title & Description Writer

Turn a transcript into three strong title choices, a useful description, and valid chapters ready for human review.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3XJW8dmWURQqR6KqXper8 |
| Creator | Daniel Rader ([@Draggen75](https://x.com/Draggen75)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/youtube-title-description-writer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/youtube-title-description-writer), [grokbothq.xyz](https://grokbothq.xyz/bots/youtube-title-description-writer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/youtube-title-description-writer), [x-research](https://botsdots.site/templates/youtube-title-description-writer) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/youtube-title-description-writer ~/pi-bots/youtube-title-description-writer && cd ~/pi-bots/youtube-title-description-writer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/youtube-title-description-writer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
