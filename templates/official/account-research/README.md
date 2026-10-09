# GTM Account Research

Researches one account before a meeting, deal review, or account plan. Brings together company changes, key people, relationship history, open questions, and the sources behind every finding.

| | |
| --- | --- |
| Original template | https://x.ai/bot/B6nsTFJlkGP4R-BbdIzeV |
| Creator | Stefan Markarian |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/account-research), [grokbottemplates.app](https://grokbottemplates.app/t/gtm-account-research), [botsdots.site](https://botsdots.site/templates/gtm-account-research), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gtm-account-research), [grokbothq.xyz](https://grokbothq.xyz/bots/gtm-account-research), [templatebot.lol](https://templatebot.lol/bot/B6nsTFJlkGP4R-BbdIzeV), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/gtm-account-research) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 1 routines, 6 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/official/account-research ~/pi-bots/account-research && cd ~/pi-bots/account-research
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/account-research`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-account-monitor`: no cron in the template; described as "# Weekly account monitor"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
