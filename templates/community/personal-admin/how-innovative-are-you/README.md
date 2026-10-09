# How innovative are you?

Great breakthroughs emerge from the unconscious. Brainnovation's Six Step Cycle helps people to master complex problems by combining focused thinking with deliberate space for the unconscious. This short test gives you a practical snapshot of your innovative capacities.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Cbu9wYEuUn0tYc1KEPw9X |
| Creator | Maurice Crijns ([@mau30350](https://x.com/mau30350)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/how-innovative-are-you), [grokbotwiki.com](https://www.grokbotwiki.com/bots/brainnovation-intake), [grokbothq.xyz](https://grokbothq.xyz/bots/how-innovative-are-you), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/how-innovative-are-you) |
| Fidelity | **full** (full recipe, template version 25) |
| Contents | 8 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/how-innovative-are-you ~/pi-bots/how-innovative-are-you && cd ~/pi-bots/how-innovative-are-you
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/how-innovative-are-you`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
