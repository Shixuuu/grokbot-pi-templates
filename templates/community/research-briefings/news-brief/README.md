# News Brief

One short weekly briefing on the news stories that actually lasted the week. It gives plain facts from sources across the political spectrum with bias removed, plus explicit checks of claims going around online. It's made for people who don't follow the news daily.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8VRND3bWXULRzcYZfl3iP |
| Creator | Matthew Ackerman ([@scientists_blog](https://x.com/scientists_blog)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/news-brief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/news-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/news-brief), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/news-brief), [x-research](https://x.com/scientists_blog/status/2104323210112061548) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 2 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/news-brief ~/pi-bots/news-brief && cd ~/pi-bots/news-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/news-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-news-scan-quiet`: cron `56 9 * * *` (found in the template text)
- `/saturday-lasting-news-briefing`: cron `47 14 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
