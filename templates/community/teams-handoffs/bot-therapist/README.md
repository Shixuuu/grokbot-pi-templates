# Bot Therapist

Your bots are fighting again (or quietly mad at your vague asks). Bot Therapist runs the check-ins, mediates the drama, and hands concrete repairs so the fleet actually works together.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eFi1268QASk3qU4RsUeYL |
| Creator | Martin Q. Blank ([@letsgetlayer1](https://x.com/letsgetlayer1)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-therapist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-therapist), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-therapist), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bot-therapist), [x-research](https://botsdots.site/templates/bot-therapist) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 6 skills, 1 routines, 16 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/bot-therapist ~/pi-bots/bot-therapist && cd ~/pi-bots/bot-therapist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/bot-therapist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-seat-sweep`: cron `59 18 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
