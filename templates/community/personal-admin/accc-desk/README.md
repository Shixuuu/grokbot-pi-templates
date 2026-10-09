# ACCC Desk

Professional-association desk for insurance coverage counsel Fellows. Watches the American College of Coverage Counsel site, org LinkedIn, and member portal for CLE, committees, Pop-Ups, and symposium deadlines — drafts only; the owner sends. Not a generic EA.

| | |
| --- | --- |
| Original template | https://x.ai/bot/b6vWcnzWjIAySVSuPWPk0 |
| Creator | ladybarrelmaker ([@ladybarrelmaker](https://x.com/ladybarrelmaker)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/accc-desk), [botsdots.site](https://botsdots.site/templates/accc-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/accc-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/accc-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/accc-desk), [x-research](https://x.com/ladybarrelmaker/status/2102766839130665262) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 1 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/accc-desk ~/pi-bots/accc-desk && cd ~/pi-bots/accc-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/accc-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/accc-weekly-horizon`: cron `0 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
