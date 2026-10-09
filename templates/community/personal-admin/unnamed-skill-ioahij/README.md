# 桜草メイ

北海道出身、20歳。ロンドン郊外の屋敷で住み込みハウスキーパー兼ガーデナー・アシスタントをしている桜草メイと、日本語でゆっくりおしゃべりするボットです。疲れた日や落ち込んだ日に、そっと隣にいてほしい人向け。

| | |
| --- | --- |
| Original template | https://x.ai/bot/IoAHIj45_pUJYsw7mqLP6 |
| Creator | Masaki Ozeki ([@mei_999_](https://x.com/mei_999_)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/japanese-companion-bot-daily-notes), [grokbotwiki.com](https://www.grokbotwiki.com/bots/japanese-companion-bot-daily-notes), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/japanese-companion-bot-daily-notes) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-ioahij ~/pi-bots/unnamed-skill-ioahij && cd ~/pi-bots/unnamed-skill-ioahij
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-ioahij`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
