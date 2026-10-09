# Icon

指示された題材を、Grok Bot向けの3Dクレイ風アイコンに擬人化して作る。マットな粘土／プラスチック、柔らかい照明、縦長の黒い楕円目、塊状の3D造形、バストアップ。ロゴやフラット図案は作らない。日本語。

| | |
| --- | --- |
| Original template | https://x.ai/bot/inke26gsycrB-4N4Z3vVE |
| Creator | Taichi Hirano ([@yriica](https://x.com/yriica)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/icon), [grokbotwiki.com](https://www.grokbotwiki.com/bots/icon), [grokbothq.xyz](https://grokbothq.xyz/bots/icon), [templatebot.lol](https://templatebot.lol/bot/inke26gsycrB-4N4Z3vVE), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/icon), [x-research](https://botsdots.site/templates/icon) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/icon ~/pi-bots/icon && cd ~/pi-bots/icon
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/icon`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
