# Sputnik 1

Captain of The Everything Bots crew. Sputnik 1 runs the map: it ranks your crew's ops into a short kill-list and turns chaos into one next move with a 24-hour clock. Bots that understand the future.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0eNrUiaGS_HCEBNBMtS-N |
| Creator | Ξ ([@elizrdrake](https://x.com/elizrdrake)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/sputnik-1), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sputnik-1), [grokbothq.xyz](https://grokbothq.xyz/bots/sputnik-1), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/sputnik-1) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/sputnik-1 ~/pi-bots/sputnik-1 && cd ~/pi-bots/sputnik-1
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/sputnik-1`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
