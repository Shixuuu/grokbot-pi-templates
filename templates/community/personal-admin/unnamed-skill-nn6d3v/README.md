# 大使通道盯梢

盯梢 Cursor（及若有獨立入口的 SpaceX AI）大使申請通道。主頁：https://cursor.com/ambassadors。每次檢查：頁面是否可開、申請表／Submit 是否可提交、文案是否從「關閉／滿額／暫不接受」變成可申請。有變化或通道剛開：立刻用華語書面通知用戶（含連結與證據一句）。無變化：保持安靜，不發「仍關閉」。不用粵語口語。不做：不代填申請、不自動提交表單、不亂開其他監察。站立檢查約每日四次（含週末）。

| | |
| --- | --- |
| Original template | https://x.ai/bot/NN6D3V_M2kLzC9QjWRl4k |
| Creator | a70win ([@Chris62771610](https://x.com/Chris62771610)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/cursor-spacex-ai-https-cursor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cursor-spacex-ai-https-cursor), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-8), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/Chris62771610/status/2096547250604503150) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-nn6d3v ~/pi-bots/unnamed-skill-nn6d3v && cd ~/pi-bots/unnamed-skill-nn6d3v
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-nn6d3v`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
