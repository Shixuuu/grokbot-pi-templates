# Quant Backtest Lab · 量化回测台

把交易想法写成规则，在 A 股 / 美股 / 加密现货上做含成本回测，并给出研究向结论。只出 Python 脚本，不代下单。

| | |
| --- | --- |
| Original template | https://x.ai/bot/tolt21zchd6byj0zea7pe |
| Creator | jack hu |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/quant-backtest-lab-tolt), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/quant-backtest-lab-tolt) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/quant-backtest-lab ~/pi-bots/quant-backtest-lab && cd ~/pi-bots/quant-backtest-lab
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/quant-backtest-lab`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
