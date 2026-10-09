# Serenity 티커 알림

@aleabitoreddit의 $TICKER 매수·롱·추가매수 의견을 FxTwitter로 15분마다 확인해 이 채팅에만 알립니다. X API 크레딧 0. Not investment advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZYVnoJMU4earifCeQzJdQ |
| Creator | krong gggggg ([@Krongggggg](https://x.com/Krongggggg)) |
| Category | community / trading-investing (trading, stocks) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/serenity), [grokbotwiki.com](https://www.grokbotwiki.com/bots/serenity), [grokbothq.xyz](https://grokbothq.xyz/bots/serenity-by-krong-ZYVnoJMU), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/serenity), [x-research](https://x.com/Krongggggg/status/2096241494529392945), [x-trading-research](https://x.com/Krongggggg/status/2096241494529392945) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/serenity ~/pi-bots/serenity && cd ~/pi-bots/serenity
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/serenity`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/serenity-fxtwitter`: cron `*/15 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
