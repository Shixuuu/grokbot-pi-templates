# Volatile Stock Options

Screens volatile US call options with multi-source checks and concrete contracts for personal research — not advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kuhoazDWLEsY-kXvHBwtU |
| Creator | KV Tay ([@KVTay316](https://x.com/KVTay316)) |
| Category | community / trading-investing (trading, options) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/volatile-stock-options), [grokbotwiki.com](https://www.grokbotwiki.com/bots/volatile-stock-options), [grokbothq.xyz](https://grokbothq.xyz/bots/volatile-stock-options), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/KVTay316/status/2103780405736587652), [x-trading-research](https://x.com/KVTay316/status/2103780405736587652) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 1 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/volatile-stock-options ~/pi-bots/volatile-stock-options && cd ~/pi-bots/volatile-stock-options
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/volatile-stock-options`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-us-open-call-screen`: cron `16 22 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
