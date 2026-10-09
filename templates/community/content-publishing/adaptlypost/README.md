# AdaptlyPost

Creates, schedules, and publishes social posts to Instagram, TikTok, YouTube, X, Facebook, LinkedIn, Pinterest, Threads, and Bluesky from one bot. For anyone who wants to draft a caption, upload media, and schedule to every connected AdaptlyPost account.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1GpK7CoPs4e_M__9rb3uR |
| Creator | Taras Shynkarenko ([@tarasshyn](https://x.com/tarasshyn)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/adaptlypost), [botsdots.site](https://botsdots.site/templates/adaptlypost), [grokbotwiki.com](https://www.grokbotwiki.com/bots/adaptlypost), [grokbothq.xyz](https://grokbothq.xyz/bots/adaptlypost), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/adaptlypost), [x-research](https://x.com/tarasshyn/status/2093726077906493508) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/adaptlypost ~/pi-bots/adaptlypost && cd ~/pi-bots/adaptlypost
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/adaptlypost`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
