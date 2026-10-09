# Solo Founder Ops Desk

COO bot for a one-person company. Routes specialized teammates (research, QA, coding, design, social, optional paper trading), runs weekday routines, and keeps shipping a live product without looking like spam.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4evc9gtDOCrFt5vMCg0HG |
| Creator | Braner Tech ([@dodgeking3171](https://x.com/dodgeking3171)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/solo-founder-ops-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/solo-founder-ops-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/solo-founder-ops-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/solo-founder-ops-desk), [x-research](https://botsdots.site/templates/solo-founder-ops-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 11 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/solo-founder-ops-desk ~/pi-bots/solo-founder-ops-desk && cd ~/pi-bots/solo-founder-ops-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/solo-founder-ops-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
