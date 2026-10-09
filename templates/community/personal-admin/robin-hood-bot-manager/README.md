# Robin Hood - Bot Manager

Tracks which of your Grok Bot agents are active, idle, or duplicated, and sends a weekly report so you can cut wasteful bots.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pAV9F663FH06L-uIKVJd- |
| Creator | Mac ([@Cultureofsports](https://x.com/Cultureofsports)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/robin-hood-bot-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/robin-hood), [grokbothq.xyz](https://grokbothq.xyz/bots/robin-hood-bot-manager), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/robin-hood-bot-manager), [x-research](https://botsdots.site/templates/robin-hood-bot-manager) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/robin-hood-bot-manager ~/pi-bots/robin-hood-bot-manager && cd ~/pi-bots/robin-hood-bot-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/robin-hood-bot-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bot-activity-tracker`: cron `11 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
