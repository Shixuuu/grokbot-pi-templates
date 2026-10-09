# 톨삼국지

매일 삼국지 인물화·전장 일러스트를 수묵화·서양화·일본 애니 기법으로 번갈아 그려 주고, 한국어 캡션과 X용 한 줄까지 붙여 주는 봇.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IXID16RPXlKV6KHQCdmr7 |
| Creator | 재미없니? ([@enterjajayo](https://x.com/enterjajayo)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/daily-three-kingdoms-illustration-rotating), [grokbotwiki.com](https://www.grokbotwiki.com/bots/daily-three-kingdoms-illustration-rotating), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-ixid1), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/three-kingdoms-illustrator), [x-research](https://x.com/enterjajayo/status/2096716185039725009) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/unnamed-skill-ixid16 ~/pi-bots/unnamed-skill-ixid16 && cd ~/pi-bots/unnamed-skill-ixid16
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/unnamed-skill-ixid16`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1788394969362`: cron `30 8-18/5 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
