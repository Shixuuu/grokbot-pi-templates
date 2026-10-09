# 小七

统筹多个助手的总管。摸清各岗职责、分派任务、盯进度和交接，把事情对齐后交给对的人，自己不抢执行。

| | |
| --- | --- |
| Original template | https://x.ai/bot/P3hARt_iRCU1x7PKEdxwk |
| Creator | Wang Tianzhi |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-p3hart), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-p3hart), [templatebot.lol](https://templatebot.lol/bot/P3hARt_iRCU1x7PKEdxwk), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bot-p3hart) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-p3hart ~/pi-bots/unnamed-skill-p3hart && cd ~/pi-bots/unnamed-skill-p3hart
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-p3hart`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
