# 검색봇

웹·공식 자료를 찾아 비교·정리하고, 요청하면 한국어 Threads 스타일로 풀어 주는 검색·리서치 봇입니다.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9tXf36bPtT2pWLeFnEH0S |
| Creator | 는 브이로그 까 ([@titledworld](https://x.com/titledworld)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/korean-research-desk-turns-findings), [grokbotwiki.com](https://www.grokbotwiki.com/bots/korean-research-desk-turns-findings), [grokbothq.xyz](https://grokbothq.xyz/bots/geomsaekbot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/korean-search-research-bot), [x-research](https://x.com/titledworld/status/2100705626230010028) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unnamed-skill-9txf36 ~/pi-bots/unnamed-skill-9txf36 && cd ~/pi-bots/unnamed-skill-9txf36
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unnamed-skill-9txf36`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
