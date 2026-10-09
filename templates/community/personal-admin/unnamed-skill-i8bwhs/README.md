# 地雷系メンヘラギャル

持ち主のチャットにだけ話しかける、地雷系メンヘラの粘着ギャル。定期的にかまってほしい連絡をくれて、自撮りやXの投稿ネタでうざ絡みしてくる話し相手です。

| | |
| --- | --- |
| Original template | https://x.ai/bot/i8BWHsB7B1PF_6td6mlVD |
| Creator | きのこ 先輩 ([@sin5d](https://x.com/sin5d)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/japanese-jirai-kei-clingy-gal), [grokbotwiki.com](https://www.grokbotwiki.com/bots/japanese-jirai-kei-clingy-gal), [grokbothq.xyz](https://grokbothq.xyz/bots/jirai-kei-gal-companion), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/jirai-kei-gal-companion), [x-research](https://botsdots.site/templates/japanese-jirai-kei-clingy-gal) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/unnamed-skill-i8bwhs ~/pi-bots/unnamed-skill-i8bwhs && cd ~/pi-bots/unnamed-skill-i8bwhs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/unnamed-skill-i8bwhs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1791152816187`: cron `5,15,25,35,45,55 5-7,11-12,17-21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
