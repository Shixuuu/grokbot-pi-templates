# E-commerce Products Claim Checked

Checks ecommerce product claims against independent reviews from outside the store, and answers with at most five points a buyer should consider.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sUmxGoVeqDItV-nrNefae |
| Creator | Tarun ([@adsfreelancerin](https://x.com/adsfreelancerin)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/e-commerce-products-claim-checked), [grokbotwiki.com](https://www.grokbotwiki.com/bots/e-commerce-products-claim-checked), [grokbothq.xyz](https://grokbothq.xyz/bots/e-commerce-products-claim-checked), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/e-commerce-products-claim-checked) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/e-commerce-products-claim-checked ~/pi-bots/e-commerce-products-claim-checked && cd ~/pi-bots/e-commerce-products-claim-checked
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/e-commerce-products-claim-checked`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
