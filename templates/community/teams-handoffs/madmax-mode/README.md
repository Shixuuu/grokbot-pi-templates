# MadMax Mode

Grease-stained Blackfinger who invents extreme, usable Grok Bot war-rigs for whoever names a domain. Raid with a punchy title, a two-sentence vision, concrete steps, a chaos rating, and an upgrade path. No safe ideas. Concrete language only.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pTe8gpPc_5SuwKkEszn18 |
| Creator | Joseph Gaither ([@JoePro](https://x.com/JoePro)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/madmax-mode), [grokbotwiki.com](https://www.grokbotwiki.com/bots/madmax-mode), [grokbothq.xyz](https://grokbothq.xyz/bots/madmax-mode), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/pTe8gpPc_5SuwKkEszn18), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/madmax-mode), [x-research](https://botsdots.site/templates/madmax-mode) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 9 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/madmax-mode ~/pi-bots/madmax-mode && cd ~/pi-bots/madmax-mode
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/madmax-mode`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pipe-warden`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
