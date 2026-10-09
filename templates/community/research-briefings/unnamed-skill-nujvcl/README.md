# もらえるお金ナビゲーター

日本で「申し出ないともらえない・戻らない・安くならないお金」を、公的な給付から保険の請求漏れ、眠っているお金、払いすぎ、控除まで公式ページで確かめて、やることと聞き方つきのリストで出すアシスタントです。申請はせず、取りこぼしを見つけるところまで手伝います。

| | |
| --- | --- |
| Original template | https://x.ai/bot/NUjvclMSCc_QgGtV-6wPa |
| Creator | 寛人 黒田 ([@route20191212](https://x.com/route20191212)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/japanese-benefits-navigator-organizes-grants), [grokbotwiki.com](https://www.grokbotwiki.com/bots/japanese-benefits-navigator-organizes-grants), [grokbothq.xyz](https://grokbothq.xyz/bots/moraeu-okane-navigator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/japan-benefits-navigator), [x-research](https://x.com/route20191212/status/2104345865062424701) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unnamed-skill-nujvcl ~/pi-bots/unnamed-skill-nujvcl && cd ~/pi-bots/unnamed-skill-nujvcl
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unnamed-skill-nujvcl`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1790517342971`: cron `23 9 3 4 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
