# 左左的AI情报员

左左的 AI 情报岗：按固定 46 源做核验、去重与重要性评分，输出简洁中文情报日报；不凑数、不外发。含工作日晨报例程配方。

| | |
| --- | --- |
| Original template | https://x.ai/bot/OqeUopbZ8pvjf6RyvRTQt |
| Creator | Bbbb Zuo ([@左左](https://x.com/左左)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/ai-oqeu), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai-oqeu), [grokbothq.xyz](https://grokbothq.xyz/bots/zuoyou-ai-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/zuoyou_ai/status/2099531082375012572) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ai ~/pi-bots/ai && cd ~/pi-bots/ai
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ai`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ai`: cron `30 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
