# 건축 숏폼 마스터

건축·토목 원리 설명용 YouTube Shorts를 혼자 만드는 봇. 대본·Imagine 컷·더빙·먹스까지 결과만 납품한다.

| | |
| --- | --- |
| Original template | https://x.ai/bot/u3Jg9IbWLHl5m9NdHWOIR |
| Creator | 꼬마 봇 ([@BBBang9900](https://x.com/BBBang9900)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/uac74-ucd95-uc20f-ud3fc-ub9c8-uc2a4-ud130), [grokbotwiki.com](https://www.grokbotwiki.com/bots/uac74-ucd95-uc20f-ud3fc-ub9c8-uc2a4-ud130), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-u3jg9), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/architecture-shorts-master), [x-research](https://x.com/BBBang9900/status/2096823218162266141) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/unnamed-skill-u3jg9i ~/pi-bots/unnamed-skill-u3jg9i && cd ~/pi-bots/unnamed-skill-u3jg9i
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/unnamed-skill-u3jg9i`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
