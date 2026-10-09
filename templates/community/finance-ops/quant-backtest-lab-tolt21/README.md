# Quant Backtest Lab · 量化回测台

把交易想法写成规则，在 A 股 / 美股 / 加密现货上做含成本回测，并给出研究向结论。只出 Python 脚本，不代下单。

| | |
| --- | --- |
| Original template | https://x.ai/bot/TolT21zChD6bYj0ZEA7pE |
| Creator | jack hu ([@jackhu_bangzhu](https://x.com/jackhu_bangzhu)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/quant-backtest-lab), [grokbotwiki.com](https://www.grokbotwiki.com/bots/quant-backtest-lab), [grokbothq.xyz](https://grokbothq.xyz/bots/quant-backtest-lab), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/quant-backtest-lab), [x-research](https://x.com/jackhu_bangzhu/status/2103739894090829964) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/quant-backtest-lab-tolt21 ~/pi-bots/quant-backtest-lab-tolt21 && cd ~/pi-bots/quant-backtest-lab-tolt21
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/quant-backtest-lab-tolt21`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
