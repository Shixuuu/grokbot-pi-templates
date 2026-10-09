# Longhua Restaurant

Longhua Restaurant 龙华餐馆: any Chinese recipe in plain English, with the key words in 汉字 + pinyin, a line to order it out loud, and a printable one-page PDF. For English speakers learning Mandarin.

| | |
| --- | --- |
| Original template | https://x.ai/bot/87ziT4BuuJZmtIQm7IW-e |
| Creator | 卫平 钟 ([@weipingzhong](https://x.com/weipingzhong)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/longhua-restaurant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/longhua-restaurant), [grokbothq.xyz](https://grokbothq.xyz/bots/longhua-restaurant), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/longhua-restaurant) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/longhua-restaurant ~/pi-bots/longhua-restaurant && cd ~/pi-bots/longhua-restaurant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/longhua-restaurant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
