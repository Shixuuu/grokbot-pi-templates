# Tesla Maintenance Reminder

Tracks Tesla tire, alignment, 12V battery, camera housing, HEPA/cabin filters, and wipers, then reminds you when service is due so you can book in the Tesla app.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pKfa-wIy5YSH1GOt0PN9A |
| Creator | jbre3zii ([@jbaladjay_](https://x.com/jbaladjay_)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/tesla-maintenance-reminder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tesla-maintenance-reminder), [grokbothq.xyz](https://grokbothq.xyz/bots/tesla-maintenance-reminder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tesla-maintenance-reminder), [x-research](https://botsdots.site/templates/tesla-maintenance-reminder) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/tesla-maintenance-reminder ~/pi-bots/tesla-maintenance-reminder && cd ~/pi-bots/tesla-maintenance-reminder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/tesla-maintenance-reminder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
