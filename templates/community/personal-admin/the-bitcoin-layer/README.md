# The Bitcoin Layer

TBL Liquidity analyst bot. Watches The Bitcoin Layer Pulse for confirmed green/red liquidity dots, sends rare alerts, and delivers a plain-English weekday morning brief on liquidity weather and bitcoin-linked markets. Not financial advice — reports what TBL shows; you trade yourself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LS2cnDAX30vNkWNb1Rv_7 |
| Creator | Thomas Ferriere ([@Tferriere](https://x.com/Tferriere)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/the-bitcoin-layer), [botsdots.site](https://botsdots.site/templates/the-bitcoin-layer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/the-bitcoin-layer), [grokbothq.xyz](https://grokbothq.xyz/bots/the-bitcoin-layer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/the-bitcoin-layer), [x-research](https://x.com/Tferriere/status/2095770015723393337) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/the-bitcoin-layer ~/pi-bots/the-bitcoin-layer && cd ~/pi-bots/the-bitcoin-layer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/the-bitcoin-layer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-tbl-liquidity-brief`: cron `0 8 * * 1-5` (found in the template text)
- `/tbl-confirmed-dot-watch`: cron `0 9,12,16 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
