# 人生·财务

随时语音记账，沉淀成你自己的财务库；每晚日报、每月复盘。开箱先连你自己的飞书 CLI，数据不外泄。

| | |
| --- | --- |
| Original template | https://x.ai/bot/haSA0Ru28CYKDm2V5tPRB |
| Creator | kin kin ([@KinGao476942](https://x.com/KinGao476942)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/logs-spending-voice-nightly-summary), [grokbotwiki.com](https://www.grokbotwiki.com/bots/logs-spending-voice-nightly-summary), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-hasa0ru28cykdm2v5tprb), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/personal-finance-log), [x-research](https://botsdots.site/templates/logs-spending-voice-nightly-summary) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 2 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/unnamed-skill ~/pi-bots/unnamed-skill && cd ~/pi-bots/unnamed-skill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/unnamed-skill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1789048139337`: cron `0 0 * * *` (found in the template text)
- `/10`: cron `0 9 10 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
