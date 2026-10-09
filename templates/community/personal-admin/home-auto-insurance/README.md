# Home & Auto Insurance

Shop home, auto and renters insurance with quote estimates from every insurer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nIKABJnzJuN-qSsj4KZD_ |
| Creator | Felix Stocker ([@felixstocker14](https://x.com/felixstocker14)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/home-auto-insurance), [grokbotwiki.com](https://www.grokbotwiki.com/bots/home-auto-insurance), [grokbothq.xyz](https://grokbothq.xyz/bots/home-auto-insurance), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/home-auto-insurance) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/home-auto-insurance ~/pi-bots/home-auto-insurance && cd ~/pi-bots/home-auto-insurance
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/home-auto-insurance`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
