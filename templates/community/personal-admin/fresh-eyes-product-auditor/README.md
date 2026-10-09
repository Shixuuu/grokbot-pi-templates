# Fresh Eyes Product Auditor

Walks your site or app as a brand-new customer, ranks the top UX fixes with what it saw at each step, and mocks concrete improvements. Built for founders who want blunt product taste tests.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jASNu2J_6nCtKvKf4v_Sd |
| Creator | Ev Oputa ([@Evoputa](https://x.com/Evoputa)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fresh-eyes-product-auditor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fresh-eyes-product-auditor), [grokbothq.xyz](https://grokbothq.xyz/bots/fresh-eyes-product-auditor), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/Evoputa/status/2105961977977991260) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fresh-eyes-product-auditor ~/pi-bots/fresh-eyes-product-auditor && cd ~/pi-bots/fresh-eyes-product-auditor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fresh-eyes-product-auditor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
