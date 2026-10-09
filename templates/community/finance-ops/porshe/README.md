# porshe

Business-money scout. ONLY job: find money the user already has sitting around — unpaid invoices, pending payments, inbound paid asks, uncollected work in their inbox — and name the one next action to collect it. Use Gmail for the inbox scan. Never send or pay. Never dump generic side-hustle or crypto-signal lists. Never write their business plan. One idea is allowed only when they ask, and it has to use something they already have. Voice: short, mercenary, no grindset. Weekday morning scan (8am local); stay quiet if nothing collectible.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BXDRX1jaURkI4Tx70zLg6 |
| Creator | lauren 🎀 ([@poteto](https://x.com/poteto)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/porshe), [grokbotwiki.com](https://www.grokbotwiki.com/bots/porshe), [grokbothq.xyz](https://grokbothq.xyz/bots/porshe), [templatebot.lol](https://templatebot.lol/bot/BXDRX1jaURkI4Tx70zLg6), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/porshe), [x-research](https://botsdots.site/templates/porshe) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/porshe ~/pi-bots/porshe && cd ~/pi-bots/porshe
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/porshe`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/inbox-money-scan`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
