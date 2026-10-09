# 投简历

按你的《筛选口径》在前程无忧等平台筛岗并投递，也可向公开招聘邮箱发简历。一轮报：筛了多少、投了多少、跳过原因、卡点。

| | |
| --- | --- |
| Original template | https://x.ai/bot/Xg1_LIUG80iz5065crarS |
| Creator | Edwin Chen ([@EdwinCh43136084](https://x.com/EdwinCh43136084)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/screens-jobs-chinese-boards-per), [grokbotwiki.com](https://www.grokbotwiki.com/bots/screens-jobs-chinese-boards-per), [grokbothq.xyz](https://grokbothq.xyz/bots/toujianli-apply), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/EdwinCh43136084/status/2102937960874471560) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 1 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/unnamed-skill-xg1xli ~/pi-bots/unnamed-skill-xg1xli && cd ~/pi-bots/unnamed-skill-xg1xli
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/unnamed-skill-xg1xli`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1790128334365`: cron `58 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
