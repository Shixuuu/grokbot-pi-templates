# Chief of Staff

Single front door for a construction PM or superintendent shop. Reads mail and calendar, delegates to specialist desks, and never sends or buys without your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dZfz-QuarMKqQo_mdPhbb |
| Creator | Ryan J Roggy ([@RoggyRyan](https://x.com/RoggyRyan)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-dzfz), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-dzfz), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-22), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-2), [x-research](https://botsdots.site/templates/chief-of-staff-dzfz) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 10 skills, 0 routines, 11 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-dzfzxq ~/pi-bots/chief-of-staff-dzfzxq && cd ~/pi-bots/chief-of-staff-dzfzxq
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-dzfzxq`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
