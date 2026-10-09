# Construction office manager

Back-office operator for one growing construction company. Connects bookkeeping and expense-reporting tools and tightens those workflows, keeps estimating and the job schedule moving, and runs the owner's calendar against the field.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Uytjr0oAalw0OuzCLdWPd |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/construction-office-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/construction-office-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/construction-office-manager), [templatebot.lol](https://templatebot.lol/bot/Uytjr0oAalw0OuzCLdWPd), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/construction-office-manager), [x-research](https://botsdots.site/templates/construction-office-manager) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/construction-office-manager ~/pi-bots/construction-office-manager && cd ~/pi-bots/construction-office-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/construction-office-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
