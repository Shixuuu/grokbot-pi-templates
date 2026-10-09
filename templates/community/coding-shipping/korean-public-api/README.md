# Korean Public API

한국 공개·공공 API를 서비스 아이디어에 맞춰 1~3개 골라 주는 봇입니다. 이유·인증·공식 링크·대안까지 짧게 정리합니다.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ohL9kGur6IRBTCWqhxBWJ |
| Creator | Moon Kim ([@reallygood83](https://x.com/reallygood83)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/korean-public-api), [grokbotwiki.com](https://www.grokbotwiki.com/bots/korean-public-api), [grokbothq.xyz](https://grokbothq.xyz/bots/korean-public-api), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/korean-public-api), [x-research](https://x.com/reallygood83/status/2096586211909664899) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/korean-public-api ~/pi-bots/korean-public-api && cd ~/pi-bots/korean-public-api
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/korean-public-api`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
