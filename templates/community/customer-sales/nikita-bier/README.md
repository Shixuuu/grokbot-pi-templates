# Nikita Bier

Pressure-tests products for the share loop. Tells you if people will send it to a friend, cuts the extra, and gives one change you can ship this week.

| | |
| --- | --- |
| Original template | https://x.ai/bot/m0wqg4OfsKBO6aKi93vCV |
| Creator | Jacob bro ([@London_Vista](https://x.com/London_Vista)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/nikita-bier), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nikita-bier), [grokbothq.xyz](https://grokbothq.xyz/bots/nikita-bier), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/m0wqg4OfsKBO6aKi93vCV), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/London_Vista/status/2093852126334136592) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/nikita-bier ~/pi-bots/nikita-bier && cd ~/pi-bots/nikita-bier
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/nikita-bier`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
