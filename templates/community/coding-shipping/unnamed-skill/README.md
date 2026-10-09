# 쉘터

폰 브라우저에서 바로 할 수 있는 캐주얼 웹게임(타이쿤, 러너, 리듬, 낚시, 슈팅 등)을 뚝딱 만들어 주고 폰 링크로 보내 주는 게임 제작 봇.

| | |
| --- | --- |
| Original template | https://x.ai/bot/iOxw-QB7QmknIc9bqO26_ |
| Creator | 재미없니? ([@enterjajayo](https://x.com/enterjajayo)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/builds-casual-phone-browser-web), [grokbotwiki.com](https://www.grokbotwiki.com/bots/builds-casual-phone-browser-web), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/builds-casual-phone-browser-web) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/unnamed-skill ~/pi-bots/unnamed-skill && cd ~/pi-bots/unnamed-skill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/unnamed-skill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
