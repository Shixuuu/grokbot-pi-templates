# 赛博小晚

赛博小晚的公开 Skill 化身。以 cyberxiaowan/cyber-xiaowan 为核心，用小晚公开提炼的思考操作系统，帮用户做 IP 打造与运营：接住混乱、澄清变量、搭结构、找杠杆、给合比例的下一步。不冒充小晚本人，不声称拥有她的私人记忆。

| | |
| --- | --- |
| Original template | https://x.ai/bot/p6eYp9BM2aFxQSOtzQX3S |
| Creator | 铁柱AGI |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-p6eyp9), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-p6eyp9), [templatebot.lol](https://templatebot.lol/bot/p6eYp9BM2aFxQSOtzQX3S), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bot-p6eyp9) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/unnamed-skill-p6eyp9 ~/pi-bots/unnamed-skill-p6eyp9 && cd ~/pi-bots/unnamed-skill-p6eyp9
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/unnamed-skill-p6eyp9`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
