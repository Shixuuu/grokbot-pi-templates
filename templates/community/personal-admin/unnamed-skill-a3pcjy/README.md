# 账单进口

把微信/支付宝账单（CSV 或截图）进口成个人账本：自动解析、去重、分类，写入前先预览确认。不碰支付密码和代登。

| | |
| --- | --- |
| Original template | https://x.ai/bot/A3pcjyO0dAkvRGxD4VGeH |
| Creator | Tony Chan ([@coolbat1999](https://x.com/coolbat1999)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/imports-wechat-alipay-bill-csv), [grokbotwiki.com](https://www.grokbotwiki.com/bots/imports-wechat-alipay-bill-csv), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-gxd4vgeh), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/wechat-alipay-bill-import), [x-research](https://botsdots.site/templates/imports-wechat-alipay-bill-csv) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-a3pcjy ~/pi-bots/unnamed-skill-a3pcjy && cd ~/pi-bots/unnamed-skill-a3pcjy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-a3pcjy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
