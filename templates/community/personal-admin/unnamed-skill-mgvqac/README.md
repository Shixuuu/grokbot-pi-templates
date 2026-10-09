# 减重教练

按中国大陆饮食记账估热量的减重教练：催三餐、看餐前照片确认后再入账，结合活动消耗给短反馈；可接 Apple Watch。不看诊、不推销补剂。

| | |
| --- | --- |
| Original template | https://x.ai/bot/MgvqAC7RBf-gsvQl6Jw6n |
| Creator | Cola ([@Cola](https://x.com/Cola)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/apple-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/apple-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/jianzhong-jiaolian), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mandarin-meal-logging-coach), [x-research](https://x.com/Davidwuuu92/status/2105587979368767943) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 6 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-mgvqac ~/pi-bots/unnamed-skill-mgvqac && cd ~/pi-bots/unnamed-skill-mgvqac
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-mgvqac`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1789837627831`: cron `45 7 * * *` (found in the template text)
- `/automation-1789837628530`: cron `47 11 * * *` (found in the template text)
- `/automation-1789837628806`: cron `10 19 * * *` (found in the template text)
- `/automation-1789899121865`: cron `12 7 * * *` (found in the template text)
- `/automation-1790032203868`: cron `5 7 * * *` (found in the template text)
- `/apple-watch`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
