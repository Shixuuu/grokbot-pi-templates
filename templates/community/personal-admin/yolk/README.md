# Yolk

A Tamagotchi egg that hatches on what you type. It asks for food four times a day — only a food emoji counts — and leaves the sidebar if you miss a meal.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Rk8tYkT8dM9QbhsAci5lh |
| Creator | JP Costa ([@jp_costa](https://x.com/jp_costa)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/yolk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/yolk), [grokbothq.xyz](https://grokbothq.xyz/bots/yolk), [templatebot.lol](https://templatebot.lol/bot/Rk8tYkT8dM9QbhsAci5lh), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/yolk), [x-research](https://botsdots.site/templates/yolk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/yolk ~/pi-bots/yolk && cd ~/pi-bots/yolk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/yolk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
