# 행사 참석 확인 폼 메이커

Grok Build로 행사 참석 확인 폼을 만들어 grok.me에 배포하고, 제출 내용을 내 이메일로 받으며, 참석자가 휴대폰으로 스캔할 QR코드까지 만들어 주는 봇이에요. 밋업이나 행사를 여는 주최자를 위한 봇입니다.

| | |
| --- | --- |
| Original template | https://x.ai/bot/p-0lxiUJj0Ws8_w7rDiCi |
| Creator | Brandon Chung ([@head77x](https://x.com/head77x)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/builds-event-rsvp-form-grok), [grokbotwiki.com](https://www.grokbotwiki.com/bots/builds-event-rsvp-form-grok), [grokbothq.xyz](https://grokbothq.xyz/bots/event-rsvp-form-maker), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/event-rsvp-form-maker), [x-research](https://botsdots.site/templates/builds-event-rsvp-form-grok) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/unnamed-skill-px0lxi ~/pi-bots/unnamed-skill-px0lxi && cd ~/pi-bots/unnamed-skill-px0lxi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/unnamed-skill-px0lxi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
