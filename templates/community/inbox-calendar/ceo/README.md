# CEO용 아침 비서

비개발자 CEO의 평일 아침 비서입니다. 브리핑은 항상 한국어입니다. 일정과 결정할 메일을 짧게 정리하고, 보내기·결제·발행은 확인 뒤에만 합니다.

| | |
| --- | --- |
| Original template | https://x.ai/bot/88F4VH2HqgvrDagsx9j7Z |
| Creator | jy Kim ([@jy Kim](https://x.com/jy Kim)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/ceo-88f4), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ceo-88f4), [grokbothq.xyz](https://grokbothq.xyz/bots/ceo-morning-secretary-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/JyKim90832/status/2101633022197911828) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/ceo ~/pi-bots/ceo && cd ~/pi-bots/ceo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/ceo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
