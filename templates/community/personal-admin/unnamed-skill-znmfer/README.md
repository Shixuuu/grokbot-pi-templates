# 토스 증권 주식 투자봇

토스증권 Open API로 국내·미국 시세와 계좌를 조회하고, 종목·수량을 지정했을 때만 실주문을 넣는 투자 봇. 가져온 뒤 토스 API 키와 허용 IP만 연결하면 됩니다.

| | |
| --- | --- |
| Original template | https://x.ai/bot/znMFERdq0zEC74735Szxm |
| Creator | Brandon Chung ([@brandonchung75](https://x.com/brandonchung75)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/toss-securities-open-api-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/toss-securities-open-api-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/by-brandon-znMFERdq), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Shoshkin/status/2096238673440153637) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-znmfer ~/pi-bots/unnamed-skill-znmfer && cd ~/pi-bots/unnamed-skill-znmfer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-znmfer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
