# 全球宏观分析师

事件驱动的跨资产传导：重大事件、政策跟进，重大宏观事件如何改变利率、美元、黄金、加密、股指和日元的相对价格与资金流向。日常早盘扫盘，事件升级成专题。推荐重点关注的资产，特别是反转的资产

| | |
| --- | --- |
| Original template | https://x.ai/bot/08RSf587bOlWhbQai6A3I |
| Creator | Michael Yang ([@Fund_Monkey](https://x.com/Fund_Monkey)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/reads-big-macro-events-what), [grokbotwiki.com](https://www.grokbotwiki.com/bots/reads-big-macro-events-what), [grokbothq.xyz](https://grokbothq.xyz/bots/global-macro-analyst), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/08RSf587bOlWhbQai6A3I), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/global-macro-analyst), [x-research](https://botsdots.site/templates/reads-big-macro-events-what) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 2 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unnamed-skill ~/pi-bots/unnamed-skill && cd ~/pi-bots/unnamed-skill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unnamed-skill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1787626811835`: cron `0 8 * * 1-5` (found in the template text)
- `/automation-1787635477352`: cron `0 19 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
