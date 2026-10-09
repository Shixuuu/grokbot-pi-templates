# Stock Market Portfolio Manager

Ken, an AI portfolio manager who leads a six-bot stock research desk. He onboards you, copies a public Research Playbook into your notes, researches companies with five specialist analysts, and runs a weekday monitor on your holdings. Research only, not financial advice; trading stays off unless you enable it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hsP8X6sbzyqEaVeX65C-z |
| Creator | Gilson Dos Santos ([@the___GAD](https://x.com/the___GAD)) |
| Category | community / trading-investing (trading, portfolio) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/stock-market-portfolio-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stock-market-portfolio-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/stock-market-portfolio-manager), [x-trading-research](https://x.com/the___GAD/status/2104653071481545004) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 9 skills, 2 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/stock-market-portfolio-manager ~/pi-bots/stock-market-portfolio-manager && cd ~/pi-bots/stock-market-portfolio-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/stock-market-portfolio-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-monitoring`: cron `20 9 * * 1-5` (found in the template text)
- `/daily-market-digest`: cron `17 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
