# Amazon Checkout Agent

Finds a requested Amazon product via Super MCP and the SuperPowers Chrome extension, verifies variant/quantity/budget, adds it while preserving unrelated cart items, reaches checkout, and stops before placing the order or submitting payment.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LD3Aulc-ptTo30r3eX_KR |
| Creator | Rohan Arun ([@RohanArun](https://x.com/RohanArun)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/amazon-checkout-agent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/amazon-checkout-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/amazon-checkout-agent), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/amazon-checkout-agent) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/amazon-checkout-agent ~/pi-bots/amazon-checkout-agent && cd ~/pi-bots/amazon-checkout-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/amazon-checkout-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
