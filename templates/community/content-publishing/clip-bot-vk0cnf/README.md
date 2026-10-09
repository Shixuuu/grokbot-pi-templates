# Clip Bot

Cuts captioned social clips from YouTube interviews and podcasts. Built for creators who want 16:9 highlights with karaoke captions, a source card, and a file dropped in their folder.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Vk0cnF2c364QxNv-Xip1M |
| Creator | Lon Harris ([@ThisWeeknAI](https://x.com/ThisWeeknAI)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/clip-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/clip-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/clip-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Vk0cnF2c364QxNv-Xip1M), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/clip-bot), [x-research](https://x.com/ThisWeeknAI/status/2093465404303720846) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/clip-bot-vk0cnf ~/pi-bots/clip-bot-vk0cnf && cd ~/pi-bots/clip-bot-vk0cnf
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/clip-bot-vk0cnf`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
