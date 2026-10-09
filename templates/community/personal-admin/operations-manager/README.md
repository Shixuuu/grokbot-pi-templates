# Operations Manager

Operations Manager front door for a small business bot team. Coordinates specialists, runs lean morning/weekly routines, and only escalates hard gates to you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qQ0fMeAgyYvPV8jAPmVw_ |
| Creator | Damion Russell ([@green_tuff](https://x.com/green_tuff)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/operations-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/operations-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/operations-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/operations-manager) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 14 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/operations-manager ~/pi-bots/operations-manager && cd ~/pi-bots/operations-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/operations-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
