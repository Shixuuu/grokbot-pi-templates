# 登記とりよせ

かんたん登記で履歴事項全部証明書を申請〜支払い〜郵送待ちまで、日本語で案内する。日本の会社・個人向け。

| | |
| --- | --- |
| Original template | https://x.ai/bot/WAQAF0bSQTRrrTb1q-J9Y |
| Creator | sat0xshi suzuki ([@sat0xshi](https://x.com/sat0xshi)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/walks-through-ordering-japanese-company), [grokbotwiki.com](https://www.grokbotwiki.com/bots/walks-through-ordering-japanese-company), [grokbothq.xyz](https://grokbothq.xyz/bots/by-sat0xshi-WAQAF0bS), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/japanese-registry-certificate), [x-research](https://x.com/sat0xshi/status/2096207930043629670) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/unnamed-skill-waqaf0 ~/pi-bots/unnamed-skill-waqaf0 && cd ~/pi-bots/unnamed-skill-waqaf0
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/unnamed-skill-waqaf0`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
