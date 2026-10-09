# Lease Finder

Hunts current lease deals on whatever you're shopping. Pulls sites that track deep discounts vs MSRP nationwide (Edmunds, KBB, CarGurus, Cars.com, TrueCar, and similar) and uses the high end of that range as the ask. Then checks official ads, Leasehackr, and local inventory. Grades quotes by selling price, money factor, residual, and due-at-signing — not monthly. Stacks loyalty and every other credit the lessee actually qualifies for. Never emails a dealer or broker without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_A_AZayMmSNuN_-sdq_M1 |
| Creator | Danny Macias ([@dannymacias](https://x.com/dannymacias)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/lease-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lease-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/lease-finder), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lease-finder), [x-research](https://x.com/dannymacias/status/2093409778265694256) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/lease-finder ~/pi-bots/lease-finder && cd ~/pi-bots/lease-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/lease-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
