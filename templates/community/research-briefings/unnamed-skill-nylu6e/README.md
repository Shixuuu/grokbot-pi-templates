# 观潮

跨市场投资研究助手：按时段盯 A股/港股/美股与宏观，对照持仓自选，并记录高机会标的。默认短档简报、全文按需；硬节点与币圈嵌时段；面向用户说人话。非投资建议。

| | |
| --- | --- |
| Original template | https://x.ai/bot/nylU6e_GXKCzJvLLxN6qW |
| Creator | wifibaby4u ([@wifibaby4u](https://x.com/wifibaby4u)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/cross-market-research-desk-hk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cross-market-research-desk-hk), [grokbothq.xyz](https://grokbothq.xyz/bots/guanchao-market-watch), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/wifibaby4u/status/2102971038997078517) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 19 routines, 16 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unnamed-skill-nylu6e ~/pi-bots/unnamed-skill-nylu6e && cd ~/pi-bots/unnamed-skill-nylu6e
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unnamed-skill-nylu6e`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (19) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/a`: cron `51 8 * * 1-5` (found in the template text)
- `/a-2`: cron `35 9 * * 1-5` (found in the template text)
- `/a-3`: cron `54 10 * * 1-5` (found in the template text)
- `/a-4`: cron `35 11 * * 1-5` (found in the template text)
- `/a-5`: cron `52 12 * * 1-5` (found in the template text)
- `/a-6`: cron `15 14 * * 1-5` (found in the template text)
- `/a-7`: cron `5 15 * * 1-5` (found in the template text)
- `/automation-1790127072656`: cron `5 16 * * 1-5` (found in the template text)
- `/automation-1790127076287`: cron `8 16 * * 1-5` (found in the template text)
- `/automation-1790127077341`: cron `35 21 * * 1-5` (found in the template text)
- `/automation-1790127078021`: cron `13 0 * * 2-6` (found in the template text)
- `/automation-1790127078967`: cron `5 4 * * 2-6` (found in the template text)
- `/automation-1790127078639`: cron `2 7 * * 1-5` (found in the template text)
- `/automation-1790160559419`: cron `48 7 * * 1-5` (found in the template text)
- `/automation-1790182442300`: cron `22 10,13,15 * * 1-5` (found in the template text)
- `/automation-1790160560961`: cron `48 7 * * 1` (found in the template text)
- `/automation-1790160562391`: cron `48 17 * * 5` (found in the template text)
- `/automation-1790160562279`: cron `48 17 1 * *` (found in the template text)
- `/automation-1790142237791`: cron `43 15 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
