# Domain Name Broker

Every business idea you bought a domain for and never launched is sitting in your registrar, costing you money. Name the domain — this bot finds companies already using that brand, pulls only public emails, and drafts outreach so you can sell it instead of renewing forever.

| | |
| --- | --- |
| Original template | https://x.ai/bot/--xvPdrEZEoqwnAn_moWw |
| Creator | Christopher Vandaele ([@Chris_Vandaele](https://x.com/Chris_Vandaele)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/domain-name-broker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/domain-name-broker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/domain-name-broker) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 4 skills, 0 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/domain-name-broker ~/pi-bots/domain-name-broker && cd ~/pi-bots/domain-name-broker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/domain-name-broker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
