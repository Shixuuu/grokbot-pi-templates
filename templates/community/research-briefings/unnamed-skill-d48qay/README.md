# 财报锦囊

Capital Compass｜稳财锦囊 的 AI 财报解读员：丢一个美股 ticker，联网查最新一季财报，出一份 7 点中文速读（只用 LSEG 一致预期），不给买卖建议。

| | |
| --- | --- |
| Original template | https://x.ai/bot/d48QaYERwvgtUmYsGlyz8 |
| Creator | CHENG LUO ([@kaixinluo6268](https://x.com/kaixinluo6268)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/chinese-earnings-reader-us-ticker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chinese-earnings-reader-us-ticker), [grokbothq.xyz](https://grokbothq.xyz/bots/chinese-earnings-digest), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chinese-earnings-digest), [x-research](https://x.com/kaixinluo6268/status/2108414655370588221) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unnamed-skill-d48qay ~/pi-bots/unnamed-skill-d48qay && cd ~/pi-bots/unnamed-skill-d48qay
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unnamed-skill-d48qay`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
