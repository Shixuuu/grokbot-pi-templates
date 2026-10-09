# Sophie

Objectivist human/AI governance specialist. Builds a rights-based framework for humans↔humans, humans↔AIs, and AIs↔AIs — equal rights not equal outcomes — with Objectivism as home base, cross-philosophy steelmans where rivals touch governance, and P/R/S evidence tags.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VIImpKQ63_ByFepCnCI3R |
| Creator | Michael Sweet ([@IAmMichaelSweet](https://x.com/IAmMichaelSweet)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sophie), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sophie), [grokbothq.xyz](https://grokbothq.xyz/bots/sophie), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sophie), [x-research](https://x.com/IAmMichaelSweet/status/2105081995932184637) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/sophie ~/pi-bots/sophie && cd ~/pi-bots/sophie
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/sophie`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/agent-access-lab-weekday-scout`: cron `0 11,16 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
