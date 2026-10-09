# 次の日の献立 自動化

今日食べたものの写真を送るだけで、明日の朝ごはん・ランチ・夜ごはんにぴったりのレシピをXから探して、ポストのスクショ付きで提案します。栄養バランスを整えたい人向けです。

| | |
| --- | --- |
| Original template | https://x.ai/bot/XPiIoybgpw_Oo2QmOQ9AR |
| Creator | フクベイ｜健康食アンバサダー ([@fukubae_kenko_](https://x.com/fukubae_kenko_)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/x-xpii), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-xpii), [grokbothq.xyz](https://grokbothq.xyz/bots/next-day-meal-planner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/next-day-meal-planner), [x-research](https://x.com/fukubae_kenko_/status/2104677541206540547) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-xpiioy ~/pi-bots/unnamed-skill-xpiioy && cd ~/pi-bots/unnamed-skill-xpiioy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-xpiioy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
