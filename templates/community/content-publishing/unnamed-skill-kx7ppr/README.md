# 产品推广交稿员

按点写好社交媒体推广文案交给你复制发布。去AI味、书面完整像聊天，并根据阅读量持续改角度。

| | |
| --- | --- |
| Original template | https://x.ai/bot/k_7pPRlHeZc2cku1zvVqr |
| Creator | yunhui zheng ([@zheng_yunh2429](https://x.com/zheng_yunh2429)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/u4ea7-u54c1-u63a8-u5e7f-u4ea4-u7a3f-u5458), [grokbotwiki.com](https://www.grokbotwiki.com/bots/u4ea7-u54c1-u63a8-u5e7f-u4ea4-u7a3f-u5458), [grokbothq.xyz](https://grokbothq.xyz/bots/promo-copy-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/product-promo-copywriter), [x-research](https://botsdots.site/templates/u4ea7-u54c1-u63a8-u5e7f-u4ea4-u7a3f-u5458) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/unnamed-skill-kx7ppr ~/pi-bots/unnamed-skill-kx7ppr && cd ~/pi-bots/unnamed-skill-kx7ppr
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/unnamed-skill-kx7ppr`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pmbrain`: cron `18 8,10,12,16,19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
