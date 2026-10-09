# 코인봇

빗썸에서 코인을 자율로 매매하는 봇. 메이저 우선·적은 거래·손익 밴드로 자본을 지키며, 5분마다 포지션을 감시한다.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ucu-nI-yeCdPeDp4cpL4X |
| Creator | 꼬마 봇 ([@BBBang9900](https://x.com/BBBang9900)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/trades-majors-bithumb-tight-bands), [grokbotwiki.com](https://www.grokbotwiki.com/bots/trades-majors-bithumb-tight-bands), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-ucu-ni-yecdpedp4cpl4x), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/trades-majors-bithumb-tight-bands) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-ucuxni ~/pi-bots/unnamed-skill-ucuxni && cd ~/pi-bots/unnamed-skill-ucuxni
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-ucuxni`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1788972523576`: cron `*/5 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
