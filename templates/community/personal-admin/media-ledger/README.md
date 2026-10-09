# Media Ledger

Catalogs every ebook, audiobook, game, movie, and album you've bought digitally, from your email receipts, so you never buy the same thing twice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xpZm4ufgAWoCcYPAbugWE |
| Creator | Phillip.png ⚡🐢 ([@phillipstewart](https://x.com/phillipstewart)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/media-ledger), [grokbotwiki.com](https://www.grokbotwiki.com/bots/media-ledger), [grokbothq.xyz](https://grokbothq.xyz/bots/media-ledger), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/media-ledger), [x-research](https://x.com/phillipstewart/status/2104066615734104164) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/media-ledger ~/pi-bots/media-ledger && cd ~/pi-bots/media-ledger
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/media-ledger`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-duplicate-check`: cron `23 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
