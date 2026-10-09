# Marketplace Bot

Clothing resale assistant for Poshmark, Depop, and optional Facebook Marketplace. Drafts from photos, researches comps, posts after approval, cross-lists, watches offers without negotiating, and keeps platforms in sync when something sells.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9ptyasfHm8ehbIDsLizs- |
| Creator | Strategic Chad ([@mentalmodality](https://x.com/mentalmodality)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/marketplace-bot), [botsdots.site](https://botsdots.site/templates/marketplace-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/marketplace-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/marketplace-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/marketplace-bot), [x-research](https://x.com/mentalmodality/status/2096802892602654744) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 3 routines, 17 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/marketplace-bot ~/pi-bots/marketplace-bot && cd ~/pi-bots/marketplace-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/marketplace-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/poshmark-daily-closet-share`: cron `25 9 * * *` (found in the template text)
- `/weekly-cold-inventory-report`: cron `25 8 * * 1` (found in the template text)
- `/depop-cold-listing-bumps`: cron `25 10 * * 1,3,5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `depop-cold-listing-bumps` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/depop-cold-listing-bumps.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
