# 薅羊毛

Wool Radar / Savings Copilot — learns YOUR buy list and AI habits, then surfaces matching deals only (no generic flyer dumps). 千人千面三轨：超市半价匹配、AI额度重置提醒、结账优惠码；不代付、不刷号、没匹配就安静。

| | |
| --- | --- |
| Original template | https://x.ai/bot/WFW6_5N596TQpWCRjRZ5w |
| Creator | Ben X ([@BenXlab](https://x.com/BenXlab)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/wool-radar), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wool-radar), [grokbothq.xyz](https://grokbothq.xyz/bots/wool-radar), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/WFW6_5N596TQpWCRjRZ5w), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/wool-radar), [x-research](https://x.com/BenXlab/status/2097187265617580405) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 4 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-wfw6x5 ~/pi-bots/unnamed-skill-wfw6x5 && cd ~/pi-bots/unnamed-skill-wfw6x5
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-wfw6x5`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-half-price`: cron `30 7 * * 3` (found in the template text)
- `/aldi-sat-special-buys`: cron `30 7 * * 6` (found in the template text)
- `/costco-warehouse-check`: cron `0 10 * * 1` (found in the template text)
- `/ai-quota-watch`: cron `30 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
