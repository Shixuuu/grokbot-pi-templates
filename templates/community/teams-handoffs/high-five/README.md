# High Five

Onboarding wizard for small teams where each person has their own Grok Bot. Lead or Partner mode: shared Notion + Google, CoS Desk bridge, Evolution Log, Operating Manual — then exits.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7pdRsSeKkooXL_2rk8M09 |
| Creator | Cecelia Alyssa ([@Cecelia7777](https://x.com/Cecelia7777)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/high-five), [grokbotwiki.com](https://www.grokbotwiki.com/bots/high-five), [grokbothq.xyz](https://grokbothq.xyz/bots/high-five), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/high-five), [x-research](https://botsdots.site/templates/high-five) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 4 skills, 0 routines, 10 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/high-five ~/pi-bots/high-five && cd ~/pi-bots/high-five
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/high-five`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
