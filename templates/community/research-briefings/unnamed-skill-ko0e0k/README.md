# 每週公平分發代幣掃描

每週自動掃描新的公平分發（fair mint）代幣項目，依過去爆發項目的共同特徵打 0–10 分並檢查詐騙跡象，再把報告寄到你的信箱。只做研究，不碰錢包也不交易；順便一步步教你怎麼把工作交給 Grok Bot。

| | |
| --- | --- |
| Original template | https://x.ai/bot/kO0E0KzOkpUnPJQLmzBFm |
| Creator | Allen Chien ([@slowbtc](https://x.com/slowbtc)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/weekly-fair-mint-scanner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/weekly-scan-new-fair-mint), [grokbothq.xyz](https://grokbothq.xyz/bots/weekly-fair-mint-scanner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/slowbtc/status/2103802372984361061) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unnamed-skill-ko0e0k ~/pi-bots/unnamed-skill-ko0e0k && cd ~/pi-bots/unnamed-skill-ko0e0k
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unnamed-skill-ko0e0k`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1790412765599`: cron `52 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
