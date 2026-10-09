# 전자책 마스터

크몽용 근거형 전자책·실무 디지털 상품을 혼자 기획·제작·등록하는 봇. 법령·공식문서 근거와 출고 게이트를 지키며, 주 1회 배치로 사용량을 아낀다.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KohlZdYO9sLAqEmLG7oko |
| Creator | 꼬마 봇 ([@BBBang9900](https://x.com/BBBang9900)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/plans-ships-evidence-backed-ebooks), [grokbotwiki.com](https://www.grokbotwiki.com/bots/plans-ships-evidence-backed-ebooks), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-10), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/BBBang9900/status/2096618016574414860) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/unnamed-skill-kohlzd ~/pi-bots/unnamed-skill-kohlzd && cd ~/pi-bots/unnamed-skill-kohlzd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/unnamed-skill-kohlzd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
