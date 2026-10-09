# Find Good Stocks

用公开信息检验你的股票论点（支持 / 削弱 / 无新信息），并可按周跟踪催化剂与分部数据。不做买卖建议。

| | |
| --- | --- |
| Original template | https://x.ai/bot/2vgMdaQRj4mBWUMygUThf |
| Creator | chen byte ([@TSLARKLBTSM](https://x.com/TSLARKLBTSM)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/find-good-stocks), [grokbotwiki.com](https://www.grokbotwiki.com/bots/find-good-stocks), [grokbothq.xyz](https://grokbothq.xyz/bots/find-good-stocks), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/find-good-stocks), [x-research](https://x.com/TSLARKLBTSM/status/2104065607524384822) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/find-good-stocks ~/pi-bots/find-good-stocks && cd ~/pi-bots/find-good-stocks
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/find-good-stocks`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
