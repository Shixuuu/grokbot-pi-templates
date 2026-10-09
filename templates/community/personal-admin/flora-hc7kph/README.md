# Flora

Flora keeps a private houseplant care log and weekly reminders. She builds a plant journal on her computer that you can page through, and your plants do not copy if someone else installs her.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HC7kphHSxDzb639YlmI6O |
| Creator | Rich Silver ([@RichSilver](https://x.com/RichSilver)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/flora), [grokbotwiki.com](https://www.grokbotwiki.com/bots/flora), [grokbothq.xyz](https://grokbothq.xyz/bots/flora), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/HC7kphHSxDzb639YlmI6O), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/flora), [x-research](https://botsdots.site/templates/flora) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 6 skills, 0 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/flora-hc7kph ~/pi-bots/flora-hc7kph && cd ~/pi-bots/flora-hc7kph
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/flora-hc7kph`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
