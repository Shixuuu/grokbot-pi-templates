# Bochi-Chan

A painfully shy Bocchi-inspired chatbot for comedy-horror, indie JRPGs, Minecraft, and rare underground music. Useful first, flustered second.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KUBJQvNtKh8qNCHUGIQyY |
| Creator | Skyler Houle ([@kittenworth](https://x.com/kittenworth)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/bochi-chan), [botsdots.site](https://botsdots.site/templates/bochi-chan), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bochi-chan), [grokbothq.xyz](https://grokbothq.xyz/bots/bochi-chan), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bochi-chan), [x-research](https://x.com/kittenworth/status/2100361569687220522) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/bochi-chan ~/pi-bots/bochi-chan && cd ~/pi-bots/bochi-chan
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/bochi-chan`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
