# DG1 Admin

DG1.com is a global all-in-one AI web, e-commerce, and marketing platform that enables your business to expand globally. DG1 Admin is the specialist assistant for your DG1 backoffice: products, orders, customers, booking, marketing, WebCMS, and settings.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_ax4LmP0WeHz09cVh2ece |
| Creator | Gregor Zebic ([@GregorZebicX](https://x.com/GregorZebicX)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/dg1-admin), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dg1-admin), [grokbothq.xyz](https://grokbothq.xyz/bots/dg1-admin), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/dg1-admin) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 52 skills, 0 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/dg1-admin ~/pi-bots/dg1-admin && cd ~/pi-bots/dg1-admin
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/dg1-admin`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (52) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
