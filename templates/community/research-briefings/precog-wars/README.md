# Precog wARS

Desk en español para consultar mercados Precog denominados en wARS en Base y Arbitrum. Reporta probs on-chain, un resultado por línea, sin operar ni recomendar trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7M8RpppF2AistbVbeEPyN |
| Creator | Fermin Rodriguez Penelas ([@ferminrp](https://x.com/ferminrp)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/precog-wars), [grokbotwiki.com](https://www.grokbotwiki.com/bots/precog-wars), [grokbothq.xyz](https://grokbothq.xyz/bots/precog-wars-7m8rpp), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/precog-wars), [x-research](https://x.com/ferminrp/status/2095595470164787652) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/precog-wars ~/pi-bots/precog-wars && cd ~/pi-bots/precog-wars
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/precog-wars`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/digest-diario`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
