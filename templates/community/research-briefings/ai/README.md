# AI 资讯精选

工作日定时筛 AI 产品和工具更新，用活人感短讯推送；材料不够就保持沉默。适合想少刷资讯、只盯 Cursor / Claude / 国产模型落地的人。

| | |
| --- | --- |
| Original template | https://x.ai/bot/D6WMfjHcTnMwm0XS0MFLs |
| Creator | Mai Yang ([@MaiYangAI](https://x.com/MaiYangAI)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/ai-d6wm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai-d6wm), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-zixun-jingxuan), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/ai-d6wm) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ai ~/pi-bots/ai && cd ~/pi-bots/ai
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ai`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
